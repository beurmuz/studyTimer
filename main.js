const displayTime = document.querySelector('.displayTime');

const timer3sec= document.querySelector('.timer3sec');
const timer15sec = document.querySelector('.timer15sec');
const timer30sec = document.querySelector('.timer30sec');
const timer45sec = document.querySelector('.timer45sec');
const timer60sec = document.querySelector('.timer60sec');

const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');
const resetBtn = document.querySelector('.resetBtn');

var audio = new Audio('./audio/ring.mp3');
// audio.play();

let remainTime = 0;
let started = false;
let timer = undefined;

timer3sec.addEventListener('click', () => {
    if(started) {
        stopTimer();
    } else {
        startTimer(timer3sec);
    }
    
});

timer15sec.addEventListener('click', () => {
    startTimer(timer15sec);
});

timer30sec.addEventListener('click', () => {
    startTimer(timer30sec);
});

timer45sec.addEventListener('click', () => {
    startTimer(timer45sec);
});

timer60sec.addEventListener('click', () => {
    startTimer(timer60sec);
});

stopBtn.addEventListener('click', () => {
    stopTimer();
});

resetBtn.addEventListener('click', () => {
    stopTimer();
    displayTime.innerHTML = `00:00`;
});



function startTimer(time) {
    started = true;
    remainTime = time.value - 1;
    updateTimerText(remainTime);
    timer = setInterval(() => {
        if(remainTime <= 0) {
            clearInterval(timer);
            audio.play();
            return;
        }
        updateTimerText(--remainTime)
    }, 1000);
}

function updateTimerText(time) {
    const seconds = time % 60;
    displayTime.innerHTML = `00:${time}`;
}

function stopTimer() {
    started = false;
    clearInterval(timer);
}