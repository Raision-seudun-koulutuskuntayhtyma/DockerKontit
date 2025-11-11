// A MODULE FOR ACCESSING POSTGRESQL DATABASES
// ===========================================

// EXTERNAL LIBARIES
// -----------------

// Class for creating PG-pool objects using PG library
const Pool = require('pg').Pool

// SETTINGS
// --------

// Database connection settings
const connection = {
    host: '127.0.0.1',
    port: '5434',
    database: 'kontit',
    user: 'postgres',
    password: 'Q2werty7'
};

// Create a new Pool object for queries
const pool = new Pool(connection);

// DATABASE OPERATIONS
// -------------------

// Get all rows from table kontti
const getContainerData = async () => {
    let query = 'SELECT * FROM public.kontti';
    let resultset = await pool.query(query);
    return resultset;
}
// Export functions needed by the main app
module.exports = {getContainerData}