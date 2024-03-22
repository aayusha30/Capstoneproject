// backend/controllers/eventController.js
const Event = require('../models/Event');

// Create a new event
exports.createEvent = async (req, res) => {
    try {
        const eventData = req.body;
        const newEvent = new Event(eventData);
        await newEvent.save();
        res.status(201).json({ message: 'Event created successfully', event: newEvent });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get event by ID
exports.getEventById = async (req, res) => {
    try {
        const eventId = req.params.id;
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
