$(document).ready(function(){
    // Team slider
    $('.team-slider').slick({
        prevArrow: '<img src="img/home/left-arrow-white.svg" class="slick-prev">', 
        nextArrow: '<img src="img/home/right-arrow-white.svg" class="slick-next">',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });

    // Home Slider
    $('.home-slider').slick({
        prevArrow: '<img src="img/home/left-arrow-white.svg" class="slick-prev">', 
        nextArrow: '<img src="img/home/right-arrow-white.svg" class="slick-next">',
        // autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});


    





