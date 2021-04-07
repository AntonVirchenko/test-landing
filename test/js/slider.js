var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 50,
      grabCursor: true,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
       320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
           // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 50
        },

        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 40,
        }
      }  
});
