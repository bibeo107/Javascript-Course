// Array destructuring assignment
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
// Nested destructuring
// Ex1:
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(`i: ${i}, j: ${j}, k: ${k}`);

// Ex2:
// eslint-disable-next-line no-sparse-arrays
const fruits = ['apple', , 'orange', 'grape', 'kiwi', 'banana'];
const [f1, f2 = 'lemon', ...[, f3, f4]] = fruits;
console.log(`\nf1:`, f1);
console.log(`f2:`, f2);
console.log(`f3:`, f3);
console.log(`f4:`, f4);

//--------
// Destructuring function
// Ex 1:
console.log(`\x1b[1m%s\x1b[0m`, `\nDestructuring function`);

function getHeroes() {
    return ['Wonder Woman', 'Superman'];
}
const [woman, man] = getHeroes();
console.log(`woman:`, woman);
console.log(`man:`, man);

// Ex 2:
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order(startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    }
};

const [starter, mainCourse] = restaurant.order(0, 0);
console.log(`\nstarter: ${starter} \nmainCourse: ${mainCourse}`);

// -----------
console.log(`\x1b[1m%s\x1b[0m`, `\nGreeting User`);

let greeting;
let user;
const greetingUser = ['Good morning!'];
[greeting, user] = greetingUser;
console.log(`greetingUser:`, greetingUser);
console.log(`greeting:`, greeting);
console.log(`user:`, user);

// Default values
[greeting, user = 'Tham'] = ['Nice to meet you'];
console.log(`\ngreeting:`, greeting);
console.log(`user:`, user);

greetingUser.push('Thoa');
[greeting, user = 'Tham'] = greetingUser;
console.log(`\ngreetingUser:`, greetingUser);
console.log(`greeting:`, greeting);
console.log(`user:`, user);

//-------------
// Swap variable
console.log(`\x1b[1m%s\x1b[0m`, `\nSwap variable`);

let a = 1;
let b = 2;
console.log(`a:`, a);
console.log(`b:`, b);
[b, a] = [a, b]; // swap variable value
console.log(`a:`, a);
console.log(`b:`, b);
