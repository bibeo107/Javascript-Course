import { test, expect } from '@jest/globals';
import { calcTempAmplitude } from '../src/Practice/tempAmplitude';

test('Test case 1: Testing when temperatures is empty', () => {
    const tempArray = [];
    const result = calcTempAmplitude(tempArray);
    expect(result).toBeNull();
});

test('Test case 2: Testing when temperatures contains only non-number values', () => {
    const tempArray = ['nine', 'ten', 'seven'];
    const result = calcTempAmplitude(tempArray);
    expect(result).toBeNull();
});

test('Test case 3: Testing when temperatures contains only one value', () => {
    const tempArray = [10];
    const result = calcTempAmplitude(tempArray);
    expect(result).toBe(0);
});

test('Test case 4: Testing when temperatures contains multiple values and errors', () => {
    const tempArray = [5, 10, 'error', 3, 8, '', undefined, 12];
    const result = calcTempAmplitude(tempArray);
    expect(calcTempAmplitude(tempArray)).toBe(9);
});
