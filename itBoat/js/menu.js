window.onload = function() {
$('.nav-button').on('click', function() {
	if ($('.menu').attr('class')=='navigation__menu menu menu-hidden') {
$('.menu').removeClass('menu-hidden');
$('.nav-button__line_number_1').addClass('nav-button__line_rotate_1');
$('.nav-button__line_number_2').stop().animate(
            {
   			 opacity: 'hide'
  			}, 500);
$('.nav-button__line_number_3').addClass('nav-button__line_rotate_3');
	}
	else {

$('.menu').addClass('menu-hidden');
$('.nav-button__line_number_1').removeClass('nav-button__line_rotate_1');
$('.nav-button__line_number_3').removeClass('nav-button__line_rotate_3');
$('.nav-button__line_number_2').stop().animate(
            {
   			 opacity: 'show'
  			}, 500);
	}
});

$('.production').on('scroll', function() {
	scr = $('.production').scrollLeft();
	console.log(scr);
	proc = Math.round(scr/25.32);
	$('.scroll__line').css('left', proc + '%')	

});
$('.market__left').on('click', function() {
	$('.production').stop().animate(
		{
			scrollLeft: $('.production').scrollLeft() - 320
		  }, 500);

});
$('.market__right').on('click', function() {
	$('.production').stop().animate(
		{
			scrollLeft: $('.production').scrollLeft() + 320
		  }, 500);
});

}
