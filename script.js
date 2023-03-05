const questionE1 = document.getElementById("question");
const inputE1 = document.getElementById("input");
const formE1 = document.getElementById("form");
const scoreE1 = document.getElementById("score");
const overlayE1 = document.getElementById("overlay");
const newGameButton = document.getElementById("new-game");

let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
let correctAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreE1.innerText = `score: ${score}`;

questionE1.innerText = `Combien fait ${num1} multiplier par ${num2}?`;

formE1.addEventListener("submit", (event) => {
  event.preventDefault();
  const userAns = +inputE1.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
    if (score === 5) {
      overlayE1.classList.add("active");
      
      overlayE1.appendChild(gifE1);
    }
    if (score % 15 === 0) {
      score = 0;
      localStorage.setItem("score", JSON.stringify(score));
      scoreE1.innerText = `score: ${score}`;
      overlayE1.classList.remove("active");
    }
  } else {
    score--;
    updateLocalStorage();
  }
  scoreE1.innerText = `score: ${score}`;
  num1 = Math.ceil(Math.random() * 10);
  num2 = Math.ceil(Math.random() * 10);
  correctAns = num1 * num2;
  questionE1.innerText = `Combien fait ${num1} multiplier par ${num2}?`;
  inputE1.value = "";
  inputE1.focus();
});

document.addEventListener("click", function () {
  if (overlayE1.classList.contains("active")) {
    overlayE1.classList.remove("active");
    score = 0;
    localStorage.setItem("score", JSON.stringify(score));
    scoreE1.innerText = `score: ${score}`;
  }
});

newGameButton.addEventListener("click", () => {
  score = 0;
  localStorage.setItem("score", JSON.stringify(score));
  scoreE1.innerText = `score: ${score}`;
  overlayE1.classList.remove("active");
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}