$(document).ready(function () {

    var swiper = new Swiper(".parts-slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".arrow-link--right",
            prevEl: ".arrow-link--left",
        },
    });
    //видеоплеер ютуб
    // $('.production__video-play').on('click', function (e) {
    //     e.preventDefault();
    //     let container = $(this).closest('.production__vedio-holder');
    //     container.find('.prodaction__video-holder-image').hide()
    //     container.find('.production__video-iframe').show();
    //     $(this).hide();
    //     let video = container.find('.production__video-iframe');
    //     let videoURL = video.prop('src');
    //     videoURL += "&autoplay=1";
    //     video.prop('src', videoURL);

    // })



    //энциклопедя фикc меню
    // let stickyOffset = $('.handbook-nav--fix').offset().top;

    // $(window).scroll(function () {
    //     let sticky = $('.handbook-nav--fix'),
    //         scroll = $(window).scrollTop();

    //     if (scroll >= stickyOffset) sticky.addClass('fixed');
    //     else sticky.removeClass('fixed');
    // });

})