const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: 'mysql.railway.internal',
    user: 'root',
    database: 'railway',
    password: 'aLUzQZrmjtkvdkfBJFseuNdmAOCxeZOq',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
