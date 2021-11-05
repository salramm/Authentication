const express = require('express');
const {protect, authorize} = require('../middleware/auth');
const { createLeague } = require('../controllers/leagues');

const router = express.Router();

// Creating a router
router.route('/').post(protect, createLeague);

module.exports = router