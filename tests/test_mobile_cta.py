import html.parser
import http.server
import pathlib
import re
import subprocess
import threading
import unittest


PROJECT_ROOT = pathlib.Path(__file__).resolve().parents[1]
CHROME = pathlib.Path("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PROJECT_ROOT, **kwargs)

    def log_message(self, format, *args):
        pass

    def do_GET(self):
        if self.path != "/__mobile_cta_probe__":
            return super().do_GET()

        source = (PROJECT_ROOT / "index.html").read_text(encoding="utf-8")
        source = re.sub(
            r"<script\b[^>]*>.*?</script>",
            "",
            source,
            flags=re.IGNORECASE | re.DOTALL,
        )
        probe = """
<script>
window.addEventListener('load', function () {
    var cta = document.querySelector('.card-product__btn');
    var photo = document.querySelector('.card-product__slider_for');
    var ctaRect = cta.getBoundingClientRect();
    var photoRect = photo.getBoundingClientRect();
    var root = document.documentElement;

    root.dataset.probeReady = 'true';
    root.dataset.viewportWidth = String(window.innerWidth);
    root.dataset.ctaPosition = getComputedStyle(cta).position;
    root.dataset.bodyPaddingBottom = getComputedStyle(document.body).paddingBottom;
    root.dataset.ctaTop = String(Math.round(ctaRect.top));
    root.dataset.photoBottom = String(Math.round(photoRect.bottom));
});
</script>
"""
        source = source.replace("</body>", probe + "</body>")
        payload = source.encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)


class HtmlAttributes(html.parser.HTMLParser):
    def __init__(self):
        super().__init__()
        self.attributes = {}

    def handle_starttag(self, tag, attrs):
        if tag == "html" and not self.attributes:
            self.attributes = dict(attrs)


class MobileCtaLayoutTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        if not CHROME.exists():
            raise unittest.SkipTest("Google Chrome is required for layout checks")

        cls.server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), QuietHandler)
        cls.thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.url = f"http://127.0.0.1:{cls.server.server_port}/__mobile_cta_probe__"

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()

    def render(self, width):
        result = subprocess.run(
            [
                str(CHROME),
                "--headless=new",
                "--no-sandbox",
                "--disable-gpu",
                "--disable-background-networking",
                "--disable-default-apps",
                "--disable-sync",
                "--hide-scrollbars",
                "--no-first-run",
                f"--window-size={width},1200",
                "--virtual-time-budget=3000",
                "--dump-dom",
                self.url,
            ],
            check=True,
            capture_output=True,
            text=True,
            timeout=30,
        )
        parser = HtmlAttributes()
        parser.feed(result.stdout)
        self.assertEqual(parser.attributes.get("data-probe-ready"), "true")
        return parser.attributes

    def test_main_mobile_cta_is_in_document_flow_below_photo(self):
        attrs = self.render(375)

        self.assertLessEqual(int(attrs["data-viewport-width"]), 767)
        self.assertEqual(attrs["data-cta-position"], "static")
        self.assertGreaterEqual(int(attrs["data-cta-top"]), int(attrs["data-photo-bottom"]))

    def test_main_mobile_page_has_no_floating_cta_compensation(self):
        attrs = self.render(375)

        self.assertEqual(attrs["data-body-padding-bottom"], "0px")

    def test_desktop_cta_remains_in_document_flow(self):
        attrs = self.render(1280)

        self.assertGreater(int(attrs["data-viewport-width"]), 767)
        self.assertEqual(attrs["data-cta-position"], "static")


if __name__ == "__main__":
    unittest.main()
