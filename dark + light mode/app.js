const dark = document.querySelector('.dark')
const light = document.querySelector('.light')
const reset = document.querySelector('.reset')
const title = document.querySelector('.title')


function changeBackground(color){
    document.body.style.backgroundColor = color
}

function changeTitleColor(color){
    title.style.color = color
}

dark.addEventListener("click", () => { 
    changeBackground('black')
    changeTitleColor('white')
 })


light.addEventListener("click", () => { 
    changeBackground('white') 
    changeTitleColor('black')
})

reset.addEventListener("click", () => { 
    changeBackground('') 
    changeTitleColor('')
})