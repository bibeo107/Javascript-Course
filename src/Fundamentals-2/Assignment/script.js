/* eslint-disable func-names */
// Lecture: functions
function describeCountry(country, popuation, capitalCity) {
    return `${country} has ${popuation} milion people and its capital city is ${capitalCity}`;
}
const describleIndia = describeCountry('India', 'New Delhi', 1430);
const describleJapan = describeCountry('Japan', 'Tokyo', 14);
const describleIndonesia = describeCountry('Indonesia', 'Jakarta', 15);
console.log(describleIndia, describleJapan, describleIndonesia);

const worldPopulation = 7900;

// function declarations
function percentageOfWorld1(popuation) {
    return (popuation / worldPopulation) * 100;
}
const percentIndia = percentageOfWorld1(1430);
const percentJapan = percentageOfWorld1(14);
const percentIndonesia = percentageOfWorld1(15);

console.log(percentIndia, percentJapan, percentIndonesia);

// function expressions
const percentageOfWorld2 = function (popuation) {
    return (popuation / worldPopulation) * 100;
};
const percentIndia1 = percentageOfWorld2(1430);
const percentJapan1 = percentageOfWorld2(14);
const percentIndonesia1 = percentageOfWorld2(15);

console.log(percentIndia1, percentJapan1, percentIndonesia1);

// arrow functions
const percentageOfWorld3 = (popuation) => {
    return (popuation / worldPopulation) * 100;
};
const percentIndia2 = percentageOfWorld2(1430);
const percentJapan2 = percentageOfWorld2(14);
const percentIndonesia3 = percentageOfWorld2(15);

console.log(percentIndia1, percentJapan1, percentIndonesia1);
