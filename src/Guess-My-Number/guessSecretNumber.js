const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highScore');
const numberElement = document.querySelector('.number');
const guessElement = document.querySelector('.guess');
const bodyElement = document.querySelector('body');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

const messages = {
    noNumber: `⛔️ No number!`,
    tooHigh: [`Too high!`, `A bit too much!`, `Over the top!`, `High, try lower!`],
    tooLow: [`Too low!`, `A bit too low!`, `Not quite there!`, `Low, try higher!`],
    invalidGuess: `Please enter a number between 1 and 20.`,
    correctNumber: `🌟 Correct Number! 🌟`,
    loseGame: `💥 You lost the game! 💥`,
    startGuessing: `Start guessing...`
};

let score = 20;
let highScore = 0;
const getRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min);
let secretNumber = getRandomNumber(1, 20);

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
};
const showCorrectNumber = () => {
    numberElement.textContent = secretNumber;
    numberElement.style.width = '30rem';
    bodyElement.style.backgroundColor = '#FFD700';
};

export const checkNumber = () => {
    const guess = Number(guessElement.value);
    if (!guess || guess < 1 || guess > 20) {
        displayMessage(messages.invalidGuess);
        return;
    }

    if (guess === secretNumber) {
        displayMessage(messages.correctNumber);
        showCorrectNumber();

        if (score > highScore) {
            highScore = score;
            highScoreElement.textContent = highScore;
        }
        return;
    }

    const randomTooHighMsg = messages.tooHigh[Math.floor(Math.random() * messages.tooHigh.length)];
    const randomTooLowMsg = messages.tooLow[Math.floor(Math.random() * messages.tooLow.length)];
    if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? randomTooHighMsg : randomTooLowMsg);
            score -= 1;
            scoreElement.textContent = score;
        } else {
            displayMessage(messages.loseGame);
            scoreElement.textContent = 0;
        }
    }
};

export const resetGame = () => {
    score = 20;
    secretNumber = getRandomNumber(1, 20);

    displayMessage(messages.startGuessing);

    scoreElement.textContent = score;
    numberElement.textContent = '?';
    guessElement.value = '';

    bodyElement.style.backgroundColor = '#222';
    numberElement.style.width = '15rem';
};

checkBtn.addEventListener('click', checkNumber);
againBtn.addEventListener('click', resetGame);
