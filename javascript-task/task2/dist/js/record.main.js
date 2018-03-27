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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/record.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/record.scss":
/*!*****************************!*\
  !*** ./src/css/record.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/record.scss?");

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

/***/ }),

/***/ "./src/js/record.js":
/*!**************************!*\
  !*** ./src/js/record.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_record_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/record.scss */ \"./src/css/record.scss\");\n/* harmony import */ var _css_record_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_record_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_module_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/module/popup.js */ \"./src/js/module/popup.js\");\n/* harmony import */ var _js_module_popup_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_module_popup_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_module_get_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/module/get_player.js */ \"./src/js/module/get_player.js\");\n/* harmony import */ var _js_module_get_player_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_module_get_player_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nif(!sessionStorage.getItem(\"game\")){\r\n    window.location.href = \"home.html\";\r\n}\r\nvar player_state = JSON.parse(sessionStorage.getItem(\"player_state\"));\r\n\r\nfunction end_game(){\r\n    popup({\r\n        \"title\": \"温馨提示\",\r\n        \"content\": \"是否要结束本轮游戏？\",\r\n        \"buttons\": {\r\n            \"关闭\":function(){\r\n            },\r\n            \"确认\":function(){\r\n                window.location.href = \"home.html\";\r\n            }\r\n        }\r\n    });\r\n}\r\nvar close = document.querySelector(\".close\");\r\nclose.addEventListener(\"click\", end_game)\r\nvar end = document.querySelector(\".end-game\");\r\nend.addEventListener(\"click\", end_game)\r\n\r\nvar game_config = JSON.parse(sessionStorage.getItem(\"game\"));\r\n\r\nvar day_record = {\r\n    \"第一天\":{\r\n        night: \"\",\r\n        day: \"\"\r\n    }\r\n};\r\n\r\n\r\n\r\n// 法官日记弹出\r\nvar diary = document.querySelector(\".judge-diary\");\r\ndiary.addEventListener(\"click\", function(){\r\n    var diary_main = document.createElement(\"div\");\r\n    diary_main.classList.add(\"vote\");\r\n\r\n    var header = document.createElement(\"header\");\r\n    var title = document.createElement(\"p\");\r\n    title.classList.add(\"head-title\");\r\n    title.innerHTML = \"法官日记\";\r\n    header.appendChild(title);\r\n\r\n    var main = document.createElement(\"div\");\r\n    main.classList.add(\"main\");\r\n    var box = document.createElement(\"div\");\r\n    box.classList.add(\"all-player\");\r\n    main.appendChild(box);\r\n\r\n    var foot = document.createElement(\"footer\");\r\n\r\n    diary_main.appendChild(header);\r\n    diary_main.appendChild(main);\r\n    diary_main.appendChild(foot);\r\n\r\n    document.body.appendChild(diary_main);\r\n    document.body.classList.add(\"on\");\r\n\r\n    get_player({\r\n        main: diary_main,\r\n        \"buttons\": {\r\n                \"返回\": function(){\r\n                    document.body.removeChild(diary_main);\r\n            }\r\n        }\r\n    });\r\n});\r\n\r\n// 杀人和投死页面弹出\r\n(function(window, document){\r\n\r\n    var defaults = {};\r\n\r\n    function vote(options) {\r\n        Object.assign(defaults, options);\r\n        if(!(this instanceof vote))return new vote(options);\r\n        this.init();\r\n    };\r\n\r\n    vote.prototype = {\r\n        init: function(){\r\n            var vote_box = document.createElement(\"div\");\r\n            vote_box.classList.add(\"vote\");\r\n\r\n            var header = document.createElement(\"header\");\r\n            var title = document.createElement(\"p\");\r\n            title.classList.add(\"head-title\");\r\n            title.innerHTML = defaults.title;\r\n            header.appendChild(title);\r\n\r\n            var main = document.createElement(\"div\");\r\n            main.classList.add(\"main\");\r\n            main.classList.add(\"kill-vote\");\r\n            var tips_info = document.createElement(\"div\");\r\n            tips_info.classList.add(\"tips-info\");\r\n            var rule = document.createElement(\"p\");\r\n            rule.classList.add(\"rule\");\r\n            rule.innerHTML = defaults.rule;\r\n            var tips = document.createElement(\"p\");\r\n            tips.classList.add(\"rule_tips\");\r\n            tips.innerHTML = defaults.tips;\r\n            tips_info.appendChild(rule);\r\n            tips_info.appendChild(tips);\r\n            var all_player = document.createElement(\"div\");\r\n            all_player.classList.add(\"all-player\");\r\n            main.appendChild(tips_info);\r\n            main.appendChild(all_player);\r\n\r\n            var foot = document.createElement(\"footer\");\r\n\r\n            vote_box.appendChild(header);\r\n            vote_box.appendChild(main);\r\n            vote_box.appendChild(foot);\r\n\r\n            document.body.appendChild(vote_box);\r\n\r\n            get_player({\r\n                main: vote_box,\r\n                buttons: {\r\n                        \"确定\": function(){\r\n                            var choose = document.querySelector(\"input[type=radio]:checked\");\r\n                            var day_num = defaults.main.querySelector(\".day-num\").innerHTML;\r\n                            var _killer = defaults.main.querySelector(\".kill-record\");\r\n                            var _vote = defaults.main.querySelector(\".vote-record\");\r\n                            if(!choose){\r\n                                if(defaults.title == \"杀手杀人\"){\r\n                                    _killer.innerHTML = \"没有进行任何操作\";\r\n                                    _killer.style.display = \"block\";\r\n                                    day_record[day_num] = {};\r\n                                    day_record[day_num].night = _killer.innerHTML;\r\n                                    document.body.removeChild(vote_box);\r\n                                } else {\r\n                                    popup({\r\n                                        title: \"警告\",\r\n                                        content: \"请先选择要操作的玩家\",\r\n                                        buttons: {\r\n                                            \"关闭\": {}\r\n                                        }\r\n                                    })\r\n                                }\r\n                            }else if(defaults.title == \"杀手杀人\" && player_state[choose.id].name == \"杀手\"){\r\n                                popup({\r\n                                    title: \"警告\",\r\n                                    content: \"你是杀手不能杀死本职业，请选择其他玩家杀死\",\r\n                                    buttons: {\r\n                                        \"关闭\": {}\r\n                                    }\r\n                                })\r\n                            }else {\r\n                                player_state[choose.id].state = \"die\";         \r\n                                if(defaults.title == \"杀手杀人\"){\r\n                                    _killer.innerHTML = choose.id + \"号被杀手杀死，真实身份是\" + player_state[choose.id].name;\r\n                                    _killer.style.display = \"block\";\r\n                                    day_record[day_num] = {};\r\n                                    day_record[day_num].night = _killer.innerHTML;\r\n                                }else{\r\n                                    _vote.innerHTML = choose.id + \"号被投票投死了，真实身份是\" + player_state[choose.id].name;\r\n                                    _vote.style.display = \"block\";\r\n                                    day_record[day_num].day = _vote.innerHTML;\r\n                                }\r\n                                player_state[choose.id].name == \"杀手\" ? game_config.killer-- : game_config.civilian--;\r\n                                document.body.removeChild(vote_box);\r\n                                sessionStorage.setItem(\"player_state\",JSON.stringify(player_state));\r\n                            }\r\n                            console.log(day_record)\r\n                            if(game_config.killer >= game_config.civilian || game_config.killer == 0){\r\n                                sessionStorage.setItem(\"day_record\",JSON.stringify(day_record));\r\n                                sessionStorage.setItem(\"game\",JSON.stringify(game_config));\r\n                                window.location.href = \"result.html\";\r\n                            }\r\n                    }\r\n                }\r\n            });\r\n        }\r\n    }\r\n    window.vote = vote;\r\n}(window, document));\r\n\r\nfunction hideNode(){\r\n   this.classList.toggle(\"hide\");\r\n}\r\n\r\n// 游戏流程控制\r\n(function(){\r\n    // 游戏流程\r\n    var _this;\r\n    var _main;\r\n\r\n    var game_flow = {\r\n\r\n        currentDay: 1,\r\n\r\n        // 当前状态\r\n        currentState: 1,\r\n    　　\r\n        // 绑定事件\r\n        addEvent: function() {\r\n        　　_this = this;\r\n    　　　　_main = arguments[0];\r\n            self = _main.querySelectorAll(\".step\");\r\n            for(var i = 0; i < self.length; i++){\r\n    　　　　    self[i].addEventListener(\"click\", _this.flow);\r\n            }\r\n        },\r\n    　　\r\n        // 状态转换\r\n        flow: function(event){\r\n            if(this.classList.contains(\"end\")){\r\n                tips({\r\n                    \"content\": \"请进行下一步骤！\",\r\n                });\r\n            }else if(this !== self[_this.currentState - 1]){\r\n                tips({\r\n                    \"content\": \"请按顺序操作！\",\r\n                });\r\n            }else{\r\n                switch(_this.currentState) {\r\n                    case 1:\r\n                        vote({\r\n                            \"title\": \"杀手杀人\",\r\n                            \"rule\": \"杀手请睁眼，杀手请选择要杀的对象\",\r\n                            \"tips\": \"点击下方玩家头像，对被杀的玩家进行标记\",\r\n                            \"main\": _main\r\n                        });\r\n                        self[_this.currentState - 1].classList.add(\"end\");\r\n                        _this.currentState = 2;\r\n                        \r\n                    　　break;\r\n                    case 2:\r\n                        popup({\r\n                            \"title\": \"温馨提示\",\r\n                            \"content\": \"请死者亮明身份并且发表遗言\",\r\n                            \"buttons\": {\r\n                                \"关闭\":function(){},\r\n                                \"确认\":function(){\r\n                                    self[_this.currentState - 1].classList.add(\"end\");\r\n                                    popup.prototype.close();\r\n                                    _this.currentState = 3;\r\n                                }\r\n                            }\r\n                        });\r\n                    　　break;\r\n                    case 3:\r\n                        popup({\r\n                            \"content\": \"玩家依次发言讨论！\",\r\n                            \"buttons\": {\r\n                                \"关闭\":function(){},\r\n                                \"确认\":function(){\r\n                                    self[_this.currentState - 1].classList.add(\"end\");\r\n                                    popup.prototype.close();\r\n                                    _this.currentState = 4;\r\n                                }\r\n                            }\r\n                        });\r\n                    　　break;\r\n                    case 4:\r\n                        vote({\r\n                            title: \"投票\",\r\n                            rule: \"发言讨论结束，大家请投票\",\r\n                            tips: \"点击得票数最多的人的头像\",\r\n                            main: _main\r\n                        })\r\n                        self[_this.currentState - 1].classList.add(\"end\");\r\n                        _this.currentDay++;\r\n                        setDay(_this.currentDay);\r\n                        var day = document.querySelectorAll(\".day-num\");\r\n                        day[_this.currentDay - 2].classList.add(\"hide\");\r\n                        \r\n                        _this.currentState = 1;\r\n                        \r\n                    　　break;\r\n                    default:\r\n                        console.log(\"case错误！\");\r\n                    　　break;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    window.game_flow = game_flow;\r\n}())\r\n\r\n// 天数生成\r\nfunction setDay(name){\r\n    name = String(name);\r\n    var newchar = \"\";\r\n    for (var i = name.length - 1; i >= 0; i--) {\r\n        var tmpnewchar = \"\";\r\n        var perchar = name.charAt(i);\r\n        switch (perchar) {\r\n            case \"0\":  tmpnewchar = \"零\";break;\r\n            case \"1\": tmpnewchar = \"一\"; break;\r\n            case \"2\": tmpnewchar = \"二\"; break;\r\n            case \"3\": tmpnewchar = \"三\"; break;\r\n            case \"4\": tmpnewchar = \"四\"; break;\r\n            case \"5\": tmpnewchar = \"五\"; break;\r\n            case \"6\": tmpnewchar = \"六\"; break;\r\n            case \"7\": tmpnewchar = \"七\"; break;\r\n            case \"8\": tmpnewchar = \"八\"; break;\r\n            case \"9\": tmpnewchar = \"九\"; break;\r\n        }\r\n        switch (name.length - i - 1) {\r\n            case 0: tmpnewchar = tmpnewchar; break;\r\n            case 1: if (perchar != 0) tmpnewchar += \"十\"; break;\r\n            case 2: if (perchar != 0) tmpnewchar += \"百\"; break;\r\n        }\r\n        newchar = tmpnewchar + newchar;\r\n    }\r\n    var _process = document.createElement(\"div\");\r\n    _process.classList.add(\"process\");\r\n\r\n    var title = document.createElement(\"p\");\r\n    title.classList.add(\"day-num\");\r\n    title.innerHTML = \"第\" + newchar + \"天\";\r\n    title.addEventListener(\"click\", hideNode);\r\n\r\n    var content = document.createElement(\"div\");\r\n    content.classList.add(\"content\");\r\n    var day = document.createElement(\"div\");\r\n    day.classList.add(\"day\");\r\n    var kill = document.createElement(\"button\");\r\n    kill.classList.add(\"step\");\r\n    kill.innerHTML = \"杀手杀人\";\r\n    var kill_record = document.createElement(\"p\");\r\n    kill_record.classList.add(\"record\");\r\n    kill_record.classList.add(\"kill-record\");\r\n    day.appendChild(kill);\r\n    day.appendChild(kill_record);\r\n    var night = document.createElement(\"div\");\r\n    night.classList.add(\"night\");\r\n    var _Words = document.createElement(\"button\");\r\n    _Words.classList.add(\"step\");\r\n    _Words.innerHTML = \"亡灵发表遗言\";\r\n    night.appendChild(_Words);\r\n    var speak = document.createElement(\"button\");\r\n    speak.classList.add(\"step\");\r\n    speak.innerHTML = \"玩家依次发言\";\r\n    night.appendChild(speak);\r\n    var vote = document.createElement(\"button\");\r\n    vote.classList.add(\"step\");\r\n    vote.innerHTML = \"投票\";\r\n    var vote_record = document.createElement(\"p\");\r\n    vote_record.classList.add(\"record\");\r\n    vote_record.classList.add(\"vote-record\");\r\n    night.appendChild(vote);\r\n    night.appendChild(vote_record)\r\n\r\n    content.appendChild(day);\r\n    content.appendChild(night);\r\n\r\n    _process.appendChild(title);\r\n    _process.appendChild(content);\r\n\r\n    game_flow.addEvent(_process);\r\n\r\n    document.querySelector(\".main\").appendChild(_process);\r\n}\r\n\r\nsetDay(1);\r\n\n\n//# sourceURL=webpack:///./src/js/record.js?");

/***/ })

/******/ });