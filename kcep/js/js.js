
$(document).ready(function() {
    var scrolling = 0;
    $('.content').on('touchstart', function() {
        scrolling = 1;
    });
    $('.content').on('touchend', function() {
        scrolling = 2;
    });
    $('.content').on('scroll', function(e) {
        e.preventDefault();
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
