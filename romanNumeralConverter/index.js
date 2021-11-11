const results = document.getElementById("results")
//const submitButton = document.querySelector(".submit")
let inputField = document.querySelector("#roman-numeral")

const isRoman = (string) => {
    // regex pattern
    const pattern = /^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/
    return pattern.test(string);
};


inputField.addEventListener("input", (e) => {
     
    let symbols = {
        "I": 1,
        "V": 5, 
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    var input = e.target.value

    if (isRoman(input)){
        var array = input.split("")
        var total = 0
        //debugger
        for (let i = 0; i < array.length; i++){
            console.log(array[i])
            console.log(total)
            symbols[array[i]] < symbols[array[i+1]] ? total -= symbols[array[i]]: total += symbols[array[i]]
        }
        //console.log(total)
        //debugger
        // creating a li element for each result item
        const resultItem = document.createElement('li')
        // adding a class to each item of the results
        resultItem.classList.add('result-item')
        // grabbing the total of the current point of the loop and adding the name as the list item's text
        const text = document.createTextNode(e.target.value + '' + '' + '=' + '' + total)
        // appending the text to the result item
        resultItem.appendChild(text)
        // appending the result item to the list
        results.appendChild(resultItem)
    } else {
        const errorMessage = document.createElement('li')
        errorMessage.classList.add("error")
        const errorText = document.createTextNode('Sorry - Invalid Input. Try Again!')
        errorMessage.appendChild(errorText)
        results.appendChild(errorMessage)
    }
   
    

    

})