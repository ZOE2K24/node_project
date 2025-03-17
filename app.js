//import the express package
const express = require('express');

//initialize a new express instance equal to the app object
const app = express();

//Start our server, listening on port 3000
app.listen(PORT, () =>{
    console.log(`Connected on port ${PORT}`);
});