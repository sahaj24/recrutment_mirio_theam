'use client';

import React from 'react';
import Narrator from './Narrator';

const DomainPage = () => {
  return (
    <div id="domains-section" className="h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,_rgba(255,255,255,0.2)_0%,_transparent_50%)] animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute top-16 right-16 w-12 h-12 bg-yellow-300/30 rotate-45 backdrop-blur-sm animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-32 left-16 w-8 h-8 bg-pink-300/40 rounded-full backdrop-blur-sm animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      <div className="absolute top-32 left-1/2 w-6 h-6 bg-green-300/30 backdrop-blur-sm animate-spin" style={{ animationDuration: '8s' }}></div>
      
      {/* CSS Cloud Shapes */}
      <div className="absolute top-8 left-1/4 opacity-60">
        <div className="relative">
          <div className="w-16 h-16 bg-white/40 rounded-full backdrop-blur-sm animate-float"></div>
          <div className="absolute -top-4 left-4 w-12 h-12 bg-white/30 rounded-full backdrop-blur-sm"></div>
          <div className="absolute -top-2 -left-2 w-8 h-8 bg-white/50 rounded-full backdrop-blur-sm"></div>
        </div>
      </div>
      <div className="absolute top-12 right-1/4 opacity-50">
        <div className="relative">
          <div className="w-20 h-20 bg-white/30 rounded-full backdrop-blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -top-6 left-6 w-16 h-16 bg-white/25 rounded-full backdrop-blur-sm"></div>
          <div className="absolute -top-3 -left-3 w-10 h-10 bg-white/40 rounded-full backdrop-blur-sm"></div>
        </div>
      </div>

      {/* Narrator - Middle position - Hidden on mobile */}
      <div className="hidden md:block">
        <Narrator 
          position="middle" 
          dialogue="So you made it this far? 😏 Now choose your weapon, rookie! Technical nerds, Creative freaks, or Corporate sharks? Pick wrong and you're DONE! 💥⚡"
          upDialogue="Running away from the challenge? 🙄 I knew you didn't have the guts! Go cry to mommy!"
          downDialogue="Finally ready for the real test? Time to prove you're not just talk! Choose wisely or GET WRECKED! ⚡"
        />
      </div>

      {/* Main Content */}
      <div className="text-center z-20 px-4 -mt-20">
        
        {/* Animated Title */}
        <div className="mb-12 relative">
          <h1 className="text-6xl font-black text-white mb-2 transform hover:scale-110 transition-transform duration-300 cursor-default">
            <span className="inline-block animate-pulse bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
              CHOOSE
            </span>
          </h1>
          <h2 className="text-5xl font-black text-white transform hover:scale-110 transition-transform duration-300 cursor-default">
            <span className="inline-block animate-pulse bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl" style={{ animationDelay: '0.5s' }}>
              YOUR PATH
            </span>
          </h2>
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-300/20 via-transparent to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        </div>

        {/* Domain Cards Container */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          
          {/* Technical Card */}
          <div 
            className="relative group cursor-pointer transform hover:scale-110 hover:rotate-2 transition-all duration-500 hover:z-10"
            onClick={() => {
              const registrationSection = document.getElementById('registration-section');
              sessionStorage.setItem('selectedDomain', 'Technical');
              registrationSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="w-72 h-80 relative perspective-1000">
              {/* Card with 3D effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl transform group-hover:rotateY-12 transition-transform duration-500 shadow-2xl group-hover:shadow-cyan-500/50">
                <div className="absolute inset-1 bg-gradient-to-br from-cyan-300/90 via-blue-400/90 to-purple-500/90 rounded-2xl backdrop-blur-sm">
                  {/* Animated particles */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-6 right-6 w-1 h-1 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-8 left-6 w-1 h-1 bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  
                  <div className="p-6 text-center h-full flex flex-col justify-between relative z-10">
                    <div>
                      {/* CSS Icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg transform rotate-45 animate-spin-slow"></div>
                          <div className="absolute top-2 left-2 w-12 h-12 bg-white/20 rounded-lg"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">&lt;/&gt;</div>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-3xl font-black text-white mb-2 tracking-wider drop-shadow-lg">
                        TECHNICAL
                      </h3>
                      <p className="text-lg text-white/90 font-semibold mb-4">
                        💻 Code • Debug • Build 🚀
                      </p>
                    </div>
                    <div className="text-white/80 font-medium space-y-1">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span>Web Development</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></span>
                        <span>App Development</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></span>
                        <span>Programming</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Creative Card */}
          <div 
            className="relative group cursor-pointer transform hover:scale-110 hover:-rotate-2 transition-all duration-500 hover:z-10"
            onClick={() => {
              const registrationSection = document.getElementById('registration-section');
              sessionStorage.setItem('selectedDomain', 'Creative');
              registrationSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="w-72 h-80 relative perspective-1000">
              {/* Card with 3D effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-orange-500 rounded-2xl transform group-hover:rotateY-12 transition-transform duration-500 shadow-2xl group-hover:shadow-pink-500/50">
                <div className="absolute inset-1 bg-gradient-to-br from-pink-300/90 via-purple-400/90 to-orange-400/90 rounded-2xl backdrop-blur-sm">
                  {/* Animated particles */}
                  <div className="absolute top-6 left-8 w-3 h-3 bg-yellow-300 rounded-full animate-bounce"></div>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
                  <div className="absolute bottom-6 right-8 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  
                  <div className="p-6 text-center h-full flex flex-col justify-between relative z-10">
                    <div>
                      {/* CSS Icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full animate-pulse"></div>
                          <div className="absolute top-2 left-2 w-4 h-4 bg-white/30 rounded-full"></div>
                          <div className="absolute top-4 right-2 w-3 h-3 bg-white/30 rounded-full"></div>
                          <div className="absolute bottom-2 left-4 w-2 h-2 bg-white/30 rounded-full"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">🎨</div>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-3xl font-black text-white mb-2 tracking-wider drop-shadow-lg">
                        CREATIVE
                      </h3>
                      <p className="text-lg text-white/90 font-semibold mb-4">
                        🎨 Design • Create • Inspire ✨
                      </p>
                    </div>
                    <div className="text-white/80 font-medium space-y-1">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                        <span>Graphic Design</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></span>
                        <span>UI/UX Design</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></span>
                        <span>Content Creation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Card */}
          <div 
            className="relative group cursor-pointer transform hover:scale-110 hover:rotate-1 transition-all duration-500 hover:z-10"
            onClick={() => {
              const registrationSection = document.getElementById('registration-section');
              sessionStorage.setItem('selectedDomain', 'Corporate');
              registrationSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="w-72 h-80 relative perspective-1000">
              {/* Card with 3D effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-red-500 to-purple-600 rounded-2xl transform group-hover:rotateY-12 transition-transform duration-500 shadow-2xl group-hover:shadow-amber-500/50">
                <div className="absolute inset-1 bg-gradient-to-br from-amber-300/90 via-red-400/90 to-purple-500/90 rounded-2xl backdrop-blur-sm">
                  {/* Animated particles */}
                  <div className="absolute top-4 left-6 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute top-8 right-4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: '1.8s' }}></div>
                  
                  <div className="p-6 text-center h-full flex flex-col justify-between relative z-10">
                    <div>
                      {/* CSS Icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-red-500 transform rotate-12 animate-pulse"></div>
                          <div className="absolute top-1 left-1 w-14 h-14 border-2 border-white/30"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">💼</div>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-3xl font-black text-white mb-2 tracking-wider drop-shadow-lg">
                        CORPORATE
                      </h3>
                      <p className="text-lg text-white/90 font-semibold mb-4">
                        💼 Lead • Manage • Excel 📈
                      </p>
                    </div>
                    <div className="text-white/80 font-medium space-y-1">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                        <span>Event Management</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></span>
                        <span>Business Strategy</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></span>
                        <span>Leadership</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Instructions */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 border-4 border-white rounded-2xl px-8 py-6 mx-auto max-w-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="flex justify-center items-center space-x-2 mb-2">
                <span className="text-3xl animate-bounce">🎯</span>
                <h3 className="text-black font-black text-2xl tracking-wider">CHOOSE YOUR QUEST!</h3>
                <span className="text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>🎯</span>
              </div>
              <p className="text-black font-bold text-lg">
                Click on any domain card to begin your registration adventure!
              </p>
              <div className="flex justify-center space-x-1 mt-3">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Brick Ground Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-20 z-5 overflow-hidden">
        <div className="absolute bottom-0 w-full h-full">
          {/* First row of bricks */}
          <div className="absolute bottom-0 flex w-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`brick-1-${i}`}
                className="w-16 h-10 bg-gradient-to-b from-amber-600 to-amber-800 border border-amber-900 flex-shrink-0"
                style={{ 
                  boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.3)',
                  animation: `brickGlow 3s ease-in-out infinite ${i * 0.1}s`
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
              </div>
            ))}
          </div>
          {/* Second row of bricks (offset) */}
          <div className="absolute bottom-10 flex w-full" style={{ left: '-2rem' }}>
            {Array.from({ length: 21 }).map((_, i) => (
              <div
                key={`brick-2-${i}`}
                className="w-16 h-10 bg-gradient-to-b from-amber-700 to-amber-900 border border-amber-900 flex-shrink-0"
                style={{ 
                  boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.2), inset 0 -2px 0 rgba(0,0,0,0.4)',
                  animation: `brickGlow 3s ease-in-out infinite ${i * 0.1 + 1.5}s`
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        
        @keyframes brickGlow {
          0%, 100% { background: linear-gradient(to bottom, #d97706, #92400e); }
          50% { background: linear-gradient(to bottom, #f59e0b, #b45309); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotateY-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </div>
  );
};

export default DomainPage;
