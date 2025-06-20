import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import BookingForm from './components/BookingForm';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Banner onBookClick={() => setShowForm(true)} />

      {showForm && (
        <div className="popup-backdrop">
          <div className="popup-form">
            <button className="close-btn" onClick={() => setShowForm(false)}>✖</button>
            <BookingForm onSuccess={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
