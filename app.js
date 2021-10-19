const express = require('express');
const app = express(); // Now I have the ability to create routes
const mongoose = require('mongoose');

//Creating routes
app.get('/', (req,res) => {
    res.send('We are on home');
});


// Start listening to the server 
app.listen(3000);


