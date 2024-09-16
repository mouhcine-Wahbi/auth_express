const jwt = require('jsonwebtoken');
const pool = require('./db');
require('dotenv').config();

async function authenticateUser(email, password) {
    try {
        console.log('Authenticating user with email:', email); // Log the email being queried
        
        const result = await pool.query('SELECT * FROM test_list_revendeur WHERE email = $1', [email]);
        //console.log('Database result:', result.rows); // Log database result
        
        pool.query('SELECT * FROM users LIMIT 1', (error, results) => {
            if (error) {
                console.error('Error querying the database:', error);
            } else {
                console.log('Database connected, users:', results.rows);
            }
        });
        

        if (result.rows.length > 0) {
            const user = result.rows[0];
            //console.log('User found:', user); // Log the user found
            
            // Ensure both values are strings before comparison
            if (password.trim() === String(user.password).trim()) {
                //console.log(password)
                return true;
            }            
        }
        
        console.log('Authentication failed: Invalid credentials ');
        return false;
    } catch (err) {
        console.error('Error during authentication:', err);
        return false;
    }
}



module.exports = { authenticateUser };
