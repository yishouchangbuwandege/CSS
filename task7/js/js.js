function play() {
    var audio = document.getElementById("music");
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
}