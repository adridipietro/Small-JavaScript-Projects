const form = document.querySelector('.form')
const resultsContainer = document.querySelector('.results-container')
const ul = document.querySelector('.list')

const totalTips = document.querySelector('#total-tips')
const totalHours = document.querySelector('#total-hours')
const hourlyWage = document.querySelector('#hourly-wage')

form.onsubmit = function(){
    if (totalTips < 0 || totalHours < 0 || hourlyWage < 0){
        const p = document.createElement("p")
        resultsContainer.appendChild(p)
        p.innerHTML = "Sorry, no negative numbers."
    } else {
        const li = document.createElement("li")
        li.innerText = `
            You made $${totalTips.value} tips in ${totalHours.value} and $${hourlyWage.value} in hourly wage.
        `
        ul.appendChild(li)
    }
}