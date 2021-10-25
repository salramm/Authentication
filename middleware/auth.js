const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

//Protect troutes 
exports.protect = asyncHandler( async (req, res, next) => {
    let token;

    if (req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')) 
        {
        token = req.headers.authorization.split(' ')[1];
    }

    // else if (req.cookies.token) {
    //     token = req.cookies.token
    // }

    //Make sure that token exists 
    if (!token) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

    //Now verify the token
    try {
        //Extract the payload from teh token
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        console.log(decoded);

        req.user = await User.findById(decode.id);

        next();

    } catch (err) {
        return next(new ErrorResponse('Not authorized to access this route', 401));
    }

})