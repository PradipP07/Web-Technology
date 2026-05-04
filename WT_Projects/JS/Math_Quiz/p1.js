let num1, num2, correctAnswer;

let questionsAsked = 0;
let correctAnswers = 0;

let time = 30;
let gameOver = false;
let timer;

function generateQuestion(){

    if(gameOver) return;

    if(questionsAsked === 25){
        endGame();
        return;
    }

    let operators = ["+", "-", "*", "/"];
    let operator = operators[Math.floor(Math.random() * operators.length)];

    num1 = Math.floor(Math.random()*10) + 1;
    num2 = Math.floor(Math.random()*10) + 1;

    // avoid decimal answers in division
    if(operator === "/"){
        num1 = num1 * num2;
    }

    switch(operator){
        case "+":
            correctAnswer = num1 + num2;
            break;

        case "-":
            correctAnswer = num1 - num2;
            break;

        case "*":
            correctAnswer = num1 * num2;
            break;

        case "/":
            correctAnswer = num1 / num2;
            break;
    }

    questionsAsked++;

    document.getElementById("question").textContent =
    "Q" + questionsAsked + ": " + num1 + " " + operator + " " + num2;

    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();
}

function checkAnswer(){

    if(gameOver) return;

    let answerBox = document.getElementById("answer");
    let userInput = answerBox.value.trim();

    // ⭐ Check if empty
    if(userInput === ""){
        document.getElementById("result").textContent = "⚠ Answer is required!";
        answerBox.focus();
        return;   // stop function here
    }

    let userAnswer = Number(userInput);

    if(userAnswer === correctAnswer){
        correctAnswers++;
        document.getElementById("result").textContent = "Correct!";
    }else{
        document.getElementById("result").textContent = "Wrong!";
    }

    document.getElementById("score").textContent =
    "Correct: " + correctAnswers + " / 25";

    generateQuestion();
}

function startTimer(){

    timer = setInterval(function(){

        if(gameOver){
            clearInterval(timer);
            return;
        }

        time--;

        document.getElementById("timer").textContent =
        "Time: " + time;

        if(time === 0){
            endGame();
        }

    },1000);
}

function endGame(){

    gameOver = true;
    clearInterval(timer);

    if(correctAnswers === 25){
        document.getElementById("result").textContent =
        "🎉 You Win! All 25 correct!";
    }else{
        document.getElementById("result").textContent =
        "Game Over! Correct Answers: " + correctAnswers + "/25";
    }

    document.getElementById("answer").disabled = true;
}

generateQuestion();
startTimer();


// keyboard enter support
document.getElementById("answer").addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        checkAnswer();
    }
});