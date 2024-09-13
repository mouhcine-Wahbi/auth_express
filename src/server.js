const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./routes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET || 'b5e3e3caf2ad9bdba1ff21b0dbab686060ee885f3ba115da7dc764f4bf20954f9535d97dc7822a83edd9c7e72186b38ec0c3c8f1db87a1129c4ab3664cd6a0f3',
    resave: false,
    saveUninitialized: true,
}));

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

// Use routes defined in routes.js
app.use('/api', routes);

// Catch-all route for 404 errors
app.use((req, res) => {
    res.status(404).send('Sorry, that route does not exist.');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on https://auth-express-1.onrender.com');
});
