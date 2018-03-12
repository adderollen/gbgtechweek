var previousDaySelected;

$('.sidebar .day-link').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top-70
    }, 1000, function () {
        window.location.hash = href;
    });

    if (previousDaySelected !== href) {
    	$(this).toggleClass('active');
    	if (previousDaySelected) {
    		$('.sidebar .day[data-day="'+previousDaySelected.substring(1)+'"] .day-link').toggleClass('active');	
    	}  	
    	previousDaySelected = href;
    }
    
    return false;
});