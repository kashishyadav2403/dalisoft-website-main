import React from 'react';
import '../ComponentsCSS/Services.css';

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className='services-title'>Our Services</h2> 
        {/* <h4>We empower businesses with innovative automation solutions.</h4> */}
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-robot"></i>
            <h3>Automation IT Consultancy</h3>
            <p>
              Our experienced consultants assess your needs and design a
              customized automation strategy to optimize your operations.
            </p>
          </div>
          <div className="service-card">
            <i className="fas fa-code"></i>
            <h3>Automation Solutions</h3>
            <p>
              We develop and implement cutting-edge automation solutions
              including robotic process automation (RPA), machine learning,
              and Industrial Internet of Things (IIoT) integration.
            </p>
          </div>
          <div className="service-card">
            <i className="fas fa-chart-line"></i>
            <h3>Manufacturing Execution Systems (MES) Development</h3>
            <p>
              We create custom MES software that tracks your production data,
              provides real-time insights, and empowers data-driven decision
              making for your automation processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
