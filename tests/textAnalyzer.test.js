const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

describe('Text Analyzer Functions', () => {
    // Test for counting words
    test('should count total number of words', () => {
        const text = 'Hello world from Node';
        expect(countWords(text)).toBe(4);
    });

    // Test for finding the longest word
    test('should find the longest word', () => {
        const text = 'Hello wonderful world';
        expect(findLongestWord(text)).toBe('wonderful');
    });

    // Test for counting lines
    test('should count number of lines', () => {
        const text = 'Line one\nLine two\nLine three';
        expect(countLines(text)).toBe(3);
    });

    // Edge cases (optional, safe)
    test('word count should return 0 for empty string', () => {
        expect(countWords('')).toBe(0);
    });

    test('longest word should return empty string for empty input', () => {
        expect(findLongestWord('')).toBe('');
    });

    test('line count should return 1 for empty string', () => {
        expect(countLines('')).toBe(1);
    });
});