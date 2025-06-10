import React from 'react';
import HeroImage from '../assets/HeroSection.jpg';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <img src={HeroImage} alt="Hero Section" className="hero-image" />
      </div>
      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to SAZ</h1>
        <p className="hero-subtitle">
          Join the Sommeliers Association of Zimbabwe
        </p>
        <a href="#join" className="hero-cta">
          Join Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;