var $root = $('html, body');
$('a').click(function() {
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
    $('.logo-row .content').addClass('logo-row-content-animate')
    $('.menu').addClass('top-bar-animate')
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

$('.event-text-container svg').click(function(evt) {
    console.log($(evt.currentTarget).attr('class') == 'active')
    if($(evt.currentTarget).attr('class') == 'active') {
    } else {
        $(evt.currentTarget.parentNode.children[0]).toggleClass('inactive')
        $(evt.currentTarget.parentNode.children[1]).toggleClass('active')
        if(evt.currentTarget === evt.currentTarget.parentNode.children[2]) {
            $(evt.currentTarget.parentNode.children[2]).attr('class', 'active')
            $(evt.currentTarget.parentNode.children[3]).attr('class', '')
        } else {
            $(evt.currentTarget.parentNode.children[2]).attr('class', '')
            $(evt.currentTarget.parentNode.children[3]).attr('class', 'active')
        }
    }
    
})


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

var eventDay = "";

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