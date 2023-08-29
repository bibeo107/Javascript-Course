/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-concat */
/* eslint-disable prefer-template */
// 1. Lecture values and variables
/*--------------------------------------------------------*/
console.log(' 1. Lecture values and variables');
const country = 'Vietnam';
const continent = 'Asia';
const population = 97.47; // million
// const population = 13; // million
// const population = 130; // million

console.log(country);
console.log(continent);
console.log(population);

// 2. Lecture: Data types
/*--------------------------------------------------------*/
console.log('2. Lecture: Data types');
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// 3. Lecture: let, const and var
/*--------------------------------------------------------*/
/* Description:
 * try to change one of the changed variable and observe what happpens
 */
console.log('3. Lecture: let, const and var');
language = 'Vietnamese';
// isIslandNew = true; // happens error

/*--------------------------------------------------------*/
const currentYear = new Date().getFullYear();
const birthdayJonas = 1989;
const birthdaySarah = 1986;
const ageJonas = currentYear - birthdayJonas;
const ageSarah = currentYear - birthdaySarah;
const isFulAge = ageJonas >= 18;

console.log(`Jonas's age ${ageJonas}`);
console.log(`Sarah's age ${ageSarah}`);
console.log(`Jonas is younger than Sarah: ${ageJonas < ageSarah}`);
console.log(`Jonas is full age: ${isFulAge}`);

// 4. Lecture: Basic Operators
/*----------------------------------------------------------------*/
console.log('4. Lecture: Basic Operators');
// 4.1
const halfPopulation = population / 2;
console.log(`${halfPopulation} million people would live in each half.`);

// 4.2
const increasePopulation = population * 1000000 + 1;
console.log(`${country} population increase 1 people ${increasePopulation}`);

// 4.3
const finlandPopulation = 6;
if (population > finlandPopulation) {
    console.log(`${country} have more people than Finland.`);
} else {
    console.log(`Finland have more people than ${country}`);
}

// 4.4
const avaragePopulation = 33; // million
if (population < avaragePopulation) {
    console.log(`${country} have less than the average population.`);
} else {
    console.log(`${country} have more then the avarage population.`);
}

// 4.5
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// 5. Lecture: Strings and Template Literals
/*----------------------------------------------------------------*/
console.log('5. Strings and Template Literals');
const newDescription = `${country} is in ${continent}, and its ${population} million people speak ${language};`;
console.log(newDescription);

// 6. Lecture: Taking devicions: if/ else statements
/*----------------------------------------------------------------*/
console.log('6. Taking decisions: if/ else statements');

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license.');
} else {
    console.log(`Sarah is too young. Wait another ${18 - age} years :)`);
}

if (population > 33) {
    console.log(`${country} population is above average`);
} else {
    console.log(`${country} is ${33 - population} million below average`);
}

// 7. Type conversion and coercion
/*----------------------------------------------------------------*/
console.log('7. Type conversion and coercion');

// 7.1 Type conversion
const inputYear = '1989';
console.log(inputYear, Number(inputYear));
console.log(inputYear + 18);

console.log(Number('Jonas')); // NaN

console.log(String(23), 23);

// 7.2 type coercion
// eslint-disable-next-line prefer-template
console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + 3); // 23103
console.log(('23' * '2') / '2' - '3'); // 20

// Assignment - presict then execute the operations
console.log('9' - '5'); // Predict: 4
console.log('19' - '13' + '17'); // Predict: 617
console.log('19' - '13' + 17); // Predict: 23
console.log('123' < 57); // Predict: false
console.log(5 + 6 + '4' + 9 - 4 - 2); // Predict: 1143
