import React from 'react';
import '../styles/PopupCard.css'; // Create a CSS file for the component

const PopupCard = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-card">
        <h2>Predict Traffic</h2>
        <div className="form-group">
          <label htmlFor="location"  style={{ marginLeft: -350 }}>Location</label>
          <br/>
          <select id="location">
          <option value="Junction 01">Junction 01</option>
          <option value="Junction 02">Junction 02</option>
          <option value="Junction 03">Junction 03</option>
          
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="time" style={{ marginLeft: -380 }}>Time</label>
          <br/>
          <input type="text" id="time" />
        </div>
        <div className="form-group">
          <label htmlFor="day" style={{ marginLeft: -380 }}>Day</label>
          <br/>
          <input type="text" id="day" />
        </div>

        <div className="form-group">
          <label htmlFor="out" >Output</label>
          <br/>
          <input type="text" id="out" />
        </div>
        <button >PREDICT</button>
        <br/>
        <br/>
        <button onClick={onClose} className='cls'>Close</button>
      </div>
    </div>
  );
};

export default PopupCard;
