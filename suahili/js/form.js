
$('.d-banner_form').stop().animate(
            {
   			 height: 'hide'
  			}, 0);
    $('.text-block__link_color_orange').on('click', function() {
	if ($('.d-banner_form').attr('class')=='d-banner_form form form_hidden') {
		$('.d-banner_form').stop().animate(
            {
   			 height: 'show'
  			}, 500);
		$('.orange_lt').addClass('orange_lt_rotat');
		$('.d-banner_form').removeClass('form_hidden');
	}
	else {
		$('.d-banner_form').stop().animate(
            {
   			 height: 'hide'
  			}, 500);
		$('.orange_lt').removeClass('orange_lt_rotat');
		$('.d-banner_form').addClass('form_hidden');
	}
});