const timer = document.getElementsByClassName("timer")
const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn")
const resetBtn = document.getElementById("resetBtn")

const seconds = document.querySelector(".seconds")
const minutes = document.querySelector(".minutes")

startBtn.addEventListener('click', startTimer)
stopBtn.addEventListener('click', stopTimer)
resetBtn.addEventListener('click', resetTimer)
let totalSeconds = 0
let totalMinutes = 0



function startTimer(){
    interval = setInterval(updateTimer, 1000)
}

function stopTimer(){
    clearInterval(interval)
}

function resetTimer(){
    window.location.reload()
}

function updateTimer(){
    totalSeconds++;
    totalSecondsStr = totalSeconds.toString()
    totalSecondsStr = totalSecondsStr.padStart(2,'0')
    console.log(totalSecondsStr) 
    seconds.textContent = totalSecondsStr

    if(totalSeconds % 60 == 0){
        totalSeconds = 0
        totalMinutes++
        totalMinutesStr = totalMinutes.toString()
        totalMinutesStr = totalMinutesStr.padStart(2,'0')
        minutes.textContent = totalMinutesStr
    }
    
}