const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculator.controller');

// Middleware to validate operands for all calculator routes
router.use(['/add', '/subtract', '/multiply', '/divide'], calculatorController.validateOperands);

// Calculator routes
router.post('/add', calculatorController.add);
router.post('/subtract', calculatorController.subtract);
router.post('/multiply', calculatorController.multiply);
router.post('/divide', calculatorController.divide);

module.exports = router;
