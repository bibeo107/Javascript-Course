import { displayTemperature, printForecast } from '../src/Practice/challenge';

const { test, expect, describe, it } = require('@jest/globals');

describe('displayTemperatures', () => {
    it('should display the forecasted temperature correctly', () => {
        const inputTemps = [25, -5, 30];
        const expectedOutput = '... 25°C in 1 day ... -5°C in 2 days ... 30°C in 3 days ...';

        const result = displayTemperature(inputTemps);

        expect(result).toEqual(expectedOutput);
    });

    it('should return an empty string when the input is not array', () => {
        const inputTemps = '12';
        const expectedOutput = '';

        const result = displayTemperature(inputTemps);

        expect(result).toEqual(expectedOutput);
    });

    it('should return an empty string when the input is an empty array', () => {
        const inputTemps = [];
        const expectedOutput = '';
        expect(displayTemperature(inputTemps)).toEqual(expectedOutput);
    });

    describe('', () => {
        it('should display the forecasted temperature correctly', () => {
            const inputTemps = [25, -5, 30];
            const expectedOutput = '... 25°C in 1 day ... -5°C in 2 days ... 30°C in 3 days ...';

            const result = displayTemperature(inputTemps);

            expect(result).toEqual(expectedOutput);
        });

        it('should return an empty string when the input is not array', () => {
            const inputTemps = '12';
            const expectedOutput = '';

            const result = displayTemperature(inputTemps);

            expect(result).toEqual(expectedOutput);
        });
    });
});
