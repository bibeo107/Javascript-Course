/* eslint-disable no-param-reassign */
const [changed, notChanged] = [
    'The original array has been changed',
    'The original array has NOT been changed'
];

const isChanged = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b) ? changed : notChanged;
};

const lastNameCoworkers = ['Quan', 'Tien', 'Tien', 'Thao', 'Thao'];
const fullNameCoworkers = [
    { firstName: 'Vo', lastName: 'Quan' },
    { firstName: 'Vo', lastName: 'Tien' },
    { firstName: 'Tran', lastName: 'Tien' },
    { firstName: 'Vu', lastName: 'Thao' },
    { firstName: 'Pham', lastName: 'Thao' }
];
const uniqueLatNameCoworkers = new Set(lastNameCoworkers);
const uniqueFullnameCoworkers = new Set(fullNameCoworkers);

// Spead operator----------------------------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `Spead operator ---------------`);
// It's fine.
const people = ['admin', 'tutor', 'author'];
const copyOfPeople = [...people];
console.log('copyOfPeople:', copyOfPeople);
console.log(`copyOfPeople[0] = `, (copyOfPeople[0] = 'assessor'));
console.log('copyOfPeople:', copyOfPeople);
console.log('people:', people);
console.log(isChanged(people, copyOfPeople));

// It's Shallow copy.
const users = [{ role: 'admin' }, { role: 'tutor' }, { role: 'author' }];
const copyOfUsers = [...users];
console.log(`\nusers:`, copyOfUsers);
console.log(`copyOfUsers:`, copyOfUsers);
console.log(`copyOfPeople[0].role = `, (copyOfUsers[0].role = 'assessor'));
console.log(`copyOfUsers:`, copyOfUsers);
console.log(`users:`, users);
console.log(isChanged(users, copyOfUsers));

console.log(`\nuniqueLastNameCoworkers: `, uniqueLatNameCoworkers);
console.log(`[...uniqueLatNameCoworkers]: `, [...uniqueLatNameCoworkers]);

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
console.log(isChanged(fruits, copyOfFruits));

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
console.log(`Array.from('PHP'):`, Array.from('PHP'));

// array from set
console.log(`\nuniqueLNCoworkers `, uniqueLatNameCoworkers);
console.log(`Array.from(uniqueLatNameCoworkers) `, Array.from(uniqueLatNameCoworkers));

// array from map
const contacts = new Map();
contacts.set('Jessie', { phone: '213-555-1234', address: '123 N 1st Ave' });
contacts.set('Hilary', { phone: '617-555-4321', address: '321 S 2nd St' });
console.log(`\ncontacts: `, contacts);
console.log(`Array.from(contacts):`, Array.from(contacts));
console.log(`Array.from(contacts.keys):`, Array.from(contacts.keys()));
console.log(`Array.from(contacts.values):`, Array.from(contacts.values()));

const shapes = ['circle', 'square'];
const copyOfShapes = Array.from(shapes);
console.log(`\nshapes:`, shapes);
console.log(`copyOfShapes:`, copyOfShapes);
console.log(`copyOfShapes[0] = 'Oval':`, (copyOfShapes[0] = 'Oval'));
console.log(`copyOfShapes:`, copyOfShapes);
console.log(`shapes:`, shapes);
console.log(isChanged(shapes, copyOfShapes));

const originalUsers = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];
const copyUsers = Array.from(originalUsers);
console.log(`\noriginalUsers`, originalUsers);
console.log(`copyUsers`, copyUsers);
console.log(`copyUsers[0].name = 'Rachel':`, (copyUsers[0].name = 'Rachel')); // Modify the copy (simulating a change)
console.log('copyUsers:', copyUsers);
console.log('originalUsers:', originalUsers);
console.log(isChanged(originalUsers, copyUsers));

console.log(Array.from({ length: 4 }, (value, i) => i));
console.log(Array.from({ length: 4 }, (_, i) => i * 2));
// Create a Sequence of Numbers
const range = (start, end, step = 1) =>
    Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);

console.log(`\nrange(1, 10):`, range(1, 10));
console.log(`\nrange(1, 10, 2):`, range(1, 10, 2));

// Create the alphabet array & sort

const alphabet = range('A'.charCodeAt(0), 'Z'.charCodeAt(0)).map((x) => String.fromCharCode(x));
console.log(`\nCreate the alphabet array & sort:`, alphabet);

// array.slice()

// array.concat();

// array.filter

// array.reduce

// deepcopy
// const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
// structuredClone()
