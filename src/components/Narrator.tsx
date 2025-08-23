'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface NarratorProps {
  position: 'top' | 'middle' | 'bottom';
  dialogue: string;
  onDialogueClick?: () => void;
}

const Narrator: React.FC<NarratorProps> = ({ position, dialogue, onDialogueClick }) => {
  const [showDialogue, setShowDialogue] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  // Position styles based on progression
  const getPositionStyles = () => {
    switch (position) {
      case 'top':
        return {
          container: 'absolute bottom-83 right-4 z-50', // Position to stand on pipe top
          character: 'w-20 h-24',
          dialogueBox: 'absolute -left-48 top-2 w-44'
        };
      case 'middle':
        return {
          container: 'absolute top-1/2 right-8 z-50 transform -translate-y-1/2',
          character: 'w-20 h-24',
          dialogueBox: 'absolute -left-48 top-2 w-44'
        };
      case 'bottom':
        return {
          container: 'absolute bottom-28 right-8 z-50',
          character: 'w-20 h-24',
          dialogueBox: 'absolute -left-48 -top-12 w-44'
        };
    }
  };

  const styles = getPositionStyles();

  // Typewriter effect
  useEffect(() => {
    if (showDialogue && textIndex < dialogue.length) {
      const timer = setTimeout(() => {
        setCurrentText(dialogue.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 50); // Typing speed
      return () => clearTimeout(timer);
    }
  }, [showDialogue, textIndex, dialogue]);

  // Auto-show dialogue after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialogue(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCharacterClick = () => {
    if (!showDialogue) {
      setShowDialogue(true);
      setTextIndex(0);
      setCurrentText('');
    } else if (onDialogueClick) {
      onDialogueClick();
    }
  };

  return (
    <div className={styles.container}>
      {/* Dialogue Box */}
      {showDialogue && (
        <div className={styles.dialogueBox}>
          <div className="bg-white border-4 border-black rounded-lg p-3 relative shadow-xl">
            {/* Speech bubble tail */}
            <div className="absolute right-[-12px] top-4 w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
            <div className="absolute right-[-16px] top-4 w-0 h-0 border-l-[16px] border-l-black border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
            
            <p className="text-black text-xs font-bold leading-tight" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              {currentText}
              {textIndex < dialogue.length && (
                <span className="animate-pulse">|</span>
              )}
            </p>
          </div>
        </div>
      )}

      {/* Character */}
      <div 
        className={`${styles.character} cursor-pointer hover:scale-110 transition-transform duration-200`}
        onClick={handleCharacterClick}
      >
        <Image 
          src="/quean.png" 
          alt="Queen Narrator" 
          width={80} 
          height={96} 
          className="object-contain drop-shadow-lg"
          priority
        />
      </div>

      {/* Floating animation sparkles */}
      <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
      <div className="absolute -top-1 right-2 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
    </div>
  );
};

export default Narrator;
