const form = document.querySelector(".grocery-form")
const grocery = document.getElementById("grocery")
const submitBtn = document.querySelector(".submit-button")
const container = document.querySelector(".grocery-container")
const list = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const groceryItem = grocery.value
    const id = new Date().getTime().toString()

    const element = document.createElement("article")
    let attr = document.createAttribute("data-id")
    attr.groceryItem = id 

    element.setAttributeNode(attr)
    element.classList.add("grocery-item")

    element.innerHTML = `
        <li class="grocery-item">${groceryItem}</li>
    
    `

    list.appendChild(element)
    addToLocalStorage(id, groceryItem)

    form.reset()
})

clearBtn.addEventListener("click", ()=> {
    const items = document.querySelectorAll(".grocery-item");
        if (items.length > 0) {
            items.forEach(function (item) {
                list.removeChild(item);
    })
  }
})


function addToLocalStorage(id, groceryItem) {
    const grocery = { id, groceryItem };
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
  }
  
  function getLocalStorage() {
    return localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];
  }