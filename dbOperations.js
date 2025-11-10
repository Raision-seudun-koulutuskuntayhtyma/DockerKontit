// A MODULE FOR ACCESSING POSTGRESQL DATABASES
// ===========================================

// EXTERNAL LIBARIES
// -----------------

// Library for handling .env variables
const dotenv = require('dotenv');


// Class for creating PG-pool objects using PG library
const Pool = require('pg').Pool

// SETTINGS
// --------

// Initialize .env for use
dotenv.config();

// Read environment variables from .env
const HOST = process.env.POSTGRESQL_HOST
const PORT = process.env.POSTGRESQL_USER_PORT
const DATABASE= process.env.POSTGRESQL_DB
const USER = process.env.POSTGRESQL_USER
const PASSWORD = process.env.POSTGRESQL_USER_PASSWORD

// Database connection settings
const connection = {
    host: HOST,
    port: PORT,
    database: DATABASE,
    user: USER,
    password: PASSWORD
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