const currInner = document.getElementById("curr-score");
const redirectInner = document.getElementById("redirect");
const csHighInner = document.getElementById("high-score-cs");
let cshighScore = localStorage.getItem("csHighScore");
const politicsHighInner = document.getElementById("high-score-politics");
let politicsHighScore = localStorage.getItem("politicsHighScore");
const sportsHighInner = document.getElementById("high-score-sports");
let sportshighScore = localStorage.getItem("sportsHighScore");
let currScore = localStorage.getItem("currScore");

//console.log(currScore + "raja");

if (currScore !== null) {
  currInner.innerText = `Current Score : ${currScore}`;
} else {
  currInner.innerText = `You have not attempted`;
}

csHighInner.innerText = `Computer Science High Score : ${cshighScore}`;
sportsHighInner.innerText = `Sports High Score : ${sportshighScore}`;
politicsHighInner.innerText = `Politics High Score : ${politicsHighScore}`;

reDir = () => {
  setTimeout(() => {
    redirectInner.innerText = `Redirect to homepage ... ... ...`;
  }, 1000);
  setTimeout(() => {
    return window.location.assign("index.html");
  }, 3000);
};

reDir();
