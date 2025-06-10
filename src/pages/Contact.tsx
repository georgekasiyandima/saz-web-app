import React, { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setMessage('Please enter your name.');
      setMessageType('error');
      return;
    }
    if (!validateEmail(formData.email)) {
      setMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }
    if (!formData.message.trim()) {
      setMessage('Please enter a message.');
      setMessageType('error');
      return;
    }

    setTimeout(() => {
      setMessage('Message sent successfully!');
      setMessageType('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-12 bg-gradient-to-b">
      <div className="container">
        <h2 className="text-3xl font-playfair text-burgundy-700 text-center mb-4">
          Contact Us
        </h2>
        <div className="flex flex-direction-column md:flex-row justify-between gap-2rem">
          <div className="w-third bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-poppins text-burgundy-600 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-2">
              <span className="font-bold">Phone:</span> +263 78 601 5396
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Email:</span> info@zimsomms.com
            </p>
          </div>
          <div className="w-two-thirds">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
              <button type="submit">Send Message</button>
              {message && (
                <p
                  className={`mt-4 text-center ${
                    messageType === 'success' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;