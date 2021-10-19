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
        enum: ['manager', 'comissioner']
    }
});