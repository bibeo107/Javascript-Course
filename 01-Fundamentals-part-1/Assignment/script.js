//1. Lecture values and variables
/*--------------------------------------------------------*/
console.log(`1. Lecture values and variables`);
const country = `Vietnam`;
const continent = `Asia`;
const population = 97.47; // million

console.log(country);
console.log(continent);
console.log(population);

//2. Lecture: Data types
/*--------------------------------------------------------*/
console.log(`2. Lecture: Data types`);
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//3. Lecture: let, const and var
/*--------------------------------------------------------*/
/* Description:
 * try to change one of the changed variable and observe what happpens
 */
console.log(`3. Lecture: let, const and var`);
language = `Vietnamese`;
//isIslandNew = true; // happens error

/*--------------------------------------------------------*/
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

//4. Lecture: Basic Operators
/*----------------------------------------------------------------*/
console.log(`4. Lecture: Basic Operators`);
//4.1
const halfPopulation = population/2;
console.log (halfPopulation + ' million people would live in each half.');

//4.2
const increasePopulation = population*1000000 + 1;
console.log('My country population increase 1 people ' + increasePopulation);

//4.3
const finlandPopulation = 6;
if(population > finlandPopulation)
    console.log('My country have more people than Finland.');
else
    console.log('Finland have more people than my country.');

//4.4
const avaragePopulation = 33; // million
if(population < avaragePopulation)
    console.log('My country have less than the average population.');
else
    console.log('My country have more then the avarage population.');

//4.5
const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);

//5. Lecture: Strings and Template Literals
/*----------------------------------------------------------------*/
console.log(`5. Strings and Template Literals`)
const newDescription = `${country} is in ${continent}, and its ${population} million people speak ${language};`
console.log(newDescription);
