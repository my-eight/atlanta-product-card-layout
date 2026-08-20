$(document).ready(function () {
  // $(".filter__group-check, .contacts__list-in").mCustomScrollbar();

  $(".filter__all").on("click", function (event) {
    $(this).toggleClass("open").prevAll().toggleClass("open");
  });

  $(".filter__title").on("click", function (event) {
    $(this).toggleClass("open").parent(".filter__item").toggleClass("open");
    $(this).next().slideToggle();
  });

  $(".filter__bl-tit.has-childs").on("click", function (event) {
    $(this).parent().toggleClass("op");
  });

  $(".catalog-page__kl-btn").on("click", function (event) {
    $(this).parent().toggleClass("op");
  });

  $(".catalog-page__sort-tt").on("click", function (event) {
    $(this).parent().toggleClass("op");
  });

  // $('.card-product__tech-btn').on('click', function(event){
  //     $(this).parent().toggleClass('op');
  // });

  $(".b").on("click", function (event) {
    $(this).parent().toggleClass("open");
  });

  $(".catalog-page__fl-m").on("click", function (event) {
    $(".catalog-page__left").addClass("open");
    $(".header-mob").addClass("op");
    $("body").addClass("overfl");
  });
  $(".filter__close").on("click", function (event) {
    $(".catalog-page__left").removeClass("open");
    $("body").removeClass("overfl");
  });

  $(".js-toggler").on("click", function (event) {
    if($(".catalog-page__left").hasClass("open")){
      $(".catalog-page__left").removeClass("open");
      $(".header-mob").removeClass("op");
    }else{
    $(".header-mob, .header").toggleClass("op");
    $("body").toggleClass("overfl");
    }
  });

  $(".header__search-title").on("click", function (event) {
    $(this).parent().addClass("op");
    $(".header").toggleClass("om");
  });

  $(".header__search-in input").focus().toggleClass("tg");

  $(".contacts__list-item__cont").on("click", function (event) {
    // $(this).parent().addClass("open");
  });

  $(".contacts__list-drop-close").on("click", function (event) {
    $(".contacts__list-item").removeClass("open");
  });

  $("ul.tabs li").click(function () {
    var $this = $(this);
    var $theTab = $(this).attr("id");
    console.log($theTab);
    if ($this.hasClass("active")) {
      // do nothing
    } else {
      $this.closest(".tabs_wrapper").find("ul.tabs li, .tabs_container .tab_content").removeClass("active");
      $('.tabs_container .tab_content[data-tab="' + $theTab + '"], ul.tabs li[id="' + $theTab + '"]').addClass("active");
    }
  });

  $(function () {
    //BEGIN
    $(".accordion__title").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);

      if (!$this.hasClass("accordion-active")) {
        $(".accordion__content").slideUp(400);
        $(".accordion__title").removeClass("accordion-active");
        $(".accordion__arrow").removeClass("accordion__rotate");
      }

      $this.toggleClass("accordion-active");
      $this.next().slideToggle();
      $(".accordion__arrow", this).toggleClass("accordion__rotate");
    });
    //END
  });

  var swiper1 = new Swiper(".js-banner-slider", {
    infinite: false,
    // loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
   
    navigation: {
      nextEl: ".js-banner-slider-next",
      prevEl: ".js-banner-slider-prev",
    },
    pagination: {
      el: ".js-banner-slider-pagination",
      clickable: true,
    },
  });

  var swiper2 = new Swiper(".js-partners-slider", {
    infinite: false,
    loop: true,
    spaceBetween: 15,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".js-partners-slider-next",
      prevEl: ".js-partners-slider-prev",
    },
    breakpoints: {
      991: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
    },
  });

  var swiper3 = new Swiper(".js-news-slider", {
    infinite: false,
    loop: true,
    spaceBetween: 15,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".js-news-slider-next",
      prevEl: ".js-news-slider-prev",
    },
    breakpoints: {
      991: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
    },
  });

    var swiper31 = new Swiper(".js-news2-slider", {
    // infinite: false,
    // loop: true,
    spaceBetween: 15,
    slidesPerView: 1,
    navigation: {
      nextEl: ".js-news2-slider-next",
      prevEl: ".js-news2-slider-prev",
    },
    breakpoints: {
      991: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
    },
  });


  var swiper4 = new Swiper(".js-sertif-slider", {
    infinite: false,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".js-sertif-slider-pagination",
      clickable: true,
    },
    breakpoints: {
      991: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      560: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
    },
  });

  var swiper5 = new Swiper(".js-card-product-slider-nav", {
    spaceBetween: 4,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    
  });
  var swiper6 = new Swiper(".js-card-product-slider-for", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".js-card-product-slider-next",
      prevEl: ".js-card-product-slider-prev",
    },
    // pagination: {
    //   el: ".js-card-product-slider-pagination",
    //   clickable: true,
    // },
    thumbs: {
      swiper: swiper5,
    },
  });

    var swiper7_1 = new Swiper(".js-about-slider-nav", {
    spaceBetween: 4,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
    var swiper7 = new Swiper(".js-about-slider", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".js-about-slider-next",
      prevEl: ".js-about-slider-prev",
    },
    pagination: {
      el: ".js-about-slider-pagination",
      clickable: true,
    },
    thumbs: {
      swiper: swiper7_1,
    },
  });

  var swiper8 = new Swiper(".js-galery-slider", {
     spaceBetween: 1,
    slidesPerView: 1,
    spaceBetween:20,
    freeMode: false,
    watchSlidesProgress: false,
   
    navigation: {
      nextEl: ".js-galery-slider-next",
      prevEl: ".js-galery-slider-prev",
    },
     breakpoints: {
      991: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      560: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
    },
    // pagination: {
    //   el: ".js-about-slider-pagination",
    //   clickable: true,
    // },
  });

    var swiper9 = new Swiper(".js-galery2-slider", {
     spaceBetween: 2,
    slidesPerView: 1,
    freeMode: false,
    watchSlidesProgress: false,
   spaceBetween:20,
    navigation: {
      nextEl: ".js-galery2-slider-next",
      prevEl: ".js-galery2-slider-prev",
    },
     breakpoints: {
      991: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      560: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
    },
    // pagination: {
    //   el: ".js-about-slider-pagination",
    //   clickable: true,
    // },
  });
  

   var swiper11 = new Swiper(".js-worksL-slider", {
    spaceBetween: 20,
    slidesPerView:3,
    768: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      560: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
       navigation: {
      nextEl: ".js-worksL-slider-next",
      prevEl: ".js-worksL-slider-prev",
    },
  });

  // opening popups
  $("body").on(
    "click touch",
    ".open-dialog, .open-popup, .open-form, .open-modal, .open-dialog a, .open-popup a, .open-form a, .open-modal a",
    function () {
      var category = $(this).attr("href");
      var categoryForm = $(".dialogs " + category);
      $(".dialogs .popup").removeClass("active").hide();
      categoryForm.show();
      $(".dialogs").show();
      $(".dialogs").animate({ opacity: 1 }, 200, function () {
        categoryForm.addClass("active");
      });
      $("body").css({ "overflow-y": "hidden" });
      return false;
    }
  );

  // closing popups
  $(".dialogs").on("click touch", ".close, .close-bg", function () {
    $(".dialogs .popup").removeClass("active");
    $(".dialogs").animate({ opacity: 0 }, 200, function () {
      $(".dialogs").hide();
      $(".dialogs .popup").hide();
      $(".dialogs .thanks-popup").hide();
    });
    $("body").css({ "overflow-y": "auto" });
  });
  $(document).keyup(function (e) {
    if (e.keyCode === 27) $(".dialogs .popup.active .close").click(); // esc
  });
  $(function () {
    $(".showmore-button").click(function () {
      var $target = $(this);
      var page = $target.attr("data-page");
      var data = $target.attr("data-сdata");
      var c = $target.attr("data-с");
      var max = $target.attr("data-max");
      page++;
      ce = (page - 1) * c;
      let cb = 1;
      cb = Number(ce) + Number(c) + 1;
      var fd = new FormData();

      fd.append("name", data);

      $.ajax({
        type: "POST",
        contentType: false,
        processData: false,
        url: "/ajax.php?page=" + page + "&c=" + c,
        // dataType: 'html',
        data: fd,
        success: function (data) {
          if (cb >= max) {
            $(".active>.showmore-bottom").css("display", "none");
          }
          $(".active>.categor__row").append(data);
        },
      });

      $target.attr("data-page", page);
      if (page == $target.attr("data-max")) {
        $target.hide();
      }

      return false;
    });
  });
  // all sliders
  // const swiper = new Swiper('.swiper', {
  //     slidesPerView: 'auto',
  //     speed: 400,
  //     spaceBetween: 20,
  //     navigation: {
  //         nextEl: '.slider-next',
  //         prevEl: '.slider-prev',
  //     },
  //     pagination: {
  //         el: '.slider-pagination',
  //         type: 'bullets',
  //     },
  // });
});
$("#ald").click(function () {
  if($("#ald").text()!="Скрыть"){
  $(".news-page .news-page__inner.d-none").removeClass("d-none");
  $("#ald").text("Скрыть");
  }else{
    $(".news-page .news-page__inner").each(function (index, el){
      if(index>3){
        $(this).addClass("d-none");
      }
    })
   
    $("#ald").text("Показать еще");
  }
})



window.addEventListener("load", () => {
  // Отслеживание watsapp, telegram, отправка форм
  console.debug("%cОтслеживание watsapp, telegram, отправка форм", "background: #3F51B5; color: #FFF; padding: 5px 12px; font-size: 11px;");
  // Telegram
  document.querySelectorAll('[href*="t.me"]').forEach((i) => i.addEventListener("click", () => ym(97413168, "reachGoal", "Telegram pressed")));
  // Whatsapp
  document.querySelectorAll('[href*="wa.me"]').forEach((i) => i.addEventListener("click", () => ym(97413168, "reachGoal", "Whatsapp pressed")));

  // Отправка заявки (формы)
  Array.from(document.querySelectorAll('[type*="submit"]'))
    .filter((i) => i.textContent.includes("ставить"))
    .forEach((i) => i.addEventListener("click", () => ym(97413168, "reachGoal", "Form submit")));
});
