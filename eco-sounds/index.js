const audio = document.querySelector('audio');
const play = document.querySelector('.play');

let isPlay = false;

function playAudio() {
    if (!isPlay) {
        isPlay = true
        audio.currentTime = 0;
        audio.play();
    } else {
        audio.pause();
        isPlay = false
    }

}

play.addEventListener('click', playAudio);