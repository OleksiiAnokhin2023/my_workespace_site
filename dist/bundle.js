/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/basiclightbox/dist/basicLightbox.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/basiclightbox/dist/basicLightbox.min.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("!function(e){if(true)module.exports=e();else {}}((function(){return function e(n,t,o){function r(c,u){if(!t[c]){if(!n[c]){var s=undefined;if(!u&&s)return require(c,!0);if(i)return i(c,!0);var a=new Error(\"Cannot find module '\"+c+\"'\");throw a.code=\"MODULE_NOT_FOUND\",a}var l=t[c]={exports:{}};n[c][0].call(l.exports,(function(e){return r(n[c][1][e]||e)}),l,l.exports,e,n,t,o)}return t[c].exports}for(var i=undefined,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(e,n,t){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.create=t.visible=void 0;var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement(\"div\");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},r=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},i=function(e){return null!=(e=e||document.querySelector(\".basicLightbox\"))&&!0===e.ownerDocument.body.contains(e)};t.visible=i;t.create=function(e,n){var t=function(e,n){var t=o('\\n\\t\\t<div class=\"basicLightbox '.concat(n.className,'\">\\n\\t\\t\\t<div class=\"basicLightbox__placeholder\" role=\"dialog\"></div>\\n\\t\\t</div>\\n\\t')),i=t.querySelector(\".basicLightbox__placeholder\");e.forEach((function(e){return i.appendChild(e)}));var c=r(i,\"IMG\"),u=r(i,\"VIDEO\"),s=r(i,\"IFRAME\");return!0===c&&t.classList.add(\"basicLightbox--img\"),!0===u&&t.classList.add(\"basicLightbox--video\"),!0===s&&t.classList.add(\"basicLightbox--iframe\"),t}(e=function(e){var n=\"string\"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error(\"Content must be a DOM element/node or string\");return!0===n?Array.from(o(e,!0)):\"TEMPLATE\"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=\"\"),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),\"boolean\"!=typeof e.closable)throw new Error(\"Property `closable` must be a boolean\");if(\"string\"!=typeof e.className)throw new Error(\"Property `className` must be a string\");if(\"function\"!=typeof e.onShow)throw new Error(\"Property `onShow` must be a function\");if(\"function\"!=typeof e.onClose)throw new Error(\"Property `onClose` must be a function\");return e}(n)),c=function(e){return!1!==n.onClose(u)&&function(e,n){return e.classList.remove(\"basicLightbox--visible\"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),n()}),410),!0}(t,(function(){if(\"function\"==typeof e)return e(u)}))};!0===n.closable&&t.addEventListener(\"click\",(function(e){e.target===t&&c()}));var u={element:function(){return t},visible:function(){return i(t)},show:function(e){return!1!==n.onShow(u)&&function(e,n){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add(\"basicLightbox--visible\"),n()}))}),10),!0}(t,(function(){if(\"function\"==typeof e)return e(u)}))},close:c};return u}},{}]},{},[1])(1)}));\n\n//# sourceURL=webpack://untitled2/./node_modules/basiclightbox/dist/basicLightbox.min.js?");

/***/ }),

