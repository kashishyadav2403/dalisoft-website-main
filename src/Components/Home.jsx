import React from 'react';
import Automation_Img from '../Images/Automation_Img.png';
import '../ComponentsCSS/Home.css'; // Importing CSS file for styling

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="content">
          <h1>Dalisoft Technologies</h1>
          <h3>Empowering Businesses with Automation & Data Insights</h3>
          <p>
            Dalisoft Technologies is a leading software development company
            specializing in automation solutions and data-driven insights for
            the manufacturing industry. Our expert team helps you elevate your
            operations and decision-making, leading to greater efficiency and
            growth.
          </p>
          <a href="#ContactUs" className="cta-btn">Learn More</a>
        </div>
        <div className="image-wrapper">
          <img src={Automation_Img} alt="Automation Technology" />
        </div>
      </div>
    </section>
  );
};

export default Home;

