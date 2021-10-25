const express = require('express')
const { getTeams, getTeam, createTeam, updateTeam, deleteTeam, teamPhotoUpload } = require('../controllers/teams')

//Include other resource routers
const courseRouter = require('./courses');

//Creating router
const router = express.Router();

//Add Protect Middleware
const { protect } = require('../middleware/auth');

//Re-route into other resource router
router.use('/:teamId/courses', courseRouter);

router.route('/:id/photo').put(protect, teamPhotoUpload); //Protected this route by passing in the 'protect'

router
    .route('/:id/photo')
    .put(teamPhotoUpload);

router
    .route('/')
    .get(getTeams)
    .post(protect, createTeam);

router
    .route('/:id')
    .get(getTeam)
    .put(protect, updateTeam)
    .delete(protect, deleteTeam);


module.exports = router;
