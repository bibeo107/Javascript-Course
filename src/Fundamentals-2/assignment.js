/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// Lecture: function --------------------------------------------------------
function describeCountry(country, popuation, capitalCity) {
    return `${country} has ${popuation} milion people and its capital city is ${capitalCity}`;
}
const describleIndia = describeCountry('India', 'New Delhi', 1430);
const describleJapan = describeCountry('Japan', 'Tokyo', 14);
const describleIndonesia = describeCountry('Indonesia', 'Jakarta', 15);
console.log(describleIndia, describleJapan, describleIndonesia);

const worldPopulation = 7900;

// function declarations ----------------------------------------------------------------
function percentageOfWorld1(popuation) {
    return (popuation / worldPopulation) * 100;
}
const percentIndia = percentageOfWorld1(1430);
const percentJapan = percentageOfWorld1(14);
const percentIndonesia = percentageOfWorld1(15);

console.log(percentIndia, percentJapan, percentIndonesia);

// function expressions
//----------------------------------------------------------------
const percentageOfWorld2 = function percentageOfWorld2(popuation) {
    return (popuation / worldPopulation) * 100;
};
const percentIndia1 = percentageOfWorld2(1430);
const percentJapan1 = percentageOfWorld2(14);
const percentIndonesia1 = percentageOfWorld2(15);

console.log(percentIndia1, percentJapan1, percentIndonesia1);

// arrow functions ------------------------------------------------------------------------------
const percentageOfWorld3 = (popuation) => {
    return (popuation / worldPopulation) * 100;
};
const percentIndia2 = percentageOfWorld2(1430);
const percentJapan2 = percentageOfWorld2(14);
const percentIndonesia3 = percentageOfWorld2(15);

console.log(percentIndia1, percentJapan1, percentIndonesia1);

// Higher Order Functions
// treat function as values. ----------------------------------------------------------------

function dog() {
    console.log('woof');
}

const sausageDog = dog;

sausageDog();
dog();

// passing functions as arguments
// Example: filer array ----------------------------------------------------------------
const filterArray = function filterArray(array, filterFunction) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (filterFunction(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
};

const isEven = function isEven(number) {
    return number % 2 === 0;
};

const isOld = function isOld(number) {
    return number % 2 === 1;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = filterArray(numbers, isEven);
let oldNumbers = filterArray(numbers, isOld);

console.log(`Even numbers:`, evenNumbers);
console.log(`Old numbers:`, oldNumbers);

// Use array method
evenNumbers = numbers.filter((number) => number % 2 === 0);
oldNumbers = numbers.filter((number) => number % 2 === 1);

console.log(`Even numbers (Use array method):`, evenNumbers);
console.log(`Old numbers (Use array method):`, oldNumbers);

// function can be returned from other function ----------------------------------------------------------------

function multiplyBy(factor) {
    return function multiply(number) {
        return number * factor;
    };
}

let result = multiplyBy(2);
console.log(result(10));
console.log(result(20));

result = multiplyBy(3);
console.log(result(10));
console.log(result(20));
