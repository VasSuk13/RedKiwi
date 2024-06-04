  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('header-menu-list');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
    const swiper = new Swiper('.swiper-container', {
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
      },
      lazy: true,
      observer: true,
      observeParents: true,
      on: {
        observerUpdate: function() {
          observeElements();
        },
        slideChange: function() {
          observeElements();
        }
      }
    });
  
    function observeElements() {
      const elements = document.querySelectorAll('.banner, .swiper-slide, .first, .second, .third, .kit, .kit-2');
  
      const observerOptionsStart = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      };
  
      const observerOptionsEnd = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05
      };
  
      const observerStart = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0.5) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('animate-once')) {
              observer.unobserve(entry.target);
            }
          }
        });
      }, observerOptionsStart);
  
      const observerEnd = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio < 0.05) {
            if (!entry.target.classList.contains('animate-once')) {
              entry.target.classList.remove('visible');
              void entry.target.offsetWidth; // Перезапуск анімації
            }
          }
        });
      }, observerOptionsEnd);
  
      elements.forEach(element => {
        observerStart.observe(element);
        observerEnd.observe(element);
      });
    }
  
    observeElements();
  
    const observerConfig = { childList: true, subtree: true };
  
    const mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        observeElements();
      });
    });
  
    mutationObserver.observe(document.querySelector('.swiper-container'), observerConfig);
  });

  document.addEventListener('DOMContentLoaded', () => {
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
      if (window.innerWidth <= 1024) {
        document.body.style.transform = 'scale(0.75)';
        document.body.style.transformOrigin = 'top left';
        document.body.style.width = 'calc(100% / 0.75)';
        document.body.style.height = 'calc(100% / 0.75)';
      }
    }
    document.body.style.visibility = 'visible';
  });
  