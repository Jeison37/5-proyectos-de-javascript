const resetBtn = document.getElementById("reset-btn")
const startBtn = document.getElementById("start-btn")
const turnBtn = document.getElementById("turn-btn")
const stopBtn = document.getElementById("stop-btn")
const min = document.querySelector(".min")
const sec = document.querySelector(".sec")
const turns = document.querySelector(".turns")


turnBtn.style.display = "none"
stopBtn.style.display = "none"
let secs = 0
let interval;
let nTurn = 1

startBtn.addEventListener("click", e =>{
    startBtn.style.display = "none"
    resetBtn.style.display = "none"

    turnBtn.style.display = "block"
    stopBtn.style.display = "block"

    interval = setInterval(()=>{
        secs++
        let minute = Math.floor(secs / 60)
        min.textContent = minute.toString().padStart(2,0) + ":"
        sec.textContent =( secs % 60).toString().padStart(2,0)
    }, 1000)
})

stopBtn.addEventListener("click", e =>{
    turnBtn.style.display = "none"
    stopBtn.style.display = "none"
    clearInterval(interval);
    startBtn.style.display = "block"
    resetBtn.style.display = "block"
})

resetBtn.addEventListener("click", e =>{
    clearInterval(interval);
    secs = 0
    min.textContent = "00:"
    sec.textContent = "00"
    turns.innerHTML = ""
    nTurn = 1
})

turnBtn.addEventListener("click", e =>{
    const time = document.querySelector(".digits").textContent
    const row = document.createElement("DIV")
    const i = document.createElement("SPAN")
    const instant = document.createElement("SPAN")
    i.textContent = nTurn++
    instant.textContent = time
    row.className = "flex justify-between px-6"
    row.appendChild(i)
    row.appendChild(instant)
    turns.appendChild(row)
})

