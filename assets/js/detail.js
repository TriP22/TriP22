$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    dots:false,
    arrows: true,
    zIndex: 10000,
    infinite:false,
    nextArrow:'<button type="button" class="btn slick-next shadow-sm th-btn-slider"></button>',
    prevArrow:'<button type="button" class="btn slick-prev shadow-sm th-btn-slider" ></button>',
  });
 
});