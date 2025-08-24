 'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const HeroSection = () => {
  const [coins, setCoins] = useState(0);
  const router = useRouter();

  // Time-based registration window (live second-updated clock for timer)
  const [now, setNow] = useState<Date>(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000); // update every second for live timer
    return () => clearInterval(timer);
  }, []);

  // Local dates: active from 2025-08-29 00:00 local to 2025-08-30 23:59:59 local
  const regStart = new Date(2025, 7, 29, 0, 0, 0); // monthIndex 7 = August
  const regEnd = new Date(2025, 7, 30, 23, 59, 59);
  const isBeforeStart = now < regStart;
  const isDuring = now >= regStart && now <= regEnd;
  const isAfterEnd = now > regEnd;

  // compute remaining time for display (ms -> D:HH:MM:SS)
  const getTimeLeftString = (targetDate: Date) => {
    const diff = Math.max(0, targetDate.getTime() - now.getTime());
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  const countdownText = isBeforeStart
    ? `Opens in ${getTimeLeftString(regStart)}`
    : isDuring
      ? `Closes in ${getTimeLeftString(regEnd)}`
      : 'Registration closed';

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins(prev => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Floating Clouds */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-20 animate-float">
          <Image src="/cloud-1.png" alt="Cloud" fill className="object-contain" />
        </div>
        <div className="absolute top-40 right-20 w-28 h-18 animate-float-delayed">
          <Image src="/cloud-2.png" alt="Cloud" fill className="object-contain" />
        </div>
        <div className="absolute top-60 left-1/3 w-24 h-16 animate-float-slow">
          <Image src="/cloud-3.png" alt="Cloud" fill className="object-contain" />
        </div>
      </div>

      {/* Game UI Header */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="text-yellow-400 font-bold text-xl flex items-center">
              <span className="mr-2">🪙</span>
              <span className="tabular-nums">{coins.toString().padStart(6, '0')}</span>
            </div>
            <div className="text-green-400 font-bold text-xl flex items-center">
              <span className="mr-2">🌟</span>
              <span>LEVEL 1</span>
            </div>
          </div>
          <div className="text-white font-bold text-2xl tracking-wider">
            GCSRM <span className="text-pink-400">RECRUITMENT</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 pt-24">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-7xl md:text-9xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-pulse glitch">
              POWER UP
            </h1>
            <div className="absolute inset-0 text-7xl md:text-9xl font-black text-white opacity-10 transform translate-x-1 translate-y-1">
              POWER UP
            </div>
          </div>
          
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 game-ui-shadow">
              Your Career Journey
            </h2>
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-8 py-3 shadow-2xl">
              <span className="text-white font-bold text-xl">🎮 2025-26 Recruitment Open 🎮</span>
            </div>
          </div>
        </div>

        {/* Domain Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Technical Domain */}
          <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 shadow-2xl relative overflow-hidden border-4 border-orange-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-yellow-500"></div>
              
              {/* Mario Character */}
              <div className="absolute -top-8 left-4 w-12 h-16 z-20">
                <Image src="/char_mario_sm-idle.png" alt="Mario" fill className="object-contain" />
              </div>
              
              {/* Question Block */}
              <div className="absolute -top-8 right-4 w-10 h-10 animate-bounce">
                <Image src="/block_question.png" alt="Question Block" fill className="object-contain" />
              </div>
              
              <div className="mt-8">
                <h3 className="text-white font-bold text-3xl mb-4 flex items-center game-ui-shadow">
                  💻 TECHNICAL
                </h3>
                <div className="space-y-3 text-white text-lg">
                  <div className="flex items-center space-x-3">
                    <span>🔧</span>
                    <span>Full Stack Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>🤖</span>
                    <span>AI/ML Engineering</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>🔐</span>
                    <span>Cybersecurity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>📱</span>
                    <span>Mobile Development</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-white bg-opacity-20 rounded-lg p-4 text-center hover:bg-opacity-30 transition-all">
                  <div className="w-20 h-20 mx-auto bg-gray-800 rounded-lg mb-3 flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-bold">SCAN TO JOIN TECHNICAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Creative Domain */}
          <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 shadow-2xl relative overflow-hidden border-4 border-purple-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-pink-500"></div>
              
              {/* Mario Character */}
              <div className="absolute -top-8 left-4 w-12 h-16 z-20">
                <Image src="/char_mario_sm-jump.png" alt="Mario Jump" fill className="object-contain" />
              </div>
              
              {/* Star Power-up */}
              <div className="absolute -top-6 right-4 w-8 h-8 animate-spin">
                <Image src="/item_star.png" alt="Star" fill className="object-contain" />
              </div>
              
              <div className="mt-8">
                <h3 className="text-white font-bold text-3xl mb-4 flex items-center game-ui-shadow">
                  🎨 CREATIVE
                </h3>
                <div className="space-y-3 text-white text-lg">
                  <div className="flex items-center space-x-3">
                    <span>🎭</span>
                    <span>UI/UX Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>📸</span>
                    <span>Photography</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>🎬</span>
                    <span>Video Production</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>✍️</span>
                    <span>Content Writing</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-white bg-opacity-20 rounded-lg p-4 text-center hover:bg-opacity-30 transition-all">
                  <div className="w-20 h-20 mx-auto bg-gray-800 rounded-lg mb-3 flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0710 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-bold">SCAN TO JOIN CREATIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Domain */}
          <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 shadow-2xl relative overflow-hidden border-4 border-blue-300">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
              
              {/* Mario Character */}
              <div className="absolute -top-8 left-4 w-12 h-16 z-20">
                <Image src="/char_mario_sm-idle.png" alt="Mario" fill className="object-contain" />
              </div>
              
              {/* Mushroom Power-up */}
              <div className="absolute -top-6 right-4 w-8 h-8 animate-pulse">
                <Image src="/item_mushroom.png" alt="Mushroom" fill className="object-contain" />
              </div>
              
              <div className="mt-8">
                <h3 className="text-white font-bold text-3xl mb-4 flex items-center game-ui-shadow">
                  💼 CORPORATE
                </h3>
                <div className="space-y-3 text-white text-lg">
                  <div className="flex items-center space-x-3">
                    <span>📊</span>
                    <span>Event Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>📈</span>
                    <span>Marketing Strategy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>🤝</span>
                    <span>Public Relations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>💰</span>
                    <span>Finance & Operations</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-white bg-opacity-20 rounded-lg p-4 text-center hover:bg-opacity-30 transition-all">
                  <div className="w-20 h-20 mx-auto bg-gray-800 rounded-lg mb-3 flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0710 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-bold">SCAN TO JOIN CORPORATE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Instructions & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Game Instructions */}
          <div className="bg-black bg-opacity-40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center game-ui-shadow">
              🎮 How to Play
            </h3>
            <div className="space-y-4">
              {[
                { step: 1, text: "Choose your domain (Technical, Creative, or Corporate)", icon: "🎯" },
                { step: 2, text: "Scan the QR code to access challenges", icon: "📱" },
                { step: 3, text: "Complete domain-specific tasks", icon: "⚡" },
                { step: 4, text: "Level up and join the GCSRM team!", icon: "🏆" }
              ].map(({ step, text, icon }) => (
                <div key={step} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform shadow-lg">
                    {step}
                  </div>
                  <span className="text-white text-lg flex items-center space-x-2">
                    <span className="text-2xl">{icon}</span>
                    <span>{text}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6 flex items-center game-ui-shadow">
              ⏰ Timeline
            </h3>
            <div className="space-y-4">
              {[
                { date: "Aug 25", event: "Registration Opens", status: "active" },
                { date: "Sep 5", event: "Domain Selection Closes", status: "upcoming" },
                { date: "Sep 10", event: "Challenge Phase Begins", status: "upcoming" },
                { date: "Sep 20", event: "Final Selection", status: "upcoming" }
              ].map(({ date, event, status }) => (
                <div key={event} className={`flex items-center space-x-4 p-4 rounded-lg transition-all ${status === 'active' ? 'bg-yellow-400 text-black shadow-lg transform scale-105' : 'bg-white bg-opacity-20 hover:bg-opacity-30'}`}>
                  <div className="font-bold text-xl">{date}</div>
                  <div className="flex-1 font-semibold">{event}</div>
                  {status === 'active' && <span className="animate-pulse text-2xl">🔥</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <button
            onClick={() => { if (isDuring) router.push('/register'); }}
            disabled={!isDuring}
            aria-disabled={!isDuring}
            className={
              isDuring
                ? 'group relative inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-white bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden'
                : 'group relative inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-black bg-gray-300 rounded-full shadow-none cursor-not-allowed transition-all duration-300 opacity-95'
            }
          >
            {isDuring && <span className="absolute inset-0 bg-white opacity-20 blur-md group-hover:opacity-30 transition-opacity"></span>}
            <span className="relative flex items-center space-x-3">
              <span className="text-3xl"></span>
              <span>
                {isBeforeStart && 'Opens 29 Aug 2025'}
                {isDuring && 'Register — open until 30 Aug 2025 23:59'}
                {isAfterEnd && 'Registration closed'}
              </span>
              <span className="text-3xl"></span>
            </span>
          </button>

          <div className={`mt-6 text-xl ${isDuring ? 'text-white' : 'text-gray-700'}`}>
            <p>
              Join <span className={isDuring ? 'text-yellow-400 font-bold text-2xl' : 'text-gray-800 font-bold text-2xl'}>500+</span> students already on their journey!
            </p>
          </div>
        </div>
      </div>

      {/* Floating Game Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Floating Coins */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 animate-bounce"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg flex items-center justify-center border-2 border-yellow-600">
              <span className="text-yellow-900 font-bold text-sm">$</span>
            </div>
          </div>
        ))}

        {/* Floating Power-ups */}
        <div className="absolute top-1/4 left-10 w-10 h-10 animate-float">
          <Image src="/item_star.png" alt="Star" fill className="object-contain" />
        </div>
        <div className="absolute top-3/4 right-20 w-10 h-10 animate-float-delayed">
          <Image src="/item_mushroom.png" alt="Mushroom" fill className="object-contain" />
        </div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 animate-float-slow">
          <Image src="/block_question.png" alt="Question Block" fill className="object-contain" />
        </div>
      </div>

      {/* Bottom Game Border */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 shadow-lg"></div>
    </div>
  );
};

export default HeroSection;
