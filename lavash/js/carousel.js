
    $('.carousel_bottom').on('click', function (e) {  
        $('.carousel_bottom_active').removeClass('carousel_bottom_active')
        $('.carousel_center').css('width', '0%');
        var q=this; 
        setTimeout(function () {
            $('.carousel_center').attr('src', $(q).children(".carousel_bottom__img").attr('src'));   
            $('.carousel_center').css('width', '60%');	
            $(q).addClass('carousel_bottom_active');
            }, 400);	
    });
    $('.carousel_right').on('click', function (e) {
        var i=$('.carousel_bottom_active').index();
        if (i<2) {
        $('.carousel_bottom').eq(i).removeClass('carousel_bottom_active');
        $('.carousel_center').css('width', '0%');
        setTimeout(function () {
        $('.carousel_bottom').eq(i+1).addClass('carousel_bottom_active');
        $('.carousel_center').attr('src',  $('.carousel_bottom').eq(i+1).children(".carousel_bottom__img").attr('src')); 
        $('.carousel_center').css('width', '60%');	
    }, 400);	
    }
    });

    $('.carousel_left').on('click', function (e) {
        var i=$('.carousel_bottom_active').index();
        if (i>0) {
        $('.carousel_bottom').eq(i).removeClass('carousel_bottom_active');
        $('.carousel_center').css('width', '0%');
        setTimeout(function () {
        $('.carousel_bottom').eq(i-1).addClass('carousel_bottom_active');
        $('.carousel_center').attr('src',  $('.carousel_bottom').eq(i-1).children(".carousel_bottom__img").attr('src')); 
        $('.carousel_center').css('width', '60%');	
    }, 400);	
    }
    });
