// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.


Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
[]
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

*/

// Problem: displays a string with forecasted maximum temperatures from a array.

export function displayTemperature(temperatures) {
    if (!Array.isArray(temperatures) || temperatures.length === 0) return '';
    let output = '...';
    for (let i = 0; i < temperatures.length; i += 1) {
        output += ` ${temperatures[i]}°C in ${i + 1} ${i === 0 ? 'day' : 'days'} ...`;
    }
    return output;
}
export function printForecast(temperatures) {
    if (!Array.isArray(temperatures) || temperatures.length === 0) return '';

    const output = temperatures
        .map((temp, i) => `${temp}°C in ${i + 1} ${i === 0 ? 'day' : 'days'}`)
        .join(' ... ');

    return `... ${output} ...`;
}
const temps = [12, 5, -5, 0, 4];

console.log(displayTemperature(temps));
console.log(printForecast(temps));
