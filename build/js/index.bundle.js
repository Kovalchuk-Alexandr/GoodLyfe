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



}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWUsU0FBUzs7Ozs7O1VDZnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9tb2JpbGUtbmF2LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbW9iaWxlTmF2KCkge1xuXHQvLyBNb2JpbGUgbmF2IGJ1dHRvblxuXHRjb25zdCBuYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW5hdi1idG4nKTtcblx0Y29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItbWVudVwiKTtcblx0Y29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWljb24nKTtcblxuXHRuYXZCdG4ub25jbGljayA9IHRvZ2dsZU1vYmlsZTtcblxuXHRmdW5jdGlvbiB0b2dnbGVNb2JpbGUoKSB7XG5cdFx0bmF2LmNsYXNzTGlzdC50b2dnbGUoXCJoZWFkZXItbWVudV9fbW9iaWxlLS1vcGVuXCIpO1xuICAgICAgICBtZW51SWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LWljb24tLWFjdGl2ZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibm8tc2Nyb2xsXCIpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vYmlsZU5hdjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbW9iaWxlTmF2IGZyb20gXCIuL21vZHVsZXMvbW9iaWxlLW5hdi5qc1wiO1xuIC8vINCc0L7QsdC40LvRjNC90LDRjyDQvdCw0LLQuNCz0LDRhtC40Y9cbi8vIG1vYmlsZU5hdigpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAvKiA9PT09PSAg0J7RgtC+0LHRgNCw0LfQuNCy0YLRjCDRhNC+0YDQvNGDINC/0L7QuNGB0LrQsCDQv9C+INC60LvQuNC60YMg0L3QsCDQu9GD0L/RgyDQsiDRiNCw0L/QutC1ICA9PT09PT0gKi9cbiAgICBjb25zdCBoZWFkZXJTZWFyY2hPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtb3BlblwiKTtcbiAgICBjb25zdCBoZWFkZXJTZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXItc2VhcmNoLWZvcm1cIik7XG5cbiAgICBjb25zdCBuYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXYtYnRuXCIpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW5hdlwiKTtcbiAgICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWljb25cIik7XG5cbiAgICBjb25zdCBmYWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbmF2LWZhZGVcIik7XG5cbiAgICBuYXZCdG4ub25jbGljayA9IHRvZ2dsZU1vYmlsZTtcblxuICAgIGhlYWRlclNlYXJjaE9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAobmF2LmNsYXNzTGlzdC5jb250YWlucyhcIm1vYmlsZS1uYXYtLW9wZW5cIikpIHtcbiAgICAgICAgICAgIHRvZ2dsZU1vYmlsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoZWFkZXJTZWFyY2hGb3JtLmNsYXNzTGlzdC5jb250YWlucyhcInNlYXJjaC1mb3JtLS1vcGVuXCIpKSB7XG4gICAgICAgICAgICBoZWFkZXJTZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtZm9ybS0tb3BlblwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhlYWRlclNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNlYXJjaC1mb3JtLS1vcGVuXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmYWRlLm9uY2xpY2sgPSB0b2dnbGVNb2JpbGU7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVNb2JpbGUoKSB7XG4gICAgICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0LXRgdC70Lgg0L7RgtC60YDRi9GC0L4g0LzQtdC90Y4g0L/QvtC40YHQutCwLCDQt9Cw0LrRgNGL0LLQsNC10LxcbiAgICAgICAgaWYgKGhlYWRlclNlYXJjaEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VhcmNoLWZvcm0tLW9wZW5cIikpIHtcbiAgICAgICAgICAgIGhlYWRlclNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNlYXJjaC1mb3JtLS1vcGVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwibW9iaWxlLW5hdi0tb3BlblwiKTtcbiAgICAgICAgbWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1pY29uLS1hY3RpdmVcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm5vLXNjcm9sbFwiKTtcbiAgICAgICAgZmFkZS5jbGFzc0xpc3QudG9nZ2xlKFwibW9iaWxlLW5hdi1mYWRlLS1vcGVuXCIpO1xuICAgIH1cbiAgIFxufSk7XG5cbi8qICA9PT09PT09PT09PT09PT09PT09PT0gICBIZWFkZXIgU2xpZGVyICA9PT09PT09PT09PT09PT09PT09PT09PT09PSAgKi9cbmNvbnN0IGhlYWRlclN3aXBlciA9IG5ldyBTd2lwZXIoXCIuaGVhZGVyLXNsaWRlclwiLCB7XG4gICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgIC8vIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIGVmZmVjdDogXCJmYWRlXCIsXG4gICAgbGF6eTogdHJ1ZSxcbiAgICBncmFiQ3Vyc29yOiB0cnVlLFxuICAgIC8vIGZyZWVNb2RlOiB0cnVlLFxuICAgIHNwZWVkOiAxMDAwLCAvL9Ch0LrQvtGA0L7RgdGC0Ywg0L/RgNC+0LrRgNGD0YLQutC4XG5cbiAgICAvLyBJZiB3ZSBuZWVkIHBhZ2luYXRpb25cbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbn0pO1xuXG5cbi8qICA9PT09PT09PT09PT09PT09PT09PT0gICBDdGEgU2xpZGVyICA9PT09PT09PT09PT09PT09PT09PT09PT09PSAgKi9cbmNvbnN0IGN0YVN3aXBlciA9IG5ldyBTd2lwZXIoXCIuY3RhLXNsaWRlclwiLCB7XG4gICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgIC8vIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIGVmZmVjdDogXCJmYWRlXCIsXG4gICAgbGF6eTogdHJ1ZSxcbiAgICBncmFiQ3Vyc29yOiB0cnVlLFxuICAgIC8vIGZyZWVNb2RlOiB0cnVlLFxuICAgIHNwZWVkOiAxMDAwLCAvL9Ch0LrQvtGA0L7RgdGC0Ywg0L/RgNC+0LrRgNGD0YLQutC4XG5cbiAgICAvLyBJZiB3ZSBuZWVkIHBhZ2luYXRpb25cbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgfSxcbn0pO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==