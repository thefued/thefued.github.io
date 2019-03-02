function clack(elem) {
   if(elem)
   {
	if (elem.className=='item item-pos item-def') {
	$(elem).addClass('item-chek');
	$(elem).removeClass('item-def');
	switch ($(elem).parent().attr('id')) {
	case 'fuagra':
	$(elem).parent().find('.item-title').text('Печень утки разварная с артишоками');
	break;
	case 'fish':
	$(elem).parent().find('.item-title').text('Головы щучьи с чесночком да свежайшая сёмгушка');
	break;
	case 'chik':
	$(elem).parent().find('.item-title').text('Филе из цыплят с трюфелями в бульоне');
	break;
	}
	} else {
	$(elem).addClass('item-def');
	$(elem).removeClass('item-chek');
	$(elem).removeClass('cheked');
	if (elem.className=='item item-pos item-def') {
	$(elem).parent().find('.item-title').html('Чего сидишь? Порадуй котэ, <a href="#" onclick="clacka(this)">купи</a>');
	}
	}
   }
}
function clacka(event, elem) {
   if(elem)
   {
	event.preventDefault();
	$(elem).parent().parent().find('.item.item-pos.item-def').addClass('item-chek');
	$(elem).parent().parent().find('.item.item-pos.item-def.item-chek').removeClass('item-def');
	switch ($(elem).parent().parent().attr('id')) {
	case 'fuagra':
	$(elem).parent().text('Печень утки разварная с артишоками');
	break;
	case 'fish':
	$(elem).parent().text('Головы щучьи с чесночком да свежайшая сёмгушка');
	break;
	case 'chik':
	$(elem).parent().text('Филе из цыплят с трюфелями в бульоне');
	break;
	}
   }
}
function mout(elem) {
   if(elem)
   {
	if (elem.className=='item item-pos item-chek') {
	$(elem).addClass('cheked');
	} else {
		$(elem).find('.SZJ').text('Сказочное заморское яство');
	}
   }
}

function mover(elem) {
   if(elem)
   {
	if (elem.className=='item item-pos item-chek cheked') {
		$(elem).find('.SZJ').text('Котэ не одобряет?');
	} else {
	}
   }
}
