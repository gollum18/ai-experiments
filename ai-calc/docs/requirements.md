# System Requirements Specification

Following are a list of formal requirements for a calculator web application as defined by a business partner.

1. The system shall implement the addition of two operands using the addition operation.
2. The system shall implement the subtraction of two operands using the subtraction operation.
3. The system shall implement the division of two operands using the division operation.
4. The system shall implement the multiplication of two operations using the multiplication operation.
5. The system shall return a decimal in the case that the dividend or divisor of the division operation is a decimal.
6. The system shall return the string "undefined" when the dividend of the division operation is a 0.
7. The system shall implement all 
8. The system shall implement all mathematical operations as separate POST routes on the web server where the route name is the name of the operation.
9. The system shall allow the user to pass arguments to the mathematical operations as POST arguments.
10. The system shall call the corresponding mathematical operation when receiving a POST request from a client.
11. The system shall return the result of a mathematical operation to the caller after a mathematical operation has been performed.
12. The system shall return the results of a mathematical operation as JSON.
13. The system shall return the result of addition as a 'sum'.
14. The system shall return the result of subtraction as a 'difference'.
15. The system shall return the result of division as a 'quotient'.
16. The system shall return the result of multiplication as a 'product'.