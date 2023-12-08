// const getTempAmplitude = require('../src/Practice/debugging');
import getTempAmplitude from '../src/Practice/debugging';

const { test, expect } = require('@jest/globals');

test('Temperature amplitude is null when temperatures is empty', () => {
    const tempArray = [];
    const result = getTempAmplitude(tempArray);
    expect(result).toBeNull();
});

test('Temperature amplitude is null when temperatures contains only non-number values', () => {
    const tempArray = ['nine', 'ten', 'seven'];
    const result = getTempAmplitude(tempArray);
    expect(result).toBeNull();
});

test('Temperature amplitude equal 0 when temperatures contains only one value', () => {
    const tempArray = [10];
    const result = getTempAmplitude(tempArray);
    expect(result).toBe(0);
});

test('Temperature amplitude ignore errors value', () => {
    const tempArray = [5, 10, 'error', 3, 8, '', undefined, 12];
    const result = getTempAmplitude(tempArray);
    expect(getTempAmplitude(tempArray)).toBe(9);
});
