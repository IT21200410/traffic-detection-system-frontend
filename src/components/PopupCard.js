import React from 'react';
import '../styles/PopupCard.css'; // Create a CSS file for the component
import dayjs from 'dayjs';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const PopupCard = ({ onClose }) => {

  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
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
       
          <div className='DatePicker'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
           
          <DatePicker label="" />
          
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
