import './slick.min.js'
$('.slider').slick({
    arrows: false,
    
    autoplay: true,
    slidesToShow: 1,
    responsive: [
        {
          breakpoint: 4000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        }
      ]
});