// Main Ready Action
$(document).ready(function(){

    // Process the hide/expand sections

    function collapse(o) {
	o.removeClass("expanded");
	o.next().hide();
	o.addClass("collapsed");
	o.html("<strong>+" + o.attr("clabel") + "</strong>");
    }
    function expand(o) {
	o.removeClass("collapsed");
	o.next().show();
	o.addClass("expanded");
	o.html("<strong>-" + o.attr("elabel") + "</strong>");
    }

    $('div.collapsable').each(function() {
	collapse($(this));
    });

    $('div.collapsable').click(function() {
	if ($(this).hasClass("collapsed")) {
	    expand($(this));
	} else {
	    collapse($(this));
	}
    });
});
