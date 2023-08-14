// selecting required html elements
const startBtn = document.getElementById("startbtn");
const questContainer = document.getElementById("questTemp");
const questEl = document.getElementById("question");
const answerbtn = document.getElementById("answer-btns");
const startTemp = document.querySelector('.startCard')



// array containing questions
let questions = [
{
    question: "Commonly used data types DO NOT include:",
    answers: [
        { text: "strings", correct: false},
        { text: "booleans", correct: false},
        { text:"alerts", correct: true},
        { text:"numbers", correct: false},
    ]
},
{
    question: "The condition in an if / else statement is enclosed with ____.",
    answers: [
        { text: "quotes", correct: false},
        { text: "curly brackets", correct: true},
        { text: "paranthesis", correct: false},
        { text: "square brackets", correct: false},
    ]
},
{
    question: "Arrays in JavaScript can be used to store ____.",
    answers: [
        { text: "numbers andt strings", correct: false},
        { text: "other arrays", correct: false},
        { text: "booleans", correct: false},
        { text: "all of the above", correct: true},
    ]
},
{
    question: "String values must be enclosed within ____ when beaing assigned to variables.",
    answers: [
        { text: "comnmas", correct: false},
        { text: "curly brackets", correct: false},
        { text: "quotes", correct: true},
        { text: "paranthesis", correct: false},
    ]
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
        { text: "JavaScript", correct: false},
        { text: "terminal/bash", correct: false},
        { text: "for loops", correct: false},
        { text: "console.log", correct: true},
    ]
},


]

// variables to store defaults for question index, score, and timer
let currentQuestionIndex = 0;
let score = 0;



startBtn.addEventListener("click", startQuiz);
// hides start card and replaces with question card
function startQuiz() {
    startTemp.classList.add('hidden')
    questContainer.classList.remove('hidden')
// startTemp.classList.add('hidden');
// questContainer.classList.remove('hidden');
// currentQuestionIndex = 0;
// score = 0;
// showQuestion()
// 
}

// function showQuestion() {
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex = 1;
//     questEl.innerHTML = questionNo + "." + currentQuestion.question
//     console.log('sup')
// }