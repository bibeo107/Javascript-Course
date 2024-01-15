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
    // scored: [],
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
};

// 1. Challenge 1
// ----------------------------------------------------------------
console.group(`\x1b[1m%s\x1b[0m`, '1. Challenge 1');

// 1.1. Create one player array for each team (variables 'players1' and 'players2')
console.log(`\x1b[1m%s\x1b[0m`, `\n1.1`);

const [players1, players2] = game.players;

console.log(`players1:`);
console.table(players1);
console.log(`players2:`);
console.table(players2);

// 1.2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
console.log(`\x1b[1m%s\x1b[0m`, `\n1.2`);

const [gk, ...fieldPlayers] = players1;

console.log(`\nBayern Munich's Goal Keeper: `, gk);
console.log(`Bayern Munich's Field players: `);
console.table(fieldPlayers);

// 1.3. Create an array 'allPlayers' containing all players of both teams (22 players)
console.log(`\x1b[1m%s\x1b[0m`, `\n1.3`);

const allPlayers = [...players1, ...players2];

console.log(`\nAll players: `);
console.table(allPlayers);

// 1.4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
console.log(`\x1b[1m%s\x1b[0m`, `\n1.4`);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

console.log('\nPlayers 1 Final:');
console.table(players1Final);

// 1.5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
console.log(`\x1b[1m%s\x1b[0m`, `\n1.5`);

/* const team1 = game.odds?.team1;
const draw = game.odds?.x;
const team2 = game.odds?.team2; */

const {
    odds: { team1, x: draw, team2 }
} = game;

console.log(`team 1 odd:`, team1);
console.log(`draw odd:`, draw);
console.log(`team 2 odd:`, team2);

// 1.6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
console.log(`\x1b[1m%s\x1b[0m`, `\n1.6`);

// Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
const printGoals = function (...players) {
    console.log(players);
    console.log(`goals were scored:`, players.length);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 1.7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
console.log(`\x1b[1m%s\x1b[0m`, `\n1.7`);

// eslint-disable-next-line no-unused-expressions
(team1 < team2 && console.log(`${game.team1} is winner!`)) ||
    (team2 < team1 && console.log(`${game.team2} is winner!`));

console.groupEnd();

// 2. Challenge 2
// ----------------------------------------------------------------
console.group(`\x1b[1m%s\x1b[0m`, '\n2. Challenge 2');

// 2.1  Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
console.log(`\x1b[1m%s\x1b[0m`, `\n2.1`);

const { scored } = game;
for (const [index, value] of scored.entries()) {
    console.log(`Goal ${index}: ${value}`);
}

// 2.2 Use a loop to calculate the average odd and log it to the console
console.log(`\x1b[1m%s\x1b[0m`, `\n2.2`);
const calAverage = (first, second, third) =>
    Number.parseFloat((first + second + third) / 3).toFixed(2);

const average = calAverage(team1, draw, team2);

console.log(`odd average:`, average);

/* 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw").
HINT: Note how the odds and the game objects have the same property names
*/
console.log(`\x1b[1m%s\x1b[0m`, `\n2.3`);

const { odds } = game;
for (const [team, odd] of Object.entries(odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
}

/* 4. BONUS:
Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value.
In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
       scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
*/
console.log(`\x1b[1m%s\x1b[0m`, `\n4. BONUS`);

const scorers = {};
scored.forEach((item) => {
    scorers[item] = (scorers[item] || 0) + 1;
});
console.log(scorers);

console.groupEnd();
