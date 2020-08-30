// prototyping variables
let videoSpeed = 1;
let testing = false;
let end = 1000 * 15;


// variables
const loadingScreen = document.querySelector('#loading');
const loadingText = document.querySelector('#loadingText');

const startbtn = document.querySelector('#startBtn');

const secVideo = document.querySelector('#video');
const video = document.querySelector('video');
const skipBtn = document.querySelector('#skipBtn');
let endNow = false;

const counter = document.querySelector('#counter');

const vertiLine = document.querySelector('#vertiLine');
const horiLine = document.querySelector('#horiLine');

const audioContainer = document.querySelector('#audioPlayer');
const audio = document.querySelector('audio');
let playing = false;

const container = document.querySelector('#body');
let blurred = document.querySelectorAll('.blurredDiv');



let time = 0;
video.playbackRate = videoSpeed;


// FUNCTIONS ---------------------------------------------------------------------
const updateCounter = () => {
    counter.innerText = time;
}


// end video function
const endVid = (interval) => {
    secVideo.classList.add('d-none');
    clearInterval(interval);
    reading();
}

// video timer function
const videoTimer = () => {
    let countdown = setInterval(() => {
        let timer = (video.duration - video.currentTime).toFixed(2)*100;
        counter.innerText = timer;
        if(timer === 0 || testing || endNow){
            endVid(countdown);
        }
    }, 10);
}

// reading timer function
const reading = () => {
    document.body.classList.remove('modal-open');
    counter.style.color = 'black';
    container.classList.remove('d-none');
    time = 0;
    updateCounter();
    let instance = window.innerHeight/end;
    let countUp = setInterval(() => {
        time += 1;
        updateCounter();
        vertiLine.style.height = time * instance + "px";
        // if(time >= end){
        //     clearInterval(countUp);
        //     endInteraction();
        // }
    }, 15);

};


// end interaction function
const endInteraction = () => {
    document.body.style.background = 'yellow';
    document.body.classList.add('modal-open');
}

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
    let check = setTimeout(() => {
        if(video.duration){
            startbtn.classList.remove('d-none');
            loadingText.innerHTML = ". . .";
            clearInterval(check)
        }
    }, 1000);
})

// start button triggers video
startbtn.addEventListener('click', () => {
    loadingScreen.classList.remove('d-flex');
    loadingScreen.classList.add('d-none');
    counter.classList.remove('d-none');
    video.play(); 
    videoTimer();
});

// skip button ends video
skipBtn.addEventListener('click', () => {
    endNow = true;
    video.pause();
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
blurred.forEach(div => {
    div.addEventListener('mouseover', () => {
        div.classList.remove('blurredDiv');
        blurred = document.querySelectorAll('blurredDiv');
    })
})




