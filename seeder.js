const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

//Load the environment variables
dotenv.config({path: './config'});

//Load Models
const Team = require('./models/Team');
const connectDB = require('./config/db');

//Connect to the database
mongoose.connect(process.env.MONGO_URI);

// Read JSON files
const team = JSON.parse(fs.readFileSync(`${__dirname}/_data/teams.json`, 'utf-8'));

// Import into DB
const importData = async () => {
    try {
        await Team.create(team);

        console.log('Data Imported...'.green.inverse);
        process.exit
    } catch (error) {
        console.error(error);
    }
}

// Delete Data
const deleteData = async () => {
    try {
        await Team.deleteMany(team);

        console.log('Data Deleted...'.red.inverse);
        process.exit
    } catch (error) {
        console.error(error);
    }
}

if (process.argv[2] === '-i') {
    importData();
}   else if (process.argv[2] === '-d') {
    deleteData();
}