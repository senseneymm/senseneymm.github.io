
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-116580793-1');
  
$(document).ready(function(){
	$('#bannerWrap').load('banner.html');
	$('#footerWrap').load('footer.html');
  
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
      target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 55
        }, 300, function() {
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
      
      
      var sections = $('section')
  , nav = $('#bannerWrapHome')
				, nav_height = nav.outerHeight();

 
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('currentSection');
      sections.removeClass('currentSection');
 
      $(this).addClass('currentSection');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('currentSection');
    }
  });
});
      
  });
  
  $(window).scroll(function() {

    //After scrolling 10px from the top...
    if ( $(window).scrollTop() >= 15 ) {
        $('#bannerWrap, #bannerWrapHome').addClass('condensedBanner');

    //Otherwise remove inline styles and thereby revert to original styling
    } else {
        $('#bannerWrap, #bannerWrapHome').removeClass('condensedBanner');

    }
});
