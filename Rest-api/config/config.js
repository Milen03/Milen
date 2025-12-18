require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        origin: ['http://localhost:5173', 'http://localhost:5555', 'http://localhost:4200'],
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS
    },
    production: {
        port: process.env.PORT || 3000,
        origin: [],
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS
    }
};

module.exports = config[env];
