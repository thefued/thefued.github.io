window.onload = function() {
var mql = window.matchMedia('all and (max-width: 767px)');
			if (mql.matches) {
$('.nav').stop().animate(
            {
   			 height: 'hide'
  			}, 0);
$('.navigation').stop().animate(
            {
   			 height: '80px'
  			}, 0);

$('.nav-button').on('click', function() {
	if ($('.nav').attr('class')=='nav navigation__nav nav_hidden') {
		
	$('.nav').stop().animate({
    opacity: 'show',
    height: 'show'
 	 }, {
    duration: 400, 
    specialEasing: {
      opacity: 'linear',
      height: 'swing'
    }
});
$('.navigation').stop().animate(
            {
   			 height: '100vh'
  			}, 500);
	$('.nav').removeClass('nav_hidden');
$('.nav-button__line_number_1').addClass('nav-button__line_rotate_1');
$('.nav-button__line_number_2').stop().animate(
            {
   			 opacity: 'hide'
  			}, 500);
$('.nav-button__line_number_3').addClass('nav-button__line_rotate_3');
	}
	else {
	$('.nav').stop().animate({
    opacity: 'toggle',
    height: 'hide'
 	 }, {
    duration: 400, 
    specialEasing: {
      opacity: 'linear',
      height: 'swing'
    }
});
$('.nav-button__line_number_1').removeClass('nav-button__line_rotate_1');
$('.nav-button__line_number_3').removeClass('nav-button__line_rotate_3');
$('.nav-button__line_number_2').stop().animate(
            {
   			 opacity: 'show'
  			}, 500);
$('.navigation').stop().animate(
            {
   			 height: '80px'
  			}, 500);
	$('.nav').addClass('nav_hidden');
	}
});

}
}