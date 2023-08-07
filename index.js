const inputField = document.querySelector(".input-field");
const checkBtn = document.querySelector(".check-btn");
const hintText = document.querySelector(".hint-text");
const scoreText = document.querySelector(".score-text");

let guessNumber = 0;
let score = 20;

const randomNumber = Math.floor(Math.random() * 20) + 1; // random number 1 - 20

inputField.addEventListener("input", (event) => {
  guessNumber = +event.target.value;
});

checkBtn.addEventListener("click", () => {
  if (randomNumber === guessNumber) {
    hintText.innerText = "CORRECT";

    checkBtn.setAttribute("disabled", true);
    inputField.setAttribute("disabled", true);
  } else if (guessNumber > randomNumber) {
    hintText.innerText = "TOO HIGH";
    score--;

    scoreText.innerText = score;
  } else if (guessNumber < randomNumber) {
    hintText.innerText = "TOO LOW";
    score--;
    scoreText.innerText = score;
  }
});
