(function($) {
  'use strict';

  /* -- Preloader Js -- */

  $(window).on('load', function() {
    $('.spinner').fadeOut();
    $('.preloader-area')
      .delay(350)
      .fadeOut('slow');
  });

  /* -- Sticky Menu -- */

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
      $('.navbar-fixed-top').addClass('sticky');
    } else {
      $('.navbar-fixed-top').removeClass('sticky');
    }
  });

  // meanmenu
  jQuery('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: '991'
  });

  $('.info-bar').on('click', function() {
    $('.extra-info').addClass('info-open');
  });

  $('.close-icon').on('click', function() {
    $('.extra-info').removeClass('info-open');
  });

  $('.search-btn').on('click', function() {
    $(this).addClass('d-none');
    $('.main-menu').hide();
    $('.search-icon').addClass('active-search d-block');
  });
  $('.close-btn').on('click', function() {
    $('.search-icon').removeClass('active-search d-block');
    $('.main-menu').show();
    $('.search-btn').removeClass('d-none');
  });

  $('[data-background]').each(function() {
    $(this).css(
      'background-image',
      'url(' + $(this).attr('data-background') + ')'
    );
  });

  // Slider Area

  $('.slider-active').owlCarousel({
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    navigation: true,
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsiveClass: true,
    nav: true,
    autoplayTimeout: 5000,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>'
    ],
    autoplay: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $('.related-portfolio').owlCarousel({
    loop: true,
    autoplay: false,
    dots: false,
    nav: false,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      767: {
        items: 3
      }
    }
  });

  $('.testimonial-slied').slick({
    dots: true,
    arrows: false,
    infinite: true,
    vertical: true,
    //        autoplay: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024
      },
      {
        breakpoint: 600
      },
      {
        breakpoint: 480
      }
    ]
  });

  //magnific popup video
  $('.video-play-icon').magnificPopup({
    type: 'video'
  });

  // counterUp
  $('.counter').counterUp();

  // portfolio active
  $('.portfolio-area').imagesLoaded(function() {
    var grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item'
      }
    });

    $('.portfolio-menu').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      grid.isotope({
        filter: filterValue
      });
    });

    //for portfolio menu active class
    $('.portfolio-menu button').on('click', function(event) {
      $(this)
        .siblings('.active')
        .removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 350) {
      $('.scrolltoTop').fadeIn();
    } else {
      $('.scrolltoTop').fadeOut();
    }
  });

  $('.scrolltoTop').on('click', function() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      800
    );
  });
  
  $(document).ready(function(){
    $('#bar1').barfiller({barColor: "#007bff"});
    $('#bar2').barfiller({barColor: "#007bff"});
    $('#bar3').barfiller({barColor: "#007bff"});
    $('#bar4').barfiller({barColor: "#007bff"});
  });
  
})(jQuery);
