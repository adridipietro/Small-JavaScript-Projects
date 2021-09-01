const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
// array of numbers + letters set to a constant "hex"
const btn = document.querySelector(".color-button")
// setting constant button to the document's element with the class name of "color-button"
const color = document.querySelector(".color")
// setting constant button to the document's element with the class name of "color"
const title = document.querySelector('.title')
// setting constant button to the document's element with the class name of "title"

btn.addEventListener("click", function () {
  let hexColor = "#"
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]
  }

  // event listener that listens for a click, takes in an anonymous function 
  // set var hexColor with '#'
  // for loop: initialized i = 0; as long as i is less than 6 ; increment  
  // generate random hex color as long as the conditions are met. 


  document.body.appendChild(title)
  document.body.appendChild(btn)
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor
  // append title element + button element to the page after generating random color
  // put the value of the random color into text onto the page
  // change the background of the document to the hexColor
  

});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length)
  // function that generates randomization of numbers + letters
}