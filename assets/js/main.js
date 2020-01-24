$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 4000,
        dots:false,
        arrows: true,
        infinite:false,
        nextArrow:'<button type="button" class="btn slick-next shadow-sm" style="line-height: 15px !important;background-color:#fff;height:50px;width:50px;border-radius:50%;z-index:1000;margin-right:5px;">NESTTTT</button>',
        prevArrow:'<button type="button" class="btn slick-prev shadow-sm" style="line-height: 15px !important;background-color:#fff;height:50px;width:50px;border-radius:50%;z-index:1000;margin-left:5px;">Previous</button>',
        });
        $('.slider1').slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay: false,
            autoplaySpeed: 4000,
            dots:false,
            arrows: true,
            infinite:false,
            nextArrow:'<button type="button" class="btn slick-next shadow-sm" style="line-height: 15px !important;background-color:#fff;height:50px;width:50px;border-radius:50%;z-index:1000;margin-right:5px;">NESTTTT</button>',
            prevArrow:'<button type="button" class="btn slick-prev shadow-sm" style="line-height: 15px !important;background-color:#fff;height:50px;width:50px;border-radius:50%;z-index:1000;margin-left:5px;">Previous</button>',
            });
        $('.slider-promotion').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: false,
            autoplaySpeed: 4000,
            dots:true,
            arrows: false,
            infinite:false,
            nextArrow:'<button type="button" class="btn slick-next shadow-sm" style="line-height: 15px !important;background-color:#fff;height:50px;width:50px;border-radius:50%;z-index:1000;margin-right:5px;">NESTTTT</button>',
            prevArrow:'<button type="button" class="btn slick-prev shadow-sm" style="line-height: 15px !important;background-color:#fff;height:50px;width:50px;border-radius:50%;z-index:1000;margin-left:5px;">Previous</button>',
            });
});