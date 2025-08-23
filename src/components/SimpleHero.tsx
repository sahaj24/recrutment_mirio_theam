'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Narrator from './Narrator';

const HeroSection = () => {
  const [showFallingBoss, setShowFallingBoss] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const domainsSection = document.getElementById('domains-section');
      if (domainsSection) {
        const rect = domainsSection.getBoundingClientRect();
        // Trigger animation when domain section comes into view
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setShowFallingBoss(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="hero-section" className="h-screen relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#33a1fd' }}>
      
      {/* Custom CSS for character animations */}
      <style jsx>{`
        @keyframes marioWalk {
          0% { transform: translateX(0) scaleX(1); }
          45% { transform: translateX(calc(75vw - 200px)) scaleX(1); }
          50% { transform: translateX(calc(75vw - 200px)) scaleX(-1); }
          95% { transform: translateX(0) scaleX(-1); }
          100% { transform: translateX(0) scaleX(1); }
        }
        
        @keyframes bowserWalk {
          0% { transform: translateX(0) scaleX(1); }
          45% { transform: translateX(calc(-75vw + 200px)) scaleX(1); }
          50% { transform: translateX(calc(-75vw + 200px)) scaleX(-1); }
          95% { transform: translateX(0) scaleX(-1); }
          100% { transform: translateX(0) scaleX(1); }
        }
        
        .mario-animate {
          animation: marioWalk 10s ease-in-out infinite;
        }
        
        .bowser-animate {
          animation: bowserWalk 10s ease-in-out infinite;
        }
        
        @keyframes fallingBoss {
          0% { 
            transform: translateY(0) rotate(0deg) scaleY(-1);
            opacity: 1;
          }
          50% { 
            transform: translateY(50vh) rotate(180deg) scaleY(-1);
            opacity: 1;
          }
          100% { 
            transform: translateY(100vh) rotate(360deg) scaleY(1);
            opacity: 0;
          }
        }
        
        .falling-boss {
          animation: fallingBoss 2s ease-in forwards;
        }
      `}</style>
      
      {/* Floating Clouds */}
      <div className="absolute top-16 left-16 w-48 h-32 opacity-90 animate-float">
        <Image src="/cloud-1.png" alt="Cloud" fill className="object-contain" />
      </div>
      <div className="absolute top-24 right-20 w-52 h-36 opacity-90 animate-float-delayed">
        <Image src="/cloud-2.png" alt="Cloud" fill className="object-contain" />
      </div>

      {/* Main Content */}
      <div className="text-center z-20 px-4 -mt-32">
        
        {/* Main RECRUITMENTS OPEN Image */}
        <div className="mb-8">
          <Image 
            src="/Recruitments Open.png"
            alt="RECRUITMENTS OPEN" 
            width={800}
            height={200}
            className="mx-auto drop-shadow-2xl"
            priority
          />
        </div>

        {/* GitHub Mario Style Image - Clickable to scroll to domains */}
        <button 
          onClick={() => {
            const domainsSection = document.getElementById('domains-section');
            domainsSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="block mb-8 mx-auto"
        >
          <Image 
            src="/github.png"
            alt="GITHUB - Click to choose domain" 
            width={400}
            height={100}
            className="mx-auto drop-shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </button>

        {/* Direct Registration Button */}
        <button 
          onClick={() => {
            const registrationSection = document.getElementById('registration-section');
            registrationSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 rounded-full shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden mb-12"
        >
          <span className="absolute inset-0 bg-white opacity-20 blur-md group-hover:opacity-30 transition-opacity"></span>
          <span className="relative flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <span>REGISTER NOW</span>
            <span className="text-2xl">🚀</span>
          </span>
        </button>
      </div>

      {/* Palm Tree - Left Side (Forced to Screen Edge) */}
      <div className="absolute bottom-16 w-64 h-130 z-10" style={{ left: '-60px' }}>
        <Image src="/tree_palm.png" alt="Palm Tree" fill className="object-contain" />
      </div>

      {/* Mario Pipe - Right Side */}
      <div className="absolute bottom-16 right-0 w-28 h-40 z-10">
        <Image src="/pipe_basic.png" alt="Pipe" width={203} height={305} className="object-contain h-full w-auto" />
      </div>

      {/* Pipe Top - Right Side */}
      <div className="absolute bottom-56 right-0 w-32 h-16 z-20">
        <Image src="/pipe_top.png" alt="Pipe Top" width={232} height={116} className="object-contain h-full w-auto" />
      </div>

      {/* Question Blocks - Left and Right, closer together */}
      <div className="absolute left-20 w-16 h-16 z-20" style={{ bottom: '300px' }}>
        <Image src="/block_question.png" alt="Question Block" fill className="object-contain hover:scale-110 transition-transform cursor-pointer" />
      </div>
      <div className="absolute w-16 h-16 z-20" style={{ bottom: '300px', right: '288px' }}>
        <Image src="/block_question-2.png" alt="Question Block" fill className="object-contain hover:scale-110 transition-transform cursor-pointer" />
      </div>

      {/* Mario vs Bowser Facing Each Other on Brick Ground with Animations */}
      <div className="absolute bottom-16 left-1/3 w-20 h-24 z-30 mario-animate">
        <Image src="/char_mario_sm-idle.png" alt="Mario" fill className="object-contain" />
      </div>
      
      {/* Spike on Brick Ground */}
      <div className="absolute bottom-16 left-1/2 w-12 h-16 z-25 transform -translate-x-1/2">
        <Image src="/spike.png" alt="Spike" fill className="object-contain" />
      </div>
      
      <div className="absolute bottom-16 right-1/3 w-24 h-28 z-30 bowser-animate">
        <Image src="/boss.png" alt="Bowser" fill className="object-contain" />
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

      {/* Falling Boss Animation */}
      {showFallingBoss && (
        <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 w-16 h-20 z-50 falling-boss">
          <Image src="/small_boss.png" alt="Falling Boss" fill className="object-contain" />
        </div>
      )}

      {/* Narrator - Top position on pipe */}
      <Narrator 
        position="top" 
        dialogue="Listen up, noob! 👑 Think you got what it takes to join GCSRM? Prove it! This ain't a playground - only legends survive here!"
        upDialogue="Back already? 😏 Can't handle the heat? This is just the beginning, weakling! 🔥"
        hoverDialogues={[
          "What you want, peasant? 😤 I'm busy ruling this kingdom! Speak fast or GET LOST! 👑💀",
          "STILL bothering me? 🙄 You're more annoying than a glitched NPC! Either register or SCRAM! ⚡👑"
        ]}
      />
    </div>
  );
};

export default HeroSection;
