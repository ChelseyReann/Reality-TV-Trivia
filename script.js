let start = document.querySelector(".start")
let instructions = document.querySelector(".instructions")
//question returns an array
let question = document.querySelectorAll(".question")

//these variables store the current & previous question index in the auestion array
let currentQuestion = 0
let previousQuestion = 0


start.addEventListener("click", startGame)
function startGame(){
    question[currentQuestion].style.display = "block"
    instructions.style.display = "none"
}