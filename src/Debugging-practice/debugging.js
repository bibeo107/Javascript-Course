/*
PROBLEM 1:
We work for a company building a smart home thermometer.
Our most recent task is this:
"Given an array of temperatures of one day, calculate the temperature amplitude.
Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 'error', 14, 9, 5, '', undefined];

*/

/*
A) Understanding the problem: ( Ask right the question to clear problem)
1. Question: what is thermoneter?
    Answer: thermometer - A thermometer is an instrument that measures temperature.

2. Question: what is the temperature amplitude?
    Answer:  The temperature amplitude refers to the difference between the maximum and minimum temperature

3. How to compute max & min temparatures in array?

3. Question: what is the sensor error?
    Answer: Errors can occur due to various reasons such as sensor malfunctioning or incorrect data input.
    Examples:
    temperatures = [];
    temperatures = ['error','error','error'];
    temperatures = [10];
    temperatures = [3, 'error', 9, 13, 17, '', undefined];

    Question: What should we do with the "undefined", "" values?
        Answer: => ignore the value => go to next go
    Question: How about temperatures is empty?
        Answer: If the array is empty, then return null because there are no temperatures to find the amplitude from.


B) Breaking up into sub-problems
1. Find max value in array =>
2. Find min value in array =>
3. Subtract min from max and return it (amplitude) =>  ( max - min)
4. Handling Sensor Error => if ('error' value) => (not a number) in array => ignore

*/
// const temperatures = [];
// const temperatures = [10];
// const temperatures = [10, 0];
// const temperatures = ['error', 'error', 'error', 'error'];
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// eslint-disable-next-line import/prefer-default-export
function getTempAmplitude(tempArray) {
    const sortedTemps = tempArray
        .filter((value) => typeof value === 'number')
        .sort((a, b) => a - b);
    const [minTemp, maxTemp] = [sortedTemps[0], sortedTemps[sortedTemps.length - 1]];
    return sortedTemps.length ? maxTemp - minTemp : null;
}
const amplitude = getTempAmplitude(temperatures);
module.exports = getTempAmplitude;
