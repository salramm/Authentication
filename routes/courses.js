const express = require('express');
const {getCourses} = require('../controllers/courses');   //Importing the methods creating in controller on the TEAM object that we created

//Creating a Router
const router = express.Router({ mergeParams: true}); // Added mergeparams bc we are merging URL Params

router.route('/').get(getCourses);



module.exports = router;


