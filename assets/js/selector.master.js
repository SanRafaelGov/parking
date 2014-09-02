 $(document).ready(function() {
//BEGIN jQuery Selectors
$("#hero .rotate").textrotator({
        animation: "fade",
        speed: 2200
      });

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function setHeight() {
    windowHeight = $(window).innerHeight();
    $('#hero').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
//END jQuery Selectors    
});
