const fs = require("fs");

function calculateSum(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

function findHighestAndLowest(numbers) {
    let highest = numbers[0];
    let lowest = numbers[0];
    for (const num of numbers) {
        if (num > highest) {
            highest = num;
        }
        if (num < lowest) {
            lowest = num;
        }
    }
    return { highest, lowest };
}

function calculateAverage(numbers) {
    const sum = calculateSum(numbers);
    return sum / numbers.length;
}

const numbersText = fs.readFileSync("./data/sample-numbers.txt", "utf8");

// lines to number
const numbers = numbersText
    .trim()
    .split("\n")
    .map(Number);

console.log("Sum:", calculateSum(numbers));
console.log("Highest and Lowest:", findHighestAndLowest(numbers));
console.log("Average:", calculateAverage(numbers));

module.exports = {
    calculateSum,
    findHighestAndLowest,
    calculateAverage
};