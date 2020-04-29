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

    let pageSubsMONEY = "<a id='moneyagain' class='content__navigation'>Сделать ставку (2 гр)</a>";
    let scrolend = 0;
    let scrolmove = 0;
    let afterHealth = 0;
    let i = 1;

    let kub = [];
    let myDexterity = 9;
    let myExtra = 9;
    let myHealth = 26;
    let myMoney = 30;
    let bufHealth= 22;
    let minHealth = 0;
    let enemyStatus = "fight";
    let pageContent = "Судьба сейчас благоприятствует вам. Вы избавились от одного из волков.";
    let pageSubs = "Бросьте игральную кость дважды";
    let enemyName = "ВОЛЧАРА";
    let enemyHealth = '13';
    let pageWin = 146;
    let pageLoose = 13;

    let enemyD = "2/Вам перегрызли горло";
    let enemy2  = "4/4/Очки от 0 до 4: Вас укусили дважды";
    let enemy1 = "6/2/Очки от 5 до 6: Челюсти чудовища смыкаются на вашей левой руке. Вы теряете 2 пункта Силы.";
    let enemy0 = "1/Очки от 7 до 12: Вы РАНИЛИ Волка";
    let enemyR = "afterHealth/ВОЛШЕБНОЕ КОЛЬЦО восстановит Ваши силы если вы останетесь в живых";
    


    $('#my-item').html(bufHealth);
    $('.content__text-full').html(pageContent);
    $('.button_name').html(enemyName);



//Функция уменьшения/увеличения здоровья выбранного персонажа
    function health(item, scale) {
      setTimeout(() => {
        if (scale<0) $('#' + item).html($('#' + item).html() - 1);
        if (scale>0) $('#' + item).html($('#' + item).html() - 0 + 1);
        if (i<Math.abs(scale)) {
          i++;
          health(item, scale);
        } else {
          i=1;
        }
      }, 100);
    }
//Функция ИСПЫТАНИЯ
function test0(points) { 
  let link='';
  if (points<=2) {
    link = "Очки от 0 до 2: <br> <a class='content__navigation' href='#' id='" + pageLoose + "'>Переход</a>";
  } else if (points<=4) {
    link = "Очки от 3 до 4: <br> <a class='content__navigation' href='#' id='" + enemyHealth + "'>Переход</a>";
  } else if (points<=6) {
    link = "Очки от 5 до 6: <br> <a class='content__navigation' href='#' id='" + pageWin + "'>Переход</a>";
  } else if (points==13) {
    link = "ВОЛШЕБНОЕ КОЛЬЦО: <br> <a class='content__navigation' href='#' id='" + pageWin + "'>Переход</a>";
  }
  console.log(points);
  $('.content__text-bottom ').html($('.content__text-bottom ').html() + '<br>' + link);
  return false;
};
//Функция ИСПЫТАНИЯ на СИЛУ, ЛОВКОСТЬ, ЭКСТРАСЕНСОРНЫЕ СПОСОБНОСТИ
function test(points) { 
  let link='';
  if (points==13) {
    link = "Вам выпало ВОЛШЕБНОЕ КОЛЬЦО <br> <a class='content__navigation' href='#' id='" + pageWin + "'>Переход</a>";
  } else if (points <= myDexterity) {
    link = "Вы смогли <br> <a class='content__navigation' href='#' id='" + pageWin + "'>Переход</a>";
  } else {
    link = "Вам не удалось <br> <a class='content__navigation' href='#' id='" + pageLoose + "'>Переход</a>";
  }
  $('.content__text-bottom ').html($('.content__text-bottom ').html() + '<br>' + link);
  return false;
};
//Сделать ставку (2 гр)
  $(document).on('click', '#moneyagain', function() {
    health('my-item', -2);
    myMoney = myMoney - 2;
    $('.content__text-bottom ').html('Бросьте игральную кость дважды.');
    $('.footer__item2').removeClass('button-disabled');
  });
