const calculatorService = require('../src/services/calculator.service');

describe('Calculator Service', () => {
    describe('add', () => {
        it('should add two numbers correctly', () => {
            expect(calculatorService.add(2, 3)).toEqual({ sum: 5 });
        });

        it('should handle decimal numbers', () => {
            expect(calculatorService.add(2.5, 3.7)).toEqual({ sum: 6.2 });
        });
    });

    describe('subtract', () => {
        it('should subtract two numbers correctly', () => {
            expect(calculatorService.subtract(5, 3)).toEqual({ difference: 2 });
        });

        it('should handle negative results', () => {
            expect(calculatorService.subtract(3, 5)).toEqual({ difference: -2 });
        });
    });

    describe('multiply', () => {
        it('should multiply two numbers correctly', () => {
            expect(calculatorService.multiply(4, 3)).toEqual({ product: 12 });
        });

        it('should handle zero', () => {
            expect(calculatorService.multiply(4, 0)).toEqual({ product: 0 });
        });
    });

    describe('divide', () => {
        it('should divide two numbers correctly', () => {
            expect(calculatorService.divide(6, 2)).toEqual({ quotient: 3 });
        });

        it('should handle decimal results', () => {
            expect(calculatorService.divide(5, 2)).toEqual({ quotient: 2.5 });
        });

        it('should return "undefined" when dividing by zero', () => {
            expect(calculatorService.divide(5, 0)).toEqual({ quotient: "undefined" });
        });
    });
});
