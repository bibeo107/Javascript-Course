import { displayTemperature, printForecast } from '../src/Developer-skills/challenge';

const { test, expect, describe, it } = require('@jest/globals');

describe('displayTemperatures', () => {
    it('should display the forecasted temperatutes correctly', () => {
        const inputTemps = [25, -5, 30];
        const expectedOutput = '... 25°C in 1 day ... -5°C in 2 days ... 30°C in 3 days ...';
        expect(displayTemperature(inputTemps)).toEqual(expectedOutput);
    });

    it('should return an empty string when the input is not array', () => {
        const inputTemps = '12';
        const expectedOutput = '';
        expect(displayTemperature(inputTemps)).toEqual(expectedOutput);
    });

    it('should return an empty string when the input is an empty array', () => {
        const inputTemps = [];
        const expectedOutput = '';
        expect(displayTemperature(inputTemps)).toEqual(expectedOutput);
    });

    describe('', () => {
        it('should display the forecasted temperatutes correctly', () => {
            const inputTemps = [25, -5, 30];
            const expectedOutput = '... 25°C in 1 day ... -5°C in 2 days ... 30°C in 3 days ...';
            expect(printForecast(inputTemps)).toEqual(expectedOutput);
        });

        it('should return an empty string when the input is not array', () => {
            const inputTemps = '12';
            const expectedOutput = '';
            expect(printForecast(inputTemps)).toEqual(expectedOutput);
        });
    });
});
