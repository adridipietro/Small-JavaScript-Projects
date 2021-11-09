const results = document.querySelector("#results")
const submitButton = document.querySelector(".submit")


submitButton.addEventListener("click", () => {
    const input = document.querySelector("#roman-numeral").value
    
    if (input.toUpperCase().includes("I", "V", "X", "L", "C", "D", "M")){
        let array = input.split("")
        let total = 0
    
        for (let i = 0; i < array.length; i++){
            
        }
    } else {
        return 'Sorry!'
    }
    

    

})