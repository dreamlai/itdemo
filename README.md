## it修真院CSS任务总结

### 第一阶段——HTML及CSS入门

任务一、[九宫格](http://www.dreamlai.com/task1-2/)

![九宫格](images/task1.gif)

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
   * `git init`
   * `git status`
   * `git add .`
   * `git commit -m ""`
   * `git remote -v`
   * `git remote add     origin <远程地址>`
   * `git push it master`
   * `git clone it master`
2. **Sublime**(IDE)
   * Emmet(快速编写插件)
   * LiveReload(自动刷新插件)
3. **服务器+域名**
4. **FlashFXP**(代码上传)

任务三、[魔镜介绍页](http://www.dreamlai.com/task3/)

### 第二阶段——常见WEB页面自适应

任务四、[登录页](http://www.dreamlai.com/task4/)

任务五、[护工个人主页](http://www.dreamlai.com/task5/)

任务六、[护工列表页](http://www.dreamlai.com/task6/)

任务七、[桌游精灵](http://www.dreamlai.com/task7/)

### 第三阶段——企业官网

任务八-九、[修真院](http://www.dreamlai.com/task8-9/)

任务十、[51包装](http://www.dreamlai.com/task10/)

### 第四阶段——Bootstrap、sass、less进阶
