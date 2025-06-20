const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    console.log('📦 Saved booking:', booking);
    res.status(200).json({ message: 'Booking saved!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving booking' });
  }
});
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching bookings' });
  }
});
