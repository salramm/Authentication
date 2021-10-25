const express = require('express')
const { getTeams, getTeam, createTeam, updateTeam, deleteTeam, teamPhotoUpload } = require('../controllers/teams')

//Include other resource routers
const courseRouter = require('./courses');

//Creating router
const router = express.Router();

//Re-route into other resource router
router.use('/:teamId/courses', courseRouter);

router
    .route('/:id/photo')
    .put(teamPhotoUpload);

router
    .route('/')
    .get(getTeams)
    .post(createTeam);

router
    .route('/:id')
    .get(getTeam)
    .put(updateTeam)
    .delete(deleteTeam);


module.exports = router;
