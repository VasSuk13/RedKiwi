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
    const elements = document.querySelectorAll('.banner, .swiper-slide, .first, .second, .third, .kit, .kit-2');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px', // margin around the root
        threshold: 0.1 // percentage of target's visibility required
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Якщо елемент повинен анімуватися лише один раз, зупиняємо спостереження за ним
                if (entry.target.classList.contains('animate-once')) {
                    observer.unobserve(entry.target);
                }
            } else {
                // Якщо елемент не містить класу 'once', зупиняємо анімацію і перезапускаємо її при наступному входженні у видимість
                if (!entry.target.classList.contains('animate-once')) {
                    entry.target.classList.remove('visible');
                    void entry.target.offsetWidth; // Перезапускаємо анімацію
                }
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        observer.observe(element);
    });
});
