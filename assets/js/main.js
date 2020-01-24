$(document).ready(function(){
    $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 4000,
    dots:true,
    arrows: true,
    nextArrow:'<button type="button" class="btn slick-next shadow-sm" style="background-color:#fff;height:40px;width:40px;border-radius:50%;"></button>',
    prevArrow:'<button type="button" class="btn slick-prev">Previous</button>',
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