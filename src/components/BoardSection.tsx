import React from 'react';
import SAZChair from '../assets/SAZChair.jpg';
import SAZBM2 from '../assets/SAZBM2.jpg';
import SAZBM3 from '../assets/SAZBM3.jpg';
import SAZBM4 from '../assets/Lillian-SAZBM.jpg';

const BoardSection = () => {
  const boardMembers = [
    { name: 'Carey-Ann Brown', title: 'Current Board Chair', image: SAZChair },
    { name: 'JV Ridon', title: 'Vice Chair', image: SAZBM2 },
    { name: 'Takura Makadzange', title: 'Board Member', image: SAZBM3 },
    { name: 'Lillian Mugwagwa', title: 'Board Member', image: SAZBM4 },
  ];

  return (
    <section id="board" className="section">
      <div className="container grid">
        {boardMembers.map((member, index) => (
          <div key={index} className="card">
            <img src={member.image} alt={`${member.name}`} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoardSection;