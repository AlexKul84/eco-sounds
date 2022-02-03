const audio = new Audio();
const play = document.querySelector('.play');
const solovey = document.querySelector('.solovey');
const drozd = document.querySelector('.drozd');
const zarynka = document.querySelector('.zarynka');
const javoronok = document.querySelector('.javoronok');
const slavka = document.querySelector('.slavka');
const main = document.querySelector('.main');

let isPlay = false;

play.addEventListener('click', function (event) {
    if(event.target.classList.contains('play')) {
        event.target.classList.toggle('pause');
        if (!isPlay) {
            isPlay = true
            audio.src = 'assets/audio/forest.mp3';
            audio.currentTime = 0;
            audio.play();
        } else {
            solovey.classList.remove('menu_link_play');
            drozd.classList.remove('menu_link_play');
            zarynka.classList.remove('menu_link_play');
            javoronok.classList.remove('menu_link_play');
            slavka.classList.remove('menu_link_play');
            main.classList.remove('main_solovey');
            main.classList.remove('main_drozd');
            main.classList.remove('main_zarynka');
            main.classList.remove('main_javoronok');
            main.classList.remove('main_slavka');
            audio.pause();
            isPlay = false
        }
    }
})

solovey.addEventListener('click', function (event) {
    if(event.target.classList.contains('solovey')) {
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_solovey');
        main.classList.remove('main_drozd');
        main.classList.remove('main_zarynka');
        main.classList.remove('main_javoronok');
        main.classList.remove('main_slavka');
        drozd.classList.remove('menu_link_play');
        zarynka.classList.remove('menu_link_play');
        javoronok.classList.remove('menu_link_play');
        slavka.classList.remove('menu_link_play');
        audio.src = 'assets/audio/solovey.mp3';
        isPlay = true
        audio.currentTime = 0;
        audio.play();
    }

})

drozd.addEventListener('click', function (event) {
    if(event.target.classList.contains('drozd')) {
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_drozd');
        main.classList.remove('main_solovey');
        main.classList.remove('main_zarynka');
        main.classList.remove('main_javoronok');
        main.classList.remove('main_slavka');
        solovey.classList.remove('menu_link_play');
        zarynka.classList.remove('menu_link_play');
        javoronok.classList.remove('menu_link_play');
        slavka.classList.remove('menu_link_play');
        audio.src = 'assets/audio/drozd.mp3';
        isPlay = true
        audio.currentTime = 0;
        audio.play();
    }
})

zarynka.addEventListener('click', function (event) {
    if(event.target.classList.contains('zarynka')) {
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_zarynka');
        main.classList.remove('main_solovey');
        main.classList.remove('main_drozd');
        main.classList.remove('main_javoronok');
        main.classList.remove('main_slavka');
        solovey.classList.remove('menu_link_play');
        drozd.classList.remove('menu_link_play');
        javoronok.classList.remove('menu_link_play');
        slavka.classList.remove('menu_link_play');
        audio.src = 'assets/audio/zarynka.mp3';
        isPlay = true
        audio.currentTime = 0;
        audio.play();
    }
})

javoronok.addEventListener('click', function (event) {
    if(event.target.classList.contains('javoronok')) {
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_javoronok');
        main.classList.remove('main_solovey');
        main.classList.remove('main_drozd');
        main.classList.remove('main_zarynka');
        main.classList.remove('main_slavka');
        solovey.classList.remove('menu_link_play');
        drozd.classList.remove('menu_link_play');
        zarynka.classList.remove('menu_link_play');
        slavka.classList.remove('menu_link_play');
        audio.src = 'assets/audio/javoronok.mp3';
        isPlay = true
        audio.currentTime = 0;
        audio.play();
    }
})

slavka.addEventListener('click', function (event) {
    if(event.target.classList.contains('slavka')) {
        event.target.classList.add('menu_link_play');
        play.classList.add('pause');
        main.classList.add('main_slavka');
        main.classList.remove('main_solovey');
        main.classList.remove('main_drozd');
        main.classList.remove('main_zarynka');
        main.classList.remove('main_javoronok');
        solovey.classList.remove('menu_link_play');
        drozd.classList.remove('menu_link_play');
        zarynka.classList.remove('menu_link_play');
        javoronok.classList.remove('menu_link_play');
        audio.src = 'assets/audio/slavka.mp3';
        isPlay = true
        audio.currentTime = 0;
        audio.play();
    }
})