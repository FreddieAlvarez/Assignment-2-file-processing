const { calculateSum, findHighestAndLowest, calculateAverage } = require('../src/numberProcessor');

describe('Number Processor Functions', () => {
    // Test sum
    test('should calculate the sum of numbers', () => {
        const numbers = [1, 2, 3, 4, 5];
        expect(calculateSum(numbers)).toBe(15);
    });

    // Test highest and lowest
    test('should find the highest and lowest numbers', () => {
        const numbers = [5, 10, 3, 8];
        expect(findHighestAndLowest(numbers)).toEqual({ highest: 10, lowest: 3 });
    });

    // Test average
    test('should calculate the average of numbers', () => {
        const numbers = [2, 4, 6, 8];
        expect(calculateAverage(numbers)).toBe(5);
    });

    // Edge cases (optional)
    test('sum of empty array should be 0', () => {
        expect(calculateSum([])).toBe(0);
    });

    test('highest and lowest of single-element array should return same value', () => {
        expect(findHighestAndLowest([7])).toEqual({ highest: 7, lowest: 7 });
    });

    test('average of single-element array should return that value', () => {
        expect(calculateAverage([9])).toBe(9);
    });
});