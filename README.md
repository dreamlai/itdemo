## it修真院CSS任务总结

### 第一阶段——HTML及CSS入门

任务一、[九宫格](https://www.dreamlai.com/jnshu-demo/css/task1-2/)

**任务点：** 使九宫格大小可以随屏幕宽度改变，初步体验自适应。

**自适应问题解决：**

```css
.box div {
	width: 31%;
	padding-bottom: 31%; /* 通过对padding进行自适应 */
	float: left;
	background: yellow;
	border-radius: 15px;
	margin: 1%;
}
```

任务二、认识开发必备工具

1. **github** (代码托管)
2. **Sublime**(IDE)
3. **服务器+域名**
4. **FlashFXP**(代码上传)

任务三、[魔镜介绍页](https://www.dreamlai.com/jnshu-demo/css/task3/)

### 第二阶段——移动WEB页面

任务四、[登录页](https://www.dreamlai.com/jnshu-demo/css/task4)

任务五、[护工个人主页](https://www.dreamlai.com/jnshu-demo/css/task5)

任务六、[护工列表页](https://www.dreamlai.com/jnshu-demo/css/task6)

任务七、[桌游精灵](https://www.dreamlai.com/jnshu-demo/css/task7)

**任务总结：**

viewport

```
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

css文字省略号

```
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
```

在线雪碧图制作工具: https://www.toptal.com/developers/css/sprite-generator

### 第三阶段——PC页面

任务八-九、[修真院](https://www.dreamlai.com/jnshu-demo/css/task8-9/)

任务十、[51包装](https://www.dreamlai.com/jnshu-demo/css/task10)

### 第四阶段——页面重构、Bootstrap、sass进阶

任务十一、[登录页](https://www.dreamlai.com/jnshu-demo/css/task11)

任务十二、[护工个人主页](https://www.dreamlai.com/jnshu-demo/css/task12)

任务十三、[桌游精灵](https://www.dreamlai.com/jnshu-demo/css/task13)

任务十四-十五、[修真院](https://www.dreamlai.com/jnshu-demo/css/task14-15)