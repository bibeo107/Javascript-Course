const { test, expect } = require('@jest/globals');
const getTempAmplitude = require('../src/Debugging-practice/debugging');

test('Test case 1: Testing when temperatures is empty', () => {
    const tempArray = [];
    expect(getTempAmplitude(tempArray)).toBeNull();
});

test('Test case 2: Testing when temperatures contains only non-number values', () => {
    const tempArray = ['nine', 'ten', 'elevent'];
    expect(getTempAmplitude(tempArray)).toBeNull();
});

test('Test case 3: Testing when temperatures contains only one value', () => {
    const tempArray = [10];
    expect(getTempAmplitude(tempArray)).toBe(0);
});

test('Test case 4: Testing when temperatures contains multiple values and errors', () => {
    const tempArray = [5, 10, 'error', 3, 8, '', undefined, 12];
    expect(getTempAmplitude(tempArray)).toBe(9);
});
