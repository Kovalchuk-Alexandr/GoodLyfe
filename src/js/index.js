import mobileNav from "./modules/mobile-nav.js";
 // Мобильная навигация
// mobileNav();

document.addEventListener("DOMContentLoaded", function() {
    /* =====  Отобразивть форму поиска по клику на лупу в шапке  ====== */
    const headerSearchOpen = document.querySelector("#search-open");
    const headerSearchForm = document.querySelector("#header-search-form");

    const navBtn = document.querySelector(".mobile-nav-btn");
    const nav = document.querySelector(".mobile-nav");
    const menuIcon = document.querySelector(".nav-icon");

    const fade = document.querySelector(".mobile-nav-fade");

    navBtn.onclick = toggleMobile;

    headerSearchOpen.addEventListener("click", function() {
        if (nav.classList.contains("mobile-nav--open")) {
            toggleMobile();
        }

        if (!headerSearchForm.classList.contains("search-form--open")) {
            headerSearchForm.classList.add("search-form--open");
        } else {
            headerSearchForm.classList.remove("search-form--open");
        }
    });

    fade.onclick = toggleMobile;

    function toggleMobile() {
        // Проверяем, если открыто меню поиска, закрываем
        if (headerSearchForm.classList.contains("search-form--open")) {
            headerSearchForm.classList.remove("search-form--open");
        }
        nav.classList.toggle("mobile-nav--open");
        menuIcon.classList.toggle("nav-icon--active");
        document.body.classList.toggle("no-scroll");
        fade.classList.toggle("mobile-nav-fade--open");
    }
   
});

/*  =====================   Header Slider  ==========================  */
const headerSwiper = new Swiper(".header-slider", {
    // Optional parameters
    // slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    lazy: true,
    grabCursor: true,
    // freeMode: true,
    speed: 1000, //Скорость прокрутки

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


/*  =====================   Cta Slider  ==========================  */
const ctaSwiper = new Swiper(".cta-slider", {
    // Optional parameters
    // slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    lazy: true,
    grabCursor: true,
    // freeMode: true,
    speed: 1000, //Скорость прокрутки

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*  =====================   Stories Slider  ==========================  */
const storiesSwiper = new Swiper(".stories-slider", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 26,
    loop: true,
    // effect: "fade",
    lazy: true,
    grabCursor: true,
    freeMode: true,
    speed: 1000, //Скорость прокрутки
    breakpoints: {
        // 510: {
        //     slidesPerView: 'auto',
        //     spaceBetween: 26,
        // },
        768: {
            slidesPerView: 'auto',
            spaceBetween: 33,
        },
        // 1160: {
        //     slidesPerView: 'auto',
        //     spaceBetween: 33,
        // },
    },
});

/* =========  Toggle theme color  =============  */
const toggleTheme = document.querySelector(".toggle-theme");
const bodyEl = document.body;

if (toggleTheme) {
    const toggleThemeInput = document.querySelector("#toggle-theme__input");
    console.log("bodyEl.classList: " + bodyEl.classList);

    // Прослушка переключателя
    toggleTheme.addEventListener('click', function () {
        // console.log('Click!!!');
        if (toggleThemeInput.checked) {
            bodyEl.classList.add('green');
            // Подсказка для смены темы
            toggleTheme.setAttribute("title", "change to pink");
        } else {
            bodyEl.classList.remove("green");
            // Подсказка для смены темы
            toggleTheme.setAttribute("title", "change to green");
        }
    });
}

/* =========  Back to top button  =============  */
const header = document.querySelector("header");
const backTopBtn = document.querySelector(".back-top");

if (backTopBtn) {
    
    window.onscroll = function() {
        // console.log("window.scrollY: " + window.scrollY);
        // console.log('header.clientHeight: ' + header.clientHeight);
        // console.log('backTopBtn.scrollTop: ' + backTopBtn.scrollTop);

        if (window.scrollY > header.clientHeight) {
            // console.log('Overflow');
            backTopBtn.classList.add("back-top--on");
        } else {
            // console.log('Downflow');
            backTopBtn.classList.remove("back-top--on");
        }
    };
}

