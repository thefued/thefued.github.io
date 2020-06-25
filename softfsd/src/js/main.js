import './vendor';
import './helpers';


$(document).ready(function() {
    svg4everybody();
    $('.menubutton').click(function() {
    	$('.menubutton').toggleClass('menubutton-close');
    	$('.header__menu').toggleClass('header__menu-hidden');
    	$('.header__avatar').toggleClass('header__avatar-hidden');
    });
    $('.campaignMenu__item').click(function() {
    	$('.campaignMenu__item').removeClass('campaignMenu__item-active');
    	$('.campaignBlock__subblock').removeClass('campaignBlock__subblock-active');
    	$(this).addClass('campaignMenu__item-active');
    	let idButton = $(this).attr('id');
    	$('.'+idButton).addClass('campaignBlock__subblock-active');
    });
    let processSupport = Math.round($('#campaign-money-now').html().replace(',', '')*100/$('#campaign-money-all').html().replace(',', ''));
    $('.process__progress-green').animate({ 
    	width: processSupport + '%'
    }, 500);
})

