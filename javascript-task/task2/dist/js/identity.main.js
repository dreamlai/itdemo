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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/identity.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/identity.scss":
/*!*******************************!*\
  !*** ./src/css/identity.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/identity.scss?");

/***/ }),

/***/ "./src/js/identity.js":
/*!****************************!*\
  !*** ./src/js/identity.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_identity_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/identity.scss */ \"./src/css/identity.scss\");\n/* harmony import */ var _css_identity_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_identity_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_module_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/module/popup.js */ \"./src/js/module/popup.js\");\n\r\n\r\n\r\n// 判断是否有游戏配置\r\nif(!sessionStorage.getItem(\"game\")){\r\n    window.location.href = \"matching.html\";\r\n}\r\n\r\n// 标签节点获取\r\nvar iden_card = document.querySelector(\".iden-card\"),\r\n    enter_btn = document.querySelector(\".enter-btn\"),\r\n    cover = document.querySelector(\".cover\"),\r\n    content = document.querySelector(\".content\"),\r\n    iden_name = document.querySelector(\".iden-name\"),\r\n    num = document.querySelector(\".order-num\"),\r\n    end = document.querySelector(\".close\"),\r\n    i = 1;\r\n\r\n// 提取游戏配置\r\nvar game_config = JSON.parse(sessionStorage.getItem(\"game\"));\r\n\r\nvar rand = [];\r\nvar player_arr = [];\r\nvar len = game_config.player_num;\r\n\r\n// 取玩家数量的随机数\r\nfunction random(){\r\n    rand = [];\r\n    while(rand.length < len){\r\n        var isSame = true;\r\n        var num = Math.floor(Math.random()* len);\r\n        if(rand.length == 0){\r\n            rand.push(num);\r\n        }\r\n        for(var i in rand){\r\n            if(num == rand[i]){\r\n                isSame = false;\r\n            }\r\n        }\r\n        if(isSame){\r\n            rand.push(num);\r\n        }\r\n    }\r\n}\r\n\r\n// 将玩家按照随机数安插到数组\r\nfunction matching(){\r\n    var k_num = game_config.killer;\r\n    var c_num = game_config.civilian;\r\n    for (var i = 0; i < k_num; i++) {\r\n        player_arr[rand[i]] = \"杀手\";\r\n    }\r\n    for (var i = 0; i < c_num; i++) {\r\n        player_arr[rand[i + k_num]] = \"村民\";\r\n    }\r\n}\r\n\r\nrandom();\r\nmatching();\r\n\r\nvar isSee = false;\r\n// 进行身份传递\r\nenter_btn.addEventListener(\"click\", function(){\r\n    if(i > len){\r\n        sessionStorage.setItem(\"all-player\", player_arr );\r\n        window.location.href = \"judge-diary.html\";\r\n    }else if(!isSee){\r\n        iden_card.classList.add(\"rotate\");\r\n        cover.style.opacity = \"0\";\r\n        content.style.opacity = \"1\";\r\n        iden_name.innerHTML = player_arr[i-1];\r\n        if(i == len){\r\n            enter_btn.innerHTML = \"法官查看\";\r\n        }else{\r\n            enter_btn.innerHTML = \"隐藏并传递给\" + (i + 1) + \"号\";\r\n        }\r\n        isSee = true;\r\n        i++;\r\n    }else{\r\n        iden_card.classList.add(\"rotate\");\r\n        cover.style.opacity = \"1\";\r\n        content.style.opacity = \"0\";\r\n        enter_btn.innerHTML = \"查看\" + i + \"号身份\";\r\n        num.innerHTML = i;\r\n        isSee = false;\r\n    }\r\n})\r\n\r\n// 监听animation结束\r\niden_card.addEventListener(\"animationend\", function(){\r\n    iden_card.classList.remove(\"rotate\");\r\n})\r\n\r\n// 退出提示\r\nend.addEventListener(\"click\", function(){\r\n    Object(_js_module_popup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n        \"title\": \"温馨提示\",\r\n        \"content\": \"是否要结束本轮游戏？\",\r\n        \"buttons\": {\r\n            \"确认\":function(){\r\n                window.location.href = \"home.html\";\r\n            },\r\n            \"关闭\":function(){\r\n                \r\n            }\r\n        }\r\n    });\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/identity.js?");

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