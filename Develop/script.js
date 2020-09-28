var startButton = document.getElementById('start-button')
var questionContainer = document.getElementById('question-form')
var startContainer = document.getElementById('start-form')

var questionElement = document.getElementById("question")
// var answers = document.getElementById("answer-button")
var answerOne = document.getElementById("answer1")
var answerTwo = document.getElementById("answer2")
var answerThree = document.getElementById("answer3")
var answerFour = document.getElementById("answer4")
var correct = document.getElementById("correct")
var wrong = document.getElementById("wrong")
var next = document.getElementById("next-container")
var currentQuestion;
var score = 0


var questions = [{
    question: "Who invented Java?",
    choices: [ "James Gosling", "Dennis Ritchie", "Brendan Eich", "Bjarne Stroustrup" ],
    correctAnswer: "James Gosling"
}, {
    question: "Who invented Javascript?",
    choices: [ "Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Brendan Eich" ],
    correctAnswer: "Brendan Eich"

}, {
    question: "When was Javascript Invented?",
    choices: ["October" + 2010, "September" + 1995, "August" + 1884, "February" + 1993],
    correctAnswer: 1995
}, {
    question: "Where was Java created?",
    choices: ["Bell Labs", "Microsoft", "Netscape", "Sun Microsystems"],
    correctAnswer: "Sun Microsystems"
}, {
    question: "Which is not an open source library?",
    choices: ["jQuery", "Prototype", "Python", "MooTools"],
    correctAnswer: "Python"
}, {
    question: "What is not a primitive data types?",
    choices: ["A String", "A Boolean", "An Object ", "An Integer"],
    correctAnswer: "An Object"
}, {
    question: "Who invented the World Wide Web?",
    choices: ["Vint Cerf", "Alan Turing", "Tim Berners-Lee", "Rosemary Leith"],
    correctAnswer: "Tim Berners-Lee"
}]


startButton.addEventListener('click', function(){
    startContainer.style.display = "none";
    questionContainer.style.display = "block";
    currentQuestion = 0
    setNextQuestion()
});

function setNextQuestion(){
    for (var i=0; i<questions.length; i++){
    showQuestion(questions[currentQuestion])
    showAnswers()
    }
}
next.addEventListener('click', function(){
    setNextQuestion(currentQuestion++)
    correct.style.display = "none"
    wrong.style.display = "none"
});

function showQuestion(question, questionContainer) {
    questionElement.innerText = question.question
}

function showAnswers() {
    var displayChoices = questions[currentQuestion].choices;

    for (var i=0; i<displayChoices.length; i++) {
        var choice = i+1;
        answerOne.textContent = displayChoices[0];
        answerTwo.textContent = displayChoices[1];
        answerThree.textContent = displayChoices[2];
        answerFour.textContent = displayChoices[3];
    }
}

answerOne.addEventListener('click', function(){
    if (questions[currentQuestion].choices[0] === questions[currentQuestion].correctAnswer)
    {
        correct.style.display = "block"
        next.style.display = "block"
        score ++
    } else {
        wrong.style.display = "block"
        next.style.display = "block"
    }
});
answerTwo.addEventListener('click', function(){
    if (questions[currentQuestion].choices[1] === questions[currentQuestion].correctAnswer)
    {
        correct.style.display = "block"
        next.style.display = "block"
        score ++
    } else {
        wrong.style.display = "block"
        next.style.display = "block"
    }
   
});
answerThree.addEventListener('click', function(){
    if (questions[currentQuestion].choices[2] === questions[currentQuestion].correctAnswer)
    {
        correct.style.display = "block"
        next.style.display = "block"
        score ++
    } else {
        wrong.style.display = "block"
        next.style.display = "block"
    }
   
});
answerFour.addEventListener('click', function(){
    if (questions[currentQuestion].choices[3] === questions[currentQuestion].correctAnswer)
    {
        correct.style.display = "block"
        next.style.display = "block"
        score ++
    } else {
        wrong.style.display = "block"
        next.style.display = "block"
    }
});
