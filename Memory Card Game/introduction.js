var LIMIT = 1; // Allows the program to start playing the audio only once
var audio = new Audio('backgroundmusic.mp3');

function sound() {
    
    if (LIMIT == 1){
        audio.play();
        audio.loop = true;
        LIMIT += 1;
    }

    if (icon.classList[1] == "fa-volume-xmark") {
        icon.classList.replace("fa-volume-xmark", "fa-volume-high")
        audio.muted = false;
    } else {
        icon.classList.replace("fa-volume-high", "fa-volume-xmark")
        audio.muted = true;
    }
}

