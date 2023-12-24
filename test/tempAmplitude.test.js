import { describe, test, expect } from '@jest/globals';
import calcTempAmplitude from '../src/03-Developer-Skills/tempAmplitude';

const fc = require('fast-check');

describe('Example based testing', () => {
    test('when temperatures is empty then result is null', () => {
        const tempArray = [];
        const result = calcTempAmplitude(tempArray);
        expect(result).toBeNull();
    });

    test('when temperatures contains only non-number values then result is null', () => {
        const tempArray = ['error', 'undefined'];
        const result = calcTempAmplitude(tempArray);
        expect(result).toBeNull();
    });

    test('when temperatures contains only one value then temperature amplitude equal 0', () => {
        const tempArray = [10];
        const result = calcTempAmplitude(tempArray);
        expect(result).toBe(0);
    });

    test('when temperatures contains multiple values and errors then it calculate temperature  amplitude correct', () => {
        const tempArray = [5, 10, 'error', 3, 8, '', undefined, 12];
        const result = calcTempAmplitude(tempArray);
        expect(calcTempAmplitude(tempArray)).toBe(9);
    });
});

describe('property based testing', () => {
    test('should calculate temperature amplitude correctly, handling sensor errors', () => {
        fc.assert(
            fc.property(
                fc.array(fc.oneof(fc.integer(), fc.constant('error'), fc.constant('undefined')), {
                    minLength: 0,
                    maxLength: 100
                }),
                (tempArray) => {
                    const amplitude = calcTempAmplitude([...tempArray]);
                    const expectedAmplitude = calcTempAmplitude(
                        tempArray.filter((value) => typeof value === 'number')
                    );

                    if (expectedAmplitude !== null) {
                        expect(amplitude).toEqual(expectedAmplitude);
                    } else {
                        expect(amplitude).toBeNull();
                    }
                }
            )
        );
    });
});
