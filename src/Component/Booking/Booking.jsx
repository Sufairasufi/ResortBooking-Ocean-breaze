import React from 'react';
import FlipCard from "./Flipcard";
import './Flipcard.css'

const Booking = () => {
  return (
    <div className="booking-flip-container">
      <FlipCard
        frontImg='Image/lux9.jpg'
        backText="Luxury Room"
        backBtnText="Book Now"
        backBtnLink="/luxury"
      />
      <FlipCard
        frontImg='Image/cottege3.jpg'
        backText="Cottage Stay"
        backBtnText="Book Now"
        backBtnLink="/cottege"
      />
      <FlipCard
        frontImg='Image/fam8.jpg'
        backText="Family Suite"
        backBtnText="Book Now"
        backBtnLink="/family"
      />
    </div>
  );
};

export default Booking;
