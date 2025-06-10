import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationSection = () => {
  return (
    <section className="section bg-purple-100 text-center">
      <h2 className="section-title">Registration Drive 2025</h2>
      <p className="text mb-6">
        Become an SAZ member for 2025 at only 10 USD. Join us today!
      </p>
      <Link
        to="/registration"
        className="register-button"
      >
        Register Now
      </Link>
    </section>
  );
};

export default RegistrationSection;