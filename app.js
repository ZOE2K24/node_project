// Import the express package
const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT; 

// Initialize a new express instance
const app = express();

// Route handler that sends back a response
app.get('/home', (req, res) => {
    res.send("Hello, World!");
});

//route handler for a post request using path parameter
app.post('/user/:id', (req, res) => {
    const user_id = req.params.id;
    res.send(`This is the user id: ${user_id}`); 
});

//route handler for a post request
app.post('/response', (req, res)=>{
    res.send('This is a post response in a RESTful style');
});

// Start our server, listening on port 3000
app.listen(PORT, () => {
    console.log(`Connected on port ${PORT}`);
});
