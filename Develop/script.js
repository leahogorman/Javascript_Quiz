var startButton = document.getElementById('start-button')
var questionContainer = document.getElementById('question-form')
var startContainer = document.getElementById('start-form')

var questionElement = document.getElementById("question")
// var answers = document.getElementById("answers")
// var answerOne = document.getElementById("answer1")
// var answerTwo = document.getElementById("answer2")
// var answerThree = document.getElementById("answer3")
// var answerFour = document.getElementById("answer4")
var score = 0

startButton.addEventListener('click', function(){
    startContainer.style.display = "none";
    questionContainer.style.display = "block";
    currentQuestion = 0
    setNextQuestion()
});

function setNextQuestion(){
    showQuestion(questions[currentQuestion])
}

function showQuestion(question, questionContainer) {
    questionElement.innerText = question.question
}

function showAnswers() {}
    var displayChoices = questions[currentQuestion].choices;
    choices.innerHTML = ""
    for (var i=0; i<displayChoices.length; i++) {


    }
}









// // var questions = []
// // var score = 0;


// for (var i=0; i <questions.length; i++) {
//     var response = window.prompt(questions[i].prompt);
//     if(response === questions[i].answer){
//         score++
//         alert("Correct!");
//     } else {
//         alert ("Wrong!");
//     }
// }
// alert ("you got" + score + "/" + question.length)


    var questions = [{
        question: "who invented Java?",
        choices: [ "James Gosling", "Dennis Ritchie", "Brendan Eich", "Bjarne Stroustrup" ],
        correctAnswer: "James Gosling"
    }, {
        question: "who invented Javascript?",
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