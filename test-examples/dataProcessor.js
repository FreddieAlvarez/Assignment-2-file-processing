function countWords(text) {
    if (!text || text.trim() === '') {
        return 0;
    }
    return text.trim().split(' ').length;
}

function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

module.exports = { countWords, findMax };