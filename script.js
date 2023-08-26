// selecting required html elements
var startBtn = document.getElementById("startbtn");
var questContainer = document.getElementById("questTemp");
var questEl = document.getElementById("question");
var answerbtn = document.getElementById("answer-btns");
var startTemp = document.querySelector(".startCard");
var answerTracker = document.getElementById("ansResult");
var timer = document.getElementById("timer");
var resultsPage = document.getElementById("resultsPage");
var nameInput = document.getElementById("Name");
var submitter = document.getElementById('subBtn');
//var mostRecentScore = localStorage.getItem("mostRecentScore");
// array containing questions
const questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ],
  },
  {
    question: "The condition in an if / else statement is enclosed with ____.",
    answers: [
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: true },
      { text: "paranthesis", correct: false },
      { text: "square brackets", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answers: [
      { text: "numbers andt strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question:
      "String values must be enclosed within ____ when beaing assigned to variables.",
    answers: [
      { text: "comnmas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
      { text: "paranthesis", correct: false },
    ],
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "JavaScript", correct: false },
      { text: "terminal/bash", correct: false },
      { text: "for loops", correct: false },
      { text: "console.log", correct: true },
    ],
  },
];

// variables to store defaults for question index, score, and timer
var currentQuestionIndex = 0;
var userScore = 0;
var countDownSec = 75;
var interval;

// function made to clear timer and score after restart button
function resetTimer() {
  userScore = 0;
  countDownSec = 75;
}
// creates a state for when user runs out of time
function failTimerState() {
  clearInterval(timer);
  startTemp.classList.remove("hidden");
  questContainer.classList.add("hidden");
  document.getElementsByTagName("h1")[0].textContent = "OUT OF TIME";
  document.getElementsByTagName("p")[0].textContent =
    "Click the button below to try again!";
  startBtn.textContent = "RESTART";
}

//timer function
function setTime() {
  timer = setInterval(function () {
    document.getElementById("timer").innerHTML = "Time: " + countDownSec;
    countDownSec--;
    if (countDownSec <= -1) {
      failTimerState();
    }
  }, 1000);
}

// removes html answer buttons
function resetState() {
  while (answerbtn.firstChild) {
    answerbtn.removeChild(answerbtn.firstChild);
  }
}

startBtn.addEventListener("click", startQuiz);
// hides start card and replaces with question card
function startQuiz() {
  startTemp.classList.add("hidden");
  questContainer.classList.remove("hidden");
  currentQuestionIndex = 0;
  userScore = 0;
  resetTimer();
  setTime();
  showNextQuestion();
}

// inputs questions + answer buttons
function showNextQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  console.log(currentQuestion);
  questEl.innerHTML = questionNo + "." + currentQuestion.question;
  // functions replaces static answer buttons from HTML with JS answer buttons
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbtn.append(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectedAnswer);
    button.addEventListener("click", () => {
      currentQuestionIndex++;
      //questionNo++;
      console.log(questionNo);
      if (currentQuestionIndex < questions.length) {
        showNextQuestion();
      } else {
        //localStorage.setItem('mostRecentScore', userScore);
        showResultsPage();
      }
    });
  });
}

function showResultsPage() {
  clearInterval(timer);
  resultsPage.classList.remove("hidden");
  questContainer.classList.add("hidden");
 // localStorage.setItem('mostRecentScore', `${userScore}/100`);
  document.getElementById("finalScore").innerHTML =
    " Final Score:" + " " + `${userScore}/100`;
    //console.log(mostRecentScore)
}


// added function and event listener for answer buttons to count score and display whether answer was correct
function selectedAnswer(Event) {
  const selectedButton = Event.target;
  const correct = selectedButton.dataset.correct === "true";
  if (correct) {
    userScore += 20;
    ansResult.innerHTML = "Correct!";
    document.querySelector(".score").innerHTML =
      "Score:" + " " + `${userScore}/100`;
  } else {
    countDownSec -= 15;
    ansResult.innerHTML = "Wrong!";
    document.querySelector(".score").innerHTML =
      "Score:" + " " + `${userScore}/100`;
  }
}

// event listener enables submit btn once it recieves user input
nameInput.addEventListener('keyup', () => {
submitter.disabled = !nameInput.value;
})


// // event listener that adds functionality to 'submit' button
document.getElementById('scoreSubmission').addEventListener("submit", function (event) {
    event.preventDefault();
    saveHighScore();
   // displayHighScores();
});




var highScores = []; //JSON.parse(localStorage.getItem("userHighScore")) || [];
// // function that saves user Input for leaderboard
function saveHighScore() {
    var userHighScore = {
        score: userScore,
        user: nameInput.value
    }
    localStorage.setItem("userHighScore", JSON.stringify(userHighScore)) || [],
    highScores.push(userHighScore);
    }




