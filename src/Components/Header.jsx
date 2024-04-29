import React from 'react';
import { Link } from 'react-router-dom';
import Images from '../Images/DalisoftLogoRemovedBG.png';
import '../ComponentsCSS/Header.css';

const Header = ({ scrollToContactUs, scrollToServices }) => {
  const handleClick = (event, scrollFunction) => {
    event.preventDefault();
    scrollFunction();
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/Home">
          <img src={Images} alt="Company Logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/Projects">Our Projects</Link></li>
          <li><a href="#Services" onClick={(e) => handleClick(e, scrollToServices)}>Services</a></li>
          <li><Link to="/Career">Career</Link></li>
          <li><Link to="/Gallery">Gallery</Link></li>
          <li><a href="#ContactUs" onClick={(e) => handleClick(e, scrollToContactUs)}>Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
