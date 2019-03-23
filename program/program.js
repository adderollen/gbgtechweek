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

let offsetLimit = 300;

/*var waypoint = new Waypoint({
  element: document.getElementById('pre-events'),
  handler: function(direction) {
    let href = '#pre-events';
    setCorrectDay(href);
  },
  offset: 100,
})*/
var waypoint = new Waypoint({
  element: document.getElementById('2019-05-06'),
  handler: function(direction) {
    let href = '#2019-05-06';
    setCorrectDay(href);
  },
  offset: offsetLimit,
})
var waypoint = new Waypoint({
  element: document.getElementById('2019-05-07'),
  handler: function(direction) {
    let href = '#2019-05-07';
    setCorrectDay(href);
  },
  offset: offsetLimit,
})
var waypoint = new Waypoint({
  element: document.getElementById('2019-05-08'),
  handler: function(direction) {
    let href = '#2019-05-08';
    setCorrectDay(href);
  },
  offset: offsetLimit,
})
var waypoint = new Waypoint({
  element: document.getElementById('2019-05-09'),
  handler: function(direction) {
    let href = '#2019-05-09';
    setCorrectDay(href);
  },
  offset: offsetLimit,
})
var waypoint = new Waypoint({
  element: document.getElementById('2019-05-10'),
  handler: function(direction) {
    let href = '#2019-05-10';
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