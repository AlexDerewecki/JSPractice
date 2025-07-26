const display = document.getElementById('time')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')
let miliseconds = 0;
let timer = null;




function updateDisplay() {
    
    const ms = miliseconds % 1000 / 10;
    const seconds = Math.floor(miliseconds / 1000) % 60;
    const minutes = Math.floor(miliseconds / 60000) % 60;
    const hours = Math.floor(miliseconds / 3600000);


    const format = (n) => String(n).padStart(2, '0');
    display.textContent = `${format(ms)}:${format(seconds)}:${format(minutes)}:${format(hours)}`;
}




function startTimer() {

    if (timer !== null) return;
    
    timer = setInterval(() => {
        miliseconds += 10;
        updateDisplay();
    }, 10) 
}

function stopTimer(){
    if (timer !== null){
        clearInterval(timer);
        timer = null
    }
}

function resetTimer(){
    clearInterval(timer);
    stopTimer();
    miliseconds = 0;
    updateDisplay();
    timer = null;
}






start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
updateDisplay();



