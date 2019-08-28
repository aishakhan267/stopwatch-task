let sound = new Audio("click.mp3");

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
let isRunning = false;
function updateTime() {
    if (seconds === 59) {
        seconds = 0;
        if (minutes === 59) {
            minutes = 0;
            hours++;
        } else {
            minutes++;
        }
    } else {
        seconds++;
    }




    if (seconds < 10) {
        document.querySelector("#seconds").innerHTML = `0${seconds}`;
    } else {
        document.querySelector("#seconds").innerHTML = seconds;
    }


    if (minutes < 10) {
        document.querySelector("#minutes").innerHTML = `0${minutes}`;
    } else {
        document.querySelector("#minutes").innerHTML = minutes;
    }


    if (hours < 10) {
        document.querySelector("#hours").innerHTML = `0${hours}`;
    } else {
        document.querySelector("#hours").innerHTML = hours;
    }

}
function start() {
    if (isRunning === false) {
        sound.play();
        interval = setInterval(updateTime, 1000);
        isRunning = true;
    }
    document.querySelector("#main").style = "animation: box 1s linear infinite";

}
function stop() {
    sound.play();
    clearInterval(interval);
    isRunning = false;
    document.querySelector("#main").style = "animation: none";

}
function reset() {
    sound.play();

    seconds = 0;
    minutes = 0;
    hours = 0;
    stop();

    if (seconds < 10) {
        document.querySelector("#seconds").innerHTML = `0${seconds}`;
    } else {
        document.querySelector("#seconds").innerHTML = seconds;
    }


    if (minutes < 10) {
        document.querySelector("#minutes").innerHTML = `0${minutes}`;
    } else {
        document.querySelector("#minutes").innerHTML = minutes;
    }


    if (hours < 10) {
        document.querySelector("#hours").innerHTML = `0${hours}`;
    } else {
        document.querySelector("#hours").innerHTML = hours;
    }

    document.querySelector("#main").style = "animation: none";
} 
