
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".color-button");
const color = document.querySelector(".color");
const title = document.querySelector('.title')

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  document.body.appendChild(title)
  document.body.appendChild(btn)
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  

});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}