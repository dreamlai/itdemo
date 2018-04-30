(function(window, document){
    var pop, small_btn, large_btn, mask, dialog;
    var isOn = false;

    var defaultSettings  = {
    };

    function popup(options) {
        Object.assign(defaultSettings, options);
        if(!(this instanceof popup))return new popup(options);
        this.init();
    };

    popup.prototype = {
        init:function(){
            // 主div
            pop = document.createElement("div");
            pop.className = "popup auto";
            // 头
            var header = document.createElement("div");
            header.className = "popup-header";
            var title = document.createElement("p");
            title.className = "popup-title";
            title.innerHTML = defaultSettings.title;
            small_btn = document.createElement("a");
            small_btn.className = "small_btn";
            small_btn.innerHTML = "X";
            small_btn.addEventListener("click", this.close);
            header.appendChild(title);
            header.appendChild(small_btn);
            // 主内容
            var main = document.createElement("div");
            main.className = "popup-main";
            var content = document.createElement("p");
            content.className = "popup-content";
            content.innerHTML = defaultSettings.content;
            main.appendChild(content);
            // 脚
            var footer = document.createElement("div");
            footer.className = "popup-footer";
            for(var name in defaultSettings.buttons){
                large_btn = document.createElement("a");
                large_btn.className = "btn";
                large_btn.innerHTML = name;
                footer.appendChild(large_btn);
                if(name == "确认"){
                    large_btn.addEventListener("click",defaultSettings.buttons[name]);
                }else{
                    large_btn.addEventListener("click", this.close);
                }
            };
            
            pop.appendChild(header);
            pop.appendChild(main);
            pop.appendChild(footer);

            // 遮罩层
            mask = document.createElement("div");
            mask.className = "mask";

            document.body.appendChild(mask);
            document.body.appendChild(pop);

            this.resize();
            this.event();
        },
        resize: function(){
            pop.style.top = (document.documentElement.clientHeight - pop.offsetHeight)/2 + "px";
            pop.style.left = (document.documentElement.clientWidth - pop.offsetWidth)/2 + "px";
        },
        close: function(){
            pop.classList.remove("auto");
            pop.classList.add("close-out");
            pop.addEventListener("animationend", function(){
                document.body.removeChild(mask);
                document.body.removeChild(pop);
            })
        },
        event:function(){

            window.addEventListener("resize", this.resize)
            mask.addEventListener("click", this.close);

        },
    };

    function tips(options) {
        Object.assign(defaultSettings, options);
        if(!(this instanceof tips))return new tips(options);
        if(!isOn){
            this.init();
        }
    };
    tips.prototype = {
        init:function(){
            isOn = true;
            dialog = document.createElement("div");
            dialog.className = "tips auto";
            dialog.innerHTML = defaultSettings.content;
            
            document.body.appendChild(dialog);

            this.resize();
            this.event();
        },
        resize: function(){
            dialog.style.top = (document.documentElement.clientHeight - dialog.offsetHeight)/2 + "px";
            dialog.style.left = (document.documentElement.clientWidth - dialog.offsetWidth)/2 + "px";
        },
        close: function(){
            dialog.classList.remove("auto");
            dialog.classList.add("close-out");
            dialog.addEventListener("animationend", function(){
                document.body.removeChild(dialog);
                isOn = false;
            })
        },
        event: function(){
            var time = setTimeout( this.close, 1500)
        }
    }

    window.popup = popup;
    window.tips = tips;
}(window, document))

