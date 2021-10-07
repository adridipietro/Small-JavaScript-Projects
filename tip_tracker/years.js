const years = [2020, 2021, 2022]

const yearDropDown = document.querySelector("#year-dropdown")


years.forEach(year => {
    const option = document.createElement("option")
    option.value = year
    option.innerHTML = year
    yearDropDown.appendChild(option)

})