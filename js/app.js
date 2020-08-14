// prototyping variables
let videoSpeed = 5;


const loadingScreen = document.querySelector('#loading');
const loadingText = document.querySelector('#loadingText');
let time = 0;
const startbtn = document.querySelector('#startBtn');

const secVideo = document.querySelector('#video');
const video = document.querySelector('video');
video.playbackRate = videoSpeed;

const counter = document.querySelector('#counter');



window.addEventListener('load', () => {
    startbtn.classList.remove('d-none');
    loadingText.innerHTML = ". . .";
})

const videoTimer = () => {
    let countdown = setInterval(() => {
        let timer = (video.duration - video.currentTime).toFixed(2)*100;
        counter.innerText = timer;
        if(timer === 0){
            secVideo.classList.add('d-none');
            clearInterval(countdown);
        }
    }, 10);
}

startbtn.addEventListener('click', () => {
    loadingScreen.classList.remove('d-flex');
    loadingScreen.classList.add('d-none');
    counter.classList.remove('d-none');
    video.play(); 
    videoTimer();
})
