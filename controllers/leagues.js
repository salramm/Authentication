const League = require('../models/League');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const path = require('path');

// @desc        Create a new league
// @route       POST /api/v1/teams
// @access      Private

exports.createLeague = asyncHandler( async (req, res, next) => {

    req.body.user = req.user.id

    const league = await League.create(req.body); //We take the entered info in body and pass into the create method on our model

    res.status(201).json({
        success: true, data: league
    });
});