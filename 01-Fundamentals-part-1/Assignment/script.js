// Lecture values and variables
let country = "Vietnam";
let contient = "Asia";
let population = 97.47; // million

console.log(country);
console.log(contient);
console.log(population);

// Lecture: Data types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof language);

// Lecture: let, const and var
language = "Vietnamese";
console.log("language is " + language);
//--------------------------------------------------------
const currentYear = new Date().getFullYear();
const birthdayJonas = 1989;
const birthdaySarah = 1986;
const ageJonas = currentYear - birthdayJonas;
const ageSarah = currentYear - birthdaySarah;
const isFulAge = ageJonas >= 18;

console.log("Jonas's age " + ageJonas);
console.log("Sarah's age " + ageSarah);
console.log("Jonas is younger than Sarah: " + (ageJonas < ageSarah));
console.log("Jonas is full age: " + isFulAge);

//----------------------------------------------------------------
// Lecture: Basic Operators
//1.
const halfPopulation = population * 1000000/2;
console.log (halfPopulation + " people would live in each half.");

//2.
const increasePopulation = population * 1000000 + 1;
console.log("My country population increase 1 people " + increasePopulation);

//3.
const finlandPopulation = 6;
if(population > finlandPopulation)
    console.log("My country have more people than Finland");
else
    console.log("Finland have more people than my country ");

//4.
const avaragePopulation = 33; // million
if(population < avaragePopulation)
    console.log("My country have less than the average population.");
else
    console.log("My country have more then the avarage population.");

//5.
const description = 'Portugal is in Europe, and its 11 million people speak portuguese';

