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
    $('.footer__item2').on('touchstart', function(e) {
      if (!document.getElementsByClassName('footer__item2')[0].classList.contains('button-disabled')) {
        console.log(document.getElementsByClassName('footer__item2')[0].classList.contains('button-disabled'));
        kub.w = $('.footer__item2').width();
        kub.h = $('.footer__item2').height();
        kub.l = $('.footer__item2').offset().left;
        kub.clone = 1;
        kub.y=e.changedTouches[0].screenY;
      } else {
        kub.clone = 0;
        e.preventDefault();
        return false;
      }
    });
    $('.footer').on('touchmove', function(e) {
      e.preventDefault();
      var touches = e.changedTouches;
      for (var i = 0; i < touches.length; i++) {
      if ((kub.clone == 1)||(kub.clone == 2)) {
        kub.clone = 2;
        cY = touches[i].screenY-kub.y;
        if (cY>0) (cY=0);
        if (cY<kub.h) $('.footer__item2').css({'top': cY});
      }
    }
    });
    $('.footer__item2').on('touchend', function(e) {
      kub.item = Math.floor(Math.random()*9);
      if (kub.clone == 2) {
      $('.footer__item2').animate({'top': 0},300);
      let timer=0;
        (function kubrandom() {
          setTimeout(() => {
              $('#kub_item').html(timer%8);  
              if (timer<38) {
                $('.footer__item2').addClass('button-disabled');
                timer++;
                kubrandom();
              } else {
              $('#kub_item').html(kub.item); 
              $('.footer__item2').removeClass('button-disabled'); 
              }
          }, timer*6);
        })()
      }
    });
});
