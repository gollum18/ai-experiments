# Data Flow Diagram Description

## 1. User Interaction Flow

```mermaid
graph LR
    Client -- POST Request --> WebServer
    WebServer -- Parameters --> OperationHandler
    OperationHandler -- Result --> ResponseFormatter
    ResponseFormatter -- JSON --> Client
```

## 2. Operation Processing Flow

```mermaid
graph TD
    A[Receive Request] --> B{Validate Input}
    B -- Valid --> C[Process Operation]
    B -- Invalid --> D[Generate Error]
    C --> E[Format Response]
    D --> E
    E --> F[Send Response]
```

## 3. Component Interaction

### Client → Web Server
- Sends POST request to specific operation endpoint
- Includes operands as request parameters

### Web Server → Operation Handler
- Validates request format
- Extracts operation parameters
- Routes to appropriate operation handler

### Operation Handler → Response Formatter
- Performs mathematical calculation
- Handles special cases (e.g., division by zero)
- Passes result for formatting

### Response Formatter → Client
- Formats result according to operation type
- Creates JSON response
- Returns to client

## 4. Data Types and Transformations

### Input Data
- All numeric inputs accepted as numbers
- Parameters passed via POST request body

### Internal Processing
- Numbers handled as floating-point for precision
- Special case handling for division by zero

### Output Data
- All responses in JSON format
- Operation-specific result names (sum, difference, quotient, product)
- Error messages when applicable
