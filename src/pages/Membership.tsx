import React from 'react';
import { Link } from 'react-router-dom';

const Membership = () => {
  return (
    <section className="section bg-purple-100">
      <div className="container">
        <h2 className="section-title">Membership</h2>
        <div className="text-content text-center">
          <p className="text mb-4">
            Become a member of the Sommeliers Association of Zimbabwe (SAZ) and join a community dedicated to the art and science of wine appreciation. Our membership offers access to exclusive events, discounted courses, and opportunities to connect with global sommelier networks.
          </p>
          <p className="text mb-6">
            Membership is open to all wine enthusiasts, professionals, and students looking to deepen their knowledge and career in the wine industry.
          </p>
          <Link
            to="/registration"
            className="register-button"
          >
            Join SAZ Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Membership;