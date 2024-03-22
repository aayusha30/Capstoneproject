// backend/middleware/validationMiddleware.js
const { validationResult } = require('express-validator');

// Middleware to handle validation errors
exports.checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
};
