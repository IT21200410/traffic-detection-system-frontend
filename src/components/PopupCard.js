import React from 'react';
import '../styles/PopupCard.css'; // Create a CSS file for the component
import dayjs from 'dayjs';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const PopupCard = ({ onClose }) => {

  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));


  const maxDate = dayjs().add(1, 'year'); // Calculate the maximum date (one year from today)
  const today = dayjs();

  const handleDateChange = (date) => {
    if (date && date.isAfter(maxDate)) {
      alert('Error: Please choose a date within the next year.');
    }
  };

  const isDateDisabled = (date) => {
    // Check if the date is before today or more than one year in the future
    return date.isBefore(today) || date.isAfter(maxDate);
  };





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
          <option value="Junction 03">Junction 04</option>
          
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="time" style={{ marginLeft: -380 }}>Time</label>
          <br/>

          <div className='TimePicker'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker label="" />
            </LocalizationProvider>
          </div>
          </div>


        <div className="form-group">
          <label htmlFor="day" style={{ marginLeft: -380 }}>Date</label>
          <br/>
       
          <div className="DatePicker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label=""
            disablePast
            maxDate={maxDate}
            onChange={handleDateChange}
            
          />
        </LocalizationProvider>
      </div>

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
