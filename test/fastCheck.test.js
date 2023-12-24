import { describe, test, expect } from '@jest/globals';
import fc from 'fast-check';
// eslint-disable-next-line import/extensions
import add from '../src/03-Developer-Skills/fastCheck';

describe('Example based testing > add two numbers', () => {
    test(`should correctly add(4, -2)`, () => {
        const result = add(4, -2);
        const expected = 2;
        expect(result).toBe(expected);
    });

    test(`should correctly add(10, 1.5)`, () => {
        const result = add(10, 1.5);
        const expected = 11.5;
        expect(result).toBe(expected);
    });
});

const floatOrInteger = fc.oneof(fc.float(), fc.integer());
describe('Property based testing', () => {
    test('should correctly add two numbers', () => {
        fc.assert(
            fc.property(floatOrInteger, floatOrInteger, (a, b) => {
                expect(add(a, b)).toBe(a + b);
            }),
            { verbose: true }
        );
    });
});
