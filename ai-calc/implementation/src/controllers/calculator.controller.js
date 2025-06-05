const calculatorService = require('../services/calculator.service');

class CalculatorController {
    validateOperands(req, res, next) {
        const { operand1, operand2 } = req.body;
        
        if (operand1 === undefined || operand2 === undefined) {
            return res.status(400).json({
                error: 'Bad Request',
                message: 'Both operands are required'
            });
        }

        if (isNaN(operand1) || isNaN(operand2)) {
            return res.status(400).json({
                error: 'Bad Request',
                message: 'Operands must be valid numbers'
            });
        }

        next();
    }

    add(req, res) {
        const { operand1, operand2 } = req.body;
        const result = calculatorService.add(operand1, operand2);
        res.json(result);
    }

    subtract(req, res) {
        const { operand1, operand2 } = req.body;
        const result = calculatorService.subtract(operand1, operand2);
        res.json(result);
    }

    multiply(req, res) {
        const { operand1, operand2 } = req.body;
        const result = calculatorService.multiply(operand1, operand2);
        res.json(result);
    }

    divide(req, res) {
        const { operand1, operand2 } = req.body;
        const result = calculatorService.divide(operand1, operand2);
        res.json(result);
    }
}

module.exports = new CalculatorController();
