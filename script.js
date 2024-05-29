document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 10,
        }
      }
    });
  });
  


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('header-menu-list');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });



    document.getElementById('emailForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Запобігає відправці форми та перекиданню на верх сторінки
      var emailInput = document.getElementById('email');
      var error = document.getElementById('error');

      if (!emailInput.value) {
          error.style.display = 'inline'; // Показує повідомлення про помилку, якщо поле порожнє
          setTimeout(function() {
            error.style.display = 'none';
        }, 2500);
      } else {
          error.style.display = 'none';
          // Тут можна додати код для відправки форми або інших дій
          console.log('Form submitted successfully with email: ' + emailInput.value);
      }
  });
});
