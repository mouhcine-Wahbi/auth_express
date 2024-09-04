const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: 'wahbi',
    host: 'localhost',
    database: 'revendeur',
    password: 'wahbi001',
    port: 5432,
});


module.exports = pool;
