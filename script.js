let start = document.querySelector(".start")
let instructions = document.querySelector(".instructions")
 
//question & options return an array
let question = document.querySelectorAll(".question")
let options = document.querySelectorAll(".options")

//these variables store the current & previous question index in the question array
let currentQuestion = 0
let previousQuestion = 0

let score = 0
let answers = document.querySelectorAll(".answers")

//once the start button is clicked, the first question is shown on the page
start.addEventListener("click", startGame)
function startGame(){
    question[currentQuestion].style.display = "block"
    instructions.style.display = "none"
}

//iterate over each option and add an event listener that will take you to the next question page
options.forEach((option) => {
    option.addEventListener("click", nextQuestion)
})

//hides the previous question and allows the next question to be displayed
function nextQuestion(){
    previousQuestion = currentQuestion
    currentQuestion++
    question[previousQuestion].style.display = "none"
    question[currentQuestion].style.display = "block"
}

//iterate through each of the buttons to calculate score if the correct option has been clicked
options.forEach((option) =>{
    option.addEventListener("click", calculateScore)
})
function calculateScore (e){
    console.log(e.target.classList.value)
    if(e.target.classList.value === "options correct"){
        score += 10
        console.log(score)
    } else {
        console.log(score)
    }
}