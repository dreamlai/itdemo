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

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/matching.js":
/*!****************************!*\
  !*** ./src/js/matching.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_matching_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/matching.scss */ "./src/css/matching.scss");
/* harmony import */ var _css_matching_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_matching_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_module_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/module/popup.js */ "./src/js/module/popup.js");



 "use strict";

var input_num = document.querySelector(".input-num"),
    enter_watch = document.querySelector(".enter-watch"),
    killer_num = document.querySelector(".killer .num"),
    civilian_num = document.querySelector(".civilian .num");

// 默认游戏配置
const game_config = {
    game_name: sessionStorage.getItem("game_name"),
    player_num: 8,
    killer: 2,
    civilian: 6,
}

function defa(){
    Object(_js_module_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
        "title": "温馨提示",
        "content": "请输入正确的玩家数量！",
        "buttons": {
            "关闭":function(){
                
            }
        }
    });
    input_num.value = "8";
}

// 验证输入数字
function check(){
    var value = parseInt(input_num.value);
    if(isNaN(value)){
       defa()
    }else if(value > 18 || value < 4){
       defa()
    }else{
        var i = Math.round(value * 0.3);
        killer_num.innerHTML = i;
        civilian_num.innerHTML = value - i;
        game_config.player_num = value;
        game_config.killer = i;
        game_config.civilian = value - i;
    }
}

input_num.addEventListener("blur", check)

input_num.addEventListener("focus", function(){
    this.select();

    window.addEventListener("keydown", function(event){
        if(event.keyCode == 13 ){
            input_num.blur();
        }
    })
    
})

