import React, { useState } from 'react';
import axios from 'axios';
import './BookingForm.css'; // 👈 make sure this file exists and has styles below

const BookingForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    eventDate: '',
    service: '',
    notes: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("📤 Submitting form:", form);
    try {
      const res = await axios.post('http://localhost:5000/api/bookings', form);
      console.log("✅ Booking response:", res.data);
      alert('Booking Confirmed!');
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("❌ Booking error:", err);
      alert('Booking failed');
    }
  };

  return (
    <form className="glass-form" onSubmit={handleSubmit}>
      <h2>📸 Book an Event</h2>

      <div className="form-group">
        <input name="name" placeholder="Name" onChange={handleChange} required />
      </div>

      <div className="form-group">
        <input name="email" placeholder="Email" onChange={handleChange} required />
      </div>

      <div className="form-group">
        <input name="eventDate" type="date" onChange={handleChange} required />
      </div>

      <div className="form-group">
        <select name="service" onChange={handleChange} required>
          <option value="">Select Service</option>
          <option value="Drone">Drone</option>
          <option value="Camera">Camera</option>
          <option value="Editing">Editing</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>

      <div className="form-group">
        <textarea name="notes" placeholder="Additional Notes" onChange={handleChange}></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
