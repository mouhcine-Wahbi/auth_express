const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET || '4fc5ccd7bfc16a4721fbeee00eca83dbb9234517b9aeabd4c85a46dcc068e9261eac75237bf4d4e099ab27ef422d82b4676ccce8cfd883449bf9556f9be71fdb',
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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
