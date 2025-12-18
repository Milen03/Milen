global.__basedir = __dirname;
require('dotenv').config();

const express = require('express');
const config = require('./config/config');
const expressConfig = require('./config/express');
const contactRouter = require('./router/contact');

const app = express();

// Express configuration
expressConfig(app);

// Routes
app.use('/api/contact', contactRouter);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});