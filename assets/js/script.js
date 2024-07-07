// Unique Room slider
$('.room_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    centerPadding: '20px',
    // infinite: false,
    loop:false,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

// Testimonial slider
$('.testimonial_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    loop:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Button Hover JS
  $(function() {
    $('.default-btn')
    .on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
    });
});
