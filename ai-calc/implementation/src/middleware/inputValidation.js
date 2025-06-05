const validateOperands = (req, res, next) => {
    const { operand1, operand2 } = req.body;

    // Check if operands exist
    if (operand1 === undefined || operand2 === undefined) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'Both operands are required'
        });
    }

    // Convert to numbers and check for validity
    const num1 = Number(operand1);
    const num2 = Number(operand2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'Operands must be valid numbers'
        });
    }    // Check for reasonable number ranges to prevent overflow/underflow
    // Using 1e15 as MAX_SAFE_VALUE because:
    // 1. It's well below JavaScript's Number.MAX_SAFE_INTEGER (2^53 - 1)
    // 2. Multiplication of two numbers up to 1e15 won't exceed Number.MAX_SAFE_INTEGER
    // 3. It's large enough for practical calculations while preventing overflow
    const MAX_SAFE_VALUE = 1e15;
    if (Math.abs(num1) > MAX_SAFE_VALUE || Math.abs(num2) > MAX_SAFE_VALUE) {
        return res.status(400).json({
            error: 'Bad Request',
            message: `Operand values must be between -${MAX_SAFE_VALUE} and ${MAX_SAFE_VALUE}`
        });
    }

    // Sanitize inputs by converting to numbers
    req.body.operand1 = num1;
    req.body.operand2 = num2;

    next();
};

module.exports = validateOperands;
