import mobileNav from "./modules/mobile-nav.js";

document.addEventListener("DOMContentLoaded", function() {
    /* =====  Отобразивть форму поиска по клику на лупу в шапке  ====== */
    const headerSearchOpen = document.querySelector("#search-open");
    const headerSearchForm = document.querySelector("#header-search-form");

    headerSearchOpen.addEventListener("click", function() {
        headerSearchForm.classList.toggle("search-form--open");
    });


    // Мобильная навигация
    mobileNav();
});
