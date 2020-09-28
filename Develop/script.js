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
    question: "What is a string used for in Javascript?",
    choices: ["to store a series of characters", "to store multiple groups of characters", "when called it performs a particular task", "I have no idea"],
    correctAnswer: "to store a series of characters"
}, {
    question: "What is not a primitive data types?",
    choices: ["A String", "A Boolean", "An Object ", "An Integer"],
    correctAnswer: "An Object"
}, {
    question: "What is not a primitive data types?",
    choices: ["A String", "A Boolean", "An Object ", "An Integer"],
    correctAnswer: "An Object"
}, {
    question: "What is the difference between let and const?",
    choices: ["Nothing they can be used interchangeably", "They are both block scoped", "let variables can be updated, const can't", "const variables can be updated, let can't"],
    correctAnswer: "let variables can be updated, const can't"
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
    setNextQuestion()
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

