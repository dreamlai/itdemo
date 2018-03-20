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

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/home.scss */ "./src/css/home.scss");
/* harmony import */ var _css_home_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_home_scss__WEBPACK_IMPORTED_MODULE_0__);


var item = document.querySelectorAll(".game-list .item"),

    a_target = document.querySelectorAll(".game-list a"),

    icon_btn = document.querySelectorAll(".icon-nav .item"),
    next = document.querySelector(".next-ver"),
    prev = document.querySelector(".prev-ver"),

    navbar_btn = document.querySelector(".navbar-toggle"),
    main_cont = document.querySelector(".content-wrap"),
    more_cont = document.querySelector(".content-more"),
    main = document.querySelector(".content"),

    historty_tips = document.querySelector(".ver-history .tips"),
    game_title = document.querySelector(".ver-title"),
    game_name = ["杀人游戏","捉鬼游戏","游戏3","游戏4"],
    i = 0,
    isOn = false,
    len = item.length;

// 判断是否有历史记录
if(sessionStorage.getItem("game_name")){
    historty_tips.innerHTML = "上次游戏：" + sessionStorage.getItem("game_name");
}

// 游戏项目切换
function slide(num) {
    for(var j = 0; j < len; j++) {
        item[j].className = "item";
        icon_btn[j].className = "item";
    }
    item[num].className += " active";
    icon_btn[num].className += " active";
    game_title.innerHTML = game_name[num];
}

// 下一个游戏项目
next.addEventListener("click", function(){
    i >= len - 1 ? i = 0 : i++;
    slide(i);
})

// 上一个游戏项目
prev.addEventListener("click", function(){
    i == 0 ? i = 3 : i--;
    slide(i);
})

// 游戏项目小图标切换
for(var x = 0; x < len; x++){
    icon_btn[i].index = x;
    (function(x){
        icon_btn[x].addEventListener("click", function(){
            slide(x);
        })
    })(x)
}

// 添加历史记录
for (var o = 0; o < a_target.length; o++){
    a_target[o].addEventListener("click", function(){
        sessionStorage.setItem("game_name", game_title.innerHTML);
    })
}

var mask = document.createElement("div");
mask.classList.add("mask");

// 更多内容展开收缩
function navToggle(){
    if(!isOn){
        main_cont.classList.add("on");
        more_cont.classList.add("show");
        main_cont.appendChild(mask);
        isOn = true;
    }else{
        main_cont.classList.remove("on");
        more_cont.classList.remove("show");
        isOn = false;
    }
}

navbar_btn.addEventListener("click", navToggle)

