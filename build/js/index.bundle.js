/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/mobile-nav.js":
/*!**************************************!*\
  !*** ./src/js/modules/mobile-nav.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector(".header-menu");
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = toggleMobile;

	function toggleMobile() {
		nav.classList.toggle("header-menu__mobile--open");
        menuIcon.classList.toggle("nav-icon--active");
        document.body.classList.toggle("no-scroll");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (mobileNav);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mobile_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mobile-nav.js */ "./src/js/modules/mobile-nav.js");

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
const headerSwiper = new Swiper(".swiper", {
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

    // Navigation arrows
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
});



}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWUsU0FBUzs7Ozs7O1VDZnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL21vYmlsZS1uYXYuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtb2JpbGVOYXYoKSB7XG5cdC8vIE1vYmlsZSBuYXYgYnV0dG9uXG5cdGNvbnN0IG5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbmF2LWJ0bicpO1xuXHRjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1tZW51XCIpO1xuXHRjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtaWNvbicpO1xuXG5cdG5hdkJ0bi5vbmNsaWNrID0gdG9nZ2xlTW9iaWxlO1xuXG5cdGZ1bmN0aW9uIHRvZ2dsZU1vYmlsZSgpIHtcblx0XHRuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImhlYWRlci1tZW51X19tb2JpbGUtLW9wZW5cIik7XG4gICAgICAgIG1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtaWNvbi0tYWN0aXZlXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJuby1zY3JvbGxcIik7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9iaWxlTmF2OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBtb2JpbGVOYXYgZnJvbSBcIi4vbW9kdWxlcy9tb2JpbGUtbmF2LmpzXCI7XG4gLy8g0JzQvtCx0LjQu9GM0L3QsNGPINC90LDQstC40LPQsNGG0LjRj1xuLy8gbW9iaWxlTmF2KCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgIC8qID09PT09ICDQntGC0L7QsdGA0LDQt9C40LLRgtGMINGE0L7RgNC80YMg0L/QvtC40YHQutCwINC/0L4g0LrQu9C40LrRgyDQvdCwINC70YPQv9GDINCyINGI0LDQv9C60LUgID09PT09PSAqL1xuICAgIGNvbnN0IGhlYWRlclNlYXJjaE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1vcGVuXCIpO1xuICAgIGNvbnN0IGhlYWRlclNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlci1zZWFyY2gtZm9ybVwiKTtcblxuICAgIGNvbnN0IG5hdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW5hdi1idG5cIik7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbmF2XCIpO1xuICAgIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtaWNvblwiKTtcblxuICAgIGNvbnN0IGZhZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXYtZmFkZVwiKTtcblxuICAgIG5hdkJ0bi5vbmNsaWNrID0gdG9nZ2xlTW9iaWxlO1xuXG4gICAgaGVhZGVyU2VhcmNoT3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9iaWxlLW5hdi0tb3BlblwiKSkge1xuICAgICAgICAgICAgdG9nZ2xlTW9iaWxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhlYWRlclNlYXJjaEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VhcmNoLWZvcm0tLW9wZW5cIikpIHtcbiAgICAgICAgICAgIGhlYWRlclNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZChcInNlYXJjaC1mb3JtLS1vcGVuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVhZGVyU2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2VhcmNoLWZvcm0tLW9wZW5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZhZGUub25jbGljayA9IHRvZ2dsZU1vYmlsZTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1vYmlsZSgpIHtcbiAgICAgICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDQtdGB0LvQuCDQvtGC0LrRgNGL0YLQviDQvNC10L3RjiDQv9C+0LjRgdC60LAsINC30LDQutGA0YvQstCw0LXQvFxuICAgICAgICBpZiAoaGVhZGVyU2VhcmNoRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWFyY2gtZm9ybS0tb3BlblwiKSkge1xuICAgICAgICAgICAgaGVhZGVyU2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2VhcmNoLWZvcm0tLW9wZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJtb2JpbGUtbmF2LS1vcGVuXCIpO1xuICAgICAgICBtZW51SWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LWljb24tLWFjdGl2ZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibm8tc2Nyb2xsXCIpO1xuICAgICAgICBmYWRlLmNsYXNzTGlzdC50b2dnbGUoXCJtb2JpbGUtbmF2LWZhZGUtLW9wZW5cIik7XG4gICAgfVxuICAgXG59KTtcblxuLyogID09PT09PT09PT09PT09PT09PT09PSAgIEhlYWRlciBTbGlkZXIgID09PT09PT09PT09PT09PT09PT09PT09PT09ICAqL1xuY29uc3QgaGVhZGVyU3dpcGVyID0gbmV3IFN3aXBlcihcIi5zd2lwZXJcIiwge1xuICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAvLyBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIGxvb3A6IHRydWUsXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICBlZmZlY3Q6IFwiZmFkZVwiLFxuICAgIGxhenk6IHRydWUsXG4gICAgZ3JhYkN1cnNvcjogdHJ1ZSxcbiAgICAvLyBmcmVlTW9kZTogdHJ1ZSxcbiAgICBzcGVlZDogMTAwMCwgLy/QodC60L7RgNC+0YHRgtGMINC/0YDQvtC60YDRg9GC0LrQuFxuXG4gICAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG5cbiAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xuICAgIC8vIG5hdmlnYXRpb246IHtcbiAgICAvLyAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAvLyAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAvLyB9LFxufSk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9