var previousDaySelected;
let dayAnimation = true;

$('.sidebar .day-link').click(function() {
    dayAnimation = false;

    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top-70
    }, 1000, function () {
        window.location.hash = href;
        dayAnimation = true;
    });

    if (previousDaySelected !== href) {
    	$(this).toggleClass('active');
    	if (previousDaySelected) {
    		$('.sidebar .day[data-day="'+previousDaySelected.substring(1)+'"] .day-link').toggleClass('active');	
    	}  	
    	previousDaySelected = href;
    }
    
    return true;
});

let offsetLimit = 400;

var waypoint = new Waypoint({
  element: document.getElementById('pre-events'),
  handler: function(direction) {
    let href = '#pre-events';
    setCorrectDay(href);
  },
  offset: 100,
})
var waypoint = new Waypoint({
  element: document.getElementById('2018-05-21'),
  handler: function(direction) {
    let href = '#2018-05-21';
    setCorrectDay(href);
  },
  offset: offsetLimit,
})
var waypoint = new Waypoint({
  element: document.getElementById('2018-05-22'),
  handler: function(direction) {
    let href = '#2018-05-22';
    setCorrectDay(href);
  },
  offset: offsetLimit,
})
var waypoint = new Waypoint({
  element: document.getElementById('2018-05-23'),
  handler: function(direction) {
    let href = '#2018-05-23';
    setCorrectDay(href);
  },
  offset: offsetLimit,
})
var waypoint = new Waypoint({
  element: document.getElementById('2018-05-24'),
  handler: function(direction) {
    let href = '#2018-05-24';
    setCorrectDay(href);
  },
  offset: offsetLimit,
})
var waypoint = new Waypoint({
  element: document.getElementById('2018-05-25'),
  handler: function(direction) {
    let href = '#2018-05-25';
    setCorrectDay(href);
  },
  offset: 600,
})

function setCorrectDay(href) {
    if (dayAnimation) {
        $('.sidebar .day[data-day="'+href.substring(1)+'"] .day-link').toggleClass('active');
        if (previousDaySelected) {
            $('.sidebar .day[data-day="'+previousDaySelected.substring(1)+'"] .day-link').toggleClass('active');    
        }
        previousDaySelected = href;
    }
}