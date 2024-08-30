function calculator(num1, num2, operator) {
    let result = 0.0;
    
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            throw new Error("Operator " + operator + " is invalid");
    }
    return result;
}

module.exports = calculator;
