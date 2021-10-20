
// This is a header before every method that describes what it does

// @desc        get all teams
// @route       GET /api/v1/teams
// @access      Public
exports.getTeams = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all teams'});
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
exports.createTeam = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Create a new team'})    
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