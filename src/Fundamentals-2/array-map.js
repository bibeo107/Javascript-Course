console.log(`\x1b[1m%s\x1b[0m`, `\n Array.map() ---------------`);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleNumbers = numbers.map((e) => e * 2);
console.log(`numbers:`, numbers);
console.log(`doubleNumbers:`, doubleNumbers);

const animals = ['dog', 'cat', 'fish'];
const copyOfAnimals = animals.map((e) => {
    return e.toUpperCase();
});
console.log(`animals:`, animals);
console.log(`copyOfAnimals:`, copyOfAnimals);

const scoreList = ['8', '9', '10', 'Seven'];
const numberScores = scoreList.map(Number).filter((v) => !Number.isNaN(v));
console.log(`numberScores:`, numberScores);

const persons = [
    { firstName: 'Malcom', lastName: 'Reynolds' },
    { firstName: 'Kaylee', lastName: 'Frye' },
    { firstName: 'MaJaynelcom', lastName: 'Cobb' }
];

const fullNames = persons.map((v) => [v.firstName, v.lastName].join(' '));
console.log(`fullNames:`, fullNames);

const people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 20 }
];

const names = people.map((v) => v.name);
console.log(`names:`, names);

// Getting the Current Index from Array.Map()
const fruits = ['Apple', 'Lime', 'Kiwi'];
const newFruits = fruits.map((value, index) => {
    return { index, value };
});
console.log(`fruits: `, fruits);
console.log(`newFruits: `, newFruits);

const heroes = ['Wonder Woman', 'Supperman', 'Spiderman'];
const newHeroes = heroes.map((element, index, array) => {
    return { index, element, array };
});
console.log(`heroes: `, heroes);
console.log(`newHeroes: `, newHeroes);
