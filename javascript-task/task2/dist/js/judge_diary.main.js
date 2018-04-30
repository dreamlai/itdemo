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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_diary_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/diary.scss */ \"./src/css/diary.scss\");\n/* harmony import */ var _css_diary_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_diary_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_module_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/module/popup.js */ \"./src/js/module/popup.js\");\n/* harmony import */ var _js_module_popup_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_module_popup_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_module_get_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/module/get_player.js */ \"./src/js/module/get_player.js\");\n/* harmony import */ var _js_module_get_player_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_module_get_player_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nif(!sessionStorage.getItem(\"player_state\")){\r\n    window.location.href = \"home.html\";\r\n}\r\n\r\nvar content = document.body;\r\nget_player({\r\n    main: content,\r\n    buttons: {\r\n        \"开始游戏\": function(){\r\n            window.location.href = \"record.html\";\r\n        }\r\n    }\r\n});\r\n\r\nvar close = document.querySelector(\".close\");\r\nclose.addEventListener(\"click\", function(){\r\n    popup({\r\n        \"title\": \"温馨提示\",\r\n        \"content\": \"是否要结束本轮游戏？\",\r\n        \"buttons\": {\r\n            \"确认\":function(){\r\n                window.location.href = \"home.html\";\r\n            },\r\n            \"关闭\":function(){}\r\n        }\r\n    });\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/diary.js?");

/***/ }),

/***/ "./src/js/module/get_player.js":
/*!*************************************!*\
  !*** ./src/js/module/get_player.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(window, document){\r\n    var player_state = JSON.parse(sessionStorage.getItem(\"player_state\"));\r\n    var defaults  = {};\r\n\r\n    function get_player(options) {\r\n        Object.assign(defaults, options);\r\n        if(!(this instanceof get_player))return new get_player(options);\r\n        player_state = JSON.parse(sessionStorage.getItem(\"player_state\"));\r\n        this.init();\r\n    };\r\n\r\n    get_player.prototype = {\r\n        init:function(){\r\n            for(var name in player_state ){\r\n                this.setNode(player_state[name].name, parseInt(name),player_state[name].state);\r\n            }\r\n            this.setBtn();\r\n        },\r\n        setNode: function(player_name,index,state){\r\n            var player = document.createElement(\"div\");\r\n            player.className = \"player\";\r\n\r\n            var checkbox = document.createElement(\"input\");\r\n            checkbox.type = \"radio\";\r\n            checkbox.id = index;\r\n            checkbox.name = \"check\";\r\n\r\n\r\n            var detail = document.createElement(\"div\");\r\n            detail.className = \"detail\";\r\n            detail.classList.add(state);\r\n            var label = document.createElement(\"label\");\r\n            label.setAttribute(\"for\", index);\r\n\r\n\r\n            var identity = document.createElement(\"p\");\r\n            identity.className = \"identity\";\r\n            identity.innerHTML = player_name;\r\n\r\n            var number = document.createElement(\"p\");\r\n            number.className = \"number\";\r\n            number.innerHTML = index;\r\n\r\n            detail.appendChild(identity);\r\n            detail.appendChild(number);\r\n            detail.appendChild(label);\r\n            player.appendChild(checkbox);\r\n            player.appendChild(detail);\r\n\r\n            defaults.main.querySelector(\".all-player\").appendChild(player);\r\n        },\r\n        setBtn: function(){\r\n            var btn = document.createElement(\"button\");\r\n            btn.className = \"btn game-start\";\r\n            for(var name in defaults.buttons){\r\n                btn.addEventListener(\"click\", defaults.buttons[name]);\r\n                btn.innerHTML = name;\r\n            }\r\n            defaults.main.querySelector(\"footer\").appendChild(btn);\r\n        }\r\n    };\r\n    window.get_player = get_player;\r\n}(window, document))\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/module/get_player.js?");

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