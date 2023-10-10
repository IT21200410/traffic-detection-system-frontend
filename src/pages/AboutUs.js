import React from 'react';
import {
    MDBCardImage,
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol
} from 'mdb-react-ui-kit';
import Navbar from "../components/Navbar";

function AboutUS() {

    return (

<div style={{
  background: 'rgb(10,16,84)',
  background: 'linear-gradient(0deg, rgba(10,16,84,1) 0%, rgba(15,114,187,1) 56%, rgba(9,189,226,1) 100%)',
  backgroundColor: 'rgb(37, 150, 190)' /* or any other fallback color */
}}>
            <Navbar />
            <section className="container mt-5 pt-5 pb-5 mb-5">
                <div className="container">
                    <MDBRow className="mt-5">
                        <MDBCol sm='1'></MDBCol>
                        <MDBCol sm='6'>
                            <MDBCard className="border-0 shadow-0" style={{backgroundColor:"rgba(0,116,174,0)"}}>
                                <MDBCardImage style={{ width: '105%', marginTop: '15%' }} position='top' alt='...' src='https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='5'>
                            <MDBCard className="border-0 shadow-0" style={{backgroundColor:"rgba(0,116,174,0)"}}>
                                <MDBCardBody className="pt-5 mt-3 text-left">
                                    <br />
                                    <br />
                                    <br />
                                    <MDBCardTitle className="h3 text-uppercase" style={{ color: 'white'}}>Introduction</MDBCardTitle>
                                    <MDBCardText style={{ color: 'white', textAlign: 'justify' }}>
                                        Salon-Nee is a leader in the beauty industry and has been a trusted supplier of high-quality hair care and beauty products since 2007. Our products are sourced from trusted suppliers from around the world and are carefully selected to meet the needs and expectations of our clients. We take pride in providing our clients with exceptional products that help them achieve their desired look and feel confident in their appearance
                                    </MDBCardText>
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
                                    <MDBCardText style={{ color: 'white', textAlign: 'justify' }}>
                                        Salon-Nee is a leader in the beauty industry and has been a trusted supplier of high-quality hair care and beauty products since 2007. Our products are sourced from trusted suppliers from around the world and are carefully selected to meet the needs and expectations of our clients. We take pride in providing our clients with exceptional products that help them achieve their desired look and feel confident in their appearance
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='6'>
                            <MDBCard className="border-0 shadow-0" style={{backgroundColor:"rgba(0,116,174,0)"}}>
                                <MDBCardImage style={{width: '99%'}} position='top' alt='...' src='https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mt-5 pt-5">
                        <MDBCol sm='4' className="mt-1">
                            <MDBCard className="border-0 shadow-0" style={{backgroundColor:"rgba(0,116,174,0)"}}>
                                <MDBCardTitle className="h3 text-white text-center text-uppercase">Objectives</MDBCardTitle>
                                <hr />
                                <MDBCardText style={{ color: 'white', textAlign: 'justify' }}>
                                    Salon-Nee is a leader in the beauty industry and has been a trusted supplier of high-quality hair care and beauty products since 2007. Our products are sourced from trusted suppliers from around the world and are carefully selected
                                </MDBCardText>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='4' className="mt-1">
                            <MDBCard className="border-0 shadow-0" style={{backgroundColor:"rgba(0,116,174,0)"}}>
                                <MDBCardTitle className="h3 text-white text-center text-uppercase">Vision</MDBCardTitle>
                                <hr />
                                <MDBCardText style={{ color: 'white', textAlign: 'justify' }}>
                                    Salon-Nee is a leader in the beauty industry and has been a trusted supplier of high-quality hair care and beauty products since 2007. Our products are sourced from trusted suppliers from around the world and are carefully selected to meet the needs and expectations of our clients. We take pride in providing our clients
                                </MDBCardText>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='4' className="mt-1">
                            <MDBCard className="border-0 shadow-0" style={{backgroundColor:"rgba(0,116,174,0)"}}>
                                <MDBCardTitle className="h3 text-white text-center text-uppercase">Mission</MDBCardTitle>
                                <hr />
                                <MDBCardText style={{ color: 'white', textAlign: 'justify' }}>
                                    Salon-Nee is a leader in the beauty industry and has been a trusted supplier of high-quality hair care and beauty products since 2007. Our products are sourced from trusted suppliers from around the world and are carefully selected to meet the needs and expectations of our clients. We take pride in providing our clients
                                </MDBCardText>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </div>
            </section>
        </div>
    )
};

export default AboutUS;
