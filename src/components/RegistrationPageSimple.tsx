'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Narrator from './Narrator';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    domain: '',
    registrationNumber: '',
    year: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Pre-fill domain if selected from domain page
  useEffect(() => {
    const selectedDomain = sessionStorage.getItem('selectedDomain');
    if (selectedDomain) {
      setFormData(prev => ({
        ...prev,
        domain: selectedDomain
      }));
      // Clear the sessionStorage after using it
      sessionStorage.removeItem('selectedDomain');
    }
  }, []);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Player name is required!';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required!';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number!';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required!';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address!';
    }

    if (!formData.registrationNumber.trim()) {
      newErrors.registrationNumber = 'Registration number is required!';
    }

    if (!formData.year) {
      newErrors.year = 'Please select your college year!';
    }

    if (!formData.domain) {
      newErrors.domain = 'Please choose your domain!';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Show success message with Mario sound effect feel
      alert(`🎉 Welcome to GCSRM, ${formData.name}! 🎉\n\n` +
            `Domain: ${formData.domain.replace(/^[^\-]+ \- /, '')}\n` +
            `Year: ${formData.year}\n` +
            `Email: ${formData.email}\n\n` +
            `Your adventure begins now! 🚀`);
      
      console.log('Registration submitted:', formData);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        domain: '',
        registrationNumber: '',
        year: '',
        email: ''
      });
      
      setIsSubmitting(false);
      
      // Here you would typically send the data to your backend
      // Example: await fetch('/api/register', { method: 'POST', body: JSON.stringify(formData) })
    }, 1500);
  };

  return (
    <div id="registration-section" className="min-h-screen relative overflow-hidden flex items-center justify-center py-8" style={{ backgroundColor: '#33a1fd' }}>
      
      {/* Custom CSS for better placeholder visibility */}
      <style jsx>{`
        input::placeholder {
          color: #374151 !important;
          opacity: 1 !important;
        }
        select {
          color: #374151;
        }
        select option {
          color: #374151;
        }
      `}</style>
      
      {/* Floating Clouds */}
      <div className="absolute top-8 left-8 w-32 h-20 opacity-80 animate-float">
        <Image src="/cloud-1.png" alt="Cloud" fill className="object-contain" />
      </div>
      <div className="absolute top-12 right-12 w-36 h-24 opacity-80 animate-float-delayed">
        <Image src="/cloud-2.png" alt="Cloud" fill className="object-contain" />
      </div>

      {/* Floating Game Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Question Blocks */}
        <div className="absolute top-1/4 left-10 w-10 h-10 animate-pulse">
          <Image src="/block_question.png" alt="Question Block" fill className="object-contain" />
        </div>
        <div className="absolute top-3/4 right-20 w-10 h-10 animate-pulse">
          <Image src="/block_question-2.png" alt="Question Block" fill className="object-contain" />
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-20 px-4 w-full max-w-2xl -mt-16">
        
        {/* Registration Title */}
        <div className="mb-3">
          <Image 
            src="/start_your_adventure.png"
            alt="START YOUR ADVENTURE" 
            width={550}
            height={130}
            className="mx-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Registration Form */}
        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-lg border-4 border-black shadow-2xl p-5">
            <form onSubmit={handleSubmit} className="space-y-3">
              
              {/* Name Field */}
              <div>
                <label className="block text-sm font-bold text-black mb-1" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  🎮 PLAYER NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 text-sm border-3 rounded focus:outline-none focus:ring-2 transition-all ${
                    errors.name ? 'border-red-500 focus:ring-red-400' : 'border-black focus:ring-blue-400'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-600 text-xs font-bold mt-1">❌ {errors.name}</p>
                )}
              </div>

              {/* Phone Number Field */}
              <div>
                <label className="block text-sm font-bold text-black mb-1" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  📱 PHONE NUMBER
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 text-sm border-3 rounded focus:outline-none focus:ring-2 transition-all ${
                    errors.phone ? 'border-red-500 focus:ring-red-400' : 'border-black focus:ring-blue-400'
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-600 text-xs font-bold mt-1">❌ {errors.phone}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-bold text-black mb-1" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  📧 EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 text-sm border-3 rounded focus:outline-none focus:ring-2 transition-all ${
                    errors.email ? 'border-red-500 focus:ring-red-400' : 'border-black focus:ring-blue-400'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-600 text-xs font-bold mt-1">❌ {errors.email}</p>
                )}
              </div>

              {/* Registration Number Field */}
              <div>
                <label className="block text-sm font-bold text-black mb-1" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  🎓 REGISTRATION NUMBER
                </label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 text-sm border-3 rounded focus:outline-none focus:ring-2 transition-all ${
                    errors.registrationNumber ? 'border-red-500 focus:ring-red-400' : 'border-black focus:ring-blue-400'
                  }`}
                  placeholder="Enter your college registration number"
                />
                {errors.registrationNumber && (
                  <p className="text-red-600 text-xs font-bold mt-1">❌ {errors.registrationNumber}</p>
                )}
              </div>

              {/* Year Field */}
              <div>
                <label className="block text-sm font-bold text-black mb-1" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  📚 COLLEGE YEAR
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 text-sm border-3 rounded focus:outline-none focus:ring-2 transition-all bg-white ${
                    errors.year ? 'border-red-500 focus:ring-red-400' : 'border-black focus:ring-blue-400'
                  }`}
                >
                  <option value="">Select your year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="Masters">Masters</option>
                  <option value="PhD">PhD</option>
                </select>
                {errors.year && (
                  <p className="text-red-600 text-xs font-bold mt-1">❌ {errors.year}</p>
                )}
              </div>

              {/* Domain Selection */}
              <div>
                <label className="block text-sm font-bold text-black mb-1" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  🎯 CHOOSE YOUR DOMAIN
                </label>
                <select
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 text-sm border-3 rounded focus:outline-none focus:ring-2 transition-all bg-white ${
                    errors.domain ? 'border-red-500 focus:ring-red-400' : 'border-black focus:ring-blue-400'
                  }`}
                >
                  <option value="">Select your domain</option>
                  <option value="Technical">💻 Technical - Code, Build, Innovate</option>
                  <option value="Creative">🎨 Creative - Design, Create, Inspire</option>
                  <option value="Corporate">💼 Corporate - Lead, Manage, Excel</option>
                </select>
                {errors.domain && (
                  <p className="text-red-600 text-xs font-bold mt-1">❌ {errors.domain}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-3 px-4 rounded border-3 border-black shadow-lg transition-all duration-200 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transform hover:scale-105'
                  }`}
                  style={{ fontFamily: 'Arial Black, sans-serif', fontSize: '1rem' }}
                >
                  {isSubmitting ? '⏳ JOINING...' : '🚀 JOIN THE ADVENTURE! 🚀'}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>

      {/* Narrator - Bottom position on ground */}
      <Narrator 
        position="bottom" 
        dialogue="Final boss fight! 💀 Fill this form perfectly or GET REKT! One wrong move and you're OUT! No mercy for weaklings here! 🔥👑"
        upDialogue="Chickening out now? 😈 I KNEW you weren't champion material! Pathetic little coward! 💀👑"
        hoverDialogues={[
          "What you want, slowpoke? 🙄 Stop it and FILL THE FORM! Time is ticking, loser! ⏰",
          "SERIOUSLY?! 😤 You're slower than a dead turtle! JUST REGISTER ALREADY or get out of my sight! 👑⚡"
        ]}
      />

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
