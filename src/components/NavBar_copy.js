import React, { useState } from "react";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import '../styles/NavBar_copy.css';

// Import the About component from "../pages/AboutUs.js"
// import About from "../pages/AboutUs";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <div className="header">
            <img src={logo} className="logo" />
            <ul className="menu">
                <li><a href="/">HOME</a></li>
                
                {/* <li><a href="/ContactUs">CONTACT US</a></li> */}
                
                <li><a href="/AboutUS">ABOUT US</a></li>
            </ul>
            {/* Render the About component (assuming you have set up your routes correctly) */}
            {/* <About /> */}
        </div>
    );
}

export default Navbar;
