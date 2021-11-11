//const results = document.getElementById("results")
const submitButton = document.querySelector(".submit")

const isRoman = (string) => {
    // regex pattern
    const pattern = /^(M{1,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|C?D|D?C{1,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|X?L|L?X{1,3})(IX|IV|V?I{0,3})|M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|I?V|V?I{1,3}))$/
    return pattern.test(string);
};


submitButton.addEventListener("click", () => {
    const input = document.querySelector("#roman-numeral").value
    input.toUpperCase()

    if (input.isRoman()){
        let array = input.split("")
        let total = 0
    
        for (let i = 0; i < array.length; i++){
            const item = array[i]
            console.log(item)
            console.log(total)
        }
    } else {
        return 'Sorry!'
    }
    

    

})