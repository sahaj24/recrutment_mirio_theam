'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const RegistrationPage = () => {
  // Force recompilation
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    domain: '',
    registrationNumber: '',
    year: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div id="registration-section" className="h-screen relative overflow-hidden flex items-center justify-center py-8" style={{ backgroundColor: '#33a1fd' }}>
      
      {/* Floating Clouds */}
      <div className="absolute top-16 left-16 w-48 h-32 opacity-90">
        <Image src="/cloud-1.png" alt="Cloud" fill className="object-contain" />
      </div>
      <div className="absolute top-24 right-20 w-52 h-36 opacity-90">
        <Image src="/cloud-2.png" alt="Cloud" fill className="object-contain" />
      </div>

      {/* Main Content */}
      <div className="text-center z-20 px-4 -mt-12">
        
        {/* Registration Title */}
        <div className="mb-6">
          <Image 
            src="/start_your_adventure.png"
            alt="START YOUR ADVENTURE" 
            width={600}
            height={140}
            className="mx-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Registration Form */}
        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-lg border-4 border-black shadow-2xl p-4">
            <form onSubmit={handleSubmit} className="space-y-3">
              
              {/* Name Field */}
              <div>
                <label className="block text-base font-bold text-black mb-1" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  PLAYER NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-2 py-1.5 text-sm border-2 border-black rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-base font-bold text-black mb-1" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-2 py-1.5 text-sm border-2 border-black rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Domain Field */}
              <div>
                <label className="block text-base font-bold text-black mb-1" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  CHOOSE YOUR DOMAIN
                </label>
                <select
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  required
                  className="w-full px-2 py-1.5 text-sm border-2 border-black rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
                >
                  <option value="">Select Domain</option>
                  <option value="technical">TECHNICAL</option>
                  <option value="creative">CREATIVE</option>
                  <option value="corporate">CORPORATE</option>
                </select>
              </div>

              {/* Registration Number Field */}
              <div>
                <label className="block text-base font-bold text-black mb-1" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  REGISTRATION NUMBER
                </label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-2 py-1.5 text-sm border-2 border-black rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
                  placeholder="Enter your registration number"
                />
              </div>

              {/* Year Field */}
              <div>
                <label className="block text-base font-bold text-black mb-1" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  COLLEGE YEAR
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full px-2 py-1.5 text-sm border-2 border-black rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-base font-bold text-black mb-1" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-2 py-1.5 text-sm border-2 border-black rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black font-bold py-2 px-4 rounded border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-200"
                  style={{ fontFamily: 'Arial Black, sans-serif', fontSize: '1rem' }}
                >
                  JOIN THE ADVENTURE!
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>

      {/* Hill - Left Side */}
      <div className="absolute bottom-16 w-96 h-56 z-10" style={{ left: '-115px' }}>
        <Image src="/hill_sm.png" alt="Hill" fill className="object-contain" />
      </div>

      {/* Mario Pipe - Right Side */}
      <div className="absolute bottom-16 right-0 w-28 h-40 z-10">
        <Image src="/pipe_basic.png" alt="Pipe" width={203} height={305} className="object-contain h-full w-auto" />
      </div>

      {/* Pipe Top - Right Side */}
      <div className="absolute bottom-56 right-0 w-32 h-16 z-20">
        <Image src="/pipe_top.png" alt="Pipe Top" width={232} height={116} className="object-contain h-full w-auto" />
      </div>

      {/* Mario Character - Bottom Left */}
      <div className="absolute bottom-16 left-1/4 w-20 h-24 z-30">
        <Image src="/char_mario_sm-idle.png" alt="Mario" fill className="object-contain" />
      </div>

      {/* Bottom Brick Ground */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 z-5"
        style={{
          backgroundImage: 'url(/block_textured.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '64px 64px',
          backgroundPosition: 'bottom'
        }}
      ></div>

    </div>
  );
};

export default RegistrationPage;
