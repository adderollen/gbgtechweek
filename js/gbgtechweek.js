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

var waypointglab = $('#connactvast').waypoint({
  handler: function(direction) {
    $('#connactvast .left-side').toggleClass('left-side-animate');
    $('#connactvast .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointglab = $('#glabsw').waypoint({
  handler: function(direction) {
    $('#glabsw .left-side').toggleClass('left-side-animate');
    $('#glabsw .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointSum1 = $('#sum1').waypoint({
  handler: function(direction) {
    $('#sum1 .left-side').toggleClass('left-side-animate');
    $('#sum1 .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointSum1 = $('#almi').waypoint({
  handler: function(direction) {
    $('#almi .left-side').toggleClass('left-side-animate');
    $('#almi .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointCsebreakfast = $('#csebreakfast').waypoint({
  handler: function(direction) {
    $('#csebreakfast .left-side').toggleClass('left-side-animate');
    $('#csebreakfast .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointVenturecup = $('#venturecup').waypoint({
  handler: function(direction) {
    $('#venturecup .left-side').toggleClass('left-side-animate');;
    $('#venturecup .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointglab = $('#postitapp').waypoint({
  handler: function(direction) {
    $('#postitapp .left-side').toggleClass('left-side-animate');
    $('#postitapp .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointḾeteor = $('#meteor').waypoint({
  handler: function(direction) {
    $('#meteor .left-side').toggleClass('left-side-animate');;
    $('#meteor .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointglab = $('#ehivefair').waypoint({
  handler: function(direction) {
    $('#ehivefair .left-side').toggleClass('left-side-animate');
    $('#ehivefair .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointglab = $('#drivhusetworkshop').waypoint({
  handler: function(direction) {
    $('#drivhusetworkshop .left-side').toggleClass('left-side-animate');
    $('#drivhusetworkshop .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointSupp = $('#supp').waypoint({
  handler: function(direction) {
    $('#supp .left-side').toggleClass('left-side-animate');;
    $('#supp .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointGbgsuh = $('#gbgsuh').waypoint({
  handler: function(direction) {
    $('#gbgsuh .left-side').toggleClass('left-side-animate');;
    $('#gbgsuh .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointStartupgrind = $('#gbgsua').waypoint({
  handler: function(direction) {
    $('#gbgsua .left-side').toggleClass('left-side-animate');;
    $('#gbgsua .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointSum1 = $('#sum2').waypoint({
  handler: function(direction) {
    $('#sum2 .left-side').toggleClass('left-side-animate');
    $('#sum2 .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointgGdl = $('#gdl').waypoint({
  handler: function(direction) {
    $('#gdl .left-side').toggleClass('left-side-animate');
    $('#gdl .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointStartupgrind = $('#tedx').waypoint({
  handler: function(direction) {
    $('#tedx .left-side').toggleClass('left-side-animate');;
    $('#tedx .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointChalmersinnovation = $('#chalmersinnovation').waypoint({
  handler: function(direction) {
    $('#chalmersinnovation .left-side').toggleClass('left-side-animate');;
    $('#chalmersinnovation .right-side').toggleClass('right-side-animate');
},
offset: '70%'
})

var waypointContact = $('#contact').waypoint({
  handler: function(direction) {
    $('.contact-row h2').toggleClass('contact-animate-h2');
    $('.contact-row h1').toggleClass('contact-animate-h1');
    
  },
  offset: '80%'
})