
$(document).on('click', ".lineName", function(e) {
	$(this).nextAll().eq(1).slideToggle("slow");//toggles modifiers
});

var $cols = $(document).on('click', ".lineName", function(e) {
	var highlight = 'selected';
	$(this).toggleClass(highlight);//add or remove highlight
});

