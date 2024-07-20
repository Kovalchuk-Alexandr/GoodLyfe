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
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    // effect: "fade",
    lazy: true,
    grabCursor: true,
    freeMode: true,
    speed: 1000, //Скорость прокрутки
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 26,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // 1160: {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        // },
    },
});



}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWUsU0FBUzs7Ozs7O1VDZnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvbW9iaWxlLW5hdi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG1vYmlsZU5hdigpIHtcblx0Ly8gTW9iaWxlIG5hdiBidXR0b25cblx0Y29uc3QgbmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1uYXYtYnRuJyk7XG5cdGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLW1lbnVcIik7XG5cdGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1pY29uJyk7XG5cblx0bmF2QnRuLm9uY2xpY2sgPSB0b2dnbGVNb2JpbGU7XG5cblx0ZnVuY3Rpb24gdG9nZ2xlTW9iaWxlKCkge1xuXHRcdG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGVhZGVyLW1lbnVfX21vYmlsZS0tb3BlblwiKTtcbiAgICAgICAgbWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1pY29uLS1hY3RpdmVcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm5vLXNjcm9sbFwiKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBtb2JpbGVOYXY7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG1vYmlsZU5hdiBmcm9tIFwiLi9tb2R1bGVzL21vYmlsZS1uYXYuanNcIjtcbiAvLyDQnNC+0LHQuNC70YzQvdCw0Y8g0L3QsNCy0LjQs9Cw0YbQuNGPXG4vLyBtb2JpbGVOYXYoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgLyogPT09PT0gINCe0YLQvtCx0YDQsNC30LjQstGC0Ywg0YTQvtGA0LzRgyDQv9C+0LjRgdC60LAg0L/QviDQutC70LjQutGDINC90LAg0LvRg9C/0YMg0LIg0YjQsNC/0LrQtSAgPT09PT09ICovXG4gICAgY29uc3QgaGVhZGVyU2VhcmNoT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLW9wZW5cIik7XG4gICAgY29uc3QgaGVhZGVyU2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyLXNlYXJjaC1mb3JtXCIpO1xuXG4gICAgY29uc3QgbmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbmF2LWJ0blwiKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1uYXZcIik7XG4gICAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1pY29uXCIpO1xuXG4gICAgY29uc3QgZmFkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW5hdi1mYWRlXCIpO1xuXG4gICAgbmF2QnRuLm9uY2xpY2sgPSB0b2dnbGVNb2JpbGU7XG5cbiAgICBoZWFkZXJTZWFyY2hPcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2JpbGUtbmF2LS1vcGVuXCIpKSB7XG4gICAgICAgICAgICB0b2dnbGVNb2JpbGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGVhZGVyU2VhcmNoRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWFyY2gtZm9ybS0tb3BlblwiKSkge1xuICAgICAgICAgICAgaGVhZGVyU2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLWZvcm0tLW9wZW5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoZWFkZXJTZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWFyY2gtZm9ybS0tb3BlblwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmFkZS5vbmNsaWNrID0gdG9nZ2xlTW9iaWxlO1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlTW9iaWxlKCkge1xuICAgICAgICAvLyDQn9GA0L7QstC10YDRj9C10LwsINC10YHQu9C4INC+0YLQutGA0YvRgtC+INC80LXQvdGOINC/0L7QuNGB0LrQsCwg0LfQsNC60YDRi9Cy0LDQtdC8XG4gICAgICAgIGlmIChoZWFkZXJTZWFyY2hGb3JtLmNsYXNzTGlzdC5jb250YWlucyhcInNlYXJjaC1mb3JtLS1vcGVuXCIpKSB7XG4gICAgICAgICAgICBoZWFkZXJTZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWFyY2gtZm9ybS0tb3BlblwiKTtcbiAgICAgICAgfVxuICAgICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcIm1vYmlsZS1uYXYtLW9wZW5cIik7XG4gICAgICAgIG1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtaWNvbi0tYWN0aXZlXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJuby1zY3JvbGxcIik7XG4gICAgICAgIGZhZGUuY2xhc3NMaXN0LnRvZ2dsZShcIm1vYmlsZS1uYXYtZmFkZS0tb3BlblwiKTtcbiAgICB9XG4gICBcbn0pO1xuXG4vKiAgPT09PT09PT09PT09PT09PT09PT09ICAgSGVhZGVyIFNsaWRlciAgPT09PT09PT09PT09PT09PT09PT09PT09PT0gICovXG5jb25zdCBoZWFkZXJTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmhlYWRlci1zbGlkZXJcIiwge1xuICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAvLyBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIGxvb3A6IHRydWUsXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICBlZmZlY3Q6IFwiZmFkZVwiLFxuICAgIGxhenk6IHRydWUsXG4gICAgZ3JhYkN1cnNvcjogdHJ1ZSxcbiAgICAvLyBmcmVlTW9kZTogdHJ1ZSxcbiAgICBzcGVlZDogMTAwMCwgLy/QodC60L7RgNC+0YHRgtGMINC/0YDQvtC60YDRg9GC0LrQuFxuXG4gICAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG59KTtcblxuXG4vKiAgPT09PT09PT09PT09PT09PT09PT09ICAgQ3RhIFNsaWRlciAgPT09PT09PT09PT09PT09PT09PT09PT09PT0gICovXG5jb25zdCBjdGFTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmN0YS1zbGlkZXJcIiwge1xuICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAvLyBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIGxvb3A6IHRydWUsXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICBlZmZlY3Q6IFwiZmFkZVwiLFxuICAgIGxhenk6IHRydWUsXG4gICAgZ3JhYkN1cnNvcjogdHJ1ZSxcbiAgICAvLyBmcmVlTW9kZTogdHJ1ZSxcbiAgICBzcGVlZDogMTAwMCwgLy/QodC60L7RgNC+0YHRgtGMINC/0YDQvtC60YDRg9GC0LrQuFxuXG4gICAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIH0sXG59KTtcbi8qICA9PT09PT09PT09PT09PT09PT09PT0gICBTdG9yaWVzIFNsaWRlciAgPT09PT09PT09PT09PT09PT09PT09PT09PT0gICovXG5jb25zdCBzdG9yaWVzU3dpcGVyID0gbmV3IFN3aXBlcihcIi5zdG9yaWVzLXNsaWRlclwiLCB7XG4gICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgc2xpZGVzUGVyVmlldzogMixcbiAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgIGxvb3A6IHRydWUsXG4gICAgLy8gZWZmZWN0OiBcImZhZGVcIixcbiAgICBsYXp5OiB0cnVlLFxuICAgIGdyYWJDdXJzb3I6IHRydWUsXG4gICAgZnJlZU1vZGU6IHRydWUsXG4gICAgc3BlZWQ6IDEwMDAsIC8v0KHQutC+0YDQvtGB0YLRjCDQv9GA0L7QutGA0YPRgtC60LhcbiAgICBicmVha3BvaW50czoge1xuICAgICAgICA1MDA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDI2LFxuICAgICAgICB9LFxuICAgICAgICA3Njg6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICB9LFxuICAgICAgICAvLyAxMTYwOiB7XG4gICAgICAgIC8vICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAvLyAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgLy8gfSxcbiAgICB9LFxufSk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9