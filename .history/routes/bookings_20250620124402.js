// routes/bookings.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const booking = req.body;
  console.log('New Booking Received:', booking);
  res.status(200).json({ message: 'Booking received successfully!' });
});

module.exports = router;

