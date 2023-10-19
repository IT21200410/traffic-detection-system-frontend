import React, { useState } from "react";
import Logo from "../assets/kiri.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="/"><strong>Home</strong></Link>
          <Link to="/AboutUS"><strong>About</strong></Link>
          {/* <Link to="/contact"><strong>Contact</strong></Link> */}
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"><strong>Home</strong></Link>
        <Link to="/AboutUS"><strong>About</strong></Link>
        {/* <Link to="/contact"><strong>Contact</strong></Link> */}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
