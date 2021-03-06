
const buttons = document.querySelectorAll('input')
const resetBtn = document.querySelector('#reset');
let choices = ["Rock", "Paper", "Scissors"];

function computerPlay(choices) {

    return choices[Math.floor(Math.random() * choices.length)];
}

var computerSelection = computerPlay(choices);
var cpuCounter = 0;
var playerCounter = 0;

function playRound(playerSelection) {
    let result = ""
    let computerSelection = computerPlay(choices);

    if
        ((playerSelection === "Rock ๐ฟ" && computerSelection === "Rock") ||
        (playerSelection === "Paper ๐งป" && computerSelection === "Paper") ||
        (playerSelection === "Scissors โ๏ธ" && computerSelection === "Scissors")) {
        result = ["Tie... ๐" + "<br/><br/>" + "Our Score: " + playerCounter + "<br/>" + "CPU Score: " + cpuCounter + "<br/>" + "CPU Chose: " + computerSelection]
    }

    else if
        ((playerSelection === "Rock ๐ฟ" && computerSelection === "Paper") ||
        (playerSelection === "Paper ๐งป" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors โ๏ธ" && computerSelection === "Rock")) {
        cpuCounter += 1;
        result = ["CPU Wins ๐พ" + "<br/><br/>" + "Our Score: " + playerCounter + "<br/>" + "CPU Score: " + cpuCounter + "<br/>" + "CPU Chose: " + computerSelection];
    }

    else if
        ((playerSelection === "Rock ๐ฟ" && computerSelection === "Scissors") ||
        (playerSelection === "Paper ๐งป" && computerSelection === "Rock") ||
        (playerSelection === "Scissors โ๏ธ" && computerSelection === "Paper")) {
        playerCounter += 1;
        result = ["We Win! Yay! โจ~" + "<br/><br/>" + "Our Score: " + playerCounter + "<br/>" + "CPU Score: " + cpuCounter + "<br/>" + "CPU Chose: " + computerSelection];
    }
    (result);

    function disableButtons() {
        buttons.forEach(elem => {
            elem.disabled = true
        })
    }

    function endGame() {
        if (playerCounter >= 5) {
            alert2 = "Game Over!" + "<br/>" + "We Win! ๐" + "<br/><br/>" + "Winning Choice: " + playerSelection + "<br/><br/>" + "Final Score" + "<br/>" + "Us ๐ : " + playerCounter + " | CPU ๐พ : " + cpuCounter;
        } else if (cpuCounter >= 5) {
            alert2 = "Game Over! We Lost :( ๐" + "<br/><br/>" + "Poor Choice:" + playerSelection + "<br/><br/>" + "Final Score" + "<br/>" + "Us ๐ : " + playerCounter + " | CPU ๐พ : " + cpuCounter;
        }
        disableButtons();
    };

    while (playerCounter < 5 && cpuCounter < 5) {

        document.getElementById('result').innerHTML = result;
        return result;
    }
    if (playerCounter >= 5 || cpuCounter >= 5) {
        endGame();

        document.getElementById('result').innerHTML = alert2;
        return alert2;
    }
};

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value)
    })
});

resetBtn.addEventListener('click', () => location.reload());