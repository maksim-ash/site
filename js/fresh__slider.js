$(document).ready(function(){
    $('.slider__body').slick({
        arrows:false,
        dots:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1500,
        easing:'linear',
        infinite:true,
        autoplay:true,
        autoplaySpeed:3300,
        pauseOnFocus:true,
        pauseOnDotsHover:true,
        pauseOnHover:true,
        draggable:true,
        swipe:true,
        touchThreshold:10,
        touchMove:true,

    });
});
