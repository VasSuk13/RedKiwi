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

    window.addEventListener('load', function() {
        document.body.classList.add('visible');
        observeElements();
        window.addEventListener('scroll', handleScroll);
    });

    function observeElements() {
        const elements = document.querySelectorAll('.banner, .swiper-slide, .first, .second, .third, .kit, .kit-2');
        elements.forEach(element => checkVisibility(element));
    }

    function handleScroll() {
        const elements = document.querySelectorAll('.banner, .swiper-slide, .first, .second, .third, .kit, .kit-2');
        elements.forEach(element => checkVisibility(element));
    }

    function checkVisibility(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.9 && rect.bottom >= windowHeight * 0.05 && !element.classList.contains('visible')) {
            element.classList.add('visible');
            if (element.classList.contains('animate-once')) {
                element.classList.remove('animate-once'); // або можете додати клас, щоб зупинити подальші зміни
            }
        }
    }

    const observerConfig = { childList: true, subtree: true };

    const mutationObserver = new MutationObserver(() => {
        observeElements();
    });

    mutationObserver.observe(document.querySelector('.swiper-container'), observerConfig);

    function observeElements() {
        const bannerElements = document.querySelectorAll('.banner');
        const firstElements = document.querySelectorAll('.first');
        const swiperElements = document.querySelectorAll('.swiper-slide');
    
        // Налаштовуємо обсервер для .banner та .first
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: [0.05, 0.3] // Пороги для початку і завершення відстеження
        };
    
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Прибираємо обсерватор після відтворення анімації
                }
            });
        }, observerOptions);
    
        bannerElements.forEach(element => observer.observe(element));
        firstElements.forEach(element => observer.observe(element));
    
        // Налаштовуємо обсервер для .swiper-slide
        const swiperObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: [0.3, 0.05] // Пороги для початку і завершення відстеження
        };
    
        const swiperObserver = new IntersectionObserver((entries, swiperObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                    entry.target.classList.add('visible');
                } else if (!entry.isIntersecting || entry.intersectionRatio < 0.05) {
                    entry.target.classList.remove('visible');
                }
            });
        }, swiperObserverOptions);
    
        swiperElements.forEach(element => swiperObserver.observe(element));
    }
    
});
