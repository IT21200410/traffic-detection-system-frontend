import React, { useState } from "react";
import logo from "../assets/logo.png";
import homeimg1 from "../assets/home3.png";
import chart from "../assets/line_chart.png"
import NavBar from '../components/NavBar_copy'
import PopupCard from '../components/PopupCard';
import '../styles/Home.css';

function Home() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className='crd'>
      
      {/* <img src={homeimg1} className="homeimg1" />
      <div className="content">
      <h1>Navigating Tomorrow's Roads, Today!</h1>
      <p>Traffic Sense helps you to determine traffic and find them fast.</p>
      <button>PREDICT</button>
      <p>Press 'Predict' Navigate the Future with Confidence.</p>
    </div> */}

    <section class="section top-section">
    
    <div class="content-container content-theme-dark">
      <div class="content-inner">
      <NavBar/>
        <div class="content-center">
        <img src={homeimg1} className="homeimg1" />
         
          <h1>Navigating Tomorrow's Roads, Today!</h1>
      <p>Traffic Sense helps you to determine traffic and find them fast.</p>
      <button onClick={openPopup}>PREDICT</button>
      {isPopupVisible && <PopupCard onClose={closePopup} />}
      <h4>Press 'Predict' Navigate the Future with Confidence.</h4>
        
        </div>
      </div>
    </div>
  </section>

  <section class="section bottom-section">
  
    <div class="content-container content-theme-light">
    
      <div class="content-inner">
      <NavBar/> 
        <div class="content-center">
          
        <img src={chart} className="homeimg2" />
     
          <h1>Navigating Tomorrow's Roads, Today!</h1>
      {/* <p>Traffic Sense helps you to determine traffic and find them fast.</p>
      <button>PREDICT</button>
      <h4>Press 'Predict' Navigate the Future with Confidence.</h4> */}
      <div class="card1">
        <h2>Traffic Forecasting</h2>
        <h3>Explore how machine learning <br/>algorithms are changing<br/> traffic prediction and <br/>helping optimize traffic <br/>flow in urban areas.</h3>
    </div>
    <div class="card2">
        <h2> AI in Traffic Prediction</h2>
        <h3>Learn how artificial <br/>intelligence is revolutionizing <br/>traffic prediction, <br/>improving route planning<br/> and travel experiences.</h3>
    </div>
    <div class="card3">
        <h2>Sustainable Transportation</h2>
        <h3>Discover how traffic <br/>prediction systems support <br/>eco-friendly travel options <br/>and reduce carbon emissions <br/>in cities.</h3>
    </div>
          
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}

export default Home;
