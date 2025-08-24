import React from 'react';
import Image from 'next/image';

const DomainPage = () => {
  return (
    <div id="domains-section" className="h-screen relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#33a1fd' }}>

      {/* Narrator was intentionally removed/commented out for mobile and per UX request */}
      {/*
      <div className="hidden md:block">
        <Narrator 
          position="middle" 
          dialogue="So you made it this far? 😏 Now choose your weapon, rookie! Technical nerds, Creative freaks, or Corporate sharks? Pick wrong and you're DONE! 💥⚡"
          upDialogue="Running away from the challenge? 🙄 I knew you didn't have the guts! Go cry to mommy! 👑😤"
          downDialogue="Finally ready for the real test? 💀 Time to prove you're not just talk! Choose wisely or GET WRECKED! ⚡"
        />
      </div>
      */}

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

        {/* Domain Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-5xl mx-auto">
          {/* Technical Card */}
          <div 
            className="relative group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => {
              const registrationSection = document.getElementById('registration-section');
              sessionStorage.setItem('selectedDomain', 'Technical');
              registrationSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="w-64 h-72 relative bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-lg border-4 border-black shadow-2xl">
              <div className="absolute inset-2 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded border-2 border-yellow-700">
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
                    <p className="text-base text-black font-semibold">Code • Build • Innovate</p>
                  </div>
                  <div className="text-sm text-black font-medium">
                    Software Development<br/>
                    Web Development<br/>
                    App Development
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
                    <p className="text-base text-black font-semibold">Design • Create • Inspire</p>
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
                    <p className="text-base text-black font-semibold">Lead • Manage • Excel</p>
                  </div>
                  <div className="text-sm text-black font-medium">
                    Business Strategy<br/>
                    Management<br/>
                    Operations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hill - Left Side (Forced to Screen Edge) */}
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
