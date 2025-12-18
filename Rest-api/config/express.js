const express = require('express');
const cors = require('cors');
const config = require('./config');

module.exports = (app) => {
    // CORS
    app.use(cors({
        origin: config.origin,
        credentials: true
    }));

    // Parse JSON
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};
