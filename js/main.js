/*!
 * monster JS
 */

(function ($) {

    'use strict';
  
    $(document).ready(function() {
  
     
  
      $('.navbar .dropdown > a').click(function(){
        location.href = this.href;
      });
      // Smooth scroll
      // Select all links with hashes
      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
  
  
  
      $(window).scroll(function() {
        if( $(window).scrollTop() > 30 ) {
          $('body').addClass('nav-fixed');
        } else {
          $('body').removeClass('nav-fixed');
        }
      });
      $(window).on('load', function() {
        $(window).trigger('scroll');
      });
  
    });
  
  }(jQuery));
  
  
  
  
  
  
  // video bg
  
  var timeoutId;
  var $videoBgAspect = $(".videobg-aspect");
  var $videoBgWidth = $(".videobg-width");
  var videoAspect = $videoBgAspect.outerHeight() / $videoBgAspect.outerWidth();
  
  function videobgEnlarge() {
    console.log('resize');
    windowAspect = ($(window).height() / $(window).width());
    if (windowAspect > videoAspect) {
      $videoBgWidth.width((windowAspect / videoAspect) * 100 + '%');
    } else {
      $videoBgWidth.width(100 + "%")
    }
  }
  
  $(window).resize(function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(videobgEnlarge, 100);
  });
  
  $(function() {
    videobgEnlarge();
  });