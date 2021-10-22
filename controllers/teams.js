const Team = require('../models/Team');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
//Now we have this 'Team' object that we can call pur methods on


// This is a header before every method that describes what it does

// @desc        get all teams
// @route       GET /api/v1/teams
// @access      Public
exports.getTeams = asyncHandler(async (req, res, next) => {  //Wrapped this in async middleware to avoid writing like in comment section below
        const teams = await Team.find();

        res.status(200).json({success: true, count: teams.length, data: teams});
        
});

/* exports.getTeams = async (req, res, next) => {

    try {
        const teams = await Team.find();
        res.status(200).json({success: true, count: teams.length, data: teams});
    } catch (error) {
        next(error);
        // OLD: res.status(400).json({success: false })
    }
    // Was previously here: res.status(200).json({success: true, msg: 'Show all teams', hello: req.hello});
}*/



// @desc        get a single teams
// @route       GET /api/v1/teams/:id
// @access      Public
exports.getTeam = asyncHandler( async (req, res, next) => {
        const team = await Team.findById(req.params.id); //req.params.id will get the id form the request
        
        if (!team) {
            return next(
                new ErrorResponse(`Team not found with id of  ${req.params.id}`, 404)); //Thsi will handle the rejection if the ID does not exist but is correctly formatted
        }
});


// @desc        Create a new team
// @route       POST /api/v1/teams
// @access      Private
exports.createTeam = asyncHandler( async (req, res, next) => {
    /* console.log(req.body);  To see what data is coming from the client in the request but in order to this we need 
    to add a middleware that is included with express - do this in server.js */
    // res.status(200).json({success: true, msg: 'Create a new team'});
    // Try catch will help handle promise rejections; the code will not hang and end with success: flase
        const team = await Team.create(req.body); //We take the entered info in body and pass into the create method on our model

        res.status(201).json({
            success: true, data: team
        })
});


// @desc        Update a teams
// @route       PUT /api/v1/teams/:id
// @access      Private
exports.updateTeam = asyncHandler( async (req, res, next) => {
        const team = await Team.findByIdAndUpdate(req.params.id, req.body, { // We are find the entry by id and the pass what we want to inser with req.body
            new: true,
            runValidators: true 
        });
        if(!team) {
            return next(
                new ErrorResponse(`Team not found with id of  ${req.params.id}`, 404));
        }

        res.status(200).json({success: true, data: team})
});


// @desc        delete a team
// @route       DELETE /api/v1/teams/:id
// @access      Public
exports.deleteTeam = asyncHandler( async (req, res, next) => {
        const team = await Team.findByIdAndDelete(req.params.id)

        if (!team) {
            return next(
                new ErrorResponse(`Team not found with id of  ${req.params.id}`, 404));
        }

        res.status(200).json({success: true, data: {}});
});