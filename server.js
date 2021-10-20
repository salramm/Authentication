const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


//Route files pulled in
const teams = require('./routes/teams');

//Load env vars
dotenv.config({ path: './config/config.env'});

//Initialize app variable with express
const app = express(); // Now I have the ability to create routes

//Mount Router
app.use('/api/v1/teams', teams);


//Set a PORT value
const PORT = process.env.PORT || 5000  //Process.env gives access to the environment variables
// Start listening to the server 
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`));