/***/ "./investment/investment.ts":
/*!**********************************!*\
  !*** ./investment/investment.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var basiclightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! basiclightbox */ \"./node_modules/basiclightbox/dist/basicLightbox.min.js\");\n/* harmony import */ var basiclightbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(basiclightbox__WEBPACK_IMPORTED_MODULE_0__);\n\nconst candlesticks_combinations = document.getElementById(\"candlesticks_combinations\");\nconst strategy = document.getElementById(\"strategy\");\nconst Pelliron = document.getElementById(\"Pelliron\");\nconst investment = document.getElementById(\"investment\");\nconst indicators = document.getElementById(\"indicators\");\nconst btn1 = document.querySelector(\"#candlesticks_combinations h3\");\nconst btn2 = document.querySelector(\"#strategy h3\");\nbtn1.addEventListener(\"click\", event => {\n    const existingImages = candlesticks_combinations.querySelectorAll(\"img\"); // Находим все изображения внутри\n    if (existingImages.length > 0) {\n        // Если изображения уже есть, удаляем их\n        existingImages.forEach(img => img.remove());\n    }\n    else {\n        // Если изображений нет, добавляем их\n        let content = `\r\n            <img src=\"candlestick%20combinations/1.jpg\">\r\n            <img src=\"candlestick%20combinations/2.jpg\">\r\n            <img src=\"candlestick%20combinations/3.png\">\r\n        `;\n        candlesticks_combinations.insertAdjacentHTML(\"beforeend\", content);\n    }\n});\nconst images = [\n    {\n        preview: '/strategy/adding.jpg',\n        original: '/strategy/adding.jpg',\n        description: 'Adding',\n    },\n    {\n        preview: '/strategy/boolinger.jpg',\n        original: '/strategy/boolinger.jpg',\n        description: 'boolinger',\n    },\n    {\n        preview: '/strategy/fibo.jpg',\n        original: '/strategy/fibo.jpg',\n        description: 'fibo',\n    },\n    {\n        preview: '/strategy/macd.jpg',\n        original: '/strategy/macd.jpg',\n        description: 'macd',\n    },\n    {\n        preview: '/strategy/macd2.jpg',\n        original: '/strategy/macd2.jpg',\n        description: 'macd2',\n    },\n    {\n        preview: '/strategy/macd3.jpg',\n        original: '/strategy/macd3.jpg',\n        description: 'macd3',\n    },\n    {\n        preview: '/strategy/moving%20average.jpg',\n        original: '/strategy/moving%20average.jpg',\n        description: 'moving average',\n    },\n    {\n        preview: '/strategy/order.jpg',\n        original: '/strategy/order.jpg',\n        description: 'order',\n    },\n    {\n        preview: '/strategy/order2.jpg',\n        original: '/strategy/order2.jpg',\n        description: 'order2',\n    },\n    {\n        preview: '/strategy/parabolic%20star.jpg',\n        original: '/strategy/parabolic%20star.jpg',\n        description: 'parabolic star',\n    },\n    {\n        preview: '/strategy/reversal%20of%20position.jpg',\n        original: '/strategy/reversal%20of%20position.jpg',\n        description: 'reversal of position',\n    },\n    {\n        preview: '/strategy/stockstick.jpg',\n        original: '/strategy/stockstick.jpg',\n        description: 'stockstick star',\n    },\n];\nconst gallery = document.querySelector('.gallery');\nbtn2.addEventListener(\"click\", (event) => {\n    const existingImages = strategy.querySelectorAll(\"li\");\n    if (existingImages.length > 0) {\n        // Удаляем изображения\n        existingImages.forEach((li) => li.remove());\n    }\n    else {\n        // Генерируем галерею\n        let content = images.map(({ preview, original, description }) => {\n            return `<li class=\"gallery__item\">\r\n                    <img class=\"gallery__image\" src=\"${preview}\" data-original=\"${original}\" alt=\"${description}\"/>\r\n                </li>`;\n        })\n            .join('');\n        strategy.insertAdjacentHTML(\"beforeend\", content);\n        // Добавляем обработчик для открытия модального окна\n        strategy.addEventListener(\"click\", (event) => {\n            const target = event.target;\n            if (target.tagName !== \"IMG\")\n                return;\n            Open_modal_window(target);\n        });\n    }\n});\n// Функция для открытия модального окна\nconst Open_modal_window = (img) => {\n    basiclightbox__WEBPACK_IMPORTED_MODULE_0__.create(`\r\n        <img src=\"${img.dataset.original}\" alt=\"${img.alt}\">\r\n    `).show();\n};\n\n\n//# sourceURL=webpack://untitled2/./investment/investment.ts?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./investment/investment.ts");
/******/ 	
/******/ })()
;