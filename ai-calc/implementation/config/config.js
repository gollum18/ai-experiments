module.exports = {
    development: {
        port: 3000,
        logLevel: 'debug',
        cors: {
            origin: '*'
        }
    },
    production: {
        port: process.env.PORT || 8080,
        logLevel: 'info',
        cors: {
            origin: process.env.ALLOWED_ORIGINS?.split(',') || []
        }
    },
    test: {
        port: 3001,
        logLevel: 'error',
        cors: {
            origin: '*'
        }
    }
};
