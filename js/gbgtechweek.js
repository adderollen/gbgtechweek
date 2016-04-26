var $root = $('html, body');
$('.menu a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 1000, function () {
        window.location.hash = href;
    });
    return false;
});

$(document).ready(function() {
	var width = window.innerWidth;
    $('.logo-row').addClass('logo-row-animate');
    $('.logo-row > *').addClass('logo-row-content-animate');
    $('.menu').addClass('menu-animate')
    $('.page').addClass('visible-page')
})

$('.event-timeline-object a').hover(
    function(evt) {
       $('.event-timeline-object a').toggleClass('event-timeline-object-inactive')
       $(evt.currentTarget).toggleClass('event-timeline-object-inactive')
    }, function(evt) {
       $('.event-timeline-object a').toggleClass('event-timeline-object-inactive')
       $(evt.currentTarget).toggleClass('event-timeline-object-inactive')
    }
)

$('.key-persons a').click(function(evt) {
  evt.preventDefault();
  var href = $.attr(this, 'href');
  daySwitchClick(href);
})

$('.event-timeline-object a').click(function(evt) {
  evt.preventDefault();
  var href = $.attr(this, 'href');
  daySwitchClick(href);
})

var daySwitchClick = function(href) {
  if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) {
    switch(href) {
      case "#uf":
        switchDay("thursday")
        break;
      case "#venturecup":
        switchDay("thursday")
        break;
      case "#drivhuset":
        switchDay("friday")
        break;
      case "#goglobal":
        switchDay("friday")
        break;
      case "#startuphack":
        switchDay("saturday")
        break;
      case "#startuparena":
        switchDay("saturday")
        break;
      case "#almi":
        switchDay("monday")
        break;
      case "#greenchallenge":
        switchDay("monday")
        break;
      case "#tedx":
        switchDay("monday")
        break;
      case "#visualarena":
        switchDay("tuesday")
        break;
      case "#vhk":
        switchDay("tuesday")
        break;
      case "#startupgrind":
        switchDay("tuesday")
        break;
      case "#dragonsden":
        switchDay("wednesday")
        break;
      case "#connect":
        switchDay("thursdayTwo")
        break;
      case "#builtforexit":
        switchDay("thursdayTwo")
        break;
      case "#afterparty":
        switchDay("thursdayTwo")
        break;
    }
  }

  $root.animate({
        scrollTop: $(href).offset().top
    }, 1000, function () {
        window.location.hash = href;
    });
}

var switchDay = function(day) {
  if (eventDay === "") {
      $('.event-list li').toggleClass('hide')
    } else {
      $('.event-list .'+eventDay).toggleClass('hide');
      $('.events-menu li[name='+eventDay+']').toggleClass('active-day')
    }
    eventDay = day;
    $('.event-list .'+eventDay).toggleClass('hide');
    $('.events-menu li[name='+eventDay+']').toggleClass('active-day');
}


var waypointLogo = $('#logo').waypoint({
  handler: function(direction) {
    history.pushState(null,null,'')
}
})

var waypointInfo = $('#info').waypoint({
  handler: function(direction) {
    $('.info-row .left-side').toggleClass('left-side-animate');
    $('.info-row .right-side').toggleClass('right-side-animate');
},
offset: '50%'
})

var waypointInfoURL = $('#info').waypoint({
  handler: function(direction) {
    history.pushState(null,null,'#info')
},
offset: '20%'
})

var waypointEventsURL = $('#events').waypoint({
  handler: function(direction) {
    history.pushState(null,null,'#events')
},
offset: '20%'
})

var waypointContactURL = $('#contact').waypoint({
  handler: function(direction) {
    history.pushState(null,null,'#contact')
},
offset: '20%'
})


var waypointEventSummary = $('#events').waypoint({
  handler: function(direction) {
    $('.event-timeline-object a').toggleClass('event-timeline-object-animate')
},
offset: '50%'
})

/*
var waypointContact = $('#contact').waypoint({
  handler: function(direction) {
    console.log("asdf")
    $('.contact-row h2').toggleClass('contact-animate-h2');
    $('.contact-row h1').toggleClass('contact-animate-h1');
    
  }
})

*/

var eventDay = "thursday";

$(document).ready(function() {
  if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) {
    $('.event-list li').toggleClass('hide');
    $('.event-list .'+eventDay).toggleClass('hide');
    $('.events-menu li[name='+eventDay+']').toggleClass('active-day')
  }
})


$('.events-menu li').click(function(evt) {
  if ($(evt.currentTarget).attr('name') != eventDay) {
    if (eventDay === "") {
      $('.event-list li').toggleClass('hide')
    } else {
      $('.event-list .'+eventDay).toggleClass('hide');
      $('.events-menu li[name='+eventDay+']').toggleClass('active-day')
    }
    eventDay = $(evt.currentTarget).attr('name');
    $('.event-list .'+eventDay).toggleClass('hide');
    $(evt.currentTarget).toggleClass('active-day');
  }
})