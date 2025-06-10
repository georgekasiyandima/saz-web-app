import React from 'react';

const About = () => {
  return (
    <section className="py-12 bg-purple-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1974&auto=format&fit=crop" alt="Wine Tasting" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-playfair text-burgundy-700 mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            Established in 2020 by passionate Zimbabwean sommeliers, the Sommeliers Association of Zimbabwe (SAZ) is headquartered in Harare. Our mission is to promote the art and science of wine appreciation while fostering inclusivity and integrating our members into the global sommelier community. As a proud member of the Association de la Sommellerie Internationale (ASI), we offer discounted courses, international certifications, and access to global competitions like Best Sommelier of the World.
          </p>
          <p className="text-gray-700">
            Our vision is to empower local talent, support the Zimbabwean wine industry, and make wine culture accessible to all. Join us to unlock a world of opportunities in the wine industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;