import React from 'react';
import '../ComponentsCSS/Footer.css'; // Importing CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Head Office</h3>
          <p>Dalisoft Technologis Pvt Ltd</p>
          <p>#1118,11th Floor Bldg B4, Spaze I Tech Park, Sector: 49</p>
          <p>Gurugram, India -122018</p>
          <p>Email: corporate@dalisoft.in</p>
          <p>Phone: +91 9711307076</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#AboutUs">About Us</a></li>
            <li><a href="#ContactUs">Contact Us</a></li>
            <li><a href="#Career">Career</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Gallery">Gallery</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <div className="social-media">
            <a href="https://www.linkedin.com/company/dalisoft-technologies-pvt-ltd/mycompany/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <div className="support">
            <a href="Support" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> Help Center
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Dalisoft Technologies Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
