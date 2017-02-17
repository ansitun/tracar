// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $("#language").bind("click", function(e) {
        
            e.stopPropagation();
            e.stopImmediatePropagation();
            e.preventDefault();
            e.cancelBubble = true;
            
            if($(".dropdown-menu .lang").is(":visible")) {
                $("#bs-example-navbar-collapse-1").removeClass("in").attr("aria-expanded", "false").css("height", "1px");
                $("#language").attr("aria-expanded", false).parent().removeClass("open");
            } else {
                $("#bs-example-navbar-collapse-1").addClass("in").attr("aria-expanded", "true").css("height", "450px");
                $("#language").attr("aria-expanded", true).parent().addClass("open");
            }
         // check here
    });
    
    $("#custom-policy").bind("click", function(e) {
        if($(this).html().indexOf("Privacy") != -1) {
            $("#policy-content1").show();
            $("#policy-content2").hide();
        } else {
            $("#policy-content1").hide();
            $("#policy-content2").show();
        }
    });
    
    $("#submitContact").on("click", function() {
        alert("clicked");
    });
    
    //headerInterval = setInterval(headFunc, 2000);
        
    headFunc();
    setTimeout(headFunc2, 8000);
    
    //headerInterval2 = setInterval(headFunc2, 8000);
    
});

var headFunc = function(){
        
        var img1 = $("#img1");
        var img2 = $("#img2");
        var img3 = $("#img3");
        
        if(img1.hasClass("active-img")) {
            check = 1;
            img1.removeClass("active-img");
        } else {
            img1.addClass("active-img");
        }
        
        if(img2.hasClass("active-img-2")) {
            img2.removeClass("active-img-2");
        } else {
            img2.addClass("active-img-2");
        }
        
        if(img3.hasClass("active-img-3")) {
            img3.removeClass("active-img-3");
        } else {
            img3.addClass("active-img-3");
        }

        setTimeout(headFunc, 4000);
        console.log("see");
    };
    
var headFunc2 = function(){

    var img1 = $("#img1");
    var img2 = $("#img2");
    var img3 = $("#img3");
    var src = img1.attr("src");
    var pos = src.substring(src.lastIndexOf("_") - 1, src.lastIndexOf("_"));

    pos = (pos == 5) ? 1 : ++pos;
    img1.attr("src", (src.substring(0, src.lastIndexOf("_") - 1) + pos + src.substring(src.lastIndexOf("_"), src.length)));
    img2.attr("src", (src.substring(0, src.lastIndexOf("_") - 1) + pos + "_2" + src.substring(src.lastIndexOf("_") + 2, src.length)));
    img3.attr("src", (src.substring(0, src.lastIndexOf("_") - 1) + pos + "_3" + src.substring(src.lastIndexOf("_") + 2, src.length)));

    console.log("see2");
    
    setTimeout(headFunc2, 8000);
    
    };

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});
    
$(document).ready(function(){
    $(window).on("scroll",check_if_in_view);
});

function initMap() {
        var uluru = {lat: 49.240170, lng: 6.951404}; 
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      };

function check_if_in_view() {
      var $animation_elements = $('.timeline > li, .rotate');
      var $window = $(window);
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      
      
      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }
      });
      
      var $head = $("header");
      var element_height = $head.outerHeight();
      var element_top_position = $head.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      
      if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            
            //headerInterval = setInterval(headFunc, 3000);
            //headerInterval2 = setInterval(headFunc2, 6000);
            $head.addClass('in-view');
        } else {
            
//            clearInterval(headerInterval);
//            clearInterval(headerInterval2);
            $head.removeClass('in-view');
        }
  
      return;
}

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

};