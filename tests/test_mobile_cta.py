import html.parser
import http.server
import json
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
        probe_pages = {
            "/__mobile_cta_probe__": "index.html",
            "/__mobile_tabs_grid3_probe__": "index-tabs-grid3.html",
        }
        if self.path not in probe_pages:
            return super().do_GET()

        page = PROJECT_ROOT / probe_pages[self.path]
        if not page.exists():
            page = PROJECT_ROOT / "index.html"
        source = page.read_text(encoding="utf-8")
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
    var techRect = document.querySelector('.card-product__tech').getBoundingClientRect();
    var tabsRect = document.querySelector('.card-product__descr .tabs').getBoundingClientRect();
    var root = document.documentElement;
    var tabs = Array.from(document.querySelectorAll('.card-product__descr .tabs > li'));

    root.dataset.probeReady = 'true';
    root.dataset.viewportWidth = String(window.innerWidth);
    root.dataset.ctaPosition = getComputedStyle(cta).position;
    root.dataset.bodyPaddingBottom = getComputedStyle(document.body).paddingBottom;
    root.dataset.ctaTop = String(Math.round(ctaRect.top));
    root.dataset.photoBottom = String(Math.round(photoRect.bottom));
    root.dataset.techLeft = String(Math.round(techRect.left));
    root.dataset.techRight = String(Math.round(techRect.right));
    root.dataset.tabsLeft = String(Math.round(tabsRect.left));
    root.dataset.tabsRight = String(Math.round(tabsRect.right));
    root.dataset.bodyClasses = document.body.className;
    root.dataset.tabLabels = JSON.stringify(tabs.map(function (tab) {
        return tab.innerText.trim();
    }));
    root.dataset.tabFontSizes = JSON.stringify(tabs.map(function (tab) {
        return parseFloat(getComputedStyle(tab).fontSize);
    }));
    root.dataset.tabRows = String(new Set(tabs.map(function (tab) {
        return Math.round(tab.getBoundingClientRect().top);
    })).size);
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
        cls.render_cache = {}

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()

    def render(self, width, probe_path="/__mobile_cta_probe__"):
        cache_key = (width, probe_path)
        if cache_key in self.render_cache:
            return self.render_cache[cache_key]

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
                self.url.replace("/__mobile_cta_probe__", probe_path),
            ],
            check=True,
            capture_output=True,
            text=True,
            timeout=30,
        )
        parser = HtmlAttributes()
        parser.feed(result.stdout)
        self.assertEqual(parser.attributes.get("data-probe-ready"), "true")
        self.render_cache[cache_key] = parser.attributes
        return parser.attributes

    def test_main_mobile_cta_is_in_document_flow_below_photo(self):
        attrs = self.render(375)

        self.assertLessEqual(int(attrs["data-viewport-width"]), 767)
        self.assertEqual(attrs["data-cta-position"], "static")
        self.assertGreaterEqual(int(attrs["data-cta-top"]), int(attrs["data-photo-bottom"]))

    def test_main_mobile_page_has_no_floating_cta_compensation(self):
        attrs = self.render(375)

        self.assertEqual(attrs["data-body-padding-bottom"], "0px")

    def test_main_mobile_shows_four_short_readable_tabs(self):
        attrs = self.render(375)

        self.assertIn("tabs-short-labels-variant", attrs["data-body-classes"])
        self.assertEqual(
            json.loads(attrs["data-tab-labels"]),
            ["Описание", "Характеристики", "Аренда", "Применение"],
        )
        self.assertTrue(
            all(size >= 14 for size in json.loads(attrs["data-tab-font-sizes"]))
        )
        self.assertEqual(attrs["data-tab-rows"], "2")

    def test_main_mobile_tabs_align_with_main_characteristics(self):
        attrs = self.render(375)

        self.assertEqual(attrs["data-tabs-left"], attrs["data-tech-left"])
        self.assertEqual(attrs["data-tabs-right"], attrs["data-tech-right"])

    def test_desktop_cta_remains_in_document_flow(self):
        attrs = self.render(1280)

        self.assertGreater(int(attrs["data-viewport-width"]), 767)
        self.assertEqual(attrs["data-cta-position"], "static")

    def test_main_desktop_keeps_full_tab_labels(self):
        attrs = self.render(1280)

        self.assertEqual(
            json.loads(attrs["data-tab-labels"]),
            [
                "Описание",
                "Все характеристики",
                "Условия аренды",
                "Где применяется",
            ],
        )

    def test_grid3_mobile_shows_four_short_readable_tabs(self):
        attrs = self.render(375, "/__mobile_tabs_grid3_probe__")

        self.assertIn("tabs-short-labels-variant", attrs["data-body-classes"])
        self.assertEqual(
            json.loads(attrs["data-tab-labels"]),
            ["Описание", "Характеристики", "Аренда", "Применение"],
        )
        self.assertTrue(
            all(size >= 14 for size in json.loads(attrs["data-tab-font-sizes"]))
        )
        self.assertEqual(attrs["data-tab-rows"], "2")

    def test_grid3_desktop_keeps_full_tab_labels(self):
        attrs = self.render(1280, "/__mobile_tabs_grid3_probe__")

        self.assertEqual(
            json.loads(attrs["data-tab-labels"]),
            [
                "Описание",
                "Все характеристики",
                "Условия аренды",
                "Где применяется",
            ],
        )


if __name__ == "__main__":
    unittest.main()
