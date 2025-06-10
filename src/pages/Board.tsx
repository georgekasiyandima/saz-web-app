import React from 'react';

const Board = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-playfair text-burgundy-700 text-center mb-8">Board Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img src="https://images.unsplash.com/photo-1515036551567-bf1198cccc35?q=80&w=1974&auto=format&fit=crop" alt="Carey-Ann Brown" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-semibold text-gray-800">Carey-Ann Brown</h3>
            <p className="text-gray-600">Current Board Chair</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Board;