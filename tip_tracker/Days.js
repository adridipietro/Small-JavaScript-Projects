const n = 31
const days = Array.from(Array(n + 1).keys()).slice(1)

const daysDropDown = document.querySelector("#day-dropdown")


days.forEach( day => {
    const option = document.createElement("option")
    option.value = day
    option.innerHTML = day
    daysDropDown.appendChild(option)

})

