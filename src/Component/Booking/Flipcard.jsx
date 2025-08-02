import React from 'react';
import './Flipcard.css';

const FlipCard = ({ frontImg, backText, backBtnText, backBtnLink }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontImg} alt="Room" />
        </div>
        <div className="flip-card-back">
          <p>{backText}</p>
          <a href={backBtnLink}>
            <button className="flip-btn">{backBtnText}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
