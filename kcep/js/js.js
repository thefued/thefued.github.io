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
    var scrolling = 0;
    $('.content').on('touchstart', function() {
        scrolling = 1;
    });
    $('.content').on('touchend', function() {
        scrolling = 2;
    });
    $('.content').on('scroll', function() {
        if (scrolling==2) {
            if ($('.content').scrollTop()>($(window).innerHeight()/6)) {
                $('.content').animate({
                    scrollTop: $(window).innerHeight()
                }, 700, 'swing');
                $('.footer__item2').removeClass('button-disabled');
            } else {
                $('.content').animate({
                    scrollTop: 0
                }, 100, 'swing');
                $('.footer__item2').addClass('button-disabled');
            }
        } else {
        }
        scrolling = 0;
        console.log($('.content').scrollTop());
    })

    let kub = 0;
    $('.footer__item2').on('touchstart', function() {
        kub = 1;
        console.log(kub);
    });

});
