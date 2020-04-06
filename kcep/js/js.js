$(document).ready(function() {
    $('.header__item1').on('touchstart', function() {
        (function toggleFullScreen() {
            if (!document.fullscreenElement &&
                !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
              if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
              } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
              } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
              } else if (document.documentElement.webkitRequestFullscreen) {      
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
              }
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              }
            }
          })();
    });
    var scrolend = 0;
    var scrolmove = 0;
    $('.content').on('touchend', function() {
        scrolend = 1;
    });
    $('.content').on('touchmove', function() {
        scrolmove = 1;
    });
    $('.content').on('scroll', function() {
            if ($('.content').scrollTop()>($(window).innerHeight()/6)) {
                $('.content').animate({
                    scrollTop: $(window).innerHeight()
                }, 700, 'swing');
                $('.footer__item2').removeClass('button-disabled');
            } 
        scrolling = 0;
    })

    let kub = [];
    $('.footer__item2').on('touchstart', function() {
        kub.w = $('.footer__item2').width();
        kub.h = $('.footer__item2').height();
        kub.l = $('.footer__item2').offset().left;
        let $elem = $('.footer__item2').clone();
        $('.footer__item2').css({'opacity': 0});
        $('.footer').before($elem.css({
          'opacity': 1,
          'height': kub.h,
          'width': kub.w,
          'bottom': '0px',
          'position': 'absolute',
          'z-index': 99,
          'left': kub.l}));
        kub.clone = 1;
    });
    $(document).mousemove(function(e) {
      if (kub.clone == 1) {
        cY = $(window).innerHeight()-e.pageY;
        $('.footer__item2').css({'bottom': cY});
        console.log(cY);
      }
    });
});
