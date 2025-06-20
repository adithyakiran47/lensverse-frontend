const express = require('express');
const router = express.Router();

// POST /api/bookings
router.post('/', (req, res) => {
  const booking = req.body;
  console.log('📩 New booking received:', booking);
  res.status(200).json({ message: '✅ Booking received successfully!' });
});

module.exports = router;
