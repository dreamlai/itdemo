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
/******/ 	__webpack_require__.p = "/";
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

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/identity.js":
/*!****************************!*\
  !*** ./src/js/identity.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_identity_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/identity.scss */ "./src/css/identity.scss");
/* harmony import */ var _css_identity_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_identity_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_module_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/module/popup.js */ "./src/js/module/popup.js");



// 判断是否有游戏配置
if(!sessionStorage.getItem("game")){
    window.location.href = "matching.html";
}

// 标签节点获取
var iden_card = document.querySelector(".iden-card"),
    enter_btn = document.querySelector(".enter-btn"),
    cover = document.querySelector(".cover"),
    content = document.querySelector(".content"),
    iden_name = document.querySelector(".iden-name"),
    num = document.querySelector(".order-num"),
    end = document.querySelector(".close"),
    i = 1;

// 提取游戏配置
var game_config = JSON.parse(sessionStorage.getItem("game"));

var rand = [];
var player_arr = [];
var len = game_config.player_num;

// 取玩家数量的随机数
function random(){
    rand = [];
    while(rand.length < len){
        var isSame = true;
        var num = Math.floor(Math.random()* len);
        if(rand.length == 0){
            rand.push(num);
        }
        for(var i in rand){
            if(num == rand[i]){
                isSame = false;
            }
        }
        if(isSame){
            rand.push(num);
        }
    }
}

// 将玩家按照随机数安插到数组
function matching(){
    var k_num = game_config.killer;
    var c_num = game_config.civilian;
    for (var i = 0; i < k_num; i++) {
        player_arr[rand[i]] = "杀手";
    }
    for (var i = 0; i < c_num; i++) {
        player_arr[rand[i + k_num]] = "村民";
    }
}

random();
matching();

var isSee = false;
// 进行身份传递
enter_btn.addEventListener("click", function(){
    if(i > len){
        sessionStorage.setItem("all-player", player_arr );
        window.location.href = "judge-diary.html";
    }else if(!isSee){
        iden_card.classList.add("rotate");
        cover.style.opacity = "0";
        content.style.opacity = "1";
        iden_name.innerHTML = player_arr[i-1];
        if(i == len){
            enter_btn.innerHTML = "法官查看";
        }else{
            enter_btn.innerHTML = "隐藏并传递给" + (i + 1) + "号";
        }
        isSee = true;
        i++;
    }else{
        iden_card.classList.add("rotate");
        cover.style.opacity = "1";
        content.style.opacity = "0";
        enter_btn.innerHTML = "查看" + i + "号身份";
        num.innerHTML = i;
        isSee = false;
    }
})

// 监听animation结束
iden_card.addEventListener("animationend", function(){
    iden_card.classList.remove("rotate");
})

// 退出提示
end.addEventListener("click", function(){
    Object(_js_module_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
        "title": "温馨提示",
        "content": "是否要结束本轮游戏？",
        "buttons": {
            "确认":function(){
                window.location.href = "home.html";
            },
            "关闭":function(){
                
            }
        }
    });
});




/***/ }),

