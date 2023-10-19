import React from 'react';
import {
    MDBCardImage,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol
} from 'mdb-react-ui-kit';
import Navbar from "../components/Navbar";
import "../styles/Footer.css";

function AboutUS() {

    return (

<div style={{
  background: 'rgb(10,16,84)',
  background: 'linear-gradient(0deg, rgba(10,16,84,1) 0%, rgba(15,114,187,1) 56%, rgba(9,189,226,1) 100%)',
  backgroundColor: 'rgb(37, 150, 190)' 
}}>
            <Navbar />
            <section className="container mt-5 pt-5 pb-5 mb-5">
                <div className="container">
                    <MDBRow className="mt-5">
                        <MDBCol sm='1'></MDBCol>
                        <MDBCol sm='6'>
                            <MDBCard className="border-0 shadow-0" style={{backgroundColor:"rgba(0,116,174,0)"}}>
                                <MDBCardImage position='top' alt='...' src='https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1974' />
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='5'>
                            <MDBCard className="border-0 shadow-0" style={{backgroundColor:"rgba(0,116,174,0)"}}>
                                <MDBCardBody className="pt-5 mt-3 text-left">
                                    <br />
                                    <br />
                                    <br />
                                    <MDBCardTitle className="h3 text-uppercase" style={{ color: 'white'}}>Introduction</MDBCardTitle>
                                    <MDBCardText >
                                    The Traffic Prediction System is a cutting-edge solution designed to revolutionize transportation. It harnesses advanced data analytics and predictive modeling to offer real-time traffic insights, empowering commuters to make informed decisions about their routes. By reducing congestion and enhancing safety, our system aims to create a more efficient and sustainable transportation network for everyone.                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mt-5 pt-5">
                        <MDBCol sm='1'></MDBCol>
                        <MDBCol sm='5'>
                            <MDBCard className="border-0 shadow-0" style={{backgroundColor:"rgba(0,116,174,0)"}}>
                                <MDBCardBody className="pt-5 mt-3 text-left">
                                    <MDBCardTitle className="h3 text-white text-uppercase">KEY FEATURES</MDBCardTitle>
                                    <MDBCardText >
                                    The key features of the Traffic Prediction System include real-time traffic updates, route optimization, safety alerts, and eco-friendly travel recommendations. Users can access up-to-the-minute traffic information, receive optimized route suggestions, stay informed about safety hazards, and discover eco-conscious transportation options. These features work together to ensure a smoother and safer commuting experience while promoting sustainable travel choices.                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='6'>
                            <MDBCard className="border-0 shadow-0" style={{backgroundColor:"rgba(0,116,174,0)"}}>
                                <MDBCardImage  position='top' alt='...' src='https://images.unsplash.com/photo-1635930919419-f935f8902b0f?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070' />
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mt-5 pt-5">
                        <MDBCol sm='4' className="mt-1">
                            <MDBCard className="border-0 shadow-0" style={{backgroundColor:"rgba(0,116,174,0)"}}>
                                <MDBCardTitle className="h3 text-white text-center text-uppercase">Objectives</MDBCardTitle>
                                <hr />
                                <MDBCardText >

                                The objectives of the Traffic Prediction System are to deliver accurate real-time traffic information, reduce commute times, enhance safety, and lower environmental impact. We aim to provide users with reliable traffic forecasts, minimize traffic congestion, improve road safety measures, and encourage eco-friendly transportation choices. Our primary goal is to create a seamless and efficient commuting experience for all travelers.                                </MDBCardText>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='4' className="mt-1">
                            <MDBCard className="border-0 shadow-0" style={{backgroundColor:"rgba(0,116,174,0)"}}>
                                <MDBCardTitle className="h3 text-white text-center text-uppercase">Vision</MDBCardTitle>
                                <hr />
                                <MDBCardText >
                                The vision of the Traffic Prediction System is to create a seamless and smart transportation ecosystem. By harnessing cutting-edge technology, we aim to offer real-time traffic insights and empower travelers to optimize their journeys. Our vision includes a future where traffic congestion is minimized, road safety is paramount, and sustainable travel choices are encouraged, ultimately leading to smoother and more efficient mobility for all.                                </MDBCardText>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='4' className="mt-1">
                            <MDBCard className="border-0 shadow-0" style={{backgroundColor:"rgba(0,116,174,0)"}}>
                                <MDBCardTitle className="h3 text-white text-center text-uppercase">Mission</MDBCardTitle>
                                <hr />
                                <MDBCardText >
                                The Traffic Prediction System's mission is to improve transportation efficiency and safety. Using data analytics and predictive modeling, we provide real-time traffic forecasts, helping users make informed travel decisions. Our goal is to reduce congestion, minimize delays, and create a sustainable and interconnected transportation network for a better quality of life.                                </MDBCardText>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </div>
            </section>
        </div>
    )
};

export default AboutUS;
