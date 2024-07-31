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

/* =========  Toggle theme color  =============  */
const toggleTheme = document.querySelector(".toggle-theme");
const bodyEl = document.body;

if (toggleTheme) {
    const toggleThemeInput = document.querySelector("#toggle-theme__input");
    
    toggleTheme.addEventListener('click', function() {
        console.log('Click!!!');
        if (toggleThemeInput.checked) {
            bodyEl.classList.add('green');
        } else {
            bodyEl.classList.remove("green");
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


}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWUsU0FBUzs7Ozs7O1VDZnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvbW9iaWxlLW5hdi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG1vYmlsZU5hdigpIHtcblx0Ly8gTW9iaWxlIG5hdiBidXR0b25cblx0Y29uc3QgbmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1uYXYtYnRuJyk7XG5cdGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLW1lbnVcIik7XG5cdGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1pY29uJyk7XG5cblx0bmF2QnRuLm9uY2xpY2sgPSB0b2dnbGVNb2JpbGU7XG5cblx0ZnVuY3Rpb24gdG9nZ2xlTW9iaWxlKCkge1xuXHRcdG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGVhZGVyLW1lbnVfX21vYmlsZS0tb3BlblwiKTtcbiAgICAgICAgbWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1pY29uLS1hY3RpdmVcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm5vLXNjcm9sbFwiKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBtb2JpbGVOYXY7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG1vYmlsZU5hdiBmcm9tIFwiLi9tb2R1bGVzL21vYmlsZS1uYXYuanNcIjtcclxuIC8vINCc0L7QsdC40LvRjNC90LDRjyDQvdCw0LLQuNCz0LDRhtC40Y9cclxuLy8gbW9iaWxlTmF2KCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgIC8qID09PT09ICDQntGC0L7QsdGA0LDQt9C40LLRgtGMINGE0L7RgNC80YMg0L/QvtC40YHQutCwINC/0L4g0LrQu9C40LrRgyDQvdCwINC70YPQv9GDINCyINGI0LDQv9C60LUgID09PT09PSAqL1xyXG4gICAgY29uc3QgaGVhZGVyU2VhcmNoT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLW9wZW5cIik7XHJcbiAgICBjb25zdCBoZWFkZXJTZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXItc2VhcmNoLWZvcm1cIik7XHJcblxyXG4gICAgY29uc3QgbmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbmF2LWJ0blwiKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW5hdlwiKTtcclxuICAgIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtaWNvblwiKTtcclxuXHJcbiAgICBjb25zdCBmYWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbmF2LWZhZGVcIik7XHJcblxyXG4gICAgbmF2QnRuLm9uY2xpY2sgPSB0b2dnbGVNb2JpbGU7XHJcblxyXG4gICAgaGVhZGVyU2VhcmNoT3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2JpbGUtbmF2LS1vcGVuXCIpKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1vYmlsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFoZWFkZXJTZWFyY2hGb3JtLmNsYXNzTGlzdC5jb250YWlucyhcInNlYXJjaC1mb3JtLS1vcGVuXCIpKSB7XHJcbiAgICAgICAgICAgIGhlYWRlclNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZChcInNlYXJjaC1mb3JtLS1vcGVuXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlclNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNlYXJjaC1mb3JtLS1vcGVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZhZGUub25jbGljayA9IHRvZ2dsZU1vYmlsZTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVNb2JpbGUoKSB7XHJcbiAgICAgICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDQtdGB0LvQuCDQvtGC0LrRgNGL0YLQviDQvNC10L3RjiDQv9C+0LjRgdC60LAsINC30LDQutGA0YvQstCw0LXQvFxyXG4gICAgICAgIGlmIChoZWFkZXJTZWFyY2hGb3JtLmNsYXNzTGlzdC5jb250YWlucyhcInNlYXJjaC1mb3JtLS1vcGVuXCIpKSB7XHJcbiAgICAgICAgICAgIGhlYWRlclNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZShcInNlYXJjaC1mb3JtLS1vcGVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcIm1vYmlsZS1uYXYtLW9wZW5cIik7XHJcbiAgICAgICAgbWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1pY29uLS1hY3RpdmVcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibm8tc2Nyb2xsXCIpO1xyXG4gICAgICAgIGZhZGUuY2xhc3NMaXN0LnRvZ2dsZShcIm1vYmlsZS1uYXYtZmFkZS0tb3BlblwiKTtcclxuICAgIH1cclxuICAgXHJcbn0pO1xyXG5cclxuLyogID09PT09PT09PT09PT09PT09PT09PSAgIEhlYWRlciBTbGlkZXIgID09PT09PT09PT09PT09PT09PT09PT09PT09ICAqL1xyXG5jb25zdCBoZWFkZXJTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmhlYWRlci1zbGlkZXJcIiwge1xyXG4gICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gICAgLy8gc2xpZGVzUGVyVmlldzogMSxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgZWZmZWN0OiBcImZhZGVcIixcclxuICAgIGxhenk6IHRydWUsXHJcbiAgICBncmFiQ3Vyc29yOiB0cnVlLFxyXG4gICAgLy8gZnJlZU1vZGU6IHRydWUsXHJcbiAgICBzcGVlZDogMTAwMCwgLy/QodC60L7RgNC+0YHRgtGMINC/0YDQvtC60YDRg9GC0LrQuFxyXG5cclxuICAgIC8vIElmIHdlIG5lZWQgcGFnaW5hdGlvblxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuXHJcbi8qICA9PT09PT09PT09PT09PT09PT09PT0gICBDdGEgU2xpZGVyICA9PT09PT09PT09PT09PT09PT09PT09PT09PSAgKi9cclxuY29uc3QgY3RhU3dpcGVyID0gbmV3IFN3aXBlcihcIi5jdGEtc2xpZGVyXCIsIHtcclxuICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcclxuICAgIC8vIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIGVmZmVjdDogXCJmYWRlXCIsXHJcbiAgICBsYXp5OiB0cnVlLFxyXG4gICAgZ3JhYkN1cnNvcjogdHJ1ZSxcclxuICAgIC8vIGZyZWVNb2RlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDEwMDAsIC8v0KHQutC+0YDQvtGB0YLRjCDQv9GA0L7QutGA0YPRgtC60LhcclxuXHJcbiAgICAvLyBJZiB3ZSBuZWVkIHBhZ2luYXRpb25cclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbi8qICA9PT09PT09PT09PT09PT09PT09PT0gICBTdG9yaWVzIFNsaWRlciAgPT09PT09PT09PT09PT09PT09PT09PT09PT0gICovXHJcbmNvbnN0IHN0b3JpZXNTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnN0b3JpZXMtc2xpZGVyXCIsIHtcclxuICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcclxuICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICAgIHNwYWNlQmV0d2VlbjogMjYsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgLy8gZWZmZWN0OiBcImZhZGVcIixcclxuICAgIGxhenk6IHRydWUsXHJcbiAgICBncmFiQ3Vyc29yOiB0cnVlLFxyXG4gICAgZnJlZU1vZGU6IHRydWUsXHJcbiAgICBzcGVlZDogMTAwMCwgLy/QodC60L7RgNC+0YHRgtGMINC/0YDQvtC60YDRg9GC0LrQuFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAvLyA1MTA6IHtcclxuICAgICAgICAvLyAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgIC8vICAgICBzcGFjZUJldHdlZW46IDI2LFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIDExNjA6IHtcclxuICAgICAgICAvLyAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgIC8vICAgICBzcGFjZUJldHdlZW46IDMzLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbi8qID09PT09PT09PSAgVG9nZ2xlIHRoZW1lIGNvbG9yICA9PT09PT09PT09PT09ICAqL1xyXG5jb25zdCB0b2dnbGVUaGVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlLXRoZW1lXCIpO1xyXG5jb25zdCBib2R5RWwgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuaWYgKHRvZ2dsZVRoZW1lKSB7XHJcbiAgICBjb25zdCB0b2dnbGVUaGVtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtdGhlbWVfX2lucHV0XCIpO1xyXG4gICAgXHJcbiAgICB0b2dnbGVUaGVtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDbGljayEhIScpO1xyXG4gICAgICAgIGlmICh0b2dnbGVUaGVtZUlucHV0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgYm9keUVsLmNsYXNzTGlzdC5hZGQoJ2dyZWVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYm9keUVsLmNsYXNzTGlzdC5yZW1vdmUoXCJncmVlblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyogPT09PT09PT09ICBCYWNrIHRvIHRvcCBidXR0b24gID09PT09PT09PT09PT0gICovXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbmNvbnN0IGJhY2tUb3BCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2stdG9wXCIpO1xyXG5cclxuaWYgKGJhY2tUb3BCdG4pIHtcclxuICAgIFxyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3aW5kb3cuc2Nyb2xsWTogXCIgKyB3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2hlYWRlci5jbGllbnRIZWlnaHQ6ICcgKyBoZWFkZXIuY2xpZW50SGVpZ2h0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnYmFja1RvcEJ0bi5zY3JvbGxUb3A6ICcgKyBiYWNrVG9wQnRuLnNjcm9sbFRvcCk7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IGhlYWRlci5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ092ZXJmbG93Jyk7XHJcbiAgICAgICAgICAgIGJhY2tUb3BCdG4uY2xhc3NMaXN0LmFkZChcImJhY2stdG9wLS1vblwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnRG93bmZsb3cnKTtcclxuICAgICAgICAgICAgYmFja1RvcEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYmFjay10b3AtLW9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==