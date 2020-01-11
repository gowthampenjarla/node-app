const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to local database
mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// On connected
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

// On error
mongoose.connection.on('error', (err) => {
    console.log('database error' + err);
});

const app = express();

const port = 3000;

// Routing
const categories = require('./routes/categories');
app.use('/categories', categories)

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// CORS middleware
app.use(cors());


// Parser Middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))



app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});