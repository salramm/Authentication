const express = require('express');
const { register } = require('../controllers/auth');
const User = require('../models/User');

const router = express.Router();

router.post('/register', register);

module.exports = router;


