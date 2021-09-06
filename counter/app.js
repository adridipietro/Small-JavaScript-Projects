let count = 0

const upButton = document.querySelector('.up')
const downButton = document.querySelector('.down')
const resetButton = document.querySelector('.reset')
const counter = document.querySelector('.counter')




upButton.addEventListener("click", () => {
    count++
    counter.innerHTML = count
    if (count > 0) {
        counter.style.color = "magenta"
    }
})

downButton.addEventListener("click", ()=> {
    count--
    counter.innerHTML = count
    if (count < 0) {
        counter.style.color = "orange"
    }
})

resetButton.addEventListener("click", () => {
    count = 0
    counter.innerHTML = count
    if (count === 0) {
        counter.style.color = "black"
    }
})



  
 
