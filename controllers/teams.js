const Team = require('../models/Team');
//Now we have this 'Team' object that we can call pur methods on


// This is a header before every method that describes what it does

// @desc        get all teams
// @route       GET /api/v1/teams
// @access      Public
exports.getTeams = async (req, res, next) => {

    try {
        const teams = await Team.find();
        res.status(200).json({success: true, count: teams.length, data: teams});
    } catch (error) {
        res.status(400).json({success: false })
    }
    // Was previously here: res.status(200).json({success: true, msg: 'Show all teams', hello: req.hello});
}


// @desc        get a single teams
// @route       GET /api/v1/teams/:id
// @access      Public
exports.getTeam = async (req, res, next) => {

    try {
        const team = await Team.findById(req.params.id); //req.params.id will get the id form the request
        res.status(200).json({success: true, data: team});
        if (!team) {
            return res.status(400).json({success:false, msg: "The ID does not exist"}) //Thsi will handle the rejection if the ID does not exist but is correctly formatted
        }
    } catch (error) {
        res.status(400).json({success: false}); //This handles wrong format requests
    }
    // res.status(200).json({success: true, msg: `Show team ${req.params.id}` })
}


// @desc        Create a new team
// @route       POST /api/v1/teams
// @access      Private
exports.createTeam = async (req, res, next) => {
    /* console.log(req.body);  To see what data is coming from the client in the request but in order to this we need 
    to add a middleware that is included with express - do this in server.js */
    // res.status(200).json({success: true, msg: 'Create a new team'});
    try {  // Try catch will help handle promise rejections; the code will not hang and end with success: flase
        const team = await Team.create(req.body); //We take the entered info in body and pass into the create method on our model

        res.status(201).json({
            success: true, data: team
        })
        
    } catch (error) {

        res.status(400).json({success: false})
        
    }
}


// @desc        Update a teams
// @route       PUT /api/v1/teams/:id
// @access      Private
exports.updateTeam = async (req, res, next) => {
    try {
        const team = await Team.findByIdAndUpdate(req.params.id, req.body, { // We are find the entry by id and the pass what we want to inser with req.body
            new: true,
            runValidators: true 
        });
        if(!team) {
            return res.status(400).json({success:false});
        }

        res.status(200).json({success: true, data: team})
    } catch (error) {
        res.status(400).json({success: false}); 
    }
}


// @desc        delete a team
// @route       DELETE /api/v1/teams/:id
// @access      Public
exports.deleteTeam = async (req, res, next) => {
    try {
        const team = await Team.findByIdAndDelete(req.params.id)

        if (!team) {
            return res.status(400).json({success:false});
        }

        res.status(200).json({success: true, data: {}});
    } catch (error) {
        res.status(400).json({success: false});
    }
}