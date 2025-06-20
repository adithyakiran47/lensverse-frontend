import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import BookingForm from './components/BookingForm';


function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header />
      <Banner onBookClick={() => setShowForm(true)} />
      <About />
      <Services />
      <Team />
      <Contact />

      {showForm && (
        <div className="popup-backdrop">
          <div className="popup-form">
            <button className="close-btn" onClick={() => setShowForm(false)}>✖</button>
            <BookingForm onSuccess={() => setShowForm(false)} />
              <BookingForm onClose={() => setShowForm(false)} onSuccess={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;