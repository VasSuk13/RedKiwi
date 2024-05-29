document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.blog-swiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-blog-button-next',
      prevEl: '.swiper-blog-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      }
    }
  });
});