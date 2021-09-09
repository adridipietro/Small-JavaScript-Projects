const form = document.querySelector('.form')
const submitButton = document.querySelector('.submit-button')
//const spade = document.querySelector('.spade')
const spadesContainer = document.querySelector('.spades-container')
const input = document.querySelector('.content-input')

const counter = document.querySelector('.counter')

let count = 0




form.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputValue = input.value
    const id = new Date().getTime().toString()

    const element = document.createElement("article")
    let attribute = document.createAttribute("data-id")
    attribute.inputValue = id

    element.setAttributeNode(attribute)
    element.classList.add("spade")

    element.innerText = `
        ${inputValue}
    `

    const likeButton = document.createElement("button")
    likeButton.innerText = "like"
    likeButton.addEventListener("click", () => {
       count++
    })

    counter.innerText = count
    element.appendChild(counter)
    

    
    element.appendChild(likeButton)

    spadesContainer.appendChild(element)
    form.reset()
})