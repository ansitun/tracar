/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

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
    
    setInterval(function(){
        
        var img1 = $("#img1");
        var img2 = $("#img2");
        
        if(img1.hasClass("active-img")) {
            img1.removeClass("active-img");
        } else {
            img1.addClass("active-img");
        }
        
        if(img2.hasClass("active-img-2")) {
            img2.removeClass("active-img-2");
        } else {
            img2.addClass("active-img-2");
        }       

console.log("see");


    }, 5000);
        
    setInterval(function(){

        setTimeout(function(){
            var img1 = $("#img1");
            var img2 = $("#img2");
            var src = img1.attr("src");
            var pos = src.substring(src.lastIndexOf("_") - 1, src.lastIndexOf("_"));
            
//            if(pos == 1 || pos == 3 || pos == 4 ) {
//                $(".intro-heading").fadeToggle("slow");
//            }
            
            pos = (pos == 5) ? 1 : ++pos;
            img1.attr("src", (src.substring(0, src.lastIndexOf("_") - 1) + pos + src.substring(src.lastIndexOf("_"), src.length)));
            img2.attr("src", (src.substring(0, src.lastIndexOf("_") - 1) + pos + "_2" + src.substring(src.lastIndexOf("_") + 2, src.length)));

            console.log("see2");
        }, 5000);
        

    
    }, 10000);
    
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});
    
$(document).ready(function(){
    randomFade();
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

function randomFade() {
    setInterval(function () {
            $('.random-float > div:eq(' + (Math.floor(Math.random() * 10)) + ')')
                .animate({ "left": "-=30px" }, "slow")
                .fadeIn(800)
                .delay(800)
                .animate({ "left": "+=30px" }, "slow")
                .fadeOut(800)
                .delay(800)
                .fadeIn(800);
        }, 1800); 
        
    return;
}

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
      
      return;
}

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(i){
    var newq = makeNewPosition();
    // Math.floor((Math.random() * 10) + 1)

    var el = "#random-float-" + i;
    var oldq = $(el).offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $(el).animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv(this.id.substring(13));        
    });
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

};