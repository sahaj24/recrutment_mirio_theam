'use client';

import React from 'react';

const ScrollNavigation = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex-col space-y-3 hidden md:flex">
      {/* Hero Section */}
      <button
        onClick={() => scrollToSection('hero-section')}
        className="w-4 h-4 rounded-full bg-white border-2 border-black shadow-lg hover:scale-125 transition-transform duration-200"
        title="Hero Section"
      />
      
      {/* Domains Section */}
      <button
        onClick={() => scrollToSection('domains-section')}
        className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-black shadow-lg hover:scale-125 transition-transform duration-200"
        title="Choose Domain"
      />
      
      {/* Registration Section */}
      <button
        onClick={() => scrollToSection('registration-section')}
        className="w-4 h-4 rounded-full bg-green-400 border-2 border-black shadow-lg hover:scale-125 transition-transform duration-200"
        title="Registration"
      />
    </div>
  );
};

export default ScrollNavigation;
