import React, { useState } from "react";
import logo from "../assets/logo.png";
import homeimg1 from "../assets/home3.png";
import chart from "../assets/line_chart.png"
import NavBar from '../components/NavBar_copy'
import PopupCard from '../components/PopupCard';
import Chartz from "../components/Chartz";
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
          
        {/* <img src={chart} className="homeimg2" /> */}
        <Chartz/>
     
          <h1>Navigating Tomorrow's Roads, Today!</h1>
      {/* <p>Traffic Sense helps you to determine traffic and find them fast.</p>
      <button>PREDICT</button>
      <h4>Press 'Predict' Navigate the Future with Confidence.</h4> */}
      <div class="card1">
        <h2>Random Forest</h2>
        <h3>Accuracy - 0.85</h3>
    </div>
    <div class="card2">
        <h2>KNN</h2>
        <h3>Accuracy - 0.82</h3>
    </div>
    <div class="card3">
        <h2>Naive Bayes</h2>
        <h3>Accuracy - 0.56</h3>
    </div>
    <div class="card4">
        <h2>SVM</h2>
        <h3>Accuracy - 0.75</h3>
    </div>
          
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}

export default Home;
