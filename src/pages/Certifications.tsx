import React from 'react';
import { Link } from 'react-router-dom';

const Certifications = () => {
  return (
    <section className="section bg-purple-50">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="text-content text-center">
          <p className="text mb-4">
            The Sommeliers Association of Zimbabwe (SAZ) offers internationally recognized certifications through our partnership with the Association de la Sommellerie Internationale (ASI). Our programs are designed to empower local talent and elevate the Zimbabwean wine industry.
          </p>
          <p className="text mb-6">
            From beginner courses to advanced sommelier certifications, SAZ provides access to discounted training and global competitions like the Best Sommelier of the World.
          </p>
          <Link
            to="/registration"
            className="register-button"
          >
            Get Certified
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Certifications;