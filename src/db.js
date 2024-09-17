const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: 'wahbi',
    host: 'dpg-crfjcurqf0us738m0ep0-a.oregon-postgres.render.com',
    database: 'test_revendeur',
    password: 'dQk25lpuozzfABljrKbu7SO3e4XzankH',
    port: 5432,
    ssl: {
        rejectUnauthorized: false  // This bypasses certificate validation (for self-signed certs). Set to true in production with valid certs.
      }
});


module.exports = pool;
