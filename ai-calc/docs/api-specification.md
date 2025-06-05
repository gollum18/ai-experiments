# API Design Specification

## Base URL
`/api/v1`

## Endpoints

### 1. Addition
- **Path**: `/add`
- **Method**: POST
- **Parameters**:
  - `operand1`: First number (required)
  - `operand2`: Second number (required)
- **Response**:
  ```json
  {
    "sum": number
  }
  ```

### 2. Subtraction
- **Path**: `/subtract`
- **Method**: POST
- **Parameters**:
  - `operand1`: First number (required)
  - `operand2`: Second number (required)
- **Response**:
  ```json
  {
    "difference": number
  }
  ```

### 3. Division
- **Path**: `/divide`
- **Method**: POST
- **Parameters**:
  - `operand1`: Dividend (required)
  - `operand2`: Divisor (required)
- **Response**:
  ```json
  {
    "quotient": number | "undefined"
  }
  ```
- **Special Cases**:
  - Returns decimal for non-integer results
  - Returns "undefined" when dividing by zero

### 4. Multiplication
- **Path**: `/multiply`
- **Method**: POST
- **Parameters**:
  - `operand1`: First number (required)
  - `operand2`: Second number (required)
- **Response**:
  ```json
  {
    "product": number
  }
  ```

## Common Response Format
All responses will be in JSON format with appropriate content-type headers.

## Error Handling
- **400 Bad Request**: Invalid input parameters
- **500 Internal Server Error**: Server-side processing errors

## Response Headers
```
Content-Type: application/json
```
