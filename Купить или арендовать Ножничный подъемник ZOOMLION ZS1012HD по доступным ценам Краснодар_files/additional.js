$(document).ready(function () {


    let cityTitle = document.querySelector(".header__city-title");
    if (cityTitle) {
        if (cityTitle.getAttribute("data-city")) {
            window.city = cityTitle.getAttribute("data-city");
            const url2 = new URL(document.location);
            const searchParams = url2.searchParams;
            searchParams.delete("city");
            window.history.pushState({}, '', url2.toString());
        } else {
            $.ajax({
                url: `/local/templates/main/ajax/selected_city.php`,
                method: 'get',
                dataType: 'html',
                success: function (data) {
                    data = JSON.parse(data)
                    window.city = data.SELECTED;
                    const url2 = new URL(document.location);
                    const searchParams = url2.searchParams;
                    searchParams.delete("city");
                    window.history.pushState({}, '', url2.toString());
                }
            });
        }
    }
    $('body').on('click', function (event) {
        if($(event.target).parent().hasClass("header__search-title") || $(event.target).hasClass("header__search-title") || event.target.closest(".header__search-in")) return;
        if ($('.header__search-title').parent().hasClass("op")) $('.header__search-title').parent().removeClass("op");
        if ($('.header').hasClass("om")) $('.header').removeClass("om")
    });

    $('.filter__bl-tit').on('click', function (event) {
        if ($(this).parent().hasClass("op")){ $(this).parent().removeClass("op");} else{
            $(this).parent().addClass("op");
        } ; 
    });

    $('.sto .leasing-ac .bl_inf_m').on('click', '.tit', function () {
        // if (!window.matchMedia('(max-width: 991px)').matches) return;

        const $item = $(this);
        $item.toggleClass('is-open');
        $item.siblings('.tit').removeClass('is-open');
    });
        $('.about2-page .about-main__al').on('click', '.tit', function () {
        // if (!window.matchMedia('(max-width: 991px)').matches) return;

        const $item = $(this);
        $item.toggleClass('is-open');
        $item.siblings('.tit').removeClass('is-open');
    });

    const $stoReasonsSection = $('.sto .leasing-tx__row').first().closest('.leasing-ac');
    let stoReasonsSwiper = null;

    function buildStoReasonsMobile() {
        if (!$stoReasonsSection.length || $stoReasonsSection.find('.leasing-tx-mobile').length) return;

        const $inner = $stoReasonsSection.find('.leasing-ac__inner').first();
        const $rows = $inner.children('.leasing-tx__row');
        const $firstRow = $rows.eq(0);
        const $secondRow = $rows.eq(1);
        const $mobile = $('<div class="leasing-tx-mobile"></div>');
        const $lead = $('<div class="leasing-tx-mobile__lead"></div>');
        const $slider = $('<div class="leasing-tx-mobile__slider swiper js-sto-reasons-slider"></div>');
        const $wrapper = $('<div class="swiper-wrapper"></div>');
        const $cta = $('<div class="leasing-tx-mobile__cta"></div>');
        const cards = [];

        $lead.append($firstRow.children('.leasing-tx__cell').first().children('.leasing-tx__inf').first().clone());

        $firstRow.find('> .leasing-tx__cell.leasing-tx__inf_2 > .leasing-tx__inf').each(function () {
            cards.push($(this).clone());
        });

        $secondRow.find('> .leasing-tx__cell.leasing-tx__inf_2 > .leasing-tx__inf').each(function () {
            cards.push($(this).clone());
        });

        cards.sort(function ($a, $b) {
            return parseInt($a.find('.tit1').first().text(), 10) - parseInt($b.find('.tit1').first().text(), 10);
        });

        cards.forEach(function ($card) {
            $('<div class="swiper-slide"></div>').append($card).appendTo($wrapper);
        });

        $cta.append($secondRow.children('.leasing-tx__cell').last().children('.leasing-tx__inf').first().clone());
        $slider.append($wrapper);
        $mobile.append($lead, $slider, $cta);
        $inner.append($mobile);
    }

    function initStoReasonsSwiper() {
        buildStoReasonsMobile();

        const isMobile = window.matchMedia('(max-width: 991px)').matches;
        const slider = document.querySelector('.js-sto-reasons-slider');

        if (!slider || typeof Swiper === 'undefined') return;

        if (isMobile && !stoReasonsSwiper) {
            stoReasonsSwiper = new Swiper(slider, {
                slidesPerView: 'auto',
                spaceBetween: 14,
                centeredSlides: true,
                slideToClickedSlide: true,
                grabCursor: true,
                resistanceRatio: .35,
                threshold: 3,
                speed: 350,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false
                },
                breakpoints: {
                    560: {
                        spaceBetween: 16
                    }
                }
            });
        } else if (!isMobile && stoReasonsSwiper) {
            stoReasonsSwiper.destroy(true, true);
            stoReasonsSwiper = null;
        }
    }

    initStoReasonsSwiper();
    $(window).on('resize', initStoReasonsSwiper);

//affetta
    if ($('.contacts').length > 0) {
        $.ajax({
            url: '/local/templates/main/ajax/offices.php',
            method: 'get',
            dataType: 'json',
            success: function (data) {
                console.log(data)
                ymaps.ready(init);

                function init() {
                    dataArr = Object.entries(data);
                    let placeMarks = new Map();
                    let myMapTemp = new ymaps.Map("map", {
                        center: [55.755864, 37.617698],
                        zoom: 5,
                        controls: ['zoomControl'],
                    }, {
                        searchControlProvider: 'yandex#search',
                    });


                    dataArr.forEach(item => {
                        item = item.pop();
                        let coords = item.COORDS.split(", ")
                        let secondaryOffice = "/local/templates/main/assets/img/svg/pinmap.svg";
                        let mainOffice = "/local/templates/main/assets/img/svg/pinmap_reg.svg";


                        let PlaceMark = new ymaps.Placemark([parseFloat(coords[0]), parseFloat(coords[1])], {
                            balloonContent:
                                `<div class="contacts__list-drop-tt">${item.TYPE_VALUE}</div>` +
                                `<div class="contacts__list-drop-title">${item.ADDRESS}</div>` +
                                '<div class="contacts__list-drop-item">' +
                                '<div class="contacts__list-drop-t">Телефон:</div>' +
                                `<a href="tel:` + item.PHONE + `" class="contacts__list-drop-link">${item.PHONE}</a>` +
                                '</div>' +
                                '<div class="contacts__list-drop-item">' +
                                '<div class="contacts__list-drop-t">Электронная почта:</div>' +
                                `<a href="mailto:` + item.MAIL + `" class="contacts__list-drop-link">${item.MAIL}</a>` +
                                '</div>' +
                                '<div class="contacts__list-drop-item">' +
                                '<div class="contacts__list-drop-t">Время работы:</div>' +
                                `<div class="contacts__list-drop-tx">${item.WORK_TIME}</div>` +
                                '</div>',
                            preset: 'islands#blackStretchyIcon',
                            draggable: true,
                            open: item.CITY == window.city,
                        }, {
                            iconLayout: 'default#image',
                            iconImageHref: item.TYPE == 1 ? mainOffice : secondaryOffice,
                            iconImageSize: [36, 36],
                            // iconImageOffset: [-25, -50],
                            // iconContentOffset: [15, 15],
                            hideIconOnBalloonOpen: false
                        });

                        placeMarks.set(item.ID, PlaceMark);

                        myMapTemp.geoObjects.add(PlaceMark);

                        if (PlaceMark.properties.get("open")) {
                            myMapTemp.panTo(PlaceMark.geometry.getCoordinates(), {delay: 0}).then(function () {
                                myMapTemp.setZoom(5);
                                PlaceMark.balloon.open();
                            });
                        }
                    })


                    if (placeMarks) {
                        $('.contacts__list-item__cont').on('click', function (event) {
                            var tag = event.target.closest(".contacts__list-item__cont");
                            var id = tag.getAttribute("data-id");
                            var placemark = placeMarks.get(id.toString());
                            if (placemark) {
                                myMapTemp.panTo(placemark.geometry.getCoordinates(), {delay: 0}).then(function () {
                                    myMapTemp.setZoom(5);
                                    placemark.balloon.open();
                                });
                            }
                        });
                    }
                }
            }
        });
    }

    $('.contacts__inp').on('input', function (event) {
        let val = event.target.value;
        var filteredDivs = $(".contacts__list-item").filter(function () {
            var reg = new RegExp(val, "i");
            return reg.test($(this).text());
        });
        $(".contacts__list-item").css("display", "none");
        filteredDivs.css("display", "block")
    });


    let offset = 5;
    $(".show-next").on("click", (event) => {


        $.ajax({
            url: `/local/templates/main/ajax/get_cities.php?count=5&offset=${offset}`,
            method: 'get',
            dataType: 'html',
            success: function (data) {
                data = JSON.parse(data);

                if (data.length < 5) {
                    $(".show-next").remove()
                }

                data.forEach((item) => {
                    var currentUrl = window.location.pathname;
                    $(".remodal__ct-list ul").append(`<li><a href="https://atlanta-gk.ru${currentUrl}\?city=${item}\">${item}</a></li>`)
                })
                offset += 5;
            }
        });
    })


//affetta

    let timer = null;

    $('.header__search-in .tg').on('input', function (event) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            let list = $(".header__search-drop-list");
            let products = $(".header__search-drop-item")
            products.remove();
            if (!$(this).val()) return;

            $.ajax({
                url: `/local/templates/main/ajax/products.php?q=${$(this).val()}`,
                method: 'get',
                dataType: 'html',
                data: {text: 'Текст'},
                success: function (data) {
                    data = JSON.parse(data);
                    for (var key in data) {
                        let url = data[key].URL;
                        let name = data[key].NAME;
                        list.append($(`<a href="${url}" class="header__search-drop-item">${name}</a>`))
                    }
                }
            });
        }, 200);
    });



    $('.filter__total-close').on('click', function (event) {
        console.log(event.target)
        event.target.closest(".filter__total").style = "display: none"
    });
    $('.remodal__ct-form input').on('input', function (event) {
        let list = $(".header__search-drop-list");
        let products = $(".header__search-drop-item")
        clearTimeout(timer);
        setTimeout(() => {
            products.remove();
            if (!$(this).val()) return;

            $.ajax({
                url: `/local/templates/main/ajax/get_cities.php?q=${$(this).val()}`,
                method: 'get',
                dataType: 'html',
                data: {text: 'Текст'},
                success: function (data) {
                    data = JSON.parse(data);
                    console.log(data)
                    if ($(".show-next").length > 0) {
                        $(".show-next").remove()
                    }
                    $(".remodal__ct-list ul li").remove();
                    let list = $(".remodal__ct-list ul");
                    for (var key in data) {
                        var currentUrl = "atlanta-gk.ru";
                        list.append($(`<li><a href="https://${currentUrl}\?city=${data[key]}\">${data[key]}</a></li>`))
                    }
                }
            });
        }, 200);

    });

    //
    // $.ajax({
    //     url: `/local/templates/main/ajax/selected_office.php`,
    //     method: 'get',
    //     dataType: 'html',
    //     success: function(data){
    //         data = JSON.parse(data)
    //         $(".header__info-tel").html(data.PHONE)
    //         $(".header__info-tx").html(data.WORK_TIME)
    //     }
    // });


    // $('.contacts__list-item__cont').on('click', function(event){
    //     $('.contacts__inp').addClass('d-none');
    // });

    // $('.contacts__list-drop-close').on('click', function(event){
    //     $('.contacts__inp').removeClass('d-none');

    // });

    function setCookie(name, value, options = {}) {

        options = {
            path: '/',
            // при необходимости добавьте другие значения по умолчанию
            ...options
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    $('.sect2').on('click', function (event) {
       
        $(this).find(".subsect-off2").toggle("subsect-on");
        if($(this).find(".sect_a").hasClass("op")) {
            $(this).find(".sect_a").removeClass("op");}else{
        $(this).find(".sect_a").addClass("op");} 
        
    })
    $('.sect .sect_a').on('click', function (event) {
       
        $(this).parent('.sect').find(".subsect-off").toggle("subsect-on");
        if($(this).parent('.sect').find(".sect_a.m").hasClass("op")) {
            $(this).parent('.sect').find(".sect_a.m").removeClass("op");}else{
        $(this).parent('.sect').find(".sect_a.m").addClass("op");} 
        
    })
   
    $('.header-mob__toggler.js-toggler').on('click', function (event) {
        $("body.overfl").toggleClass("overfl");
    })

     
});
document.addEventListener('DOMContentLoaded', function() {

(function () {
        const cookieNotice = document.getElementById("cookie-notice");
        const okBtn = cookieNotice.querySelector(".cookie-ok");
        const isMobile = window.innerWidth <= 768;
        const cookieBox = cookieNotice.querySelector(".cookie-box");

        const storageKey = "cookieNoticeShownAt";
        const timeoutMinutes = 43200; // Время, через которое уведомление будет показано снова при отсутствии активности
        const timeoutMs = timeoutMinutes * 60 * 1000;
        const now = Date.now();

        const lastShown = parseInt(localStorage.getItem(storageKey), 10);
        const shouldShow = isNaN(lastShown) || (now - lastShown) > timeoutMs;

        if (shouldShow) {
            cookieNotice.classList.remove("hidden");
            cookieBox.focus();
            if (isMobile) {
                document.body.classList.add("cookie-lock");
            }

            okBtn.addEventListener("click", () => {
                cookieNotice.classList.add("hidden");
                document.body.classList.remove("cookie-lock");
                localStorage.setItem(storageKey, Date.now().toString());
            });
        } else {
            localStorage.setItem(storageKey, Date.now().toString());
        }
    })();
});


