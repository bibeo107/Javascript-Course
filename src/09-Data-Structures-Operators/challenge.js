/* eslint-disable import/no-extraneous-dependencies */
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze'
        ]
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
};
// 1. Create one player array for each team (variables 'players1' and 'players2')

const [players1, players2] = game.players;

console.log(`players1:`);
console.table(players1);
console.log(`players2:`);
console.table(players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

const [gk, ...fieldPlayers] = players1;

console.log(`\nBayern Munich's Goal Keeper: `, gk);
console.log(`Bayern Munich's Field players: `);
console.table(fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)

const allPlayers = [...players1, ...players2];

console.log(`\nAll players: `);
console.table(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

console.log('\nPlayers 1 Final:');
console.table(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

/* const team1 = game.odds?.team1;
const draw = game.odds?.x;
const team2 = game.odds?.team2; */

const {
    odds: { team1, x: draw, team2 }
} = game;

console.log(`team 1 odd:`, team1);
console.log(`draw odd:`, draw);
console.log(`team 2 odd:`, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
const printGoals = function (...players) {
    console.log(players);
    console.log(`goals were scored:`, players.length);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7.The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// eslint-disable-next-line no-unused-expressions
(team1 < team2 && console.log(`${game.team1} is winner!`)) ||
    (team2 < team1 && console.log(`${game.team2} is winner!`));
