// Containers Variables
var questionContainer = document.getElementById('question-form')
var startContainer = document.getElementById('start-form')
var endContainer = document.getElementById("end-form")
// Button Variables
var startButton = document.getElementById('start-button')
var answerOne = document.getElementById("answer1")
var answerTwo = document.getElementById("answer2")
var answerThree = document.getElementById("answer3")
var answerFour = document.getElementById("answer4")
var nextButton = document.getElementById("next-button")
// Question Container Elements
var questionElement = document.getElementById("question")
var correct = document.getElementById("correct")
var wrong = document.getElementById("wrong")
var currentQuestion;
// Timer Elements
var startingTime = 1;
var time = startingTime * 60;
var timer = document.getElementById("timer");
// Score Elements
var score = 0;
var endScore = document.getElementById("end-score")
var scoreContainer = document.getElementById("score")

// Questions Array
var questions = [{
    question: "Who invented Java?",
    choices: [ "James Gosling", "Dennis Ritchie", "Brendan Eich", "Bjarne Stroustrup" ],
    correctAnswer: "James Gosling"
}, {
    question: "When was Javascript Invented?",
    choices: ["October " + 2010, "September " + 1995, "August " + 1884, "February " + 1993],
    correctAnswer: "September " + 1995
}, {
    question: "Who invented Javascript?",
    choices: [ "Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Brendan Eich" ],
    correctAnswer: "Brendan Eich"

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
    choices: ["A String", "A Boolean", "An Object", "An Integer"],
    correctAnswer: "An Object"
}, {
    question: "Who invented the World Wide Web?",
    choices: ["Vint Cerf", "Alan Turing", "Tim Berners-Lee", "Rosemary Leith"],
    correctAnswer: "Tim Berners-Lee"
}]

// Start Button Event
startButton.addEventListener('click', function(){
    startContainer.style.display = "none";
    questionContainer.style.display = "block";
    currentQuestion = 0
    setNextQuestion()
    updateCountdown()
    setInterval(updateCountdown, 1000);
    function updateCountdown () {
    let seconds = time % 60;
    timer.innerHTML = `Time Left: ${seconds}`;
    time--;
    if (time<=-2) {
        questionContainer.style.display = "none";
        endContainer.style.display = "block";
        nextButton.style.display = "none"
        endScore.innerText = "Your Score: " + score
    }
}
});

// Questions Functions
function setNextQuestion(){
    showQuestion(questions[currentQuestion])
    showAnswers()
    scoreContainer.innerText = "Score: " + score
    endGame()
}
function showQuestion(question, questionContainer) {
    questionElement.innerText = question.question
}

// Connecting the Answer Options to Buttons
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
        correct.style.display = "block";
        nextButton.style.display = "block";
        score++;
    } else {
        wrong.style.display = "block";
        nextButton.style.display = "block";
    }
});
answerTwo.addEventListener('click', function(){
    if (questions[currentQuestion].choices[1] === questions[currentQuestion].correctAnswer)
    {
        correct.style.display = "block";
        nextButton.style.display = "block";
        score++;
    } else {
        wrong.style.display = "block";
        nextButton.style.display = "block";
    }
});
answerThree.addEventListener('click', function(){
    if (questions[currentQuestion].choices[2] === questions[currentQuestion].correctAnswer)
    {
        correct.style.display = "block";
        nextButton.style.display = "block";
        score++;
    } else {
        wrong.style.display = "block";
        nextButton.style.display = "block";
    }
});
answerFour.addEventListener('click', function(){
    if (questions[currentQuestion].choices[3] === questions[currentQuestion].correctAnswer)
    {
        correct.style.display = "block";
        nextButton.style.display = "block";
        score++;
    } else {
        wrong.style.display = "block";
        nextButton.style.display = "block";
    }
});

// Next Button Event
nextButton.addEventListener('click', function(){
    setNextQuestion(currentQuestion++)
    correct.style.display = "none"
    wrong.style.display = "none"
    nextButton.style.display = "none"
});

// End Game Function
function endGame(){
if (currentQuestion === questions.length-1) {
    nextButton.addEventListener('click', function(){ 
        questionContainer.style.display = "none";
        endContainer.style.display = "block";
        nextButton.style.display = "none";
        endScore.innerText = "Your Score: " + score;
    })
}
}
