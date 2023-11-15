/* eslint-disable no-param-reassign */
const [changed, notChanged] = [
    'The original array has been changed',
    'The original array has NOT been changed'
];

const isChanged = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b) ? changed : notChanged;
};

// Spead operator----------------------------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `Spead operator ---------------`);
// It's fine.
const people = ['admin', 'tutor', 'author'];
const copyOfPeople = [...people];
console.log('copyOfPeople:', copyOfPeople);
copyOfPeople[0] = 'assessor';
console.log('copyOfPeople:', copyOfPeople);
console.log('people:', people);
console.log(isChanged(people, copyOfPeople));

// It's Shallow copy.
const users = [{ role: 'admin' }, { role: 'tutor' }, { role: 'author' }];
const copyOfUsers = [...users];
console.log(`\ncopyOfUsers:`, copyOfUsers);
copyOfUsers[0].role = 'assessor';
console.log(`copyOfUsers:`, copyOfUsers);
console.log(`users:`, users);
console.log(isChanged(users, copyOfUsers));

// array.map()----------------------------------------------------
// It's fine
console.log(`\x1b[1m%s\x1b[0m`, `\n Array.map() ---------------`);
const fruits = ['apple', 'lemon', 'kiwi'];
const copyOfFruits = fruits.map((e) => e);
console.log(`fruits:`, fruits);
console.log(`copyOfFruits:`, copyOfFruits);

//--------------------------
const favoriteFruits = [{ name: 'apple' }, { name: 'lemon' }, { name: 'kiwi' }];
console.log(`\nfavoriteFruits:`, favoriteFruits);
const copyOfFavoriteFruits = favoriteFruits.map((element) => {
    element.name = element.name.toUpperCase();
    return element;
});
console.log(`copyOfFavoriteFruits:`, copyOfFavoriteFruits);
console.log(`favoriteFruits:`, favoriteFruits);
console.log(isChanged(favoriteFruits, copyOfFavoriteFruits));

// array.from()----------------------------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n Array.from() ---------------`);
const shapes = ['circle', 'square'];
const copyOfShapes = Array.from(shapes);
console.log(`copyOfShapes:`, copyOfShapes);
copyOfShapes[0] = 'Oval';
console.log(`copyOfShapes:`, copyOfShapes);
console.log(`shapes:`, shapes);
console.log(isChanged(shapes, copyOfShapes));

const originalUsers = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];
const copyUsers = Array.from(originalUsers);
console.log(`\ncopyUsers`, copyUsers);
copyUsers[0].name = 'Rachel';
console.log('copyUsers:', copyUsers);
console.log('originalUsers:', originalUsers);
console.log(isChanged(originalUsers, copyUsers));

// array.slice()

// array.concat();

// array.filter

// array.reduce

// deepcopy
// const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
// structuredClone()
