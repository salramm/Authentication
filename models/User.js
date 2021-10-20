const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ['true', 'Please add a name']
    },
    email: {
        type: String,
        required: ['true', 'Please add your email'],
        unique: true
    },
    role: {
        type: String,
        enum: ['manager', 'comissioner'],
        default: 'manager'
    },
    password: {
        type: String,
        required: ['true', 'Please add a password'],
        minlength: 6,
        select: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);
