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
    let myDexterity = 9;
    let myExtra = 9;
    let myHealth= 24;
    let bufHealth= 24;
    let minHealth = 6;
    let enemyStatus = "fight";
    let pageContent = "Вы продолжаете спускаться по коридору к правому повороту. Он перед вами. Неожиданно слышится громкий треск, и в коридоре появляется огромный жук. <br> Щёлкая ужасными роговыми челюстями, он движется по проходу, полностью перегораживая его. Как только вы поворачиваетесь, пытаясь убежать, с потолка перед вами опускается гигантская плита. Теперь пути назад у вас нет. Итак, вы в ловушке и должны сразиться со страшилищем.";
    let pageSubs = "Бросьте игральную кость дважды.";
    let enemyName = "Гигантский жук";
    let link1 = '';
    let link2 = '';
    let enemyHealth = 13;
    let pageWin = 153;
    let pageLoose = 13;
    let point = [];
    point[0] = "death/Очки от 0 до 2: Вас хватают челюсти жука и откусывают вам голову. Здесь и заканчивается ваше приключение.";
    point[1] = "death/Очки от 0 до 2: Вас хватают челюсти жука и откусывают вам голову. Здесь и заканчивается ваше приключение.";
    point[2] = "death/Очки от 0 до 2: Вас хватают челюсти жука и откусывают вам голову. Здесь и заканчивается ваше приключение.";
    point[3] = "-3/Очки от 3 до 6: Челюсти чудовища смыкаются на вашей левой руке. Вы теряете 3 пункта Силы.";
    point[4] = "-3/Очки от 3 до 6: Челюсти чудовища смыкаются на вашей левой руке. Вы теряете 3 пункта Силы.";
    point[5] = "-3/Очки от 3 до 6: Челюсти чудовища смыкаются на вашей левой руке. Вы теряете 3 пункта Силы.";
    point[6] = "-3/Очки от 3 до 6: Челюсти чудовища смыкаются на вашей левой руке. Вы теряете 3 пункта Силы.";
    point[7] = "+3/Очки от 7 до 12: Вы ранили жука. Он теряет 3 пункта Силы.";
    point[8] = "+3/Очки от 7 до 12: Вы ранили жука. Он теряет 3 пункта Силы.";
    point[9] = "+3/Очки от 7 до 12: Вы ранили жука. Он теряет 3 пункта Силы.";
    point[10] = "+3/Очки от 7 до 12: Вы ранили жука. Он теряет 3 пункта Силы.";
    point[11] = "+3/Очки от 7 до 12: Вы ранили жука. Он теряет 3 пункта Силы.";
    point[12] = "+3/Очки от 7 до 12: Вы ранили жука. Он теряет 3 пункта Силы.";
    point[13] = "health/ВОЛШЕБНОЕ КОЛЬЦО восстанавливает ваши Силы.";
    
    $('#my-item').html(bufHealth);
    $('.content__text-full').html(pageContent);
    $('.button_name').html(enemyName);
    $('.content__text-bottom ').html(pageSubs);

    function fight(pointer, minHealth) {
      let link;
      if (point[pointer].split('/')[0] == 'death') {
        bufHealth = 0;
      } else if (point[pointer].split('/')[0] == 'health') {
        bufHealth = myHealth;
      } else if (point[pointer].split('/')[0] == 'win') {
        enemyHealth = 0;
      } else if (point[pointer].split('/')[0] == '-6') {
        bufHealth = bufHealth-6;
      } else if (point[pointer].split('/')[0] == '-3') {
        bufHealth = bufHealth-3;
      } else if (point[pointer].split('/')[0] == '+3') {
        enemyHealth = enemyHealth-3;
      }
      $('.content__text-bottom ').html($('.content__text-bottom ').html() + '<br>' + point[pointer].split('/')[1]);
      setTimeout(() => {
        $('.header__item2>#evil-item').html(enemyHealth);
        $('#my-item').html(bufHealth);
      }, 500);
      if (enemyHealth<=0) {
        enemyHealth = 0;
        link = "Вы побеждаете <br> <a class='content__navigation' href='" + pageWin + "'>Переход</a>";
      }
      if (bufHealth<=minHealth) {
        link = "Вы Проигрываете <br> <a class='content__navigation' href='" + pageLoose + "'>Переход</a>";
      }
      if (link!=undefined) {
      $('.content__text-bottom ').html($('.content__text-bottom ').html() + '<br>' + link);
      return false;
    }
      
    };



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
                  $('.header__item2>#evil-item').html(enemyHealth);
                  $('.header__item3>#my-item').html(bufHealth);
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
        kub.item = Math.floor(Math.random()*8);
        $('.footer__item2').animate({'top': 0},300);
        if (kub.clone == 2) {
        let timer=0;
          (function kubrandom() {
            setTimeout(() => {
              if (kub.end==undefined) {
                $('#kub_item').html(timer%7);  
              } else {
                $('#kub_item').html(kub.end + '+' + timer%7);  
              }
                if (timer<38) {
                  timer++;
                  kubrandom();
                  if (timer == 10) {
                      $('.footer__item2').addClass('button-disabled');
                  }
                } else {
                  if ((kub.end==undefined)&&(kub.item != 7)) {
                      kub.end = kub.item;
                      $('#kub_item').html(kub.end); 
                      $('.footer__item2').removeClass('button-disabled');
                  } else if (kub.item == 7) {
                    $('#kub_item').html('O').addClass('gold');
                    setTimeout(() => {
                      $('#kub_item').html('');
                    }, 800);
                    setTimeout(() => {
                      $('#kub_item').html('O');
                      if (fight(kub.end + kub.item, 0)!=false) {
                        kub.end = undefined;
                        kub.item = 0;
                        $('.footer__item2').removeClass('button-disabled');
                      };
                    }, 1000);
                  }
                  else {
                    $('#kub_item').html(kub.end + '+' + kub.item);
                    setTimeout(() => {
                      $('#kub_item').html('');
                    }, 800);
                    setTimeout(() => {
                      $('#kub_item').html(kub.end + kub.item);
                      if (fight(kub.end + kub.item, 0)!=false) {
                        kub.end = undefined;
                        kub.item = 0;
                        $('.footer__item2').removeClass('button-disabled');
                      };
                    }, 1000);
                  } 
                }
            }, timer*6);
          })()
        }
    });
});
