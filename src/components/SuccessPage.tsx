'use client';

import React from 'react';
import Image from 'next/image';

interface SuccessPageProps {
  playerName: string;
  domain: string;
  onClose: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ playerName, domain, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-2xl border-4 border-black shadow-2xl p-8 max-w-md w-full text-center">
        
        {/* Success Animation */}
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto mb-4 animate-bounce">
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-full border-4 border-black flex items-center justify-center shadow-lg">
              <span className="text-white text-4xl">🎉</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-black mb-2" style={{ fontFamily: 'Arial Black, sans-serif' }}>
            WELCOME TO GCSRM!
          </h2>
          
          <p className="text-xl text-black font-bold">
            {playerName}
          </p>
        </div>

        {/* Domain Badge */}
        <div className="mb-6">
          <div className={`inline-block px-6 py-3 rounded-full border-4 border-black font-bold text-black ${
            domain === 'Technical' ? 'bg-gradient-to-r from-orange-400 to-red-500' :
            domain === 'Creative' ? 'bg-gradient-to-r from-purple-400 to-pink-500' :
            'bg-gradient-to-r from-blue-400 to-cyan-500'
          }`}>
            {domain === 'Technical' && '💻 TECHNICAL WARRIOR'}
            {domain === 'Creative' && '🎨 CREATIVE MASTER'}
            {domain === 'Corporate' && '💼 CORPORATE LEADER'}
          </div>
        </div>

        {/* Game Stats */}
        <div className="bg-black bg-opacity-20 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-3 gap-4 text-black font-bold">
            <div>
              <div className="text-2xl">🪙</div>
              <div className="text-sm">100 COINS</div>
            </div>
            <div>
              <div className="text-2xl">⭐</div>
              <div className="text-sm">LEVEL 1</div>
            </div>
            <div>
              <div className="text-2xl">🏆</div>
              <div className="text-sm">ROOKIE</div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-6 text-black">
          <p className="font-bold mb-2">🚀 WHAT&apos;S NEXT?</p>
          <ul className="text-sm space-y-1">
            <li>📧 Check your email for next steps</li>
            <li>📱 Join our WhatsApp group</li>
            <li>🗓️ Mark your calendar for orientation</li>
          </ul>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black font-bold py-3 px-6 rounded-lg border-4 border-black shadow-lg transform hover:scale-105 transition-all duration-200"
          style={{ fontFamily: 'Arial Black, sans-serif' }}
        >
          🎮 CONTINUE ADVENTURE 🎮
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
