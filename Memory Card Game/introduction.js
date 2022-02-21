var mute = document.getElementById("mute");
var unmute = document.getElementById("unmute");
var LIMIT = 1;

function sound() {
    var audio = new Audio('backgroundmusic.mp3');
    
    if (LIMIT == 1){
        audio.play();
        audio.loop = true;
        LIMIT += 1;
    }

}

