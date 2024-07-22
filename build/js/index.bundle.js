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



}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWUsU0FBUzs7Ozs7O1VDZnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlcy9tb2JpbGUtbmF2LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbW9iaWxlTmF2KCkge1xuXHQvLyBNb2JpbGUgbmF2IGJ1dHRvblxuXHRjb25zdCBuYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW5hdi1idG4nKTtcblx0Y29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItbWVudVwiKTtcblx0Y29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWljb24nKTtcblxuXHRuYXZCdG4ub25jbGljayA9IHRvZ2dsZU1vYmlsZTtcblxuXHRmdW5jdGlvbiB0b2dnbGVNb2JpbGUoKSB7XG5cdFx0bmF2LmNsYXNzTGlzdC50b2dnbGUoXCJoZWFkZXItbWVudV9fbW9iaWxlLS1vcGVuXCIpO1xuICAgICAgICBtZW51SWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LWljb24tLWFjdGl2ZVwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibm8tc2Nyb2xsXCIpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vYmlsZU5hdjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbW9iaWxlTmF2IGZyb20gXCIuL21vZHVsZXMvbW9iaWxlLW5hdi5qc1wiO1xyXG4gLy8g0JzQvtCx0LjQu9GM0L3QsNGPINC90LDQstC40LPQsNGG0LjRj1xyXG4vLyBtb2JpbGVOYXYoKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgLyogPT09PT0gINCe0YLQvtCx0YDQsNC30LjQstGC0Ywg0YTQvtGA0LzRgyDQv9C+0LjRgdC60LAg0L/QviDQutC70LjQutGDINC90LAg0LvRg9C/0YMg0LIg0YjQsNC/0LrQtSAgPT09PT09ICovXHJcbiAgICBjb25zdCBoZWFkZXJTZWFyY2hPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtb3BlblwiKTtcclxuICAgIGNvbnN0IGhlYWRlclNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlYWRlci1zZWFyY2gtZm9ybVwiKTtcclxuXHJcbiAgICBjb25zdCBuYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXYtYnRuXCIpO1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbmF2XCIpO1xyXG4gICAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1pY29uXCIpO1xyXG5cclxuICAgIGNvbnN0IGZhZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXYtZmFkZVwiKTtcclxuXHJcbiAgICBuYXZCdG4ub25jbGljayA9IHRvZ2dsZU1vYmlsZTtcclxuXHJcbiAgICBoZWFkZXJTZWFyY2hPcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAobmF2LmNsYXNzTGlzdC5jb250YWlucyhcIm1vYmlsZS1uYXYtLW9wZW5cIikpIHtcclxuICAgICAgICAgICAgdG9nZ2xlTW9iaWxlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhlYWRlclNlYXJjaEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VhcmNoLWZvcm0tLW9wZW5cIikpIHtcclxuICAgICAgICAgICAgaGVhZGVyU2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLWZvcm0tLW9wZW5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyU2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2VhcmNoLWZvcm0tLW9wZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZmFkZS5vbmNsaWNrID0gdG9nZ2xlTW9iaWxlO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1vYmlsZSgpIHtcclxuICAgICAgICAvLyDQn9GA0L7QstC10YDRj9C10LwsINC10YHQu9C4INC+0YLQutGA0YvRgtC+INC80LXQvdGOINC/0L7QuNGB0LrQsCwg0LfQsNC60YDRi9Cy0LDQtdC8XHJcbiAgICAgICAgaWYgKGhlYWRlclNlYXJjaEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VhcmNoLWZvcm0tLW9wZW5cIikpIHtcclxuICAgICAgICAgICAgaGVhZGVyU2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2VhcmNoLWZvcm0tLW9wZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwibW9iaWxlLW5hdi0tb3BlblwiKTtcclxuICAgICAgICBtZW51SWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LWljb24tLWFjdGl2ZVwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJuby1zY3JvbGxcIik7XHJcbiAgICAgICAgZmFkZS5jbGFzc0xpc3QudG9nZ2xlKFwibW9iaWxlLW5hdi1mYWRlLS1vcGVuXCIpO1xyXG4gICAgfVxyXG4gICBcclxufSk7XHJcblxyXG4vKiAgPT09PT09PT09PT09PT09PT09PT09ICAgSGVhZGVyIFNsaWRlciAgPT09PT09PT09PT09PT09PT09PT09PT09PT0gICovXHJcbmNvbnN0IGhlYWRlclN3aXBlciA9IG5ldyBTd2lwZXIoXCIuaGVhZGVyLXNsaWRlclwiLCB7XHJcbiAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICAvLyBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBlZmZlY3Q6IFwiZmFkZVwiLFxyXG4gICAgbGF6eTogdHJ1ZSxcclxuICAgIGdyYWJDdXJzb3I6IHRydWUsXHJcbiAgICAvLyBmcmVlTW9kZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAxMDAwLCAvL9Ch0LrQvtGA0L7RgdGC0Ywg0L/RgNC+0LrRgNGD0YLQutC4XHJcblxyXG4gICAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5cclxuLyogID09PT09PT09PT09PT09PT09PT09PSAgIEN0YSBTbGlkZXIgID09PT09PT09PT09PT09PT09PT09PT09PT09ICAqL1xyXG5jb25zdCBjdGFTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmN0YS1zbGlkZXJcIiwge1xyXG4gICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gICAgLy8gc2xpZGVzUGVyVmlldzogMSxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgZWZmZWN0OiBcImZhZGVcIixcclxuICAgIGxhenk6IHRydWUsXHJcbiAgICBncmFiQ3Vyc29yOiB0cnVlLFxyXG4gICAgLy8gZnJlZU1vZGU6IHRydWUsXHJcbiAgICBzcGVlZDogMTAwMCwgLy/QodC60L7RgNC+0YHRgtGMINC/0YDQvtC60YDRg9GC0LrQuFxyXG5cclxuICAgIC8vIElmIHdlIG5lZWQgcGFnaW5hdGlvblxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbn0pO1xyXG4vKiAgPT09PT09PT09PT09PT09PT09PT09ICAgU3RvcmllcyBTbGlkZXIgID09PT09PT09PT09PT09PT09PT09PT09PT09ICAqL1xyXG5jb25zdCBzdG9yaWVzU3dpcGVyID0gbmV3IFN3aXBlcihcIi5zdG9yaWVzLXNsaWRlclwiLCB7XHJcbiAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICBzcGFjZUJldHdlZW46IDI2LFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIC8vIGVmZmVjdDogXCJmYWRlXCIsXHJcbiAgICBsYXp5OiB0cnVlLFxyXG4gICAgZ3JhYkN1cnNvcjogdHJ1ZSxcclxuICAgIGZyZWVNb2RlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDEwMDAsIC8v0KHQutC+0YDQvtGB0YLRjCDQv9GA0L7QutGA0YPRgtC60LhcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgLy8gNTEwOiB7XHJcbiAgICAgICAgLy8gICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAvLyAgICAgc3BhY2VCZXR3ZWVuOiAyNixcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAxMTYwOiB7XHJcbiAgICAgICAgLy8gICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAvLyAgICAgc3BhY2VCZXR3ZWVuOiAzMyxcclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9