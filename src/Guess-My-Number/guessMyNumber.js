const scoreElement = document.querySelector('#currentScore');
const highScoreElement = document.querySelector('#highscore');
const numberElement = document.querySelector('#number');
const guessElement = document.querySelector('.guess');
const bodyElement = document.querySelector('body');
const messageElement = document.querySelector('#message');
const containElement = document.querySelector('.container');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

const messages = {
    noNumber: `⛔️ No number!`,
    tooHigh: [`Too high!`, `A bit too much!`, `Over the top!`, `High, try lower!`],
    tooLow: [`Too low!`, `A bit too low!`, `Not quite there!`, `Low, try higher!`],
    invalidGuess: `Please enter a number between 1 and 20.`,
    correctNumber: `🌟 Correct Number! 🌟`,
    loseGame: `💥 You lost the game! 💥`,
    startGuessing: `Start guessing...`,
    playAgain: `Click Again button to play again.`
};

let score = 20;
let highScore = 0;
const getRandomNumber = (min, max) => Math.trunc(Math.random() * (max - min) + min);
let secretNumber = getRandomNumber(1, 20);
let isGameOver = false;

const displayMessage = (message) => {
    messageElement.textContent = message;
};
const showCorrectNumber = () => {
    numberElement.textContent = secretNumber;
    numberElement.style.backgroundColor = 'cyan';
    numberElement.style.color = 'red';
    numberElement.style.width = '300px';
    numberElement.style.height = '300px';
    numberElement.style.fontSize = '80px';

    messageElement.style.color = 'red';
    messageElement.style.fontSize = '30px';
    containElement.style.backgroundColor = '#ffefd5';
};

const checkNumber = () => {
    if (isGameOver) {
        displayMessage(messages.playAgain);
        return;
    }

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
        isGameOver = true;
        return;
    }

    if (guess !== secretNumber) {
        const randomTooHighMsg =
            messages.tooHigh[Math.floor(Math.random() * messages.tooHigh.length)];
        const randomTooLowMsg = messages.tooLow[Math.floor(Math.random() * messages.tooLow.length)];
        if (score > 1) {
            displayMessage(guess > secretNumber ? randomTooHighMsg : randomTooLowMsg);
            score -= 1;
            scoreElement.textContent = score;
        } else {
            displayMessage(messages.loseGame);
            scoreElement.textContent = 0;
            isGameOver = true;
        }
    }
};

const resetGame = () => {
    isGameOver = false;
    score = 20;
    secretNumber = getRandomNumber(1, 20);

    displayMessage(messages.startGuessing);

    scoreElement.textContent = score;
    numberElement.textContent = '?';
    guessElement.value = '';

    bodyElement.style.backgroundColor = '#ffefd5';
    numberElement.style.width = '200px';
    numberElement.style.height = '200px';
    numberElement.style.backgroundColor = '#e91e63';
    numberElement.style.color = '#fff';
    numberElement.style.width = '200px';
    numberElement.style.height = '200px';
    containElement.style.backgroundColor = '#fce4ec';
    messageElement.style.color = 'lightsalmon';
    messageElement.style.fontSize = '24px';
};

// checkBtn.addEventListener('click', checkNumber);
// againBtn.addEventListener('click', resetGame);
