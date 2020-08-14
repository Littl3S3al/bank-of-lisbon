// prototyping variables
let videoSpeed = 10;
let testing = false;
let end = 10000 * 15;


// variables
const loadingScreen = document.querySelector('#loading');
const loadingText = document.querySelector('#loadingText');

const startbtn = document.querySelector('#startBtn');

const secVideo = document.querySelector('#video');
const video = document.querySelector('video');

const counter = document.querySelector('#counter');

const vertiLine = document.querySelector('#vertiLine');
const horiLine = document.querySelector('#horiLine');

const audioContainer = document.querySelector('#audioPlayer');
const audio = document.querySelector('audio');
let playing = false;

const paras = document.querySelectorAll('p');



let time = 0;
video.playbackRate = videoSpeed;


// FUNCTIONS ---------------------------------------------------------------------
const updateCounter = () => {
    counter.innerText = time;
}

// video timer function
const videoTimer = () => {
    let countdown = setInterval(() => {
        let timer = (video.duration - video.currentTime).toFixed(2)*100;
        counter.innerText = timer;
        if(timer === 0 || testing){
            secVideo.classList.add('d-none');
            clearInterval(countdown);
            reading();
        }
    }, 10);
}

// reading timer function
const reading = () => {
    document.body.classList.remove('modal-open');
    counter.style.color = 'black';
    time = 0;
    updateCounter();
    let instance = window.innerHeight/end;
    let countUp = setInterval(() => {
        time += 1;
        updateCounter();
        vertiLine.style.height = time * instance + "px";
        if(time >= end){
            clearInterval(countUp);
            endInteraction();
        }
    }, 15);

};


// end interaction function
const endInteraction = () => {
    document.body.style.background = 'yellow';
    document.body.classList.add('modal-open');
}

// add blur class to all paras
paras.forEach(para => {
    para.classList.add('blurredText');
})

// changing the width of the bar function
const grow = () => {
    let wider = setInterval(() => {
        if(playing){
            let progress = audio.currentTime/audio.duration*100;
            horiLine.style.width = progress + '%';
            
        } else{
            clearInterval(wider);
        }
    }, 1000);
}

// EVENTS --------------------------------------------------------------

// have begin button appear once page has loaded
window.addEventListener('load', () => {
    startbtn.classList.remove('d-none');
    loadingText.innerHTML = ". . .";
})

// start button triggers video
startbtn.addEventListener('click', () => {
    loadingScreen.classList.remove('d-flex');
    loadingScreen.classList.add('d-none');
    counter.classList.remove('d-none');
    video.play(); 
    videoTimer();
})

// hitting play on audio triggers line growing
audio.addEventListener('play', () => {
    playing = true;
    grow();
})

// hitting pause on the audio stops the line growing
audio.addEventListener('pause', () => {
    playing = false;
})


// unblur paras if you hover over them
document.body.addEventListener('mouseover', (e) => {
    if(e.target.tagName === "P"){
        e.target.classList.remove('blurredText');
    }
});

// unblur audio if you hover over it
audioContainer.addEventListener('mouseover', () => {
    audioContainer.classList.remove('blurredDiv');
})



