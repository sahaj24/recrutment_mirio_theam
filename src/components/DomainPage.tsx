 'use client';

import React from 'react';
import Image from 'next/image';

const DomainPage: React.FC = () => {
  return (
    <div id="domains-section" className="min-h-screen py-16 sm:py-20 md:py-24 relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#33a1fd' }}>
      {/* narrator intentionally removed */}

      {/* Floating Clouds */}
      <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 w-24 sm:w-28 md:w-32 h-16 sm:h-18 md:h-20 opacity-90 animate-float">
        <Image src="/cloud-1.png" alt="Cloud" fill className="object-contain" />
      </div>
      <div className="absolute top-8 sm:top-10 md:top-12 right-4 sm:right-8 md:right-12 w-28 sm:w-32 md:w-36 h-18 sm:h-20 md:h-24 opacity-90 animate-float-delayed">
        <Image src="/cloud-2.png" alt="Cloud" fill className="object-contain" />
      </div>

      {/* Main Content */}
      <div className="text-center z-20 px-4 py-8 sm:py-10 md:py-12">
        {/* Domain Title Image */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <Image
            src="/choose-your-path.png"
            alt="CHOOSE YOUR PATH"
            width={300}
            height={75}
            className="mx-auto drop-shadow-2xl w-64 sm:w-72 md:w-80 lg:w-auto"
            priority
          />
        </div>

        {/* Domain Cards Container */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 pb-4 sm:pb-6 md:pb-8">
          {/** Technical */}
          <div
            className="relative group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => {
              const registrationSection = document.getElementById('registration-section');
              sessionStorage.setItem('selectedDomain', 'Technical');
              registrationSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="w-64 sm:w-72 md:w-80 h-80 sm:h-88 md:h-96 relative bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg border-4 border-black shadow-2xl">
              <div className="absolute inset-2 bg-gradient-to-b from-blue-300 to-blue-500 rounded border-2 border-blue-700">
                <div className="p-3 sm:p-4 md:p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <Image src="/technical.png" alt="TECHNICAL" width={140} height={37} className="mx-auto" />
                    </div>
                    <p className="text-base sm:text-lg text-black font-semibold">Step into the World of GCSRM Tech!</p>
                  </div>
                  <div className="text-sm sm:text-base text-black font-medium text-center leading-relaxed space-y-2">
                    <p>Our members design, develop, and debug like heroes on a quest.</p>
                    <p>From building apps and websites to powering up with AI/ML and competitive programming, every project is a new level to conquer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/** Creative */}
          <div
            className="relative group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => {
              const registrationSection = document.getElementById('registration-section');
              sessionStorage.setItem('selectedDomain', 'Creative');
              registrationSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="w-64 sm:w-72 md:w-80 h-80 sm:h-88 md:h-96 relative bg-gradient-to-b from-green-400 to-green-600 rounded-lg border-4 border-black shadow-2xl">
              <div className="absolute inset-2 bg-gradient-to-b from-green-300 to-green-500 rounded border-2 border-green-700">
                <div className="p-3 sm:p-4 md:p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <Image src="/CREATIVE.png" alt="CREATIVE" width={140} height={37} className="mx-auto" />
                    </div>
                    <p className="text-base sm:text-lg text-black font-semibold">The Creative Powerhouse of GCSRM!</p>
                  </div>
                  <div className="text-sm sm:text-base text-black font-medium text-center leading-relaxed space-y-2">
                    <p>This is the team that brings the visual magic! From sleek GFX and eye-catching posters to cinematic VFX and motion edits, they power up every project.</p>
                    <p>Bold, fresh, and unforgettable — that&apos;s their game!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/** Corporate */}
          <div
            className="relative group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => {
              const registrationSection = document.getElementById('registration-section');
              sessionStorage.setItem('selectedDomain', 'Corporate');
              registrationSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="w-64 sm:w-72 md:w-80 h-80 sm:h-88 md:h-96 relative bg-gradient-to-b from-red-400 to-red-600 rounded-lg border-4 border-black shadow-2xl">
              <div className="absolute inset-2 bg-gradient-to-b from-red-300 to-red-500 rounded border-2 border-red-700">
                <div className="p-3 sm:p-4 md:p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <Image src="/CORPORATE.png" alt="CORPORATE" width={140} height={37} className="mx-auto" />
                    </div>
                    <p className="text-base sm:text-lg text-black font-semibold">The Masterminds of GCSRM!</p>
                  </div>
                  <div className="text-sm sm:text-base text-black font-medium text-center leading-relaxed space-y-2">
                    <p>Where strategy meets execution — this crew powers the big moves. From unlocking sponsorships and building alliances to planning epic events, they&apos;re the hidden heroes running the game behind the scenes!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pipes and decorations */}
      <div className="absolute bottom-12 sm:bottom-14 md:bottom-16 left-0 w-16 sm:w-20 md:w-24 lg:w-28 h-24 sm:h-28 md:h-32 lg:h-40 z-10">
        <Image src="/pipe_basic.png" alt="Pipe" width={203} height={305} className="object-contain h-full w-auto" />
      </div>
      <div className="absolute bottom-36 sm:bottom-42 md:bottom-48 lg:bottom-56 left-0 w-20 sm:w-24 md:w-28 lg:w-32 h-10 sm:h-12 md:h-14 lg:h-16 z-20">
        <Image src="/pipe_top.png" alt="Pipe Top" width={232} height={116} className="object-contain h-full w-auto" />
      </div>
      <div className="absolute bottom-12 sm:bottom-14 md:bottom-16 right-0 w-16 sm:w-20 md:w-24 lg:w-28 h-24 sm:h-28 md:h-32 lg:h-40 z-10">
        <Image src="/pipe_basic.png" alt="Pipe" width={203} height={305} className="object-contain h-full w-auto" />
      </div>
      <div className="absolute bottom-36 sm:bottom-42 md:bottom-48 lg:bottom-56 right-0 w-20 sm:w-24 md:w-28 lg:w-32 h-10 sm:h-12 md:h-14 lg:h-16 z-20">
        <Image src="/pipe_top.png" alt="Pipe Top" width={232} height={116} className="object-contain h-full w-auto" />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-12 sm:h-14 md:h-16 z-5"
        style={{
          backgroundImage: 'url(/block_textured.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '32px 32px',
          backgroundPosition: 'bottom',
        }}
      />
    </div>
  );
};

export default DomainPage;
