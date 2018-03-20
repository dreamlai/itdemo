/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/diary.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/diary.scss":
/*!****************************!*\
  !*** ./src/css/diary.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/diary.scss?");

/***/ }),

/***/ "./src/js/diary.js":
/*!*************************!*\
  !*** ./src/js/diary.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_diary_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/diary.scss */ \"./src/css/diary.scss\");\n/* harmony import */ var _css_diary_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_diary_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_module_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/module/popup.js */ \"./src/js/module/popup.js\");\n\r\n\r\n\r\nif(!sessionStorage.getItem(\"all-player\")){\r\n    window.location.href = \"identity.html\";\r\n}\r\n\r\nvar close = document.querySelector(\".close\");\r\n\r\nvar game_start = document.querySelector(\".game-start\");\r\n\r\nvar content = document.querySelector(\".all-player\");\r\nvar all_player = sessionStorage.getItem(\"all-player\").split(\",\");\r\n\r\nclose.addEventListener(\"click\", function(){\r\n    Object(_js_module_popup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n        \"title\": \"温馨提示\",\r\n        \"content\": \"是否要结束本轮游戏？\",\r\n        \"buttons\": {\r\n            \"确认\":function(){\r\n                window.location.href = \"identity.html\";\r\n            },\r\n            \"关闭\":function(){\r\n                \r\n            }\r\n        }\r\n    });\r\n});\r\nfunction setNode(player_name,index){\r\n    var player = document.createElement(\"div\");\r\n    player.className = \"player\";\r\n\r\n    var detail = document.createElement(\"div\");\r\n    detail.className = \"detail\";\r\n\r\n    var identity = document.createElement(\"p\");\r\n    identity.className = \"identity\";\r\n    identity.innerHTML = player_name;\r\n\r\n    var number = document.createElement(\"p\");\r\n    number.className = \"number\";\r\n    number.innerHTML = index;\r\n\r\n    detail.appendChild(identity);\r\n    detail.appendChild(number);\r\n    player.appendChild(detail)\r\n\r\n    content.appendChild(player);\r\n}\r\n\r\nfor(var name in all_player ){\r\n    setNode(all_player[name], parseInt(name) + 1);\r\n}\r\n\r\ngame_start.addEventListener(\"click\", function(){\r\n    window.location.href = \"record.html\";\r\n});\n\n//# sourceURL=webpack:///./src/js/diary.js?");

/***/ }),

/***/ "./src/js/module/popup.js":
/*!********************************!*\
  !*** ./src/js/module/popup.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return popup; });\nfunction popup(json){\r\n\r\n    const options = json;\r\n\r\n    var pop, small_btn, large_btn, mask;\r\n\r\n    // 创建弹出层元素\r\n    var setNode = function(){\r\n        // 主div\r\n        pop = document.createElement(\"div\");\r\n        pop.className = \"popup auto\";\r\n        // 头\r\n        var header = document.createElement(\"div\");\r\n        header.className = \"popup-header\";\r\n        var title = document.createElement(\"p\");\r\n        title.className = \"popup-title\";\r\n        title.innerHTML = options.title;\r\n        small_btn = document.createElement(\"a\");\r\n        small_btn.className = \"small_btn\";\r\n        small_btn.innerHTML = \"X\";\r\n        header.appendChild(title);\r\n        header.appendChild(small_btn);\r\n        // 主内容\r\n        var main = document.createElement(\"div\");\r\n        main.className = \"popup-main\";\r\n        var content = document.createElement(\"p\");\r\n        content.className = \"popup-content\";\r\n        content.innerHTML = options.content;\r\n        main.appendChild(content);\r\n        // 脚\r\n        var footer = document.createElement(\"div\");\r\n        footer.className = \"popup-footer\";\r\n        for(var name in options.buttons){\r\n            (function(name){\r\n                large_btn = document.createElement(\"a\");\r\n                large_btn.className = \"btn\";\r\n                large_btn.innerHTML = name;\r\n                footer.appendChild(large_btn);\r\n            })(name);\r\n        };\r\n        \r\n        pop.appendChild(header);\r\n        pop.appendChild(main);\r\n        pop.appendChild(footer);\r\n\r\n        // 遮罩层\r\n        mask = document.createElement(\"div\");\r\n        mask.className = \"mask\";\r\n\r\n        document.body.appendChild(mask);\r\n        document.body.appendChild(pop);\r\n    }\r\n    setNode();\r\n\r\n    // 计算弹出层的位置\r\n    var resize = function(){\r\n        pop.style.top = (document.documentElement.clientHeight - pop.offsetHeight)/2 + \"px\";\r\n        pop.style.left = (document.documentElement.clientWidth - pop.offsetWidth)/2 + \"px\";\r\n    }\r\n\r\n    resize();\r\n\r\n    // 弹出层关闭\r\n    var close = function(){\r\n        pop.classList.remove(\"auto\");\r\n        pop.classList.add(\"close-out\");\r\n        pop.addEventListener(\"animationend\", function(){\r\n            document.body.removeChild(mask);\r\n            document.body.removeChild(pop);\r\n        })\r\n    }\r\n\r\n    window.addEventListener(\"resize\", resize)\r\n    \r\n    small_btn.addEventListener(\"click\", close);\r\n\r\n    var confirm = document.querySelectorAll(\".popup .btn\");\r\n    confirm[0].addEventListener(\"click\",options.buttons[\"确认\"]);\r\n    confirm[1].addEventListener(\"click\", close);\r\n    \r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/module/popup.js?");

/***/ })

/******/ });