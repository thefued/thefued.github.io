window.onload = function() {
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

}