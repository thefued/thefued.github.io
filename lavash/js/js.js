function addOnWheel(elem, handler) {
      if (elem.addEventListener) {
        if ('onwheel' in document) {
          // IE9+, FF17+
          elem.addEventListener("wheel", handler);
        } else if ('onmousewheel' in document) {
          // устаревший вариант события
          elem.addEventListener("mousewheel", handler);
        } else {
          // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
          elem.addEventListener("MozMousePixelScroll", handler);
        }
      } else { // IE8-
        text.attachEvent("onmousewheel", handler);
      }
    };
	rotat = 0;
	scale = 0;
var rotate = $('.lavash__images').css('transform', 'rotate( '+rotat+'deg)');
function pageright() {
	if (scale!=-40) {
	rotat = rotat - 72;
	scale = scale - 10;
	} else
	{
	rotat = +288;
	scale = 0;
	}
	$('.lavash__images').css('transform', 'rotate( '+rotat+'deg)');
	$('.lavash_item').css('left', ''+scale+'0vw');
		
}
function pageleft() {
	if (scale!=0) {
	rotat = rotat + 72;
	scale = scale + 10;
	} else
	{
	rotat = -288;
	scale = -40;
	}
	$('.lavash__images').css('transform', 'rotate( '+rotat+'deg)');
	$('.lavash_item').css('left', ''+scale+'0vw');
}
window.onload = function() {
$('.part_1__over').removeClass('part_1__lover');
$('.world_text').removeClass('world_text');
$('.part_1__lavash').removeClass('part_1__lavash_before');
$('.part_1__bottom').removeClass('part_1__bottom_before');
$('.part_1__corn_2').removeClass('part_1__corn_2_before');
$('.part_1__corn_1').removeClass('part_1__corn_1_before');
$('.part_1__corns').removeClass('part_1__corns_before');
window.onscroll = function() {
if ($('html, body').scrollTop()==Math.round($(".part_3").offset().top)) {
$('.part_3__over').addClass('part_3__lover');
}
else{
$('.part_3__over').removeClass('part_3__lover');
}
};
if (window.matchMedia("(max-width: 411px)").matches) {
$('.title_right').addClass('title_center');
$('.title_right').removeClass('title_right');
};
jQuery('.part_3').swipe({
 swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
 if (window.matchMedia("(max-width: 411px)").matches) {
 if (direction=='left') pageright();
 if (direction=='right') pageleft();
 if (direction=='up') $('html, body').stop().animate({
            scrollTop: Math.round($(".part_4").offset().top)
        }, 500);
 if (direction=='down') $('html, body').stop().animate({
            scrollTop: Math.round($(".part_2").offset().top)
        }, 500);
} else {
	if (direction=='up') $('html, body').stop().animate({
            scrollTop: Math.round($(".part_4").offset().top)
        }, 500);
 if (direction=='down') $('html, body').stop().animate({
            scrollTop: Math.round($(".part_2").offset().top)
        }, 500);
}
 }
});

$('.logo').on('click', function() {
	if ($('.logo').attr('class')=='logo navbar_hidden') {
		$('.header').removeClass('header_hidden');
		$('.nav_item').removeClass('nav_item_hidden');
		$('.navigation').removeClass('navigation_hidden');
		$('.logo').removeClass('navbar_hidden');
	}
	else {
	$('.header').addClass('header_hidden');
	$('.nav_item').addClass('nav_item_hidden');
	$('.navigation').addClass('navigation_hidden');
	$('.logo').addClass('navbar_hidden');
	}
});
$('.videoblock').click(function(e) {
	$('.videoblock__video').css("display", "block");
	e.preventDefault;
});
}


