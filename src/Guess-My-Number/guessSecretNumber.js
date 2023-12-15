/* eslint-disable func-names */
export const errorMessage = '⛔️ No number!';
const getRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min);
let secretNumber = getRandomNumber(1, 20);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
const showCorrectNumber = function () {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#FFD700';
    document.querySelector('.number').style.width = '30rem';
};

export function checkNumber() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage('⛔️ No number!');
    } else if (guess === secretNumber) {
        displayMessage('🌟Correct Number! 🌟');
        showCorrectNumber();
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
            score -= 1;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage(`💥 You lost the game! 💥`);
            document.querySelector('.score').textContent = 0;
        }
    }
}

export function resetGame() {
    score = 20;
    secretNumber = getRandomNumber(1, 20);

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

// document.querySelector('.check').addEventListener('click', checkNumber);
// document.querySelector('.again').addEventListener('click', resetGame);
