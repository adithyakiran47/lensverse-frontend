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
