const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');


//Load env vars
dotenv.config({ path: './config/config.env'});

//Connect to the DataBase - need to do this below the point where env variables are pulled in
connectDB();

//Route files pulled in
const teams = require('./routes/teams');

//Initialize app variable with express
const app = express(); // Now I have the ability to create routes

//Body parser  -  this will allow us to parse the body of the request
app.use(express.json());

//Dev logging middleware - run only if we are in the dev environment
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//Mount Router
app.use('/api/v1/teams', teams);


//Set a PORT value
const PORT = process.env.PORT || 5000  //Process.env gives access to the environment variables

// Start listening to the server 
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold));

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    //Close server and exit process   -   we want the app to fail if it doesn't connect to the app
    server.close(() => process.exit(1));
})
