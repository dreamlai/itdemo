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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/home.scss":
/*!***************************!*\
  !*** ./src/css/home.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/home.scss?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/home.scss */ \"./src/css/home.scss\");\n/* harmony import */ var _css_home_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_home_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nvar item = document.querySelectorAll(\".game-list .item\"),\r\n\r\n    a_target = document.querySelectorAll(\".game-list a\"),\r\n\r\n    icon_btn = document.querySelectorAll(\".icon-nav .item\"),\r\n    next = document.querySelector(\".next-ver\"),\r\n    prev = document.querySelector(\".prev-ver\"),\r\n\r\n    navbar_btn = document.querySelector(\".navbar-toggle\"),\r\n    main_cont = document.querySelector(\".content-wrap\"),\r\n    more_cont = document.querySelector(\".content-more\"),\r\n    main = document.querySelector(\".content\"),\r\n\r\n    historty_tips = document.querySelector(\".ver-history .tips\"),\r\n    game_title = document.querySelector(\".ver-title\"),\r\n    game_name = [\"杀人游戏\",\"捉鬼游戏\",\"游戏3\",\"游戏4\"],\r\n    i = 0,\r\n    isOn = false,\r\n    len = item.length;\r\n\r\n// 判断是否有历史记录\r\nif(sessionStorage.getItem(\"game_name\")){\r\n    historty_tips.innerHTML = \"上次游戏：\" + sessionStorage.getItem(\"game_name\");\r\n}\r\n\r\n// 游戏项目切换\r\nfunction slide(num) {\r\n    for(var j = 0; j < len; j++) {\r\n        item[j].className = \"item\";\r\n        icon_btn[j].className = \"item\";\r\n    }\r\n    item[num].className += \" active\";\r\n    icon_btn[num].className += \" active\";\r\n    game_title.innerHTML = game_name[num];\r\n}\r\n\r\n// 下一个游戏项目\r\nnext.addEventListener(\"click\", function(){\r\n    i >= len - 1 ? i = 0 : i++;\r\n    slide(i);\r\n})\r\n\r\n// 上一个游戏项目\r\nprev.addEventListener(\"click\", function(){\r\n    i == 0 ? i = 3 : i--;\r\n    slide(i);\r\n})\r\n\r\n// 游戏项目小图标切换\r\nfor(var x = 0; x < len; x++){\r\n    icon_btn[i].index = x;\r\n    (function(x){\r\n        icon_btn[x].addEventListener(\"click\", function(){\r\n            slide(x);\r\n        })\r\n    })(x)\r\n}\r\n\r\n// 添加历史记录\r\nfor (var o = 0; o < a_target.length; o++){\r\n    a_target[o].addEventListener(\"click\", function(){\r\n        sessionStorage.setItem(\"game_name\", game_title.innerHTML);\r\n    })\r\n}\r\n\r\nvar mask = document.createElement(\"div\");\r\nmask.classList.add(\"mask\");\r\n\r\n// 更多内容展开收缩\r\nfunction navToggle(){\r\n    if(!isOn){\r\n        main_cont.classList.add(\"on\");\r\n        more_cont.classList.add(\"show\");\r\n        main_cont.appendChild(mask);\r\n        isOn = true;\r\n    }else{\r\n        main_cont.classList.remove(\"on\");\r\n        more_cont.classList.remove(\"show\");\r\n        isOn = false;\r\n    }\r\n}\r\n\r\nnavbar_btn.addEventListener(\"click\", navToggle)\r\n\r\n// 跟多内容展开后，点击主内容任何地方后收缩\r\nmask.addEventListener(\"click\", function(){\r\n    main_cont.className = \"content-wrap\";\r\n    main_cont.removeChild(mask);\r\n    more_cont.className = \"content-more\";\r\n    isOn = false;\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/home.js?");

/***/ })

/******/ });