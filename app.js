// Import the express package
const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000; 

// Initialize a new express instance
const app = express();

// Route handler that sends back a response
app.get('/home', (req, res) => {
    res.send("Hello, World!");
});

// Start our server
app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`);
});
