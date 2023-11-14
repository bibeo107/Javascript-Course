/* eslint-disable no-param-reassign */
let isChanged;
const [changed, notChanged] = [
    'The original array has been changed',
    'The original array has NOT been changed'
];

// Spead operator----------------------------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `Spead operator ---------------`);
// It's fine.
const people = ['admin', 'tutor', 'author'];
const copyOfPeople = [...people];

console.log('copyOfPeople:', copyOfPeople);
console.log(`copyOfPeople[0] = `, (copyOfPeople[0] = 'assessor'));
console.log('copyOfPeople:', copyOfPeople);
console.log('people:', people);
isChanged = people[0] === copyOfPeople[0] ? changed : notChanged;
console.log(isChanged);

// It's Shallow copy.
const users = [{ role: 'admin' }, { role: 'tutor' }, { role: 'author' }];
const copyOfUsers = [...users];
console.log(`\ncopyOfUsers:`, copyOfUsers);
console.log(`copyOfPeople[0].role = `, (copyOfUsers[0].role = 'assessor'));
console.log(`copyOfUsers:`, copyOfUsers);
console.log(`users:`, users);
isChanged = users[0].role === copyOfUsers[0].role ? changed : notChanged;
console.log(isChanged);

// array.map()----------------------------------------------------
// It's fine
console.log(`\x1b[1m%s\x1b[0m`, `\n Array.map() ---------------`);
const fruits = ['apple', 'lemon', 'kiwi'];
console.log(`fruits:`, fruits);
const copyOfFruits = fruits.map((e) => {
    return e.toUpperCase();
});
console.log(`copyOfFruits:`, copyOfFruits);
console.log(`fruits:`, fruits);

isChanged = fruits[0] === copyOfFruits[0] ? changed : notChanged;
console.log(isChanged);

//--------------------------
const favoriteFruits = [{ name: 'apple' }, { name: 'lemon' }, { name: 'kiwi' }];
console.log(`\nfavoriteFruits:`, favoriteFruits);
const copyOfFavoriteFruits = favoriteFruits.map((element) => {
    element.name = element.name.toUpperCase();
    return element;
});
console.log(`copyOfFavoriteFruits:`, copyOfFavoriteFruits);
console.log(`favoriteFruits:`, favoriteFruits);

isChanged = favoriteFruits[0].name === copyOfFavoriteFruits[0].name ? changed : notChanged;
console.log(isChanged);

// array.from()----------------------------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n Array.from() ---------------`);
const newArray = Array.from('PHP');
console.log(`Array.from('Javascript'):`, newArray);

const shapes = ['circle', 'rectangle', 'square'];
const copyOfShapes = Array.from(shapes);
console.log(`copyOfShapes:`, copyOfShapes);

console.log(Array.from({ length: 4 }, (value, index) => value));
console.log(Array.from([2, 3, 4], (value, index) => value * index));
console.log(Array.from({ length: 4 }, (value, index) => index));
console.log(Array.from({ length: 4 }, (value, index) => index * 2));

// array.slice()

// array.concat();

// deepcopy
// const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
// structuredClone()
