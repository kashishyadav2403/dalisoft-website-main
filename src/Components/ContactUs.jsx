import React, { useState } from "react";
import "../ComponentsCSS/ContactUs.css";
import Facebook from "../Images/FB_logo.png";
import Instagram from "../Images/Insta_logo.png";
import Twitter from "../Images/Twitter_logo.png";
import LinkedIn from "../Images/Linkedin_logo.png";
import { IoMdCall } from "react-icons/io";
import { MdEmail, MdLocationPin } from "react-icons/md";

export default function AboutPageContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          contactNumber: contactNumber,
          message: message
        }),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Form submitted successfully');
      // Optionally, you can clear the form fields after submission
      setName('');
      setEmail('');
      setContactNumber('');
      setMessage('');
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    }
  };
  
  return (
    <div className="aboutPage-contactUs">
      <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "55px", color: "var(--main-heading)", paddingBottom: "25px",paddingRight:"13%",paddingTop:"5%" }}>Get In Touch !!</span>
      <div className="aboutPage-contactUs-container">
        <div className="aboutPage-contactUs-container-left">
          <div className="aboutPage-contactUs-container-left-text">
            <div className="aboutPage-contactUs-container-left-text-content">
              <MdLocationPin size="35" style={{ color: "var(--btn-bg-color1)", marginRight: "15px" }} />
              <span style={{ fontWeight: "200", fontSize: "18px", lineHeight: "30px", color: "var(--para-color)" }}>
              #1118, 11th Floor Bldg. B4, Spaze I Tech Park, Sector: 49, Sohna Road Gurugram: 122018
              </span>
            </div>
            <div className="aboutPage-contactUs-container-left-text-content">
              <IoMdCall size="35" style={{ color: "var(--btn-bg-color1)", marginRight: "15px" }} />
              <span style={{ fontWeight: "200", fontSize: "18px", lineHeight: "30px", color: "var(--para-color)" }}>+91 9711307076</span>
            </div>
            <div className="aboutPage-contactUs-container-left-text-content">
              <MdEmail size="35" style={{ color: "var(--btn-bg-color1)", marginRight: "15px" }} />
              <span style={{ fontWeight: "200", fontSize: "18px", lineHeight: "30px", color: "var(--para-color)" }}>corporate@dalisoft.in</span>
            </div>
          </div>
          <div className="aboutPage-contactUs-container-left-socials">
            <a href="https://www.linkedin.com/company/dalisoft-technologies-pvt-ltd/mycompany/" target="_blank" rel="noreferrer">
                 <img style={{ width: "60px", height: "60px" }} src={LinkedIn} alt="" />
            </a>
            <a href="https://www.linkedin.com/company/dalisoft-technologies-pvt-ltd/mycompany/" target="_blank" rel="noreferrer">
                 <img style={{ width: "60px", height: "60px" }} src={Twitter} alt="" />
            </a>
            <a href="https://www.linkedin.com/company/dalisoft-technologies-pvt-ltd/mycompany/" target="_blank" rel="noreferrer">
                 <img style={{ width: "60px", height: "60px" }} src={Facebook} alt="" />
            </a>
            <a href="https://www.linkedin.com/company/dalisoft-technologies-pvt-ltd/mycompany/" target="_blank" rel="noreferrer">
                 <img style={{ width: "60px", height: "60px" }} src={Instagram} alt="" />
            </a>

          </div>
        </div>
        <div className="aboutPage-contactUs-container-right">
          <form className="contactForm">
            <div className="aboutPage-contactUs-input">
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="aboutPage-contactUs-input">
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="aboutPage-contactUs-input">
              <input type="number" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)}></input>
            </div>
            <div className="aboutPage-contactUs-textArea">
              <textarea type="text" placeholder="Message....." value={message} rows="5" onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div className="aboutPage-contactUs-exploreButton">
              <span onClick={handleSubmit}>Submit</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
