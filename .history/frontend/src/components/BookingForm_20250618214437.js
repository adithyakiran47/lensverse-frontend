import React, { useState } from 'react';
import axios from 'axios';

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
      alert('Booking Confirmed!');
      if (onSuccess) onSuccess();
    } catch (err) {
      alert('Booking failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book an Event</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="eventDate" type="date" onChange={handleChange} required />
      <select name="service" onChange={handleChange} required>
        <option value="">Select Service</option>
        <option value="Drone">Drone</option>
        <option value="Camera">Camera</option>
        <option value="Editing">Editing</option>
        <option value="Marketing">Marketing</option>
      </select>
      <textarea name="notes" placeholder="Notes" onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
