# Javascript Quiz
# Description
    For this project we were asked to create a Javascript Quiz that, when the user clicked the start button, would send them through a list of questions to guess the answer to. On top of this we needed to tell the user if their answers were correct or incorrect and tabulate a score based on their answers. The quiz also had to include a timer and had to save the name and score to Local Storage
# HTML and CSS
    For this project some HTML and CSS were given to us from the start, These were then added to/adjusted to work for my needs for the project.
# Javascript/jQuery
    START BUTTON
    For this project I created a start button onclick function that would start the questions. In order to do this the start page had to disappear and be replaced by the question page. It also had to start the timer and start tabulating the score at this point.
    SCORE 
    The score is tabulated using if else statements. So if the button chosen has the correct answer in it the correct label will pop up and a point will be added. Otherwise the wrong button will pop up.
    TIMER
    The timer uses an update function so that it is constantly counting down. Once it reaches 0 endGame is triggered.
    QUESTIONS/ANSWERS
    The questions and answers were all part of an array that is connected to a for loop that loops through the questions and answers and assigns each answer to a specific button. This then connects to a next button. So when an answer is chosen "correct" or "wrong" appears and a "next" button that allows the user to move to the next question in the array.
    END SCREEN
    The end screen pops up if either the timer runs out, or if all the questions are answered. If all the questions are answered, the next button triggers the endGame function which pulls up the final page
    SAVE
    For local storage the Enter Name Here textarea allows you to enter your name. On submit, that information, and the score are sent to local Storage. The last player info is also pulled from Local Storage and visible below.
# Aids
    This project was done with research via W3Schools and MDN WebDocs
    https://www.w3schools.com/jsref/prop_win_localstorage.asp
    https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
# Collaborators
    While this was done individually it was done with instruction from Fil and Daniel.
    https://github.com/c0dehot
    https://github.com/shibeknight
    Also aid from Ask BCS Learning Assistants
# Links
The Links to the GITHUB site and the Live site are
https://github.com/leahogorman/Javascript_Quiz
https://leahogorman.github.io/Javascript_Quiz/