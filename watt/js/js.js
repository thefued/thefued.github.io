function clack(elem) {
   if(elem) {
	if(elem.className=='menu-button hidden') {
		$(elem).parent().find('.navigation').addClass('view');
		$(elem).parent().find('.navigation.view').find('.navigation-bar').find('.menu').addClass('view');
		$(elem).removeClass('hidden');
		$(elem).addClass('view');
	} else {
	$(elem).parent().find('.navigation.view').removeClass('view');
	$(elem).parent().find('.navigation').find('.navigation-bar').find('.menu').removeClass('view');
	$(elem).removeClass('view');
	$(elem).addClass('hidden');
	}
	}
}
