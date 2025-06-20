import React, { useState } from 'react';
import axios from 'axios';
import './BookingForm.css';

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
    try {
      await axios.post('http://localhost:5000/api/bookings', form);
      alert('✅ Booking Confirmed!');
      setForm({ name: '', email: '', eventDate: '', service: '', notes: '' });
      if (onSuccess) onSuccess();
    } catch (err) {
      alert('❌ Booking failed. Try again.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book an Event</h2>
      <div className="form-group">
        <label>Name:</label>
        <input name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Event Date:</label>
        <input name="eventDate" type="date" value={form.eventDate} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Service Type:</label>
        <select name="service" value={form.service} onChange={handleChange} required>
          <option value="">Select Service</option>
          <option value="Drone">Drone</option>
          <option value="Camera">Camera</option>
          <option value="Editing">Editing</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>
      <div className="form-group">
        <label>Notes:</label>
        <textarea name="notes" value={form.notes} onChange={handleChange} />
      </div>
      <button type="submit">Submit Booking</button>
    </form>
  );
};

export default BookingForm;
