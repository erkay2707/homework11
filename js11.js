// function rockPaperScissors(playerChoice) {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomChoice = choices[Math.floor(Math.random() * 3)];
//
//     if (playerChoice === randomChoice) {
//         return "Draw!";
//     } else if (
//         (playerChoice === 'rock' && randomChoice === 'scissors') ||
//         (playerChoice === 'paper' && randomChoice === 'rock') ||
//         (playerChoice === 'scissors' && randomChoice === 'paper')
//     ) {
//         return `You win! Random chose ${randomChoice}.`;
//     } else {
//         return `You lose! Random chose ${randomChoice}.`;
//     }
// }
//
//
// document.getElementById('rock').addEventListener('click', function() {
//     displayResult(rockPaperScissors('rock'));
// });
// document.getElementById('paper').addEventListener('click', function() {
//     displayResult(rockPaperScissors('paper'));
// });
// document.getElementById('scissors').addEventListener('click', function() {
//     displayResult(rockPaperScissors('scissors'));
// });
//
// function displayResult(result) {
//     document.getElementById('result').textContent = result;
//}

function startGame() {
    const userInput = document.getElementById("numberInput").value;


    const randomNumber = Math.floor(Math.random() * 10) + 1;


    if (userInput == randomNumber) {
        document.getElementById("resulting").textContent = "You win!";
    } else {
        document.getElementById("resulting").textContent = "Come on again. The hidden number was: " + randomNumber;
    }
}
