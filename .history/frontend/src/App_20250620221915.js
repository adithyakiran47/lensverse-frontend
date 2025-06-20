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
<>
  {/* 🌌 Star Layers */}
  <div className="stars"></div>
  <div className="stars2"></div>
  <div className="stars3"></div>

  {/* Your actual app content here */}
</>

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
      <BookingForm 
        onClose={() => setShowForm(false)} 
        onSuccess={() => setShowForm(false)} 
      />
    </div>
  </div>
)}

    </>
  );
}

export default App;