// Lecture values and variables
let country = "Vietnam";
let contient = "Asia";
let population = 97.47;

console.log(country);
console.log(contient);
console.log(population);

// Lecture: Data types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof language);

//
language = "Vietnamese";
console.log("language is " + language);

const halfPopulation = population * 1000000/2;
console.log (halfPopulation + " people would live in each half.");

let increasePopulation = population*1000000 + 1;
console.log("My country population increase 1 people" + increasePopulation);

const morePopulation = population > 6;
if(morePopulation)
    console.log("My country have more people than Finland");
else console.log("My country haven't more people than Finland")

//Lecture: let, const and var
const currentYear = new Date().getFullYear();
const birthdayJonas = 1989;
const birthdaySarah = 1986;
const ageJonas = currentYear - birthdayJonas;
const ageSarah = currentYear - birthdaySarah;
console.log("Jonas's age " + ageJonas);
console.log("Sarah's age " + ageSarah);
console.log(ageJonas < ageSarah);
console.log( ageJonas >= 18);
const isFulAge = ageJonas >= 18;

// Challenge 1
const massMark = 78;
const heightMark = 1.69;
const massJon = 92;
const heightJon = 1.95;

const BMIMark = massMark / (heightMark*heightMark);
const BMIJohn = massJon / (heightJon*heightJon);

console.log("BMIMark " + BMIMark);
console.log("BMIJohn " + BMIJohn);

const markHeigherBMI = BMIMark > BMIJohn;
console.log ("Mark has a higher BMI than John " + markHeigherBMI);
