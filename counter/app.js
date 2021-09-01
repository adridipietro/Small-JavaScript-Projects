let count = 0

const startButton = document.querySelector('.start')
const stopButton = document.querySelector('.stop')
const resetButton = document.querySelector('.reset')
const counter = document.querySelector('.counter')




startButton.addEventListener("click", () => {
    let newcount = 0
    for (let i = 0; i < 100; i++){
        newcount += count
    }

    document.querySelector('.start').setAttribute("disabled", "true")
    document.querySelector('.stop').removeAttribute("disabled")

    counter.textContent = newcount
    document.body.appendChild(counter)
})

stopButton.addEventListener("click", ()=> {
    
})

