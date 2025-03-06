const jwt = require('jsonwebtoken');
const pool = require('./db');
require('dotenv').config();

async function authenticateUser(email, password) {
    try {
        console.log('Authenticating user with email:', email);
        
        const [rows] = await pool.query('SELECT * FROM list_revendeur WHERE email_rev = ?', [email]);
        
        if (rows.length > 0) {
            const user = rows[0];

            // Ensure both values are strings before comparison
            if (password.trim() === String(user.password).trim()) {
                return true;
            }
        }

        console.log('Authentication failed: Invalid credentials');
        return false;
    } catch (err) {
        console.error('Error during authentication:', err);
        return false;
    }
}

module.exports = { authenticateUser };
