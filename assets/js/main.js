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
    });