//Функция игры на деньги
    function game(pointer) {
      let link;
      if (pointer<=2) {
        link = "Очки от 0 до 2: Вас обвиняют в обмане <br> <a class='content__navigation' href='#' id='" + pageLoose + "'>Переход</a>"
      } else if (pointer<=6) {
        link = "Очки от 3 до 6: Вы проигрываете свою ставку в две гривны и должны положить еще две гривны на кон чтобы продолжать игру<br> <a class='content__navigation' href='#' id='" + pageWin + "'>Уйти</a> <a class='content__navigation' id='moneyagain' href='#'>Сделать ставку (2 гр)</a>"
      } else if (pointer<=11) {
        link = "Очки от 7 до 11: Вы выигрываете 4 серебряных гривны(двойную ставку). Если есть желание продолжать игру, ставьте ещё 2 гривны и снова бросайте игральную кость<br> <a class='content__navigation' href='#' id='" + pageWin + "'>Уйти</a> <a class='content__navigation' id='moneyagain' href='#'>Сделать ставку (2 гр)</a>";
        myMoney = myMoney + 4;
        health('my-item', 4);
      } else if (pointer<=13) {
        link = "12 очков или ВОЛШЕБНОЕ КОЛЬЦО: Вы выигрываете кон из 10 серебряных гривен. Если хотите ещё поиграть, положите на стол две гривны.<br> <a class='content__navigation' href='#' id='" + pageWin + "'>Уйти</a> <a class='content__navigation' id='moneyagain' href='#'>Сделать ставку (2 гр)</a>";
        myMoney = myMoney + 10;
        health('my-item', 10);
      }
      setTimeout(() => {
            $('.content__text-bottom').animate({
              scrollTop: 1000
          }, 700, 'swing');
        },500);
      if (link!=undefined) {
      $('.content__text-bottom ').html($('.content__text-bottom ').html() + '<br>' + link);
      return false;
    }
      
    };
//Функция битвы
    function fight(pointer, minHealth) {
      let link='';
        if ((enemyD!="")&&(pointer<=enemyD.split('/')[0])) {
          health('my-item', 0-bufHealth);
          bufHealth = 0;
          $('.content__text-bottom ').html($('.content__text-bottom ').html() + '<br>' + enemyD.split('/')[1]);
        } else if ((enemy2!="")&&(pointer<=enemy2.split('/')[0])) {
          health('my-item', 0-enemy2.split('/')[1]);
          bufHealth = bufHealth - enemy2.split('/')[1];
          $('.content__text-bottom ').html($('.content__text-bottom ').html() + '<br>' + enemy2.split('/')[2]);
        }  else if ((enemy1!="")&&(pointer<=enemy1.split('/')[0])) {
          health('my-item', 0-enemy1.split('/')[1]);
          bufHealth = bufHealth - enemy1.split('/')[1];
          $('.content__text-bottom ').html($('.content__text-bottom ').html() + '<br>' + enemy1.split('/')[2]);
        }  else if ((enemy0!="")&&(pointer<=12)) {
          health('evil-item', 0-enemy0.split('/')[0]);
          enemyHealth = enemyHealth - enemy0.split('/')[0];
          $('.content__text-bottom ').html($('.content__text-bottom ').html() + '<br>' + enemy0.split('/')[1]);
        }  else if ((enemyR!="")&&(pointer==13)) {
          if (enemyR.split('/')[0]=='health') {
            health('my-item', myHealth-bufHealth);
            bufHealth = myHealth;
          } else if (enemyR.split('/')[0]=='win') {
            enemyHealth = 0;
          } else if (enemyR.split('/')[0]=='afterhealth') {
            afterHealth = 1;
          }

          $('.content__text-bottom ').html($('.content__text-bottom ').html() + '<br>' + enemyR.split('/')[1]);
        }

      if (enemyHealth<=0) {
        enemyHealth = 0;
        if (afterHealth==1) {
          setTimeout(() => {
            health('my-item', myHealth-bufHealth);
            bufHealth = myHealth;
            afterHealth = 0;
          }, 400);
          link = "Вам выпадало ВОЛШЕБНОЕ КОЛЬЦО и Ваша сила восстанавливается <br>"
        }
        link = link + "Вы побеждаете <br> <a class='content__navigation' href='#' id='" + pageWin + "'>Переход</a>";
      }
      if (bufHealth<=minHealth) {
        link = "Вы Проигрываете <br> <a class='content__navigation' href='#' id='" + pageLoose + "'>Переход</a>";
      }
      setTimeout(() => {
            $('.content__text-bottom').animate({
              scrollTop: 1000
          }, 700, 'swing');
        },500);
      if (link!='') {
      $('.content__text-bottom ').html($('.content__text-bottom ').html() + '<br>' + link);
      return false;
    }
      
    };
