/* eslint-disable func-names */
const scoreDOM0 = document.getElementById('score--0');
const scoreDOM1 = document.getElementById('score--1');
const currentScoreDOM0 = document.getElementById('current--0');
const currentScoreDOM1 = document.getElementById('current--1');
const playerDOM0 = document.querySelector('.player--0');
const playerDOM1 = document.querySelector('.player--1');

const diceDOM = document.querySelector('.dice');

const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

let scores;
let currentScore;
let activePlayer;
let isEndGame = false;
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;

    scoreDOM0.textContent = 0;
    scoreDOM1.textContent = 0;
    currentScoreDOM0.textContent = 0;
    currentScoreDOM1.textContent = 0;

    diceDOM.classList.add('hidden');
    playerDOM0.classList.add('.player--active');
    playerDOM1.classList.remove('.player--active');
    playerDOM0.classList.remove('player--winner');
    playerDOM1.classList.remove('player--winner');
};

init();
const switchPlayer = function () {
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    currentScoreDOM0.textContent = 0;
    currentScoreDOM1.textContent = 0;
    playerDOM0.classList.toggle('player--active');
    playerDOM1.classList.toggle('player--active');
};
rollBtn.addEventListener('click', () => {
    if (isEndGame) return;

    const dice = Math.trunc(Math.random() * 6) + 1;

    diceDOM.classList.remove('hidden');
    diceDOM.src = `image/dice-${dice}.png`;

    if (dice === 1) {
        switchPlayer();
    } else {
        currentScore += dice;
        (activePlayer === 0 ? currentScoreDOM0 : currentScoreDOM1).textContent = currentScore;
    }
});

holdBtn.addEventListener('click', () => {
    if (isEndGame) return;

    scores[activePlayer] += currentScore;
    (activePlayer === 0 ? scoreDOM0 : scoreDOM1).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 50) {
        isEndGame = true;
        diceDOM.classList.add('hidden');
        (activePlayer === 0 ? playerDOM0 : playerDOM1).classList.toggle('player--winner');
        (activePlayer === 0 ? playerDOM0 : playerDOM1).classList.remove('player--active');
    }

    switchPlayer();
});
newBtn.addEventListener('click', init);
