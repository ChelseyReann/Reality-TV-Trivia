let start = document.querySelector(".start");
let instructions = document.querySelector(".instructions");
let finalScreen = document.querySelector(".final");
let result = document.querySelector(".result")
let finalScore = document.querySelector(".finalScore")

//question & options return an array
let question = document.querySelectorAll(".question");
let options = document.querySelectorAll(".options");

//these variables store the current & previous question index in the question array
let currentQuestion = 0;
let previousQuestion = 0;

//creating a variable to set the starting score to 0
let score = 0;

//once the start button is clicked, the first question is shown on the page
start.addEventListener("click", startGame);
function startGame() {
  question[currentQuestion].style.display = "block";
  instructions.style.display = "none";
}

//iterate over each option and add an event listener that will take you to the next question page
options.forEach((option) => {
  option.addEventListener("click", nextQuestion);
});

//hides the previous question and allows the next question to be displayed unless you have reached the last question and then it shows the final page
function nextQuestion() {
  previousQuestion = currentQuestion
  currentQuestion++
  if (currentQuestion === question.length) {
    question[previousQuestion].style.display = "none";
    finalScreen.style.display = "block";
  } else {
    question[previousQuestion].style.display = "none";
    question[currentQuestion].style.display = "block";
  }
}

//iterate through each of the buttons to calculate score if the correct option has been clicked
options.forEach((option) => {
  option.addEventListener("click", calculateScore);
});
function calculateScore(e) {
  console.log(e.target.classList.value);
  if (e.target.classList.value === "options correct") {
    score += 10;
    console.log(score);
    if (score === 0){
        result.innerText = "You're a Reality TV Show novice. Go watch some trash TV. Any trash TV. Please."
    } else if (score === 10){
        result.innerText = "You're a Reality TV Show novice. Go watch some trash TV. Any trash TV. Please."
    } else if (score === 20){
        result.innerText = "You're a Reality TV Show beginner. Please go binge watch Jersey Shore or Love is Blind and feel better about yourself."
    } else if (score === 30){
        result.innerText = "You're a Reality TV Show beginner. Please go binge watch Jersey Shore or Love is Blind and feel better about yourself."
    } else if (score === 40){
        result.innerText = "You're a Reality TV Show newcomer. Go watch some more trash TV. Please."
    } else if (score === 50){
        result.innerText = "You're a Reality TV Show newcomer. Go watch some more trash TV. Please."
    } else if (score === 60){
        result.innerText = "You're a Reality TV Show fan. Go watch some more trash TV. Please."
    } else if (score === 70){
        result.innerText = "You're a Reality TV Show fan. Go watch some more trash TV. Please."
    } else if (score === 80){
        result.innerText = "You're a Reality TV Show expert! Let's talk about out favorite shows together!"
    } else if (score === 90){
        result.innerText = "You're a Reality TV Show expert. Let's talk about our favorite shows together!"
    } else if (score === 100) {
        result.innerText = "You're a Reality TV Show connoisseur! Let's talk about our favorite shows together!"
    }
  } else {
    console.log(score);
  }
}

// function showScore(){
//     if (score === 0){
//         console.log("You're a Reality TV Show novice. Go watch some trash TV. Any trash TV. Please.")
//     } else if (score === 10){
//         console.log("You're a Reality TV Show novice. Go watch some trash TV. Any trash TV. Please.")
//     } else if (score === 20){
//         console.log("You're a Reality TV Show beginner. Please go binge watch Jersey Shore or Love is Blind and feel better about yourself.")
//     } else if (score === 30){
//         console.log("You're a Reality TV Show beginner. Please go binge watch Jersey Shore or Love is Blind and feel better about yourself.")
//     } else if (score === 40){
//         console.log("You're a Reality TV Show newcomer. Go watch some more trash TV. Please.")
//     } else if (score === 50){
//         console.log("You're a Reality TV Show newcomer. Go watch some more trash TV. Please.")
//     } else if (score === 60){
//         console.log("You're a Reality TV Show fan. Go watch some more trash TV. Please.")
//     } else if (score === 70){
//         console.log("You're a Reality TV Show fan. Go watch some more trash TV. Please.")
//     } else if (score === 80){
//         console.log("You're a Reality TV Show expert! Let's talk about out favorite shows together!")
//     } else if (score === 90){
//         console.log("You're a Reality TV Show expert. Let's talk about our favorite shows together!")
//     } else if (score === 100) {
//         console.log("You're a Reality TV Show connoisseur! Let's talk about our favorite shows together!")
//     }
// }
//  showScore()

