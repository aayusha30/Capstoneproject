// backend/routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Create a new event
router.post('/', eventController.createEvent);

// Get all events
router.get('/', eventController.getAllEvents);

// Get event by ID
router.get('/:id', eventController.getEventById);

module.exports = router;
