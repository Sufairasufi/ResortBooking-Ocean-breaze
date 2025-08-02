import React, { useState, useEffect } from 'react';
import './BookingCategory.css';

const Cottege = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');
  const [error, setError] = useState('');
  const [storedData, setStoredData] = useState(null);

  // useEffect(() => {
  //   const data = localStorage.getItem('cottegeBooking');
  //   if (data) {
  //     const parsedData = JSON.parse(data);
  //     setStoredData(parsedData);
  //   }
  // }, []);

  const handleSubmit = () => {
    if (!name || !date || !guests) {
      setError('Please fill out all the fields!');
      return;
    }

    const bookingData = {
      name,
      date,
      guests,
    };

    localStorage.setItem('cottegeBooking', JSON.stringify(bookingData));
    setStoredData(bookingData);

    setError('');
    alert('Booking successful!');
    setShowModal(false);
    setName('');
    setDate('');
    setGuests('');
  };

  // const handleClearBooking = () => {
  //   localStorage.removeItem('cottegeBooking');
  //   setStoredData(null);
  //   alert('Booking data cleared!');
  // };

  return (
    <section className='booking-section'>
      <h2 className='booking-title'>Private Cottege</h2>
      <div className='booking-grid'>
        <img src='Image/cottege1.jpg' alt='cottege room 1' className='book-images' />
        <img src='Image/cottege2.jpg' alt='cottege room 2' className='book-images' />
        <img src='Image/cottege4.jpg' alt='cottege room 3' className='book-images' />
        <img src='Image/cottege5.jpg' alt='cottege room 4' className='book-images' />
        <img src='Image/cottege6.jpg' alt='cottege room 5' className='book-images' />
        <img src='Image/cottege7.jpg' alt='cottege room 6' className='book-images' />
      </div>

      <div>
        <button className="book-btn" onClick={() => setShowModal(true)}>Book Now</button>
      </div>

      {/* {storedData && (
        <div className="stored-booking">
          <h3>Your Last Booking</h3>
          <p><strong>Name:</strong> {storedData.name}</p>
          <p><strong>Date:</strong> {storedData.date}</p>
          <p><strong>Guests:</strong> {storedData.guests}</p>
          <button className='clear-btn' onClick={handleClearBooking}>Clear Booking</button>
        </div>
      )} */}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Book Your Cottege</h3>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="number"
              placeholder="Guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
            {error && <p className='error-msg'>{error}</p>}
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cottege;
