'use client';

import React from 'react';
import Image from 'next/image';
import Narrator from './Narrator';

const DomainPage = () => {
  return (
    <div id="domains-section" className="h-screen relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#33a1fd' }}>
      
      {/* Narrator - Middle position */}
      <Narrator 
        position="middle" 
        dialogue="So you made it this far? 😏 Now choose your weapon, rookie! Technical nerds, Creative freaks, or Corporate sharks? Pick wrong and you're DONE! 💥⚡"
        upDialogue="Running away from the challenge? 🙄 I knew you didn't have the guts! Go cry to mommy!"
        downDialogue="Finally ready for the real test? Time to prove you're not just talk! Choose wisely or GET WRECKED! ⚡"
      />
      
      {/* Floating Clouds */}
      <div className="absolute top-8 left-8 w-32 h-20 opacity-90 animate-float">
        <Image src="/cloud-1.png" alt="Cloud" fill className="object-contain" />
      </div>
      <div className="absolute top-12 right-12 w-36 h-24 opacity-90 animate-float-delayed">
        <Image src="/cloud-2.png" alt="Cloud" fill className="object-contain" />
      </div>

      {/* Main Content */}
      <div className="text-center z-20 px-4 -mt-20">
        
        {/* Domain Title Image */}
        <div className="mb-8">
          <Image 
            src="/choose-your-path.png"
            alt="CHOOSE YOUR PATH" 
            width={300}
            height={75}
            className="mx-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* Domain Cards Container */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          
          {/* Technical Card */}
          <div 
            className="relative group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => {
              const registrationSection = document.getElementById('registration-section');
              // Store selected domain in sessionStorage for pre-filling the form
              sessionStorage.setItem('selectedDomain', 'Technical');
              registrationSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="w-64 h-72 relative bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg border-4 border-black shadow-2xl">
              <div className="absolute inset-2 bg-gradient-to-b from-blue-300 to-blue-500 rounded border-2 border-blue-700">
                <div className="p-4 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-3">
                      <Image 
                        src="/technical.png"
                        alt="TECHNICAL" 
                        width={150}
                        height={40}
                        className="mx-auto"
                      />
                    </div>
                    <p className="text-base text-black font-semibold">
                      Code • Debug • Build
                    </p>
                  </div>
                  <div className="text-sm text-black font-medium">
                    Web Development<br/>
                    App Development<br/>
                    Programming
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Creative Card */}
          <div 
            className="relative group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => {
              const registrationSection = document.getElementById('registration-section');
              // Store selected domain in sessionStorage for pre-filling the form
              sessionStorage.setItem('selectedDomain', 'Creative');
              registrationSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="w-64 h-72 relative bg-gradient-to-b from-green-400 to-green-600 rounded-lg border-4 border-black shadow-2xl">
              <div className="absolute inset-2 bg-gradient-to-b from-green-300 to-green-500 rounded border-2 border-green-700">
                <div className="p-4 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-3">
                      <Image 
                        src="/creative.png"
                        alt="CREATIVE" 
                        width={150}
                        height={40}
                        className="mx-auto"
                      />
                    </div>
                    <p className="text-base text-black font-semibold">
                      Design • Create • Inspire
                    </p>
                  </div>
                  <div className="text-sm text-black font-medium">
                    Graphic Design<br/>
                    UI/UX Design<br/>
                    Content Creation
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Card */}
          <div 
            className="relative group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => {
              const registrationSection = document.getElementById('registration-section');
              // Store selected domain in sessionStorage for pre-filling the form
              sessionStorage.setItem('selectedDomain', 'Corporate');
              registrationSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="w-64 h-72 relative bg-gradient-to-b from-red-400 to-red-600 rounded-lg border-4 border-black shadow-2xl">
              <div className="absolute inset-2 bg-gradient-to-b from-red-300 to-red-500 rounded border-2 border-red-700">
                <div className="p-4 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-3">
                      <Image 
                        src="/corporate.png"
                        alt="CORPORATE" 
                        width={150}
                        height={40}
                        className="mx-auto"
                      />
                    </div>
                    <p className="text-base text-black font-semibold">
                      Lead • Manage • Excel
                    </p>
                  </div>
                  <div className="text-sm text-black font-medium">
                    Event Management<br/>
                    Business Strategy<br/>
                    Leadership
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-yellow-300 border-4 border-black rounded-lg px-6 py-3 mx-auto max-w-2xl shadow-xl">
          <p className="text-black font-bold text-lg" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            🎯 CHOOSE YOUR QUEST! 🎯
          </p>
          <p className="text-black font-medium text-sm mt-1">
            Click on any domain card to begin your registration adventure!
          </p>
        </div>
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

export default DomainPage;
