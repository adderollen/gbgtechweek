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

let daysThisYear = ['2019-10-07','2019-10-08','2019-10-09','2019-10-10','2019-10-11','2019-10-14','2019-10-15','2019-10-16','2019-10-17','2019-10-18'];

$(document).ready(function() {
  let todaysDate = new Date().toJSON().slice(0,10).replace(/-/g,'-');
  if (daysThisYear.indexOf(todaysDate)>=0) {
    let href = "#"+todaysDate
    setCorrectDay(href);
    $root.animate({
        scrollTop: $(href).offset().top-100
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
  }
});

for(var i = 0; i < daysThisYear.length; i++) {
  new Waypoint({
    element: document.getElementById(daysThisYear[i]),
    handler: function(direction) {
      let href = '#'+daysThisYear[i];
      setCorrectDay(href);
    },
    offset: offsetLimit,
  })
}

function setCorrectDay(href) {
    if (dayAnimation) {
        $('.sidebar .day[data-day="'+href.substring(1)+'"] .day-link').toggleClass('active');
        if (previousDaySelected) {
            $('.sidebar .day[data-day="'+previousDaySelected.substring(1)+'"] .day-link').toggleClass('active');
        }
        previousDaySelected = href;
    }
}

$('input[type=radio][name=city-selector]').change(function() {
  $('.city-container:not(.hidden)').toggleClass('hidden');
  $('.city-container#'+this.value).toggleClass('hidden');

  $('.background-image').css('background-image', 'url(../img/'+this.value+'_banner.jpg');
  if (this.value === "malmo" || this.value === "stockholm") {
    if (!$('.background-image').hasClass('blurred')) {
      $('.background-image').toggleClass('blurred');
    }
  } else {
    if ($('.background-image').hasClass('blurred')) {
      $('.background-image').toggleClass('blurred');
    }
  }
});