const fs = require("fs");

function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words.length;
}

function findLongestWord(text) {
    const words = text.trim().split(/\s+/);
    let longest = "";
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

function countLines(text) {
    const lines = text.split("\n");
    return lines.length;
}

module.exports = {
    countWords,
    findLongestWord,
    countLines
};