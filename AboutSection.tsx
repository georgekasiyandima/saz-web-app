import React from 'react';
import AboutUsImage from '../assets/Aboutus.jpeg'; // Adjusted path and extension

const AboutSection = () => {
  return (
    <section id="about" className="section bg-purple-50">
      <div className="container flex">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={AboutUsImage}
            alt="Sommeliers Association of Zimbabwe"
            className="img"
          />
        </div>
        <div className="md:w-1/2 text-content">
          <h2 className="section-title">About Us</h2>
          <p className="text mb-4">
            Established in 2020 by passionate Zimbabwean sommeliers, the
            Sommeliers Association of Zimbabwe (SAZ) is headquartered in
            Harare. Our mission is to promote the art and science of wine
            appreciation while fostering inclusivity and integrating our members
            into the global sommelier community. As a proud member of the
            Association de la Sommellerie Internationale (ASI), we offer
            discounted courses, international certifications, and access to
            global competitions like Best Sommelier of the World.
          </p>
          <p className="text">
            Our vision is to empower local talent, support the Zimbabwean wine
            industry, and make wine culture accessible to all. Join us to unlock
            a world of opportunities in the wine industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;