/***/ "./src/js/module/popup.js":
/*!********************************!*\
  !*** ./src/js/module/popup.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return popup; });
function popup(json){

    const options = json;

    var pop, small_btn, large_btn, mask;

    // 创建弹出层元素
    var setNode = function(){
        // 主div
        pop = document.createElement("div");
        pop.className = "popup auto";
        // 头
        var header = document.createElement("div");
        header.className = "popup-header";
        var title = document.createElement("p");
        title.className = "popup-title";
        title.innerHTML = options.title;
        small_btn = document.createElement("a");
        small_btn.className = "small_btn";
        small_btn.innerHTML = "X";
        header.appendChild(title);
        header.appendChild(small_btn);
        // 主内容
        var main = document.createElement("div");
        main.className = "popup-main";
        var content = document.createElement("p");
        content.className = "popup-content";
        content.innerHTML = options.content;
        main.appendChild(content);
        // 脚
        var footer = document.createElement("div");
        footer.className = "popup-footer";
        for(var name in options.buttons){
            (function(name){
                large_btn = document.createElement("a");
                large_btn.className = "btn";
                large_btn.innerHTML = name;
                footer.appendChild(large_btn);
            })(name);
        };
        
        pop.appendChild(header);
        pop.appendChild(main);
        pop.appendChild(footer);

        // 遮罩层
        mask = document.createElement("div");
        mask.className = "mask";

        document.body.appendChild(mask);
        document.body.appendChild(pop);
    }
    setNode();

    // 计算弹出层的位置
    var resize = function(){
        pop.style.top = (document.documentElement.clientHeight - pop.offsetHeight)/2 + "px";
        pop.style.left = (document.documentElement.clientWidth - pop.offsetWidth)/2 + "px";
    }

    resize();

    // 弹出层关闭
    var close = function(){
        pop.classList.remove("auto");
        pop.classList.add("close-out");
        pop.addEventListener("animationend", function(){
            document.body.removeChild(mask);
            document.body.removeChild(pop);
        })
    }

    window.addEventListener("resize", resize)
    
    small_btn.addEventListener("click", close);

    var confirm = document.querySelectorAll(".popup .btn");
    confirm[0].addEventListener("click",options.buttons["确认"]);
    confirm[1].addEventListener("click", close);
    
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pZGVudGl0eS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlL3BvcHVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUEseUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQSxtQkFBbUIsV0FBVztBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNHRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoianMvaWRlbnRpdHkubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaWRlbnRpdHkuanNcIik7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCBcIi4uL2Nzcy9pZGVudGl0eS5zY3NzXCI7XHJcbmltcG9ydCBwb3B1cCBmcm9tICcuLi9qcy9tb2R1bGUvcG9wdXAuanMnO1xyXG5cclxuLy8g5Yik5pat5piv5ZCm5pyJ5ri45oiP6YWN572uXHJcbmlmKCFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiZ2FtZVwiKSl7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwibWF0Y2hpbmcuaHRtbFwiO1xyXG59XHJcblxyXG4vLyDmoIfnrb7oioLngrnojrflj5ZcclxudmFyIGlkZW5fY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWRlbi1jYXJkXCIpLFxyXG4gICAgZW50ZXJfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbnRlci1idG5cIiksXHJcbiAgICBjb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY292ZXJcIiksXHJcbiAgICBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLFxyXG4gICAgaWRlbl9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pZGVuLW5hbWVcIiksXHJcbiAgICBudW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9yZGVyLW51bVwiKSxcclxuICAgIGVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIiksXHJcbiAgICBpID0gMTtcclxuXHJcbi8vIOaPkOWPlua4uOaIj+mFjee9rlxyXG52YXIgZ2FtZV9jb25maWcgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJnYW1lXCIpKTtcclxuXHJcbnZhciByYW5kID0gW107XHJcbnZhciBwbGF5ZXJfYXJyID0gW107XHJcbnZhciBsZW4gPSBnYW1lX2NvbmZpZy5wbGF5ZXJfbnVtO1xyXG5cclxuLy8g5Y+W546p5a625pWw6YeP55qE6ZqP5py65pWwXHJcbmZ1bmN0aW9uIHJhbmRvbSgpe1xyXG4gICAgcmFuZCA9IFtdO1xyXG4gICAgd2hpbGUocmFuZC5sZW5ndGggPCBsZW4pe1xyXG4gICAgICAgIHZhciBpc1NhbWUgPSB0cnVlO1xyXG4gICAgICAgIHZhciBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqIGxlbik7XHJcbiAgICAgICAgaWYocmFuZC5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgIHJhbmQucHVzaChudW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IodmFyIGkgaW4gcmFuZCl7XHJcbiAgICAgICAgICAgIGlmKG51bSA9PSByYW5kW2ldKXtcclxuICAgICAgICAgICAgICAgIGlzU2FtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlzU2FtZSl7XHJcbiAgICAgICAgICAgIHJhbmQucHVzaChudW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8g5bCG546p5a625oyJ54Wn6ZqP5py65pWw5a6J5o+S5Yiw5pWw57uEXHJcbmZ1bmN0aW9uIG1hdGNoaW5nKCl7XHJcbiAgICB2YXIga19udW0gPSBnYW1lX2NvbmZpZy5raWxsZXI7XHJcbiAgICB2YXIgY19udW0gPSBnYW1lX2NvbmZpZy5jaXZpbGlhbjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga19udW07IGkrKykge1xyXG4gICAgICAgIHBsYXllcl9hcnJbcmFuZFtpXV0gPSBcIuadgOaJi1wiO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjX251bTsgaSsrKSB7XHJcbiAgICAgICAgcGxheWVyX2FycltyYW5kW2kgKyBrX251bV1dID0gXCLmnZHmsJFcIjtcclxuICAgIH1cclxufVxyXG5cclxucmFuZG9tKCk7XHJcbm1hdGNoaW5nKCk7XHJcblxyXG52YXIgaXNTZWUgPSBmYWxzZTtcclxuLy8g6L+b6KGM6Lqr5Lu95Lyg6YCSXHJcbmVudGVyX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIGlmKGkgPiBsZW4pe1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJhbGwtcGxheWVyXCIsIHBsYXllcl9hcnIgKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwianVkZ2UtZGlhcnkuaHRtbFwiO1xyXG4gICAgfWVsc2UgaWYoIWlzU2VlKXtcclxuICAgICAgICBpZGVuX2NhcmQuY2xhc3NMaXN0LmFkZChcInJvdGF0ZVwiKTtcclxuICAgICAgICBjb3Zlci5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICAgICAgY29udGVudC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgaWRlbl9uYW1lLmlubmVySFRNTCA9IHBsYXllcl9hcnJbaS0xXTtcclxuICAgICAgICBpZihpID09IGxlbil7XHJcbiAgICAgICAgICAgIGVudGVyX2J0bi5pbm5lckhUTUwgPSBcIuazleWumOafpeeci1wiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBlbnRlcl9idG4uaW5uZXJIVE1MID0gXCLpmpDol4/lubbkvKDpgJLnu5lcIiArIChpICsgMSkgKyBcIuWPt1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc1NlZSA9IHRydWU7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgaWRlbl9jYXJkLmNsYXNzTGlzdC5hZGQoXCJyb3RhdGVcIik7XHJcbiAgICAgICAgY292ZXIuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xyXG4gICAgICAgIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgIGVudGVyX2J0bi5pbm5lckhUTUwgPSBcIuafpeeci1wiICsgaSArIFwi5Y+36Lqr5Lu9XCI7XHJcbiAgICAgICAgbnVtLmlubmVySFRNTCA9IGk7XHJcbiAgICAgICAgaXNTZWUgPSBmYWxzZTtcclxuICAgIH1cclxufSlcclxuXHJcbi8vIOebkeWQrGFuaW1hdGlvbue7k+adn1xyXG5pZGVuX2NhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbigpe1xyXG4gICAgaWRlbl9jYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJyb3RhdGVcIik7XHJcbn0pXHJcblxyXG4vLyDpgIDlh7rmj5DnpLpcclxuZW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgcG9wdXAoe1xyXG4gICAgICAgIFwidGl0bGVcIjogXCLmuKnppqjmj5DnpLpcIixcclxuICAgICAgICBcImNvbnRlbnRcIjogXCLmmK/lkKbopoHnu5PmnZ/mnKzova7muLjmiI/vvJ9cIixcclxuICAgICAgICBcImJ1dHRvbnNcIjoge1xyXG4gICAgICAgICAgICBcIuehruiupFwiOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaG9tZS5odG1sXCI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwi5YWz6ZetXCI6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVwKGpzb24pe1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSBqc29uO1xyXG5cclxuICAgIHZhciBwb3AsIHNtYWxsX2J0biwgbGFyZ2VfYnRuLCBtYXNrO1xyXG5cclxuICAgIC8vIOWIm+W7uuW8ueWHuuWxguWFg+e0oFxyXG4gICAgdmFyIHNldE5vZGUgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vIOS4u2RpdlxyXG4gICAgICAgIHBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcG9wLmNsYXNzTmFtZSA9IFwicG9wdXAgYXV0b1wiO1xyXG4gICAgICAgIC8vIOWktFxyXG4gICAgICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGhlYWRlci5jbGFzc05hbWUgPSBcInBvcHVwLWhlYWRlclwiO1xyXG4gICAgICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwicG9wdXAtdGl0bGVcIjtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBvcHRpb25zLnRpdGxlO1xyXG4gICAgICAgIHNtYWxsX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIHNtYWxsX2J0bi5jbGFzc05hbWUgPSBcInNtYWxsX2J0blwiO1xyXG4gICAgICAgIHNtYWxsX2J0bi5pbm5lckhUTUwgPSBcIlhcIjtcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChzbWFsbF9idG4pO1xyXG4gICAgICAgIC8vIOS4u+WGheWuuVxyXG4gICAgICAgIHZhciBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBtYWluLmNsYXNzTmFtZSA9IFwicG9wdXAtbWFpblwiO1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29udGVudC5jbGFzc05hbWUgPSBcInBvcHVwLWNvbnRlbnRcIjtcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IG9wdGlvbnMuY29udGVudDtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgICAgIC8vIOiEmlxyXG4gICAgICAgIHZhciBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc05hbWUgPSBcInBvcHVwLWZvb3RlclwiO1xyXG4gICAgICAgIGZvcih2YXIgbmFtZSBpbiBvcHRpb25zLmJ1dHRvbnMpe1xyXG4gICAgICAgICAgICAoZnVuY3Rpb24obmFtZSl7XHJcbiAgICAgICAgICAgICAgICBsYXJnZV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgICAgICAgIGxhcmdlX2J0bi5jbGFzc05hbWUgPSBcImJ0blwiO1xyXG4gICAgICAgICAgICAgICAgbGFyZ2VfYnRuLmlubmVySFRNTCA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQobGFyZ2VfYnRuKTtcclxuICAgICAgICAgICAgfSkobmFtZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBwb3AuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgICBwb3AuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgICAgICAgcG9wLmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG4gICAgICAgIC8vIOmBrue9qeWxglxyXG4gICAgICAgIG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG1hc2suY2xhc3NOYW1lID0gXCJtYXNrXCI7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFzayk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3ApO1xyXG4gICAgfVxyXG4gICAgc2V0Tm9kZSgpO1xyXG5cclxuICAgIC8vIOiuoeeul+W8ueWHuuWxgueahOS9jee9rlxyXG4gICAgdmFyIHJlc2l6ZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcG9wLnN0eWxlLnRvcCA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gcG9wLm9mZnNldEhlaWdodCkvMiArIFwicHhcIjtcclxuICAgICAgICBwb3Auc3R5bGUubGVmdCA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSBwb3Aub2Zmc2V0V2lkdGgpLzIgKyBcInB4XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplKCk7XHJcblxyXG4gICAgLy8g5by55Ye65bGC5YWz6ZetXHJcbiAgICB2YXIgY2xvc2UgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHBvcC5jbGFzc0xpc3QucmVtb3ZlKFwiYXV0b1wiKTtcclxuICAgICAgICBwb3AuY2xhc3NMaXN0LmFkZChcImNsb3NlLW91dFwiKTtcclxuICAgICAgICBwb3AuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1hc2spO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHBvcCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemUpXHJcbiAgICBcclxuICAgIHNtYWxsX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xyXG5cclxuICAgIHZhciBjb25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cCAuYnRuXCIpO1xyXG4gICAgY29uZmlybVswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixvcHRpb25zLmJ1dHRvbnNbXCLnoa7orqRcIl0pO1xyXG4gICAgY29uZmlybVsxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xyXG4gICAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==