console.log(
    `\x1b[1m%s\x1b[0m`,
    `\n Array destructuring assignment---------------------------------------------`
);

const numbers = [9, 2, undefined, 40, 50, 60, 70];
const [first = 1, , third = 3, ...rest] = numbers;
console.log(`numbers:`, numbers);
console.log(`first:`, first);
console.log(`third:`, third);
console.log(`rest:`, rest);
console.log(`last:`, rest.pop());

// -----------
// eslint-disable-next-line no-sparse-arrays
const fruits = ['apple', , 'orange', 'grape', 'kiwi', 'banana'];
const [f1, f2 = 'lemon', ...[, f3, f4]] = fruits;
console.log(`\nf1:`, f1);
console.log(`f2:`, f2);
console.log(`f3:`, f3);
console.log(`f4:`, f4);

//--------
console.log(`\x1b[1m%s\x1b[0m`, `\nDestructuring function`);

function getHeroes() {
    return ['Wonder Woman', 'Supperman'];
}
const [wonan, man] = getHeroes();
console.log(`wonan:`, wonan);
console.log(`man:`, man);

// -----------
console.log(`\x1b[1m%s\x1b[0m`, `\nGreeting User`);

let greeting;
let user;
const greetingUser = ['Good morning!'];
[greeting, user] = greetingUser;
console.log(`greetingUser:`, greetingUser);
console.log(`greeting:`, greeting);
console.log(`user:`, user);

[greeting, user = 'Tham'] = ['Nice to neet you'];
console.log(`\ngreeting:`, greeting);
console.log(`user:`, user);

greetingUser.push('Thoa');
[greeting, user = 'Tham'] = greetingUser;
console.log(`\ngreetingUser:`, greetingUser);
console.log(`greeting:`, greeting);
console.log(`user:`, user);

//-------------
console.log(`\x1b[1m%s\x1b[0m`, `\nSwap variable`);

let a = 1;
let b = 2;
console.log(`a:`, a);
console.log(`b:`, b);
[b, a] = [a, b]; // swap variable value
console.log(`a:`, a);
console.log(`b:`, b);