// 确认输入完成，传值
enter_watch.addEventListener("click",function(){
    check();
    sessionStorage.setItem("game", JSON.stringify(game_config));
    window.location.href = "identity.html";
})




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYXRjaGluZy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYXRjaGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlL3BvcHVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUEseUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJqcy9tYXRjaGluZy5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9tYXRjaGluZy5qc1wiKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IFwiLi4vY3NzL21hdGNoaW5nLnNjc3NcIjtcclxuaW1wb3J0IHBvcHVwIGZyb20gJy4uL2pzL21vZHVsZS9wb3B1cC5qcyc7XHJcblxyXG4gXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgaW5wdXRfbnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1udW1cIiksXHJcbiAgICBlbnRlcl93YXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW50ZXItd2F0Y2hcIiksXHJcbiAgICBraWxsZXJfbnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5raWxsZXIgLm51bVwiKSxcclxuICAgIGNpdmlsaWFuX251bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l2aWxpYW4gLm51bVwiKTtcclxuXHJcbi8vIOm7mOiupOa4uOaIj+mFjee9rlxyXG5jb25zdCBnYW1lX2NvbmZpZyA9IHtcclxuICAgIGdhbWVfbmFtZTogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImdhbWVfbmFtZVwiKSxcclxuICAgIHBsYXllcl9udW06IDgsXHJcbiAgICBraWxsZXI6IDIsXHJcbiAgICBjaXZpbGlhbjogNixcclxufVxyXG5cclxuZnVuY3Rpb24gZGVmYSgpe1xyXG4gICAgcG9wdXAoe1xyXG4gICAgICAgIFwidGl0bGVcIjogXCLmuKnppqjmj5DnpLpcIixcclxuICAgICAgICBcImNvbnRlbnRcIjogXCLor7fovpPlhaXmraPnoa7nmoTnjqnlrrbmlbDph4/vvIFcIixcclxuICAgICAgICBcImJ1dHRvbnNcIjoge1xyXG4gICAgICAgICAgICBcIuWFs+mXrVwiOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaW5wdXRfbnVtLnZhbHVlID0gXCI4XCI7XHJcbn1cclxuXHJcbi8vIOmqjOivgei+k+WFpeaVsOWtl1xyXG5mdW5jdGlvbiBjaGVjaygpe1xyXG4gICAgdmFyIHZhbHVlID0gcGFyc2VJbnQoaW5wdXRfbnVtLnZhbHVlKTtcclxuICAgIGlmKGlzTmFOKHZhbHVlKSl7XHJcbiAgICAgICBkZWZhKClcclxuICAgIH1lbHNlIGlmKHZhbHVlID4gMTggfHwgdmFsdWUgPCA0KXtcclxuICAgICAgIGRlZmEoKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdmFyIGkgPSBNYXRoLnJvdW5kKHZhbHVlICogMC4zKTtcclxuICAgICAgICBraWxsZXJfbnVtLmlubmVySFRNTCA9IGk7XHJcbiAgICAgICAgY2l2aWxpYW5fbnVtLmlubmVySFRNTCA9IHZhbHVlIC0gaTtcclxuICAgICAgICBnYW1lX2NvbmZpZy5wbGF5ZXJfbnVtID0gdmFsdWU7XHJcbiAgICAgICAgZ2FtZV9jb25maWcua2lsbGVyID0gaTtcclxuICAgICAgICBnYW1lX2NvbmZpZy5jaXZpbGlhbiA9IHZhbHVlIC0gaTtcclxuICAgIH1cclxufVxyXG5cclxuaW5wdXRfbnVtLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGNoZWNrKVxyXG5cclxuaW5wdXRfbnVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmdW5jdGlvbigpe1xyXG4gICAgdGhpcy5zZWxlY3QoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gMTMgKXtcclxuICAgICAgICAgICAgaW5wdXRfbnVtLmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbn0pXHJcblxyXG4vLyDnoa7orqTovpPlhaXlrozmiJDvvIzkvKDlgLxcclxuZW50ZXJfd2F0Y2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcclxuICAgIGNoZWNrKCk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZVwiLCBKU09OLnN0cmluZ2lmeShnYW1lX2NvbmZpZykpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImlkZW50aXR5Lmh0bWxcIjtcclxufSlcclxuXHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1cChqc29uKXtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ganNvbjtcclxuXHJcbiAgICB2YXIgcG9wLCBzbWFsbF9idG4sIGxhcmdlX2J0biwgbWFzaztcclxuXHJcbiAgICAvLyDliJvlu7rlvLnlh7rlsYLlhYPntKBcclxuICAgIHZhciBzZXROb2RlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyDkuLtkaXZcclxuICAgICAgICBwb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHBvcC5jbGFzc05hbWUgPSBcInBvcHVwIGF1dG9cIjtcclxuICAgICAgICAvLyDlpLRcclxuICAgICAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NOYW1lID0gXCJwb3B1cC1oZWFkZXJcIjtcclxuICAgICAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICB0aXRsZS5jbGFzc05hbWUgPSBcInBvcHVwLXRpdGxlXCI7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gb3B0aW9ucy50aXRsZTtcclxuICAgICAgICBzbWFsbF9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBzbWFsbF9idG4uY2xhc3NOYW1lID0gXCJzbWFsbF9idG5cIjtcclxuICAgICAgICBzbWFsbF9idG4uaW5uZXJIVE1MID0gXCJYXCI7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc21hbGxfYnRuKTtcclxuICAgICAgICAvLyDkuLvlhoXlrrlcclxuICAgICAgICB2YXIgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbWFpbi5jbGFzc05hbWUgPSBcInBvcHVwLW1haW5cIjtcclxuICAgICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJwb3B1cC1jb250ZW50XCI7XHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBvcHRpb25zLmNvbnRlbnQ7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgICAgICAvLyDohJpcclxuICAgICAgICB2YXIgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBmb290ZXIuY2xhc3NOYW1lID0gXCJwb3B1cC1mb290ZXJcIjtcclxuICAgICAgICBmb3IodmFyIG5hbWUgaW4gb3B0aW9ucy5idXR0b25zKXtcclxuICAgICAgICAgICAgKGZ1bmN0aW9uKG5hbWUpe1xyXG4gICAgICAgICAgICAgICAgbGFyZ2VfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgICAgICBsYXJnZV9idG4uY2xhc3NOYW1lID0gXCJidG5cIjtcclxuICAgICAgICAgICAgICAgIGxhcmdlX2J0bi5pbm5lckhUTUwgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGxhcmdlX2J0bik7XHJcbiAgICAgICAgICAgIH0pKG5hbWUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9wLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAgICAgcG9wLmFwcGVuZENoaWxkKG1haW4pO1xyXG4gICAgICAgIHBvcC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG5cclxuICAgICAgICAvLyDpga7nvanlsYJcclxuICAgICAgICBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBtYXNrLmNsYXNzTmFtZSA9IFwibWFza1wiO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1hc2spO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wKTtcclxuICAgIH1cclxuICAgIHNldE5vZGUoKTtcclxuXHJcbiAgICAvLyDorqHnrpflvLnlh7rlsYLnmoTkvY3nva5cclxuICAgIHZhciByZXNpemUgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHBvcC5zdHlsZS50b3AgPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtIHBvcC5vZmZzZXRIZWlnaHQpLzIgKyBcInB4XCI7XHJcbiAgICAgICAgcG9wLnN0eWxlLmxlZnQgPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gcG9wLm9mZnNldFdpZHRoKS8yICsgXCJweFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2l6ZSgpO1xyXG5cclxuICAgIC8vIOW8ueWHuuWxguWFs+mXrVxyXG4gICAgdmFyIGNsb3NlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBwb3AuY2xhc3NMaXN0LnJlbW92ZShcImF1dG9cIik7XHJcbiAgICAgICAgcG9wLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1vdXRcIik7XHJcbiAgICAgICAgcG9wLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtYXNrKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwb3ApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplKVxyXG4gICAgXHJcbiAgICBzbWFsbF9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcclxuXHJcbiAgICB2YXIgY29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXAgLmJ0blwiKTtcclxuICAgIGNvbmZpcm1bMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsb3B0aW9ucy5idXR0b25zW1wi56Gu6K6kXCJdKTtcclxuICAgIGNvbmZpcm1bMV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcclxuICAgIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=