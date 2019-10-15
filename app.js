// Var
var start = document.getElementById("start");
var intro = document.getElementById("intro");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var qImg = document.getElementById("qImg");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var yourScore = document.getElementById("yourScore");
var finalScore = document.getElementById("finalScore");

var addBtn = document.getElementById("add-btn");
var name = document.getElementById("name");
var mostRecentScore = localStorage.getItem("mostRecentScore");
const MAX_HIGH_SCORES = 5;

var finalQuestion = questions.length - 1;
var currentQuestion = 0;
var score = 0;

//Timer var
var timer = document.getElementById("timer");
var start = document.getElementById("start");
var display = document.getElementById("display");
var score = "";

//function setTime()
// var minutes = minutesDisplay.value.trim();
function startTimer() {
  timer = 5 * questions.length;
  setInterval(function() {
    timer--;
    if (timer >= 0) {
      count = document.getElementById("count");
      count.innerHTML = timer;
    }
    if (timer === 0) {
      alert("You're out of time!");
      clearInterval(timer);
      showScore();
    }
  }, 1000);
}

// show a question
function showQuestion() {
  var q = questions[currentQuestion]; //making the index set at 0 will need loop
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.textContent = q.choiceD;
}

function startQuiz() {
  // hide start button

  start.style.display = "none";
  intro.style.display = "none";
  // show questions
  showQuestion();
  //change display from none to visible

  quiz.style.display = "block";
  highScores.style.display = "block";
  // start timeer
}

// make score and check anser

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].correct) {
    score++;
  } else {
    timer -= 10;
  }
  if (currentQuestion < finalQuestion) {
    currentQuestion++;
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  // hide  qiuz
  quiz.style.display = "none";
  highScores.style.display = "none";

  finalScore.style.display = "block";
  // show score
  yourScore.textContent = score;
}

function storeScore(event) {
  event.preventDefault();
  var highScores = {
    yourScore: highScores,
    name: name.value
  };

  localStorage.setItem("highScores", JSON.stringify(highScores));
}

// see score page and subit
start.addEventListener("click", startTimer);

start.addEventListener("click", startQuiz);

addBtn.addEventListener("click", storeScore);
