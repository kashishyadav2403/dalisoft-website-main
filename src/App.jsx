import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import AboutUs from './Components/AboutUs';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Career from './Components/Career';

const App = () => {
  const scrollToContactUs = () => {
    const contactUsSection = document.getElementById('ContactUs');
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('Services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <Header scrollToContactUs={scrollToContactUs} scrollToServices={scrollToServices} />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <div id="Services">
        <Services />
      </div>
      <div id="ContactUs">
        <ContactUs />
      </div>
      
      <Footer />
    </Router>
  );
};

export default App;
