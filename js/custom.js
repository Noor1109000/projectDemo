

// ========== banner slider
$("#slider").owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:1300,
    autoplayHoverPause:true,
    nav:true,
    navSpeed: 1500,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,

        },
        600:{
            items:1,
        },
        1000:{
            items:1,
            loop:false
        }
    }
  
});








