// Lecture: functions
function describeCountry(country, popuation, capitalCity) {
    return `${country} has ${popuation} milion people and its capital city is ${capitalCity}`;
}
const describleIndia = describeCountry('India', 'New Delhi', 1430);
const describleJapan = describeCountry('Japan', 'Tokyo', 14);
const describleIndonesia = describeCountry('Indonesia', 'Jakarta', 15);
console.log(describleIndia, describleJapan, describleIndonesia);

// Lecture: function declarations vs Expressions
const worldPopulation = 7900;
function percentageOfWorld1(popuation) {
    return (popuation / worldPopulation) * 100;
}
const percentIndia = percentageOfWorld1(1430);
const percentJapan = percentageOfWorld1(14);
const percentIndonesia = percentageOfWorld1(15);

console.log(percentIndia, percentJapan, percentIndonesia);
