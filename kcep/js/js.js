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

    let scrolend = 0;
    let scrolmove = 0;


    let kub = [];
    let evilItem = 15;
    let myDexterity = 9;
    let myExtra = 9;
    let myHealth= 24;

    let enemyStatus = "extra";


    $('.content__button').addClass('button-'+enemyStatus);
    $('.content').on('touchend', function() {
        scrolend = 1;
    });
    $('.content').on('touchmove', function(e) {
        if ((scrolmove == 0)) {
          scrolmove = 1;
        }
    });
    $('.content').on('scroll', function(e) {
      if (scrolmove == 1) {
            if ($('.content').scrollTop()>($(window).innerHeight()/6)) {
                $('.content').animate({
                    scrollTop: $(window).innerHeight()
                }, 700, 'swing');
                scrolmove = 2;
                $('.footer__item2').removeClass('button-disabled');
                if (enemyStatus=='fight') {
                  $('.header__item2').addClass('statusblock statusblock-left-fight');
                  $('.header__item3').addClass('statusblock statusblock-right-fight');
                  $('.footer__item2').addClass('button-fight');
                  $('.header__item2>#evil-item').html(evilItem);
                  $('.header__item3>#my-item').html(myHealth);
                } else if (enemyStatus=='dext') {
                  $('.header__item3').addClass('statusblock statusblock-right-dext');
                  $('.footer__item2').addClass('button-dext');
                  $('.header__item3>#my-item').html(myDexterity);
                } else if (enemyStatus=='extra') {
                  $('.header__item3').addClass('statusblock statusblock-right-extra');
                  $('.footer__item2').addClass('button-extra');
                  $('.header__item3>#my-item').html(myExtra);
                }

            } 
        } else {
          e.preventDefault();
          return false;
        }
        scrolling = 0;
    })
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
        $('.footer__item2').animate({'top': 0},300);
        if (kub.clone == 2) {
        let timer=0;
          (function kubrandom() {
            setTimeout(() => {
              if (kub.end==undefined) {
                $('#kub_item').html(timer%8);  
              } else {
                $('#kub_item').html(kub.end + '+' + timer%8);  
              }
                if (timer<38) {
                  timer++;
                  kubrandom();
                  if (timer == 10) {
                      $('.footer__item2').addClass('button-disabled');
                  }
                } else {
                  if (kub.end==undefined) {
                      kub.end = kub.item;
                      $('#kub_item').html(kub.end); 
                      $('.footer__item2').removeClass('button-disabled');
                  } else {
                    $('#kub_item').html(kub.end + '+' + kub.item);
                    setTimeout(() => {
                      $('#kub_item').html('');
                    }, 800);
                    setTimeout(() => {
                      $('#kub_item').html(kub.end + kub.item);
                    }, 1000);
                  } 
                }
            }, timer*6);
          })()
        }
    });
});
