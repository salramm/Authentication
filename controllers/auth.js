const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc      Register User
// @route     POST /api/v1/auth/register
// @access    Public

exports.register = asyncHandler(async (req,res, next) => {
    const { name, email, password, role } = req.body;

    //Create the user
    const user = await User.create({
        name, email, password, role
    });

    //Create JWT Token
    sendTokenResponse(user, 200, res);
} );



// @desc      Login User
// @route     POST /api/v1/auth/login
// @access    Public

exports.login = asyncHandler(async(req, res, next) => {
    const {email, password} = req.body;

    //Validation
    //Validate email & password
    if (!email || !password) {
        return next(new ErrorResponse('Please provide an email and password', 400));
    };

    //Check for the User
    const user = await User.findOne({email}).select('+password');  //find one record with variable email from the body and match it to the email in the DB

    if (!user) {
        return next(new ErrorResponse(`Invalid credntials`, 401));
    }

    //Check if password matches
    const ismatch = await user.matchPassword(password);

    if (!ismatch) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    //Create token, take it from the model, create cookie, send the cookie
    sendTokenResponse(user, 200, res);
});

// @desc      Get Current Loggedin User
// @route     GET /api/v1/auth/me
// @access    Private

exports.getMe = asyncHandler(async(req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({ success: true, data: user});
});

// @desc      Forgot Password
// @route     GET /api/v1/auth/forgotpassword
// @access    Public

exports.forgotPassword = asyncHandler(async (req, res, next ) => {
    const user = await User.findOne({email: req.body.email});

    if (!user) {
        return next(new ErrorResponse('There is no user with that email', 404));
    }

    //Get the reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false});

    res.status(200).json({
        success: true,
        data: user
    })
});




//Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    //Create a token
    const token = user.getSignedJwtToken();


    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true
    };

    // This way when we are in prod we will have a secure cookie
    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    res
        .status(statusCode)
        .cookie('token', token, options)
        .json({success: true, token});
};