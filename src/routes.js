const express = require('express');
const { authenticateUser } = require('./auth');
const router = express.Router();

// Route to handle login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    const isAuthenticated = await authenticateUser(email, password);
    if (isAuthenticated) {
        // Optionally send a token or session information
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
