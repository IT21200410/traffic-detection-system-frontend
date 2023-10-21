import React from 'react';
import {useState} from 'react';
import '../styles/PopupCard.css'; // Create a CSS file for the component
import dayjs from 'dayjs';
import axios from 'axios';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const PopupCard = ({ onClose }) => {

  const [output, setOutput] = useState("")

  const [form, setForm] = useState({
    junction: "1",
    time : "",
    date: dayjs('2017-04-17T15:30')}
    );

  const maxDate = dayjs('2017-04-17T15:30').add(1, 'year'); // Calculate the maximum date (one year from today)
  const today = dayjs();

  const onChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    setForm({...form, [name]: value})

  }

  const handleDateChange = (date) => {
    if (date && date.isAfter(maxDate)) {
      alert('Error: Please choose a date within the next year.');
    }
    setForm({...form,  date: dayjs(date.$d).format('YYYY-MM-DD') })

  };

  const handleTimeChange = time => {
    setForm({...form,  time: dayjs(time.$d).format('HH-mm-ss') })
    console.log(dayjs(time.$d).format('HH-mm-ss'))
  }

  // axios.post('https://traffic-detection-system-f79927c0528e.herokuapp.com/predict_manuja/',{}


  const handleSubmit = async (event) => {

    event.preventDefault()

    await axios.post('https://traffic-detection-system-f79927c0528e.herokuapp.com/predict_manuja',{
      "junction": form.junction,
      "time": form.time,
      "date": form.date
    })
    .then(response => {const data = response.data 
                    setOutput(data)}
          )


  }





  return (
    <div className="popup-container">
      <div className="popup-card">
        <h2>Predict Traffic</h2>
        <form>
        <div className="form-group">
          <label htmlFor="location"  style={{ marginLeft: -350 }}>Location</label>
          <br/>
          <select id="location" name = "junction" defaultValue = {form.location} onChange = {onChange}>
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
            <TimePicker label="" onChange = {handleTimeChange}/>
            </LocalizationProvider>
          </div>
          </div>


        <div className="form-group">
          <label htmlFor="day" style={{ marginLeft: -380 }}>Date</label>
          <br/>
       
          <div className="DatePicker">
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DatePicker
            label=""
            minDate = {dayjs('2017-04-17T15:30')}
            maxDate={maxDate}
            onChange={handleDateChange} 
          />
        </LocalizationProvider>
      </div>

        </div>

        <div className="form-group">
          <label htmlFor="out" >Output</label>
          <br/>
          <input type="text" id="out" value = {output} />
        </div>
        <button onClick = {handleSubmit}>PREDICT</button>
        <br/>
        <br/>
        <button onClick={onClose} className='cls'>Close</button>
        </form>
      </div>
    </div>
  );
};

export default PopupCard;
