let start = document.querySelector(".start");
let instructions = document.querySelector(".instructions");
let finalScreen = document.querySelector(".final");
let result = document.querySelector(".result");
let finalScore = document.querySelector(".finalScore");
let restart = document.querySelector(".restart");

let incorrectAnswers = document.querySelectorAll(".incorrect");
let correctAnswers = document.querySelectorAll(".correct");

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

//iterate over each option and add an event listener that will take you to the next question page. included a set timeout for the next question function so you can see the flash of red or green depending on if the answer is correct
options.forEach((option) => {
  option.addEventListener("click", () => setTimeout(nextQuestion, 500));
});

//hides the previous question and allows the next question to be displayed unless you have reached the last question and then it shows the final page
function nextQuestion() {
  previousQuestion = currentQuestion;
  currentQuestion++;
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

//calculates score only if the button pressed is the correct answer
function calculateScore(e) {
//   console.log(e.target.classList.value);
  if (e.target.classList.value === "options correct") {
    score += 1;
    if (score === 0) {
      finalScore.innerText = `You knew ${score}/10 memes!`;
      result.innerText =
        "Seems like Reality TV isn't your thing. I'm not judging but maybe you should go back to living under your rock.";
    } else if (score === 1) {
      finalScore.innerText = `You knew ${score}/10 memes!`;
      result.innerText =
        "Seems like Reality TV isn't your thing. I'm not judging but maybe you should go back to living under your rock.";
    } else if (score === 2) {
      finalScore.innerText = `You knew ${score}/10 memes!`;
      result.innerText =
        "Seems like Reality TV isn't your thing. I'm not judging but maybe you should go back to living under your rock.";
    } else if (score === 3) {
      finalScore.innerText = `You knew ${score}/10 memes!`;
      result.innerText =
        "You've watched some Reality TV but there is so much more to discover! Go binge watch some Jersey Shore or Love is Blind and feel better about yourself.";
    } else if (score === 4) {
      finalScore.innerText = `You knew ${score}/10 memes!`;
      result.innerText =
        "You've watched some Reality TV but there is so much more to discover! Go binge watch some Jersey Shore or Love is Blind and feel better about yourself.";
    } else if (score === 5) {
      finalScore.innerText = `You knew ${score}/10 memes!`;
      result.innerText =
        "You've watched some Reality TV but there is so much more to discover! Go binge watch some Jersey Shore or Love is Blind and feel better about yourself.";
    } else if (score === 6) {
      finalScore.innerText = `You knew ${score}/10 memes!`;
      result.innerText =
        "Okay you Reality TV show fan! You definitely know which Kardashian is which! Keep up with the drama and you'll be on your way to being an expert.";
    } else if (score === 7) {
      finalScore.innerText = `You knew ${score}/10 memes!`;
      result.innerText =
        "Okay you Reality TV show fan! You definitely know which Kardashian is which! Keep up with the drama and you'll be on your way to being an expert.";
    } else if (score === 8) {
      finalScore.innerText = `You knew ${score}/10 memes!`;
      result.innerText =
        "Okay you Reality TV show fan! You definitely know which Kardashian is which! Keep up with the drama and you'll be on your way to being an expert.";
    } else if (score === 9) {
      finalScore.innerText = `You knew ${score}/10 memes!`;
      result.innerText =
        "Hello there you Reality TV Show expert! Let's be friends and talk about our favorite shows together!";
    } else if (score === 10) {
      finalScore.innerText = `You knew ${score}/10 memes!`;
      result.innerText =
        "Hello there you Reality TV Show expert! Let's be friends and talk about our favorite shows together!";
    }
  }
}

//restarts the trivia at the first question
restart.addEventListener("click", () => {
  score = 0;
  currentQuestion = 0;
  previousQuestion = 0;
  finalScreen.style.display = "none";
  question[currentQuestion].style.display = "block";
  //instructions.style.display = "block";
  //removes the background color of the buttons on the previous try
  options.forEach((option) => {
    option.style.backgroundColor = "";
  });
});

//adds a red background color for incorrect answers
incorrectAnswers.forEach((incorrect) => {
  incorrect.addEventListener("click", () => {
    incorrect.style.backgroundColor = "red";
  });
});

//adds a green background color for correct answers
correctAnswers.forEach((correct) => {
  correct.addEventListener("click", () => {
    correct.style.backgroundColor = "green";
  });
});
