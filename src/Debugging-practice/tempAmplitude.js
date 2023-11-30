/* eslint-disable import/prefer-default-export */
export const add = (a, b) => {
    return a + b;
};

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

export function calcTempAmplitude(tempArray) {
    const sortedTemps = tempArray
        .filter((value) => typeof value === 'number')
        .sort((a, b) => a - b);
    const [minTemp, maxTemp] = [sortedTemps[0], sortedTemps[sortedTemps.length - 1]];
    return sortedTemps.length ? maxTemp - minTemp : null;
}
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
