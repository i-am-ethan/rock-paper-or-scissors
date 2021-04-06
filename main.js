//get HTML Elements
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const you = document.getElementById("you");
const me = document.getElementById("me");
const result = document.getElementById("result");

// random
const random = Math.floor(Math.random() * 3);

// Array
let contents = [" ROCK", " SCISSORS", " PAPER"];
let randomEle = contents[random];
console.log(randomEle);

rockBtn.addEventListener("click", () => {
  you.textContent = " ROCK";
  me.textContent = randomEle;

  switch (randomEle) {
    case " ROCK":
      result.textContent = " TIE";
      break;
    case " SCISSORS":
      result.textContent = " WIN";
      break;
    case " PAPER":
      result.textContent = " LOSE";
      break;
  }
});
paperBtn.addEventListener("click", () => {
  you.textContent = " PAPER";
  me.textContent = randomEle;

  switch (randomEle) {
    case " ROCK":
      result.textContent = " WIN";
      break;
    case " SCISSORS":
      result.textContent = " LOSS";
      break;
    case " PAPER":
      result.textContent = " TIE";
      break;
  }
});
scissorsBtn.addEventListener("click", () => {
  you.textContent = " SCISSORS";
  me.textContent = randomEle;

  switch (randomEle) {
    case " ROCK":
      result.textContent = " LOSS";
      break;
    case " SCISSORS":
      result.textContent = " TIE";
      break;
    case " PAPER":
      result.textContent = " WIN";
      break;
  }
});
