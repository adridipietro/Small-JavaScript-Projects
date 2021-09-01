const counter = document.querySelector('.counter')
let count = 0

document.querySelector('.start').addEventListener("click", this.handleClick)
document.querySelector('.stop').addEventListener("click", this.handleClick)



handleClick = (e) => {
    if (e.target.innerText == 'start'){
        count++
    } else if (e.target.innerText == 'stop'){
        count--
    } else {
        count = 0
    }
}