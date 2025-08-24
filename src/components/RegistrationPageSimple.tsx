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
    <div id="registration-section" className="min-h-screen relative overflow-hidden flex items-center justify-center py-6 sm:py-8 px-4 sm:px-6" style={{ backgroundColor: '#33a1fd' }}>
      
      {/* Simplified CSS */}
      <style jsx>{`
        input::placeholder, select {
          color: #6b7280;
          opacity: 1;
        }
        
        /* Minimal animations for better performance */
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-gentle-float {
          animation: gentleFloat 8s ease-in-out infinite;
        }
        
        /* Ensure proper input sizing */
        input, select, button {
          min-height: 44px;
          font-size: 16px; /* Prevents iOS zoom */
        }
      `}</style>
      
      {/* Floating Clouds - Simplified and fewer */}
      <div className="absolute top-8 left-8 w-24 h-16 opacity-40 animate-gentle-float hidden sm:block">
        <Image src="/cloud-1.png" alt="Cloud" fill className="object-contain" />
      </div>
      <div className="absolute top-12 right-12 w-28 h-18 opacity-40 animate-gentle-float hidden sm:block" style={{ animationDelay: '2s' }}>
        <Image src="/cloud-2.png" alt="Cloud" fill className="object-contain" />
      </div>

      {/* Main Content - Fully responsive */}
      <div className="text-center z-20 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl px-2 sm:px-4 -mt-8 sm:-mt-12 md:-mt-16">
        
        {/* Registration Title - Responsive sizing */}
        <div className="mb-2 sm:mb-3 md:mb-4">
          <div className="relative w-full h-16 sm:h-20 md:h-24 lg:h-32 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
            <Image 
              src="/start_your_adventure.png"
              alt="START YOUR ADVENTURE" 
              fill
              className="object-contain drop-shadow-xl sm:drop-shadow-2xl"
              priority
              sizes="(max-width: 640px) 320px, (max-width: 768px) 448px, (max-width: 1024px) 512px, 640px"
            />
          </div>
        </div>

        {/* Registration Form - Responsive container */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          <div className="bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-lg border-2 sm:border-3 md:border-4 border-black shadow-xl sm:shadow-2xl p-3 sm:p-4 md:p-5">
            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
              
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-2 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base border-2 sm:border-3 rounded focus:outline-none focus:ring-2 transition-all ${
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
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-2 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base border-2 sm:border-3 rounded focus:outline-none focus:ring-2 transition-all ${
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
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-2 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base border-2 sm:border-3 rounded focus:outline-none focus:ring-2 transition-all ${
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
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  required
                  className={`w-full px-2 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base border-2 sm:border-3 rounded focus:outline-none focus:ring-2 transition-all ${
                    errors.registrationNumber ? 'border-red-500 focus:ring-red-400' : 'border-black focus:ring-blue-400'
                  }`}
                  placeholder="Enter registration number"
                />
                {errors.registrationNumber && (
                  <p className="text-red-600 text-xs font-bold mt-1">❌ {errors.registrationNumber}</p>
                )}
              </div>

              {/* Year Field */}
              <div>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className={`w-full px-2 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base border-2 sm:border-3 rounded focus:outline-none focus:ring-2 transition-all bg-white ${
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
                <select
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  required
                  className={`w-full px-2 sm:px-3 py-2 sm:py-2.5 text-sm sm:text-base border-2 sm:border-3 rounded focus:outline-none focus:ring-2 transition-all bg-white ${
                    errors.domain ? 'border-red-500 focus:ring-red-400' : 'border-black focus:ring-blue-400'
                  }`}
                >
                  <option value="">Select your domain</option>
                  <option value="Technical">Technical - Code, Build, Innovate</option>
                  <option value="Creative">Creative - Design, Create, Inspire</option>
                  <option value="Corporate">Corporate - Lead, Manage, Excel</option>
                </select>
                {errors.domain && (
                  <p className="text-red-600 text-xs font-bold mt-1">❌ {errors.domain}</p>
                )}
              </div>

              {/* Submit Button - Touch-friendly sizing */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-3 sm:py-3.5 px-4 rounded border-2 sm:border-3 border-black shadow-lg transition-all duration-200 text-sm sm:text-base ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 active:scale-95 transform hover:scale-105'
                  }`}
                  style={{ fontFamily: 'Arial Black, sans-serif', minHeight: '44px' }}
                >
                  {isSubmitting ? (
                    <span>JOINING...</span>
                  ) : (
                    <span>JOIN THE ADVENTURE!</span>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>

      {/* Narrator - Hidden on mobile and tablets */}
      <div className="hidden lg:block">
        <Narrator 
          position="bottom" 
          dialogue="If you want to join us then fill the form !"
          upDialogue="If you want to join us then fill the form !"
          hoverDialogues={[
            "Hey did you filled the form !",
            "SERIOUSLY?! What are you wating for "
          ]}
        />
      </div>

      {/* Bottom Brick Ground - Responsive sizing */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 md:h-16 z-5"
        style={{
          backgroundImage: 'url(/block_textured.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'clamp(32px, 4vw, 64px) clamp(32px, 4vw, 64px)',
          backgroundPosition: 'bottom'
        }}
      ></div>
    </div>
  );
};

export default RegistrationPage;