//функция выбора действия в зависимости от типа страницы
    function actionEnemy(points, action) {
      switch(action) {
        case 'fight': 
          if (fight(points, minHealth)!=false) {
            kub.end = undefined;
            kub.item = 0;
            $('.footer__item2').removeClass('button-disabled');
            setTimeout(() => {
            $('#kub_item').html('').removeClass('gold');
            }, 1500);
          };
          break;
        case 'game': 
            game(points);
            kub.end = undefined;
            kub.item = 0;
            $('.footer__item2').removeClass('button-disabled');
            setTimeout(() => {
            $('#kub_item').html('').removeClass('gold');
            }, 1500);
          break;
        case 'test': 
              test0(points);
              kub.end = undefined;
              kub.item = 0;
              setTimeout(() => {
              $('#kub_item').html('').removeClass('gold');
              }, 1500);
            break;
        default:
          if (test(points)!=false) {
            kub.end = undefined;
            kub.item = 0;
            $('.footer__item2').removeClass('button-disabled');
            setTimeout(() => {
            $('#kub_item').html('').removeClass('gold');
            }, 1500);
          };
      } 
  }


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
              let link;
                $('.content').animate({
                    scrollTop: $(window).innerHeight()
                }, 700, 'swing');
                scrolmove = 2;
                $('.content__text-bottom ').html(pageSubs);
                if (enemyStatus=='fight') {
                  $('.header__item2').addClass('statusblock statusblock-left-fight');
                  $('.header__item3').addClass('statusblock statusblock-right-fight');
                  $('.footer__item2').removeClass('button-disabled');
                  $('.footer__item2').addClass('button-fight');
                  $('.header__item2>#evil-item').html(enemyHealth);
                  $('.header__item3>#my-item').html(bufHealth);
                } else if (enemyStatus=='dext') {
                  $('.header__item3').addClass('statusblock statusblock-right-dext');
                  $('.footer__item2').removeClass('button-disabled');
                  $('.footer__item2').addClass('button-dext');
                  $('.header__item3>#my-item').html(myDexterity);
                } else if (enemyStatus=='extra') {
                  $('.header__item3').addClass('statusblock statusblock-right-extra');
                  $('.footer__item2').removeClass('button-disabled');
                  $('.footer__item2').addClass('button-extra');
                  $('.header__item3>#my-item').html(myExtra);
                } else if (enemyStatus=='game') {
                  $('.header__item3').addClass('statusblock statusblock-right-game');
                  $('.footer__item2').removeClass('button-disabled');
                  $('.footer__item2').addClass('button-game');
                  $('.header__item3>#my-item').html(myMoney);
                $('.footer__item2').addClass('button-disabled');
                } else if (enemyStatus=='test') {
                  $('.header__item3').addClass('statusblock statusblock-right-fight');
                  $('.footer__item2').removeClass('button-disabled');
                  $('.footer__item2').addClass('button-fight');
                  $('.header__item3>#my-item').html(bufHealth);
                }  else if (enemyStatus=='treatment') {
                  $('.content__text-bottom ').html('');
                  $('.header__item3').addClass('statusblock statusblock-right-fight');
                  $('.footer__item2').removeClass('button-disabled');
                  $('.footer__item2').addClass('button-fight');
                  let healthR=bufHealth - 0 + (enemyHealth - 0);
                  if (healthR>myHealth) healthR = myHealth;
                  health('my-item', (myHealth-bufHealth));
                  bufHealth = healthR;
                 } else if (enemyStatus=='damage') {
                  $('.content__text-bottom ').html('');
                  $('.header__item3').addClass('statusblock statusblock-right-fight');
                  $('.header__item3>#my-item').html(bufHealth);
                  bufHealth=bufHealth - enemyHealth.split('/')[0];
                  if (bufHealth<=0) bufHealth=0;
                  $('.header__item3').css({'background-color': 'red'});
                  setTimeout(() => {
                    $('.header__item3').css({'background-color': 'transparent'});
                  }, 200);
                  health('my-item', 0-(enemyHealth.split('/')[0]));
                  if ((enemyHealth.includes('/'))&&(bufHealth>0)) {
                    setTimeout(() => {
                      $('.header__item3').removeClass('statusblock statusblock-right-fight');
                      $('.header__item3').addClass('statusblock statusblock-right-dext');
                      $('.header__item3>#my-item').html(myDexterity);
                      myDexterity=myDexterity - enemyHealth.split('/')[1];
                      $('.header__item3').css({'background-color': 'red'});
                      setTimeout(() => {
                        $('.header__item3>#my-item').html(myDexterity);
                        $('.header__item3').css({'background-color': 'transparent'});
                      }, 200);
                    }, 800);
                    setTimeout(() => {
                      $('.header__item3>#my-item').html(bufHealth);
                      $('.header__item3').removeClass('statusblock statusblock-right-dext');
                      $('.header__item3').addClass('statusblock statusblock-right-fight');
                    }, 1500);
                  }
                  if (bufHealth<=0) {
                    link = "Вы погибли <br> <a class='content__navigation' href='#' id='" + pageLoose + "'>Переход</a>";
                  } else {
                    link = "Если Вы остались в живых <br> <a class='content__navigation' href='#' id='" + pageWin + "'>Переход</a>";
                    $('.content__text-bottom ').html($('.content__text-bottom ').html() + link);
                  }
                } 
                if ((bufHealth>0)&&(link1!='')) {
                  link = link1.split('/')[1] + "<br><a class='content__navigation' href='#' id='" + link1.split('/')[0] + "'>Переход</a>";
                  if (link2!='') {
                    link = link + link2.split('/')[1] + "<br><a class='content__navigation' href='#' id='" + link2.split('/')[0] + "'>Переход</a>";
                    if (link3!='') {
                      link = link + link3.split('/')[1] + "<br><a class='content__navigation' href='#' id='" + link3.split('/')[0] + "'>Переход</a>";
                      if (link4!='') {
                        link = link + link4.split('/')[1] + "<br><a class='content__navigation' href='#' id='" + link4.split('/')[0] + "'>Переход</a>";
                        if (link5!='') {
                          link = link + link5.split('/')[1] + "<br><a class='content__navigation' href='#' id='" + link5.split('/')[0] + "'>Переход</a>";
                        }
                      }
                    }
                  }
                  $('.content__text-bottom ').html($('.content__text-bottom ').html() + link);
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
                  if ((kub.end==undefined)&&(kub.item != 7)&&(enemyStatus!='test')) {
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
                      actionEnemy(13, enemyStatus);
                    }, 1000);
                  } else if (enemyStatus=='test') {
                    $('#kub_item').html(kub.item);
                    setTimeout(() => {
                      actionEnemy(kub.item, enemyStatus);
                    }, 800);
                  }
                  else {
                    $('#kub_item').html(kub.end + '+' + kub.item);
                    setTimeout(() => {
                      $('#kub_item').html('');
                    }, 800);
                    setTimeout(() => {
                      $('#kub_item').html(kub.end + kub.item);
                      actionEnemy(kub.end + kub.item, enemyStatus);
                    }, 1000);
                  } 
                }
            }, timer*4);
          })()
        }
    });
});
