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

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/diary.js":
/*!*************************!*\
  !*** ./src/js/diary.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_diary_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/diary.scss */ "./src/css/diary.scss");
/* harmony import */ var _css_diary_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_diary_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_module_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/module/popup.js */ "./src/js/module/popup.js");



if(!sessionStorage.getItem("all-player")){
    window.location.href = "identity.html";
}

var close = document.querySelector(".close");

var game_start = document.querySelector(".game-start");

var content = document.querySelector(".all-player");
var all_player = sessionStorage.getItem("all-player").split(",");

close.addEventListener("click", function(){
    Object(_js_module_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
        "title": "温馨提示",
        "content": "是否要结束本轮游戏？",
        "buttons": {
            "确认":function(){
                window.location.href = "identity.html";
            },
            "关闭":function(){
                
            }
        }
    });
});
function setNode(player_name,index){
    var player = document.createElement("div");
    player.className = "player";

    var detail = document.createElement("div");
    detail.className = "detail";

    var identity = document.createElement("p");
    identity.className = "identity";
    identity.innerHTML = player_name;

    var number = document.createElement("p");
    number.className = "number";
    number.innerHTML = index;

    detail.appendChild(identity);
    detail.appendChild(number);
    player.appendChild(detail)

    content.appendChild(player);
}

for(var name in all_player ){
    setNode(all_player[name], parseInt(name) + 1);
}

