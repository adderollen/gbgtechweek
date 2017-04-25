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

function postToGoogle(){
        let email = $('input[type="email"]').val();
        $.ajax({
            url: "http://docs.google.com/forms/d/1Bxfysoffg0kegvsdtqY_3KE6mhOV5LFO0l_xuiWOAvk/formResponse",
            data: {"entry.435942832" : email},
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function (){
                    $('input[type="email"]').val("");
                    //Success message
                    $('.signup-container .thanks').show();
                    $('#update-signup').hide();
                },
                200: function (){
                     $('input[type="email"]').val("");
                    //Success Message
                    $('.signup-container .thanks').show();
                    $('#update-signup').hide();
                }
            }
        });

        
}

$('#update-signup').submit(function(evt) {
  evt.preventDefault();
  postToGoogle();
    
});


$('.key-persons a').click(function(evt) {
  evt.preventDefault();
  var href = $.attr(this, 'href');
  daySwitchClick(href);
})

$('.schedule-event-link').not('.external-link').click(function(evt) {
  evt.preventDefault();
  var href = $.attr(this, 'href');
  daySwitchClick(href);
})

var daySwitchClick = function(href) {
  if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) {
    switch(href) {
      case "#venturecup":
        switchDay("day2")
        break;
      case "#glimstedt":
        switchDay("day2")
        break;
      case "#craftacademy":
        switchDay("day2")
        break;
      case "#unionen":
        switchDay("day3")
        break;
      case "#fvpd":
        switchDay("day3")
        break;
      case "#postitapp":
        switchDay("day3")
        break;
      case "#almi":
        switchDay("day3")
        break;
      case "#cse":
        switchDay("day3")
        break;
      case "#lindholmen":
        switchDay("day3")
        break;
      case "#osfs":
        switchDay("day3")
        break;
      case "#startupbar":
        switchDay("day3")
        break;
      case "#fvpd2":
        switchDay("day4")
        break;
      case "#chalmersventures":
        switchDay("day4")
        break;
      case "#insight":
        switchDay("day4")
        break;
      case "#orten":
        switchDay("day4")
        break;
      case "#siliconvallgatan":
        switchDay("day4")
        break;
      case "#guventures":
        switchDay("day4")
        break;
      case "#sahlgrenska":
        switchDay("day4")
        break;
      case "#drivhuset":
        switchDay("day5")
        break;
      case "#findwise":
        switchDay("day5")
        break;
      case "#tillvaxtverket":
        switchDay("day5")
        break;
      case "#chinapreneurs":
        switchDay("day5");
        break;
      case "#techineast":
        switchDay("day5");
        break;
      case "#janssonnorin":
        switchDay("day5")
        break;
      case "#startuphack":
        switchDay("day6")
        break;
      case "#beeryoga":
        switchDay("day6")
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


var eventDay = "day1";

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