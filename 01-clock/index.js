const clock = document.querySelector('.clock');
const clockFace = clock.querySelector('.clock-face');

let defaultDeg = 90 // because 0 or 12 am/pm is at the very top at 90 deg angle

function playClock(){
    const dateTime = new Date();
    let milli = dateTime.getMilliseconds()
    const millisecondHand = document.querySelector('.millisecond-hand')
    let rotatePerMillisec = 360 / 1000; // .360 deg per ms
    millisecondHand.style.transform = `rotate(${milli * rotatePerMillisec + defaultDeg}deg)`
    millisecondHand.textContent = milli

    let sec = dateTime.getSeconds()
    const secondHand = document.querySelector('.second-hand')
    let rotatePerSec = 360 / 60; // 6 deg per 1 sec
    secondHand.style.transform = `rotate(${ sec * rotatePerSec + defaultDeg }deg)`
    secondHand.textContent = sec == 0 ? 60 : sec

    const minuteHand = document.querySelector('.min-hand');
    let min = dateTime.getMinutes()
    let rotatePerMin = 360 / 60; // 6 deg per 1 min
    minuteHand.style.transform = `rotate(${ min * rotatePerMin + defaultDeg }deg)`
    minuteHand.textContent = min

    const hourHand = document.querySelector('.hour-hand');
    let hour = dateTime.getHours()
    let rotatePerHour = 360 / 12; // 30 deg per hour
    hourHand.style.transform = `rotate(${ hour * rotatePerHour + defaultDeg }deg)`
    hourHand.textContent = hour
}

function stopClock(){
    clearInterval(timeId)
    timeId = null
}

let timeId;

const startButton = document.querySelector('.start-button')
startButton.addEventListener('click',function() {
    if(!timeId) {
        setTimeout(()=> {
            timeId = setInterval(playClock, 1)
        }, 0)
    }
    playClock()
}) 

const stopButton = document.querySelector('.stop-button')
stopButton.addEventListener('click', stopClock)