import React, { useState } from "react";
import BannerImage from "../assets/piizza1.jpg";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { LineChart } from '@mui/x-charts/LineChart';
import "../styles/predict.css";
import "../styles/Home.css";

function Home() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const containerStyle = {
    backgroundImage: `url(${BannerImage})`,
    height:"1200px",
    filter: open ? 'blur(5px)' : 'none'  // Apply blur when the dialog is open
  };


  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
  ];





  return (
    <div style={containerStyle}>
      <Navbar />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/><br/><br/>
      <div className="home">
        <div className="headerContainer">
          <h1> Navigating Tomorrow's Roads, Today! </h1>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <Button variant="outlined" onClick={handleClickOpen}>
              PREDICT
            </Button>
            <br />
            <br />
            <br />
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
              <DialogContent>
                <div className="modalBackground">
                  <div className="modalContainer">
                    <div className="title">
                      <h1>Predict Traffic</h1>
                    </div>
                    <div className="body">
                    <Box sx={{ minWidth: 300 }}>
                  <FormControl fullWidth>
                    <InputLabel
                      htmlFor="location-select"
                      style={{ color: 'black', fontWeight: 'bold' }}
                    >
                      Junction
                    </InputLabel>
                    <Select
                      labelId="location-label"
                      id="location-select"
                      label="Location"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <br />
                <Box sx={{ minWidth: 300 }}>
                  <FormControl fullWidth>
                    <InputLabel
                      htmlFor="time-select"
                      style={{ color: 'black', fontWeight: 'bold' }}
                    >
                      Time
                    </InputLabel>
                    <Select
                      labelId="time-label"
                      id="time-select"
                      label="Time"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <br />
                <Box sx={{ minWidth: 300 }}>
                  <FormControl fullWidth>
                    <InputLabel
                      htmlFor="day-select"
                      style={{ color: 'black', fontWeight: 'bold' }}
                    >
                      Day
                    </InputLabel>
                    <Select labelId="day-label" id="day-select" label="Day">
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
                    <br />
                    <div className="footer" style={{ textAlign: "center" }}>
                      <button className="predict">Predict</button>
                      <Box
                        component="form"
                        sx={{
                          '& > :not(style)': { minWidth: 300, textAlign: 'center' },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="outlined-basic"
                          label="output"
                          variant="outlined"
                        />
                      </Box>
                    </div>
                  </div>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} style={{ color: 'black', fontWeight: 'bold' }}>Cancel</Button>
              </DialogActions>
            </Dialog>
          </div>
          {/* <img src="https://i.ytimg.com/vi/GR4PdFV0kko/maxresdefault.jpg" alt="Image description" style={{width:'500px',height:'250px', borderRadius:'5px'}}/> */}


          <div className="centered-graph">
  <div
    className="column"
    style={{
      width: '550px',
      height: '300px',
      borderRadius: '5px',
      backgroundColor: 'white', // Set the background color to white
      margin: '0 auto', // Center horizontally
      display: 'flex',
      justifyContent: 'center', // Center horizontally within the container
      alignItems: 'center', // Center vertically within the container
    }}
  >
    <div className="card1">
      <LineChart
        width={500}
        height={300}
        series={[
          { data: pData, label: 'pv' },
          { data: uData, label: 'uv' },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
      />
    </div>
  </div>
</div>










          <br/>
          <br/>
          <br/>
        </div>
        <Card />
      </div>
    </div>
  );
}

export default Home;
