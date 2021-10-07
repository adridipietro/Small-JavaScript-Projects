const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const monthDropDown = document.querySelector('#month-dropdown')

months.forEach(month => {
    const option = document.createElement("option")
    option.innerHTML = month
    option.value = month

    monthDropDown.appendChild(option)
})