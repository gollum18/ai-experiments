class CalculatorService {
    add(operand1, operand2) {
        return {
            sum: Number(operand1) + Number(operand2)
        };
    }

    subtract(operand1, operand2) {
        return {
            difference: Number(operand1) - Number(operand2)
        };
    }

    multiply(operand1, operand2) {
        return {
            product: Number(operand1) * Number(operand2)
        };
    }

    divide(operand1, operand2) {
        if (Number(operand2) === 0) {
            return {
                quotient: "undefined"
            };
        }
        return {
            quotient: Number(operand1) / Number(operand2)
        };
    }
}

module.exports = new CalculatorService();
