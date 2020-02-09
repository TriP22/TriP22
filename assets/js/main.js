$(document).ready(function(){
  $('.slider-bestseller').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 4000,
    dots:false,
    arrows: true,
    infinite:false,
    // variableWidth: true,
    nextArrow:'<button type="button" class="btn slick-next shadow-sm th-btn-slider"><img src="img/arrow.svg" style="height:15px;width:15px;"></button>',
    prevArrow:'<button type="button" class="btn slick-prev shadow-sm th-btn-slider"><img src="img/back.svg" style="height:15px;width:15px;"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 4000,
    dots:false,
    arrows: true,
    infinite:false,
    nextArrow:'<button type="button" class="btn slick-next shadow-sm th-btn-slider"></button>',
    prevArrow:'<button type="button" class="btn slick-prev shadow-sm th-btn-slider"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.slider1').slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: false,
      autoplaySpeed: 4000,
      dots:false,
      arrows: true,
      infinite:false,
      nextArrow:'<button type="button" class="btn slick-next shadow-sm th-btn-slider"></button>',
      prevArrow:'<button type="button" class="btn slick-prev shadow-sm th-btn-slider" ></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
  $('.slider-promotion').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: false,
      autoplaySpeed: 4000,
      dots:true,
      arrows: false,
      infinite:false,
      nextArrow:'<button type="button" class="btn slick-next shadow-sm th-btn-slider"></button>',
      prevArrow:'<button type="button" class="btn slick-prev shadow-sm th-btn-slider" ></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  $('.responsive-card-1').slick({
    dots:false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})