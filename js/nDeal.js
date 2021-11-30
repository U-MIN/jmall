$(function(){
    var nDealSwiper = new Swiper('.nDeal-swiper', {
        width:650,
        slidesPerView: 1,
        loopFillGroupWithBlank : true,
        spaceBetween: 100,
        autoplay: {
            delay: 3000,
          },
        centeredSlides: true,
        loop: true,
        loopedSlides: 2,
        watchSlidesVisibility: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
                // Responsive breakpoints
      breakpoints: {
        320: {

          spaceBetween: 10
        },
        768: {

          spaceBetween: 50
        },
        1100: {
          spaceBetween: 100
        }
  }  


    });
    

});