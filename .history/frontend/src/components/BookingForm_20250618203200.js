// src/components/BookingForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './BookingForm.css';

const BookingForm = () => {
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
      alert('Booking submitted!');
      setForm({ name: '', email: '', eventDate: '', service: '', notes: '' });
    } catch (err) {
      alert('Failed to submit booking');
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h1>Book an Event</h1>
      <form onSubmit={handleSubmit}>
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
            <option value="Dro
