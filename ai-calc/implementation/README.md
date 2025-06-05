# Calculator API

A RESTful calculator API that provides basic mathematical operations.

## Features

- Addition
- Subtraction
- Multiplication
- Division
- JSON responses
- Input validation
- Error handling

## Requirements

- Node.js 18.x or higher
- npm 8.x or higher
- Docker (optional)

## Local Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Using Docker

### Development
```bash
docker-compose up
```

### Production
```bash
docker build -t calculator-api .
docker run -p 8080:8080 calculator-api
```

## API Endpoints

All endpoints accept POST requests with two operands in the request body:

```json
{
    "operand1": number,
    "operand2": number
}
```

- POST /api/v1/add - Addition
- POST /api/v1/subtract - Subtraction
- POST /api/v1/multiply - Multiplication
- POST /api/v1/divide - Division

## Testing

Run the test suite:
```bash
npm test
```

## Environment Variables

Create a `.env` file based on `.env.development` or `.env.production`.

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)
- `LOG_LEVEL`: Logging level
- `ALLOWED_ORIGINS`: Comma-separated list of allowed CORS origins (production only)

## License

MIT
