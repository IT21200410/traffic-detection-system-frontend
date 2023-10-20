import React from 'react';
import {useState} from 'react';
import '../styles/PopupCard.css'; // Create a CSS file for the component
import dayjs from 'dayjs';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const PopupCard = ({ onClose }) => {

  const [form, setForm] = useState({
    location: "",
    time : "",
    date: dayjs('2022-04-17T15:30')}
    );

  const onChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    setForm({...form, [name]: value})

  }

  const handleDateChange = date => {
    setForm({ date: date })
    console.log(date)
  }


  const handleTimeChange = time => {
    setForm({ time: time })
    console.log(time)
  }



  return (
    <div className="popup-container">
      <div className="popup-card">
        <h2>Predict Traffic</h2>
        <form>
        <div className="form-group">
          <label htmlFor="location"  style={{ marginLeft: -350 }}>Location</label>
          <br/>
          <select id="location" name = "location" defaultValue = {form.location} onChange = {onChange}>
          <option value="1">Junction 01</option>
          <option value="2">Junction 02</option>
          <option value="3">Junction 03</option>
          <option value="4">Junction 04</option>
          
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="time" style={{ marginLeft: -380 }}>Time</label>
          <br/>

          <div className='TimePicker'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker label="" value = {form.time} onChange = {handleTimeChange}/>
            </LocalizationProvider>
          </div>
          </div>


        <div className="form-group">
          <label htmlFor="day" style={{ marginLeft: -380 }}>Date</label>
          <br/>
       
          <div className='DatePicker'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
           
          <DatePicker label="" name = "date" value = {form.date} onChange = {handleDateChange} />
          
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
        </form>
      </div>
    </div>
  );
};

export default PopupCard;
