import '../css/loading.scss';
import '../css/loading.scss';

 "use strict";
    var i = 3;
    var jumeTag = document.querySelector(".jume"),
            box = document.querySelector(".box"),
            jumeNum = jumeTag.querySelector(".num");

    setInterval(function(){
        if(i > 1){
            i--;
            jumeNum.innerHTML = i;
        }else{
            jume();
        }
    },1000)

    var jume = function() {
        window.location.href = "home.html";
    }

    jumeTag.onclick = jume;
    box.onclick = jume;