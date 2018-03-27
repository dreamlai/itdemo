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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/matching.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/matching.scss":
/*!*******************************!*\
  !*** ./src/css/matching.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/matching.scss?");

/***/ }),

/***/ "./src/js/matching.js":
/*!****************************!*\
  !*** ./src/js/matching.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_matching_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/matching.scss */ \"./src/css/matching.scss\");\n/* harmony import */ var _css_matching_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_matching_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_module_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/module/popup.js */ \"./src/js/module/popup.js\");\n/* harmony import */ var _js_module_popup_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_module_popup_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n \"use strict\";\r\nvar input_num = document.querySelector(\".input-num\"),\r\n    enter_watch = document.querySelector(\".enter-watch\"),\r\n    killer_num = document.querySelector(\".killer .num\"),\r\n    civilian_num = document.querySelector(\".civilian .num\");\r\n\r\n// 默认游戏配置\r\nconst game_config = {\r\n    game_name: sessionStorage.getItem(\"game_name\"),\r\n    player_num: 8,\r\n    killer: 2,\r\n    civilian: 6,\r\n}\r\n\r\nfunction defa(){\r\n    popup({\r\n        \"title\": \"温馨提示\",\r\n        \"content\": \"请输入正确的玩家数量！\",\r\n        \"buttons\": {\r\n            \"关闭\": function(){}\r\n        }\r\n    });\r\n    input_num.value = \"8\";\r\n}\r\n\r\n// 验证输入数字\r\nfunction check(){\r\n    var value = parseInt(input_num.value);\r\n    if(isNaN(value)){\r\n       defa()\r\n    }else if(value > 18 || value < 4){\r\n       defa()\r\n    }else{\r\n        var i = Math.round(value * 0.3);\r\n        killer_num.innerHTML = i;\r\n        civilian_num.innerHTML = value - i;\r\n        game_config.player_num = value;\r\n        game_config.killer = i;\r\n        game_config.civilian = value - i;\r\n    }\r\n}\r\n\r\ninput_num.addEventListener(\"blur\", check)\r\n\r\ninput_num.addEventListener(\"focus\", function(){\r\n    this.select();\r\n\r\n    window.addEventListener(\"keydown\", function(event){\r\n        if(event.keyCode == 13 ){\r\n            input_num.blur();\r\n        }\r\n    })\r\n    \r\n})\r\n\r\n// 确认输入完成，传值\r\nenter_watch.addEventListener(\"click\",function(){\r\n    check();\r\n    sessionStorage.setItem(\"game\", JSON.stringify(game_config));\r\n    window.location.href = \"identity.html\";\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/matching.js?");

/***/ }),

/***/ "./src/js/module/popup.js":
/*!********************************!*\
  !*** ./src/js/module/popup.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(window, document){\r\n    var pop, small_btn, large_btn, mask, dialog;\r\n    var isOn = false;\r\n\r\n    var defaultSettings  = {\r\n    };\r\n\r\n    function popup(options) {\r\n        Object.assign(defaultSettings, options);\r\n        if(!(this instanceof popup))return new popup(options);\r\n        this.init();\r\n    };\r\n\r\n    popup.prototype = {\r\n        init:function(){\r\n            // 主div\r\n            pop = document.createElement(\"div\");\r\n            pop.className = \"popup auto\";\r\n            // 头\r\n            var header = document.createElement(\"div\");\r\n            header.className = \"popup-header\";\r\n            var title = document.createElement(\"p\");\r\n            title.className = \"popup-title\";\r\n            title.innerHTML = defaultSettings.title;\r\n            small_btn = document.createElement(\"a\");\r\n            small_btn.className = \"small_btn\";\r\n            small_btn.innerHTML = \"X\";\r\n            small_btn.addEventListener(\"click\", this.close);\r\n            header.appendChild(title);\r\n            header.appendChild(small_btn);\r\n            // 主内容\r\n            var main = document.createElement(\"div\");\r\n            main.className = \"popup-main\";\r\n            var content = document.createElement(\"p\");\r\n            content.className = \"popup-content\";\r\n            content.innerHTML = defaultSettings.content;\r\n            main.appendChild(content);\r\n            // 脚\r\n            var footer = document.createElement(\"div\");\r\n            footer.className = \"popup-footer\";\r\n            for(var name in defaultSettings.buttons){\r\n                large_btn = document.createElement(\"a\");\r\n                large_btn.className = \"btn\";\r\n                large_btn.innerHTML = name;\r\n                footer.appendChild(large_btn);\r\n                if(name == \"确认\"){\r\n                    large_btn.addEventListener(\"click\",defaultSettings.buttons[name]);\r\n                }else{\r\n                    large_btn.addEventListener(\"click\", this.close);\r\n                }\r\n            };\r\n            \r\n            pop.appendChild(header);\r\n            pop.appendChild(main);\r\n            pop.appendChild(footer);\r\n\r\n            // 遮罩层\r\n            mask = document.createElement(\"div\");\r\n            mask.className = \"mask\";\r\n\r\n            document.body.appendChild(mask);\r\n            document.body.appendChild(pop);\r\n\r\n            this.resize();\r\n            this.event();\r\n        },\r\n        resize: function(){\r\n            pop.style.top = (document.documentElement.clientHeight - pop.offsetHeight)/2 + \"px\";\r\n            pop.style.left = (document.documentElement.clientWidth - pop.offsetWidth)/2 + \"px\";\r\n        },\r\n        close: function(){\r\n            pop.classList.remove(\"auto\");\r\n            pop.classList.add(\"close-out\");\r\n            pop.addEventListener(\"animationend\", function(){\r\n                document.body.removeChild(mask);\r\n                document.body.removeChild(pop);\r\n            })\r\n        },\r\n        event:function(){\r\n\r\n            window.addEventListener(\"resize\", this.resize)\r\n            mask.addEventListener(\"click\", this.close);\r\n\r\n        },\r\n    };\r\n\r\n    function tips(options) {\r\n        Object.assign(defaultSettings, options);\r\n        if(!(this instanceof tips))return new tips(options);\r\n        if(!isOn){\r\n            this.init();\r\n        }\r\n    };\r\n    tips.prototype = {\r\n        init:function(){\r\n            isOn = true;\r\n            dialog = document.createElement(\"div\");\r\n            dialog.className = \"tips auto\";\r\n            dialog.innerHTML = defaultSettings.content;\r\n            \r\n            document.body.appendChild(dialog);\r\n\r\n            this.resize();\r\n            this.event();\r\n        },\r\n        resize: function(){\r\n            dialog.style.top = (document.documentElement.clientHeight - dialog.offsetHeight)/2 + \"px\";\r\n            dialog.style.left = (document.documentElement.clientWidth - dialog.offsetWidth)/2 + \"px\";\r\n        },\r\n        close: function(){\r\n            dialog.classList.remove(\"auto\");\r\n            dialog.classList.add(\"close-out\");\r\n            dialog.addEventListener(\"animationend\", function(){\r\n                document.body.removeChild(dialog);\r\n                isOn = false;\r\n            })\r\n        },\r\n        event: function(){\r\n            var time = setTimeout( this.close, 1500)\r\n        }\r\n    }\r\n\r\n    window.popup = popup;\r\n    window.tips = tips;\r\n}(window, document))\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/module/popup.js?");

/***/ })

/******/ });