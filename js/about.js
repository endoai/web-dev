$(document).ready(function(){
    var navBtns = document.getElementsByClassName("nav-button");

    for (var i=0; i<navBtns.length; i++){
        navBtns[i].addEventListener("click", function(){
            var current = document.getElementsByClassName("nav-button active");
            current[0].className = current[0].className.replace("nav-button active", "nav-button");
            this.className += " active";
        });
    }

    document.getElementById("background-video").playbackRate = 0.7;
});
