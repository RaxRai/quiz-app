const csHighInner = document.getElementById("high-score-1");
let csHighScore = localStorage.getItem("csHighScore");
const sportsHighInner = document.getElementById("high-score-2");
let sportsHighScore = localStorage.getItem("sportsHighScore");
const politicsHighInner = document.getElementById("high-score-3");
let politicsHighScore = localStorage.getItem("politicsHighScore");
//console.log(highScore);
//highInner.innerText = `High Score : ${highScore}`;

if (csHighScore !== null) {
  csHighInner.innerText = `High Score : ${csHighScore}`;
} else {
  csHighInner.innerText = `Not Attempted`;
}

if (sportsHighScore !== null) {
  sportsHighInner.innerText = `High Score : ${sportsHighScore}`;
} else {
  sportsHighInner.innerText = `Not Attempted`;
}

if (politicsHighScore !== null) {
  politicsHighInner.innerText = `High Score : ${politicsHighScore}`;
} else {
  politicsHighInner.innerText = `Not Attempted`;
}
