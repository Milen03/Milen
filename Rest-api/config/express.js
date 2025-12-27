const express = require('express');
const cors = require('cors');
const config = require('./config');

module.exports = (app) => {
    // CORS configuration
    const corsOptions = {
        origin: config.origin,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    };

    // Enable pre-flight for all routes
    app.options('*', cors(corsOptions));
    app.use(cors(corsOptions));

    // Parse JSON
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};
