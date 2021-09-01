let count = 0

const startButton = document.querySelector('.start')
const stopButton = document.querySelector('.stop')
const resetButton = document.querySelector('.reset')
const counter = document.querySelector('.counter')

startButton.addEventListener("click", () => {
    const seconds = setInterval(() => {
        count => count + 1
    }, 1000)
    
    document.querySelector('.start').setAttribute("disabled", "true")
    document.querySelector('.stop').removeAttribute("disabled")

    counter.innerText = seconds
})

stopButton.addEventListener("click", ()=> {
    clearInterval(0)
})