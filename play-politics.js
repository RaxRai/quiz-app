import { politics } from "/json/politics.js";

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterInner = document.getElementById("question-counter");
const scoreInner = document.getElementById("score");
//console.log(hardquestions);
console.log("play.js is running");
const POINTS = 20;
const MAX = 5;
let currQuestion = {};
let acceptAnswers = false;
let score = 0;
let questionCount = 0;
let availableQuestions = [];

const startQues = () => {
  questionCount = 0;
  score = 0;
  availableQuestions = [...politics];
  //console.log(availableQuestions);
  getNewQues();
};

const getNewQues = () => {
  if (availableQuestions.length === 0 || questionCount >= MAX) {
    console.log("Array empty");
    let highScore = localStorage.getItem("politicsHighScore");
    if (score > highScore) {
      localStorage.setItem("politicsHighScore", score);
    }
    localStorage.setItem("currScore", score);
    return window.location.assign("score.html");
  }
  questionCount++;
  questionCounterInner.innerText = `${questionCount}/${MAX}`;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  //   console.log(availableQuestions.length);
  //   console.log(questionIndex);
  currQuestion = availableQuestions[questionIndex];
  question.innerText = currQuestion.question;
  choices.forEach((choice) => {
    const num = choice.dataset["num"];
    choice.innerText = currQuestion["choice" + num];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    if (!acceptAnswers) {
      return;
    }
    acceptAnswers = false;
    const selectedChoice = event.target;
    const selectedAnswer = selectedChoice.dataset["num"];

    const applyClass =
      selectedAnswer == currQuestion.answer ? "correct" : "incorrect";
    if (applyClass === "correct") {
      score += POINTS;
      scoreInner.innerText = score;
    }
    selectedChoice.parentElement.classList.add(applyClass);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(applyClass);
    }, 1000);
    //console.log(applyClass);
    setTimeout(() => {
      getNewQues();
    }, 1000);
  });
});

startQues();
