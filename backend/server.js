const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/event_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Routes
app.use('/api/auth', authRoutes);

// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
