import React, { useEffect, useState } from 'react';
import SAZ1 from '../assets/SAZ1.jpg';
import SAZ2 from '../assets/SAZ2.jpg';
import SAZ3 from '../assets/SAZ3.jpg';

const Contests = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const targetDate = new Date('2024-12-09T00:00:00Z').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setTimeLeft(`${days}d ${hours}h remaining`);
      } else {
        setTimeLeft('Event has started!');
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="contests-section py-12">
      <div className="hero-section">
        <img src={SAZ2} alt="Contests Hero Banner" className="hero-image" />
      </div>
      <div className="container">
        {/* Best Sommelier of Zimbabwe */}
        <div className="contest-block animate-fade-in">
          <div className="w-third">
            <img src={SAZ3} alt="Best Sommelier of Zimbabwe" className="contest-image" />
          </div>
          <div className="w-two-thirds pl-4">
            <h2 className="text-3xl font-playfair text-burgundy-700 mb-2">Best Sommelier of Zimbabwe</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>2020 - Tawanda Marume</li>
              <li>2021 - Job Jovo</li>
              <li>2023 - Tadiswa Chikwanha</li>
            </ul>
          </div>
        </div>

        {/* Ubuntu Trophy */}
        <div className="contest-block animate-fade-in">
          <div className="w-third">
            <img src={SAZ1} alt="Ubuntu Trophy" className="contest-image" />
          </div>
          <div className="w-two-thirds pl-4">
            <h2 className="text-3xl font-playfair text-burgundy-700 mb-2">Ubuntu Trophy</h2>
            <p className="text-gray-700 mb-2">
              In partnership with SASA and Stellenbosch Wine Routes. This annual event sees Team Zimbabwe compete with Team South Africa for the trophy. The 2024 Ubuntu Trophy will take place on Monday 9th December 2024. It is open to all our members.
            </p>
            <p className="text-gray-700 mb-2">Time left: {timeLeft}</p>
            <ul className="list-disc pl-5 text-gray-700 mb-2">
              <li>Winner 2020 - Zimbabwe</li>
              <li>Winner 2021 - South Africa</li>
              <li>Winner 2022 - South Africa</li>
              <li>Winner 2023 - South Africa</li>
              <li>Winner 2024 - Mauritius</li>
            </ul>
            <a href="/membership" className="register-button">BECOME A MEMBER NOW!</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contests;