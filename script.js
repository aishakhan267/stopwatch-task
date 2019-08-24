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

    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
}
function start() {
    if (isRunning === false) {
        sound.play();
        document.querySelector("#stop").style = "display:flex";
        document.querySelector("#reset").style = "display:flex";
        interval = setInterval(updateTime, 1000);
        isRunning = true;
    }

}
function stop() {
    sound.play();

    clearInterval(interval);
    isRunning = false;
    document.querySelector("#stop").style.display = "none";
    document.querySelector("#reset").style.display = "none";
}
function reset() {
    sound.play();

    seconds = 0;
    minutes = 0;
    hours = 0;
    stop();
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
} 
