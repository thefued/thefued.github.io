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
var k=26;
exports = function merge(nums1, m, nums2, n) {  
	for (var i=0; i < n; ++i) {
		var j=0;
		while ((nums1[j] < nums2[i]) && (j < (n + m))) {
			 j++;
		}
		for (var x=((n+m)-1); x > j; --x) {
			nums1[x] = nums1[x-1];
			console.log(nums1, j, i);
		 }
		nums1[x] = nums2[i];
	}
	console.log(nums1, j, i);
	nums1.slice(0, m+n); 
}
alert(exports([3, 0], 1, [2], 1));