game_start.addEventListener("click", function(){
    window.location.href = "record.html";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9kaWFyeS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9qcy9kaWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlL3BvcHVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUEseUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7O0FDeEREOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJqcy9qdWRnZV9kaWFyeS5tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9kaWFyeS5qc1wiKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IFwiLi4vY3NzL2RpYXJ5LnNjc3NcIjtcclxuaW1wb3J0IHBvcHVwIGZyb20gJy4uL2pzL21vZHVsZS9wb3B1cC5qcyc7XHJcblxyXG5pZighc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImFsbC1wbGF5ZXJcIikpe1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImlkZW50aXR5Lmh0bWxcIjtcclxufVxyXG5cclxudmFyIGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcclxuXHJcbnZhciBnYW1lX3N0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLXN0YXJ0XCIpO1xyXG5cclxudmFyIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC1wbGF5ZXJcIik7XHJcbnZhciBhbGxfcGxheWVyID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImFsbC1wbGF5ZXJcIikuc3BsaXQoXCIsXCIpO1xyXG5cclxuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICBwb3B1cCh7XHJcbiAgICAgICAgXCJ0aXRsZVwiOiBcIua4qemmqOaPkOekulwiLFxyXG4gICAgICAgIFwiY29udGVudFwiOiBcIuaYr+WQpuimgee7k+adn+acrOi9rua4uOaIj++8n1wiLFxyXG4gICAgICAgIFwiYnV0dG9uc1wiOiB7XHJcbiAgICAgICAgICAgIFwi56Gu6K6kXCI6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJpZGVudGl0eS5odG1sXCI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwi5YWz6ZetXCI6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5mdW5jdGlvbiBzZXROb2RlKHBsYXllcl9uYW1lLGluZGV4KXtcclxuICAgIHZhciBwbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGxheWVyLmNsYXNzTmFtZSA9IFwicGxheWVyXCI7XHJcblxyXG4gICAgdmFyIGRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkZXRhaWwuY2xhc3NOYW1lID0gXCJkZXRhaWxcIjtcclxuXHJcbiAgICB2YXIgaWRlbnRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGlkZW50aXR5LmNsYXNzTmFtZSA9IFwiaWRlbnRpdHlcIjtcclxuICAgIGlkZW50aXR5LmlubmVySFRNTCA9IHBsYXllcl9uYW1lO1xyXG5cclxuICAgIHZhciBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG51bWJlci5jbGFzc05hbWUgPSBcIm51bWJlclwiO1xyXG4gICAgbnVtYmVyLmlubmVySFRNTCA9IGluZGV4O1xyXG5cclxuICAgIGRldGFpbC5hcHBlbmRDaGlsZChpZGVudGl0eSk7XHJcbiAgICBkZXRhaWwuYXBwZW5kQ2hpbGQobnVtYmVyKTtcclxuICAgIHBsYXllci5hcHBlbmRDaGlsZChkZXRhaWwpXHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwbGF5ZXIpO1xyXG59XHJcblxyXG5mb3IodmFyIG5hbWUgaW4gYWxsX3BsYXllciApe1xyXG4gICAgc2V0Tm9kZShhbGxfcGxheWVyW25hbWVdLCBwYXJzZUludChuYW1lKSArIDEpO1xyXG59XHJcblxyXG5nYW1lX3N0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInJlY29yZC5odG1sXCI7XHJcbn0pOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVwKGpzb24pe1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSBqc29uO1xyXG5cclxuICAgIHZhciBwb3AsIHNtYWxsX2J0biwgbGFyZ2VfYnRuLCBtYXNrO1xyXG5cclxuICAgIC8vIOWIm+W7uuW8ueWHuuWxguWFg+e0oFxyXG4gICAgdmFyIHNldE5vZGUgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vIOS4u2RpdlxyXG4gICAgICAgIHBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcG9wLmNsYXNzTmFtZSA9IFwicG9wdXAgYXV0b1wiO1xyXG4gICAgICAgIC8vIOWktFxyXG4gICAgICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGhlYWRlci5jbGFzc05hbWUgPSBcInBvcHVwLWhlYWRlclwiO1xyXG4gICAgICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwicG9wdXAtdGl0bGVcIjtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBvcHRpb25zLnRpdGxlO1xyXG4gICAgICAgIHNtYWxsX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIHNtYWxsX2J0bi5jbGFzc05hbWUgPSBcInNtYWxsX2J0blwiO1xyXG4gICAgICAgIHNtYWxsX2J0bi5pbm5lckhUTUwgPSBcIlhcIjtcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChzbWFsbF9idG4pO1xyXG4gICAgICAgIC8vIOS4u+WGheWuuVxyXG4gICAgICAgIHZhciBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBtYWluLmNsYXNzTmFtZSA9IFwicG9wdXAtbWFpblwiO1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29udGVudC5jbGFzc05hbWUgPSBcInBvcHVwLWNvbnRlbnRcIjtcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IG9wdGlvbnMuY29udGVudDtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgICAgIC8vIOiEmlxyXG4gICAgICAgIHZhciBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc05hbWUgPSBcInBvcHVwLWZvb3RlclwiO1xyXG4gICAgICAgIGZvcih2YXIgbmFtZSBpbiBvcHRpb25zLmJ1dHRvbnMpe1xyXG4gICAgICAgICAgICAoZnVuY3Rpb24obmFtZSl7XHJcbiAgICAgICAgICAgICAgICBsYXJnZV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgICAgICAgIGxhcmdlX2J0bi5jbGFzc05hbWUgPSBcImJ0blwiO1xyXG4gICAgICAgICAgICAgICAgbGFyZ2VfYnRuLmlubmVySFRNTCA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQobGFyZ2VfYnRuKTtcclxuICAgICAgICAgICAgfSkobmFtZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBwb3AuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgICBwb3AuYXBwZW5kQ2hpbGQobWFpbik7XHJcbiAgICAgICAgcG9wLmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG4gICAgICAgIC8vIOmBrue9qeWxglxyXG4gICAgICAgIG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG1hc2suY2xhc3NOYW1lID0gXCJtYXNrXCI7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFzayk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3ApO1xyXG4gICAgfVxyXG4gICAgc2V0Tm9kZSgpO1xyXG5cclxuICAgIC8vIOiuoeeul+W8ueWHuuWxgueahOS9jee9rlxyXG4gICAgdmFyIHJlc2l6ZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcG9wLnN0eWxlLnRvcCA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gcG9wLm9mZnNldEhlaWdodCkvMiArIFwicHhcIjtcclxuICAgICAgICBwb3Auc3R5bGUubGVmdCA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSBwb3Aub2Zmc2V0V2lkdGgpLzIgKyBcInB4XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplKCk7XHJcblxyXG4gICAgLy8g5by55Ye65bGC5YWz6ZetXHJcbiAgICB2YXIgY2xvc2UgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHBvcC5jbGFzc0xpc3QucmVtb3ZlKFwiYXV0b1wiKTtcclxuICAgICAgICBwb3AuY2xhc3NMaXN0LmFkZChcImNsb3NlLW91dFwiKTtcclxuICAgICAgICBwb3AuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1hc2spO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHBvcCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemUpXHJcbiAgICBcclxuICAgIHNtYWxsX2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xyXG5cclxuICAgIHZhciBjb25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cCAuYnRuXCIpO1xyXG4gICAgY29uZmlybVswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixvcHRpb25zLmJ1dHRvbnNbXCLnoa7orqRcIl0pO1xyXG4gICAgY29uZmlybVsxXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xyXG4gICAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==