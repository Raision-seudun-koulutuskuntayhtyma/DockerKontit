// A WEB APPLICATION FOR DEMONSTRATING DOCKER CONTAINERS
// =============================================================

// LIBRARIES
// ---------

// External libraries
// ------------------
const express = require('express');
const {engine} = require('express-handlebars');

// Local libraries and modules
// ---------------------------

// A module to demonstrate local dependency to be included in the container
//const pgtools =  require('./postgres-tools')

// INITIALIZATION
// --------------

// Create an express app
const app = express();

// Define a TCP port to listen: read env or use 8080 if undefined
const PORT = process.env.PORT || 8080

// Set a folders for static files like css, images or icons
app.use(express.static('public'));
app.use('/images', express.static('public/images'));

// Setup templating
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Setup URL parser to use extended option
app.use(express.urlencoded({extended: true}))

// URL ROUTES
// ----------


// Route to home page
app.get('/', (req, res) => {
    res.render('home')
});

// A test route to test.handlebars page
app.get('/tiedot', (req, res) => {
    res.render('tiedot')
});

// SERVER START
// ------------
app.listen(PORT)
console.log(`Server started on port ${PORT}`)