// 跟多内容展开后，点击主内容任何地方后收缩
mask.addEventListener("click", function(){
    main_cont.className = "content-wrap";
    main_cont.removeChild(mask);
    more_cont.className = "content-more";
    isOn = false;
})



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9ob21lLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25FQSx5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImpzL2hvbWUubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaG9tZS5qc1wiKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3MvaG9tZS5zY3NzJztcclxuXHJcbnZhciBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lLWxpc3QgLml0ZW1cIiksXHJcblxyXG4gICAgYV90YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbWUtbGlzdCBhXCIpLFxyXG5cclxuICAgIGljb25fYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pY29uLW5hdiAuaXRlbVwiKSxcclxuICAgIG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5leHQtdmVyXCIpLFxyXG4gICAgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJldi12ZXJcIiksXHJcblxyXG4gICAgbmF2YmFyX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyLXRvZ2dsZVwiKSxcclxuICAgIG1haW5fY29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC13cmFwXCIpLFxyXG4gICAgbW9yZV9jb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LW1vcmVcIiksXHJcbiAgICBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLFxyXG5cclxuICAgIGhpc3RvcnR5X3RpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZlci1oaXN0b3J5IC50aXBzXCIpLFxyXG4gICAgZ2FtZV90aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmVyLXRpdGxlXCIpLFxyXG4gICAgZ2FtZV9uYW1lID0gW1wi5p2A5Lq65ri45oiPXCIsXCLmjYnprLzmuLjmiI9cIixcIua4uOaIjzNcIixcIua4uOaIjzRcIl0sXHJcbiAgICBpID0gMCxcclxuICAgIGlzT24gPSBmYWxzZSxcclxuICAgIGxlbiA9IGl0ZW0ubGVuZ3RoO1xyXG5cclxuLy8g5Yik5pat5piv5ZCm5pyJ5Y6G5Y+y6K6w5b2VXHJcbmlmKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJnYW1lX25hbWVcIikpe1xyXG4gICAgaGlzdG9ydHlfdGlwcy5pbm5lckhUTUwgPSBcIuS4iuasoea4uOaIj++8mlwiICsgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImdhbWVfbmFtZVwiKTtcclxufVxyXG5cclxuLy8g5ri45oiP6aG555uu5YiH5o2iXHJcbmZ1bmN0aW9uIHNsaWRlKG51bSkge1xyXG4gICAgZm9yKHZhciBqID0gMDsgaiA8IGxlbjsgaisrKSB7XHJcbiAgICAgICAgaXRlbVtqXS5jbGFzc05hbWUgPSBcIml0ZW1cIjtcclxuICAgICAgICBpY29uX2J0bltqXS5jbGFzc05hbWUgPSBcIml0ZW1cIjtcclxuICAgIH1cclxuICAgIGl0ZW1bbnVtXS5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbiAgICBpY29uX2J0bltudW1dLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxuICAgIGdhbWVfdGl0bGUuaW5uZXJIVE1MID0gZ2FtZV9uYW1lW251bV07XHJcbn1cclxuXHJcbi8vIOS4i+S4gOS4qua4uOaIj+mhueebrlxyXG5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgaSA+PSBsZW4gLSAxID8gaSA9IDAgOiBpKys7XHJcbiAgICBzbGlkZShpKTtcclxufSlcclxuXHJcbi8vIOS4iuS4gOS4qua4uOaIj+mhueebrlxyXG5wcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgaSA9PSAwID8gaSA9IDMgOiBpLS07XHJcbiAgICBzbGlkZShpKTtcclxufSlcclxuXHJcbi8vIOa4uOaIj+mhueebruWwj+Wbvuagh+WIh+aNolxyXG5mb3IodmFyIHggPSAwOyB4IDwgbGVuOyB4Kyspe1xyXG4gICAgaWNvbl9idG5baV0uaW5kZXggPSB4O1xyXG4gICAgKGZ1bmN0aW9uKHgpe1xyXG4gICAgICAgIGljb25fYnRuW3hdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzbGlkZSh4KTtcclxuICAgICAgICB9KVxyXG4gICAgfSkoeClcclxufVxyXG5cclxuLy8g5re75Yqg5Y6G5Y+y6K6w5b2VXHJcbmZvciAodmFyIG8gPSAwOyBvIDwgYV90YXJnZXQubGVuZ3RoOyBvKyspe1xyXG4gICAgYV90YXJnZXRbb10uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImdhbWVfbmFtZVwiLCBnYW1lX3RpdGxlLmlubmVySFRNTCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG52YXIgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1hc2suY2xhc3NMaXN0LmFkZChcIm1hc2tcIik7XHJcblxyXG4vLyDmm7TlpJrlhoXlrrnlsZXlvIDmlLbnvKlcclxuZnVuY3Rpb24gbmF2VG9nZ2xlKCl7XHJcbiAgICBpZighaXNPbil7XHJcbiAgICAgICAgbWFpbl9jb250LmNsYXNzTGlzdC5hZGQoXCJvblwiKTtcclxuICAgICAgICBtb3JlX2NvbnQuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgbWFpbl9jb250LmFwcGVuZENoaWxkKG1hc2spO1xyXG4gICAgICAgIGlzT24gPSB0cnVlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgbWFpbl9jb250LmNsYXNzTGlzdC5yZW1vdmUoXCJvblwiKTtcclxuICAgICAgICBtb3JlX2NvbnQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgaXNPbiA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5uYXZiYXJfYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZUb2dnbGUpXHJcblxyXG4vLyDot5/lpJrlhoXlrrnlsZXlvIDlkI7vvIzngrnlh7vkuLvlhoXlrrnku7vkvZXlnLDmlrnlkI7mlLbnvKlcclxubWFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIG1haW5fY29udC5jbGFzc05hbWUgPSBcImNvbnRlbnQtd3JhcFwiO1xyXG4gICAgbWFpbl9jb250LnJlbW92ZUNoaWxkKG1hc2spO1xyXG4gICAgbW9yZV9jb250LmNsYXNzTmFtZSA9IFwiY29udGVudC1tb3JlXCI7XHJcbiAgICBpc09uID0gZmFsc2U7XHJcbn0pXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9