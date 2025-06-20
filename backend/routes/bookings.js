const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST: Save booking
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(200).json({ message: '✅ Booking saved!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '❌ Failed to save booking' });
  }
});

// GET: Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: '❌ Failed to fetch bookings' });
  }
});

module.exports = router; // ✅ Make sure you export router (not call it)
