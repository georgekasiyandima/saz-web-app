import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage('Please enter your email address.');
      setMessageType('error');
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }

    setMessage('Subscribed successfully!');
    setMessageType('success');
    setEmail('');

    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 3000);
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <Link to="/">
            <img src="/assets/images/SAZLogo.png" alt="SAZ Logo" />
          </Link>
          <div className="footer-contact">
            <p>
              <FaEnvelope /> contact@saz.org
            </p>
            <p>
              <FaPhone /> +263 77 123 4567
            </p>
          </div>
        </div>
        <div className="footer-newsletter">
          <h4>Get Updates</h4>
          <form onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Enter your email address to subscribe to our newsletter"
            />
            <button type="submit" aria-label="Subscribe to newsletter">
              Subscribe
            </button>
          </form>
          {message && (
            <p className={`message ${messageType === 'success' ? 'success' : 'error'}`}>
              {message}
            </p>
          )}
        </div>
        <div className="footer-links">
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
              <FaFacebook />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube page">
              <FaYoutube />
            </a>
          </div>
          <div className="legal-links">
            <Link to="/terms-privacy">Terms & Privacy</Link>
            <p>© 2025 Sommeliers Association of Zimbabwe</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;