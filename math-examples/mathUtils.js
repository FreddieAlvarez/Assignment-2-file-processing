function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) { 
    if (b === 0) { 
        return "Cannot divide by zero"; 
    } 
    return a / b; 
}

function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

module.exports = {
    add,
    subtract,
    multiply,
	divide,
    calculateAverage
};
