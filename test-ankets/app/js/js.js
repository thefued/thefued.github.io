window.onload = function() {
$('#menu').on('click', function() {
	$('.navigation').toggleClass('navigation-disabled');
	if ($('.navigation').attr('class')==('navigation')) {
		setTimeout(() => {
		$('#menu').html('Закрыть');
		}, 600);
	} else {
		setTimeout(() => {
		$('#menu').html('Меню');
		}, 600);
	}
});


$('.text-input').on('click', function() {
	$(this).addClass('text-input-active');
	$(this).find('.text-input__title').addClass('text-input__title-active');
	$(this).find('.text-input__input').show();
	$(this).find('.text-input__input').focus();
});
$('.text-input').mouseleave(function() {
if ($(this).find('.text-input__input').val()=='') {
	$(this).removeClass('text-input-active');
	$(this).find('.text-input__title').removeClass('text-input__title-active');
	$(this).find('.text-input__input').hide();
	} else {
		$(this).removeClass('text-input-active');
	}
});
$('.select-input').on('click', function() {
	$(this).find('.select-input__select').addClass('select-input__select-active');
	$(this).find('.select-input__icon').addClass('select-input__icon-rotate');
});
$('.select-input__option').on('click', function(e) {
	e.stopPropagation();
	$(this).closest('.select-input').find('.select-input__icon').removeClass('select-input__icon-rotate');
	$(this).closest('.select-input').find('.text-input__input').show();
	$(this).closest('.select-input').find('.text-input__input').val($(this).attr('id'));
	$(this).closest('.select-input').find('.select-input__select').removeClass('select-input__select-active');
	$(this).closest('.select-input').find('.text-input__title').addClass('text-input__title-active');
});
$('.select-input').mouseleave(function() {
if ($(this).find('.text-input__input').val()=='') {
	$(this).removeClass('text-input-active');
	$(this).find('.select-input__select').removeClass('select-input__select-active');
	$(this).find('.text-input__input').hide();
	$(this).find('.text-input__input').focus();
	} else {
		$(this).removeClass('text-input-active');
		$(this).find('.select-input__select').removeClass('select-input__select-active');
	}
});
$( "#scroller" ).slider({
	animate: "slow",
	range: "min",  
    value: 66
});

}