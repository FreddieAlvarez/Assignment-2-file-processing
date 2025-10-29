const fs = require("fs");

// sum
function calculateSum(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

// highest and lowest
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

// average
function calculateAverage(numbers) {
    const sum = calculateSum(numbers);
    return sum / numbers.length;
}

// Only read the file and log results if running this file directly
if (require.main === module) {
    const numbersText = fs.readFileSync("./data/sample-numbers.txt", "utf8");

    // lines to numbers
    const numbers = numbersText
        .trim()
        .split("\n")
        .map(Number);

    console.log("Sum:", calculateSum(numbers));
    console.log("Highest and Lowest:", findHighestAndLowest(numbers));
    console.log("Average:", calculateAverage(numbers));
}

module.exports = {
    calculateSum,
    findHighestAndLowest,
    calculateAverage
};