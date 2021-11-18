const express = require('express');
const router = express.Router();

const { newEvent, getTodaysEvents, getEvents, getWeekEvents } = require('../controllers/eventController');

//Base URL : /api/v1
router.route("/event/new").post(newEvent);
router.route("/events").get(getEvents);
router.route("/events/today").get(getTodaysEvents);
router.route("/events/week").get(getWeekEvents);


module.exports = router;