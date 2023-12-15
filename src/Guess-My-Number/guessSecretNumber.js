/* eslint-disable func-names */
const errorMessage = '⛔️ No number!';
const lostMessage = '💥 You lost the game! 💥';
const higherMessage = `Too high!`;
const lowerMessage = `Too low!`;
const correctMessage = '🌟Correct Number! 🌟';
let score = 20;
let highScore = 0;

const getRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min);
let secretNumber = getRandomNumber(1, 20);

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
const showCorrectNumber = function () {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#FFD700';
    document.querySelector('.number').style.width = '30rem';
};

export const checkNumber = function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage(errorMessage);
        return;
    }
    if (guess === secretNumber) {
        displayMessage(correctMessage);
        showCorrectNumber();
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        return;
    }
    if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? higherMessage : lowerMessage);
            score -= 1;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage(lostMessage);
            document.querySelector('.score').textContent = 0;
        }
    }
};

export const resetGame = function () {
    score = 20;
    secretNumber = getRandomNumber(1, 20);

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', resetGame);
