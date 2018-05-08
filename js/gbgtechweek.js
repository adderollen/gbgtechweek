var $root = $('html, body');
$('.menu a.contact-link').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 1000, function () {
        window.location.hash = href;
    });
    return true;
});


navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

$(document).ready(function() {
	var width = window.innerWidth;
  $('.logo-row').addClass('logo-row-animate');
  $('.logo-row > *').addClass('logo-row-content-animate');
  $('.menu').addClass('menu-animate');
  $('.page').addClass('visible-page');

  if (navigator.sayswho.includes("IE") || navigator.sayswho.includes("Edge")) {
    $('.ie-warning').css('display','block');
  }

/*
  let index = window.location.href.indexOf("program");
  let logString = "";


  if (index > 0) {
    logString = window.location.href.substr(index+("program".length));
    if (logString.length > 3) {
      logString = logString.substr(1,logString.length-2);
    } else {
      logString = "program";
    }
  } else {
    index = window.location.href.indexOf("press");
    if (index > 0) {
      logString = window.location.href.substr(index+("press".length));
      if (logString.length > 3) {
        logString = logString.substr(1,logString.length-2);
      } else {
        logString = "press";
      }
    } else {
      if (window.location.href.indexOf("last-year") > 0) {
        logString = "last-year";
      } else {
        logString = "first-page";
      }
    }
  }

  fbq('track', 'ViewContent', {
    content_ids: logString,
  });

*/
})

function postToGoogle(){
        let email = $('input[type="email"]').val();
        $.ajax({
            url: "https://docs.google.com/forms/d/1Bxfysoffg0kegvsdtqY_3KE6mhOV5LFO0l_xuiWOAvk/formResponse",
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


var eventDay = "day3";

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