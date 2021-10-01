// Select bill total using query selector and assign to variable
const billTotal = document.querySelector('#bill-total')

// Select tip percentage using query selector and assign to variable
const tipPercentage = document.querySelector('#tip-percentage')

// Select tip form element and assign to variable
const tipForm = document.querySelector('.tip-form')

// Using event listener + handler "onchange", set to anonymous function...
tipForm.onchange = function(){

    // Select selected tip percentage's value and assign to variable
    const selectedTipPercentage = document.querySelector('#tip-percentage').value
    
    // create simple formula to generate tip amount based on tip percentage and bill total
    // and assign to variable
    const tipAmount = Number(selectedTipPercentage) * Number(billTotal.value)
    
    // create simple formular to retrieve sum of tipAmount plus the billTotal
    const newTotal = tipAmount + Number(billTotal.value)
    
    //Change the innerHTML of both classes below and interpolate calculated amount
    document.querySelector('.tip-amount').innerHTML = `Amount (in dollars) you should tip: $${tipAmount.toFixed(2)}`
    document.querySelector('.tip-plus-total').innerHTML = `Amount total (including tip): $${newTotal.toFixed(2)}`

    if (billTotal.value < 0 ) {
        document.querySelector('.tip-amount').innerHTML = `Sorry, No Negative Numbers!`
        document.querySelector('.tip-plus-total').innerHTML = `Try Again!`
    }

}

