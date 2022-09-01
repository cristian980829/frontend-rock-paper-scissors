const scoreSelector = document.querySelector('#score');
scoreSelector.textContent = localStorage.getItem('score');

document.getElementById('lizard').addEventListener('click', function (event) {
    play('lizard');
}, false);

document.getElementById('paper').addEventListener('click', function (event) {
    play('paper');
}, false);

document.getElementById('spock').addEventListener('click', function (event) {
    play('spock');
}, false);

document.getElementById('scissors').addEventListener('click', function (event) {
    play('scissors');
}, false);

document.getElementById('rock').addEventListener('click', function (event) {
    play('rock');
}, false);

function play(value) {
    const scoreSelector = document.querySelector('#score');
    const stateSelector = document.querySelector('#state');

    const posibilities = ['lizard', 'paper', 'spock', 'scissors', 'rock'];
    const p2 = posibilities[Math.floor(Math.random() * posibilities.length)];

    
    if (!value) return;
    if (value === p2) {
        stateSelector.textContent = 'Draw';
    } else if (value === "scissors" && p2 === "paper") {
        scoreSelector.textContent = parseInt(scoreSelector.textContent) + 1;
        stateSelector.textContent = 'You win';
    } else if (value === "paper" && p2 === "rock") {
        scoreSelector.textContent = parseInt(scoreSelector.textContent) + 1;
        stateSelector.textContent = 'You win';
    } else if (value === "rock" && p2 === "lizard") {
        scoreSelector.textContent = parseInt(scoreSelector.textContent) + 1;
        stateSelector.textContent = 'You win';
    } else if (value === "lizard" && p2 === "spock") {
        scoreSelector.textContent = parseInt(scoreSelector.textContent) + 1;
        stateSelector.textContent = 'You win';
    } else if (value === "spock" && p2 === "scissors") {
        scoreSelector.textContent = parseInt(scoreSelector.textContent) + 1;
        stateSelector.textContent = 'You win';
    } else if (value === "scissors" && p2 === "lizard") {
        scoreSelector.textContent = parseInt(scoreSelector.textContent) + 1;
        stateSelector.textContent = 'You win';
    } else if (value === "paper" && p2 === "spock") {
        scoreSelector.textContent = parseInt(scoreSelector.textContent) + 1;
        stateSelector.textContent = 'You win';
    } else if (value === "rock" && p2 === "scissors") {
        scoreSelector.textContent = parseInt(scoreSelector.textContent) + 1;
        stateSelector.textContent = 'You win';
    } else if (value === "lizard" && p2 === "paper") {
        scoreSelector.textContent = parseInt(scoreSelector.textContent) + 1;
        stateSelector.textContent = 'You win';
    } else if (value === "spock" && p2 === "rock") {
        scoreSelector.textContent = parseInt(scoreSelector.textContent) + 1;
        stateSelector.textContent = 'You win';
    } else {
        stateSelector.textContent = 'You lose';
        if (parseInt(scoreSelector.textContent) === 0) {
            return;
        } else {
            scoreSelector.textContent = parseInt(scoreSelector.textContent) - 1;
        }
    }
    localStorage.setItem('score', scoreSelector.textContent);
}