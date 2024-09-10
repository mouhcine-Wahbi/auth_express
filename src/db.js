const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: 'wahbi',
    host: 'dpg-crfjcurqf0us738m0ep0-a.oregon-postgres.render.com',
    database: 'test_revendeur',
    password: 'dQk25lpuozzfABljrKbu7SO3e4XzankH',
    port: 5432,
});


module.exports = pool;
