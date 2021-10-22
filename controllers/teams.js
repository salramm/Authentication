const Team = require('../models/Team');
//Now we have this 'Team' object that we can call pur methods on


// This is a header before every method that describes what it does

// @desc        get all teams
// @route       GET /api/v1/teams
// @access      Public
exports.getTeams = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all teams', hello: req.hello});
}


// @desc        get a single teams
// @route       GET /api/v1/teams/:id
// @access      Public
exports.getTeam = (req, res, next) => {
    res.status(200).json({success: true, msg: `Show team ${req.params.id}` })
}


// @desc        Create a new team
// @route       POST /api/v1/teams
// @access      Private
exports.createTeam = async (req, res, next) => {
    console.log(req.body); /* To see what data is coming from the client in the request but in order to this we need 
    to add a middleware that is included with express - do this in server.js */
    res.status(200).json({success: true, msg: 'Create a new team'});
    const team = await Team.create(req.body); //We take the entered info in body and pass into the create method on our model

    res.status(201).json({
        success: true, data: team
    })
}


// @desc        Update a teams
// @route       PUT /api/v1/teams/:id
// @access      Private
exports.updateTeam = (req, res, next) => {
    res
        .status(200)
        .json({success: true, msg: `Update team ${req.params.id}`})
}


// @desc        delete a team
// @route       DELETE /api/v1/teams/:id
// @access      Public
exports.deleteTeam = (req, res, next) => {
    res
        .status(200)
        .json({success: true, msg: `Delete team ${req.params.id}`})
    
}