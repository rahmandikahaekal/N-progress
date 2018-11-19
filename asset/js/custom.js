$(document).ready(function() {

    siteFooter();

    $(window).resize(function() {
      siteFooter();
    });

    function siteFooter() {
      var siteContent = $('#site-content');
      var siteContentHeight = siteContent.height();
      var siteContentWidth = siteContent.width();

      var siteFooter = $('#site-footer');
      var siteFooterHeight = siteFooter.height();
      var siteFooterWidth = siteFooter.width();

      console.log('Content Height = ' + siteContentHeight + 'px');
      console.log('Content Width = ' + siteContentWidth + 'px');
      console.log('Footer Height = ' + siteFooterHeight + 'px');
      console.log('Footer Width = ' + siteFooterWidth + 'px');

      siteContent.css({
        "margin-bottom" : siteFooterHeight + 50
      });
    };

    $('.play-btn').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

  });

  $(".carousel").swipe({

    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
  
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
  
    },
    allowPageScroll:"vertical"
  
  });

  $(function() {
    $('#nav li a').click(function() {
       $('#nav li').removeClass();
       $($(this).attr('href')).addClass('active');
    });
  });