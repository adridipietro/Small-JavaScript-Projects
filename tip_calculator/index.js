// Select bill total using query selector and assign to variable
const billTotal = document.querySelector('.bill-total')

// Select tip percentage using query selector and assign to var
const tipPercentage = document.querySelector('#tip-percentage')

// onSelect set selected tip percentage amount
const selectedTipPercentage = document.querySelector('#tip-percentage').value

// create simple formula to generate tip amount based on tip percentage and bill total
// and assign to variable
const tipAmount = selectedTipPercentage * billTotal 

// create simple formular to retrieve sum of tipAmount plus the billTotal
const newTotal = tipAmount + billTotal
