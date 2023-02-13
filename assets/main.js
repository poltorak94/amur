$(document).ready(function () {

    //слайдер запчасти 
    var swiper = new Swiper(".parts-slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".parts .arrow-link--right",
            prevEl: ".parts .arrow-link--left",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is >= 769
            769: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window width is >= 1366
            1366: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    });

    //слайдер карточка товара
    var productSwiper = new Swiper(".product-slider", {
        loop: true,
        navigation: {
            nextEl: ".product-slider .arrow-right",
            prevEl: ".product-slider .arrow-left",
        },
        pagination: {
            el: ".product-slider .swiper-pagination",
            clickable: true,
        },
    });

    //слайдер бренды
    var brands = new Swiper(".brands-slider", {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".brands .arrow-link--right",
            prevEl: ".brands .arrow-link--left",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is >= 769
            769: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window width is >= 1366
            1366: {
                slidesPerView: 5,
                spaceBetween: 20
            }
        }
    });
    //слайдер баннеры 

    //добавил опции
    var banner = new Swiper(".hero-slider", {
        loop: true,
        autoHeight: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
        },
    });


    //видеоплеер ютуб
    $('.video-item__play').on('click', function (e) {
        e.preventDefault();
        let container = $(this).closest('.video__item-container');
        container.addClass('video__item-container--active');
        container.find('.video__item-overlay').hide()
        container.find('.video__item-src').show();
        $(this).hide();
        let video = container.find('.video__item-src');
        let videoURL = video.prop('src');
        videoURL += "&autoplay=1";
        video.prop('src', videoURL);
    })

    //якорь на странице товара
    $('.product__all-option').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.product__all-options').offset().top - 50
        }, 700)
    });

    //табы контактов
    $('.contacts__tab-title').on('click', function () {
        let container = $(this).closest('.contacts__tab');
        if (container.hasClass('contacts__tab--active')) {
            container.removeClass('contacts__tab--active');
        } else {
            container.addClass('contacts__tab--active');
        }
    })
    //карта
    if ($('*').is('#map')) {
        var myMap;

        ymaps.ready(init);

        function init() {
            var myMap = new ymaps.Map('map', {
                center: [50.275889, 127.567410],
                zoom: 13
            }, {
                searchControlProvider: 'yandex#search'
            }),
                myPlacemark = new ymaps.Placemark([50.275889, 127.567410], {
                })
            myMap.geoObjects
                .add(myPlacemark)
        }
    }
    //маска
    $('.input-tel').mask('+7 (999) 999-99-99');

    //модальные окна
    $('.callback-modal, .footer-callback').on('click', function (e) {
        e.preventDefault();
        $('.modal-callback').trigger('open.modal')
    })
    $('.hero__button, .product__callback ').on('click', function (e) {
        e.preventDefault();
        $('.modal-order').trigger('open.modal')
    })

    $('.modal').on('open.modal', function () {
        let modal = $(this)
        modal.removeClass('modal--hidden');
        modal.arcticmodal({
            afterClose: function () {
                modal.addClass('modal--hidden');
            }
        });
    });

    $('.modal-submit').on('click', function (e) {
        e.preventDefault();
        let container = $(this).closest('.modal');
        container.addClass('modal--success')
    })

    //кнопка поиска в хедере
    $('.header-search-submit').on('click', function (e) {
        e.preventDefault();
        let container = $(this).closest('.header-search');
        container.find('.search-submit').click();
    })

    //burger menu
    $('.header__burger').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('header__burger--active');
        $('.header-mob__bottom').slideToggle()
    })

    $('.header-catalog-item-submenu-link').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('rotate-link')
        let container = $(this).closest('.header-catalog-item');
        container.find('.header-catalog-submenu').slideToggle()
    })

    //фильтр
    $('.select').each(function () {
        let select = $(this);
        select.find('.select__field').select2({
            minimumResultsForSearch: -1,
        });
    });
})