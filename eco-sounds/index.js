const audio = document.querySelector('audio');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

function playAudio() {
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

play.addEventListener('click', playAudio);
pause.addEventListener('click', pauseAudio);