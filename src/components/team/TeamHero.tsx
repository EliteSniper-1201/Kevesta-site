import React from 'react';
import Image from 'next/image';

const TeamHero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Our Engineering Team
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          A talented group of engineers passionate about creating innovative solutions
        </p>
      </div>
    </section>
  );
};

export default TeamHero; 