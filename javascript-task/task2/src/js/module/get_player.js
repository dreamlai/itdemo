(function(window, document){
    var player_state = JSON.parse(sessionStorage.getItem("player_state"));
    var defaults  = {};

    function get_player(options) {
        Object.assign(defaults, options);
        if(!(this instanceof get_player))return new get_player(options);
        player_state = JSON.parse(sessionStorage.getItem("player_state"));
        this.init();
    };

    get_player.prototype = {
        init:function(){
            for(var name in player_state ){
                this.setNode(player_state[name].name, parseInt(name),player_state[name].state);
            }
            this.setBtn();
        },
        setNode: function(player_name,index,state){
            var player = document.createElement("div");
            player.className = "player";

            var checkbox = document.createElement("input");
            checkbox.type = "radio";
            checkbox.id = index;
            checkbox.name = "check";


            var detail = document.createElement("div");
            detail.className = "detail";
            detail.classList.add(state);
            var label = document.createElement("label");
            label.setAttribute("for", index);


            var identity = document.createElement("p");
            identity.className = "identity";
            identity.innerHTML = player_name;

            var number = document.createElement("p");
            number.className = "number";
            number.innerHTML = index;

            detail.appendChild(identity);
            detail.appendChild(number);
            detail.appendChild(label);
            player.appendChild(checkbox);
            player.appendChild(detail);

            defaults.main.querySelector(".all-player").appendChild(player);
        },
        setBtn: function(){
            var btn = document.createElement("button");
            btn.className = "btn game-start";
            for(var name in defaults.buttons){
                btn.addEventListener("click", defaults.buttons[name]);
                btn.innerHTML = name;
            }
            defaults.main.querySelector("footer").appendChild(btn);
        }
    };
    window.get_player = get_player;
}(window, document))

