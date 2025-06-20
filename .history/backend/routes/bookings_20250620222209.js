const express = require('express');
const router = express.Router();

// POST /api/bookings
router.post('/', (req, res) => {
  const booking = req.body;
  console.log('📩 New booking received:', booking);
  res.status(200).json({ message: '✅ Booking received successfully!' });
});

module.exports = router;
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  eventDate: String,
  service: String,
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
