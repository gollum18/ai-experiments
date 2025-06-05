const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const hpp = require('hpp');
const slowDown = require('express-slow-down');
const rateLimiter = require('./middleware/rateLimiter');
const calculatorRoutes = require('./routes/calculator');

// Initialize express app
const app = express();

// Apply security middleware
app.use(helmet()); // Security headers
app.use(hpp()); // Protect against HTTP Parameter Pollution attacks
app.use(helmet.noSniff()); // Prevent MIME type sniffing
app.use(helmet.hidePoweredBy()); // Remove X-Powered-By header
app.use(helmet.xssFilter()); // XSS protection

// Rate limiting and brute force protection
app.use(rateLimiter);
app.use(slowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 50, // allow 50 requests per 15 minutes, then...
    delayMs: 500 // begin adding 500ms of delay per request
}));

// CORS configuration
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? process.env.ALLOWED_ORIGINS?.split(',') 
        : '*',
    methods: ['POST'], // Only allow POST method
    allowedHeaders: ['Content-Type'],
    maxAge: 86400 // Cache preflight requests for 24 hours
}));

app.use(morgan('combined')); // Request logging
app.use(bodyParser.json({ limit: '10kb' })); // Parse JSON bodies with size limit

// API routes
app.use('/api/v1', calculatorRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
