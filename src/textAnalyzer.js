const fs = require("fs");

function countWords(text) {
    if (!text.trim()) return 0; 
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

if (require.main === module) {
    const sampleText = fs.readFileSync("./data/sample-text.txt", "utf8");

console.log("Word count:", countWords(sampleText));
console.log("Longest word:", findLongestWord(sampleText));
console.log("Line count:", countLines(sampleText));
}

module.exports = {
    countWords,
    findLongestWord,
    countLines
};