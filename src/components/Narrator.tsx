'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface NarratorProps {
  position: 'top' | 'middle' | 'bottom';
  dialogue: string;
  upDialogue?: string; // New prop for upward scroll dialogue
  downDialogue?: string; // New prop for downward scroll dialogue
  hoverDialogues?: string[]; // Array of hover dialogues
  onDialogueClick?: () => void;
}

const Narrator: React.FC<NarratorProps> = ({ position, dialogue, upDialogue, downDialogue, hoverDialogues, onDialogueClick }) => {
  const [showDialogue, setShowDialogue] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentDialogue, setCurrentDialogue] = useState(dialogue);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);
  const [hasBeenHovered, setHasBeenHovered] = useState(false);
  const narratorRef = useRef<HTMLDivElement>(null);

  // Position styles based on progression with responsive sizing
  const getPositionStyles = () => {
    switch (position) {
      case 'top':
        return {
          container: 'absolute bottom-36 sm:bottom-42 md:bottom-48 lg:bottom-56 right-4 sm:right-6 md:right-8 z-50', // Position to stand on pipe top
          character: 'w-14 h-18 sm:w-16 sm:h-25 md:w-19 md:h-25',
          dialogueBox: 'absolute -left-36 sm:-left-40 md:-left-48 top-2 w-32 sm:w-38 md:w-44'
        };
      case 'middle':
        return {
          container: 'absolute top-1/2 right-4 sm:right-6 md:right-8 z-50 transform -translate-y-1/2',
          character: 'w-14 h-18 sm:w-16 sm:h-20 md:w-18 md:h-22',
          dialogueBox: 'absolute -left-36 sm:-left-40 md:-left-48 top-2 w-32 sm:w-38 md:w-44'
        };
      case 'bottom':
        return {
          container: 'absolute bottom-20 sm:bottom-24 md:bottom-28 right-4 sm:right-6 md:right-8 z-50',
          character: 'w-14 h-18 sm:w-16 sm:h-20 md:w-18 md:h-22',
          dialogueBox: 'absolute -left-36 sm:-left-40 md:-left-48 -top-12 w-32 sm:w-38 md:w-44'
        };
    }
  };

  const styles = getPositionStyles();

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Update dialogue based on scroll direction and hover
  useEffect(() => {
    // Priority order: current hover > scroll direction > persistent hover > default
    if (isHovered && hoverDialogues && hoverDialogues.length > 0) {
      // Currently hovering - show hover dialogue
      setCurrentDialogue(hoverDialogues[hoverIndex]);
    } else if (scrollDirection === 'up' && upDialogue) {
      // Scrolling up - show up dialogue (this overrides persistent hover)
      setCurrentDialogue(upDialogue);
    } else if (hasBeenHovered && hoverDialogues && hoverDialogues.length > 0) {
      // Has been hovered before but not currently hovering or scrolling up - show hover dialogue
      setCurrentDialogue(hoverDialogues[hoverIndex]);
    } else {
      // Default dialogue for down scroll or no special conditions
      setCurrentDialogue(dialogue);
    }
  }, [scrollDirection, dialogue, upDialogue, isHovered, hasBeenHovered, hoverIndex, hoverDialogues]);

  // Intersection Observer to detect when narrator comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the narrator is visible
        rootMargin: '0px 0px -100px 0px' // Start a bit before it's fully visible
      }
    );

    if (narratorRef.current) {
      observer.observe(narratorRef.current);
    }

    return () => {
      if (narratorRef.current) {
        observer.unobserve(narratorRef.current);
      }
    };
  }, []);

  // Start dialogue when narrator becomes visible
  useEffect(() => {
    if (isVisible && !showDialogue) {
      const timer = setTimeout(() => {
        setShowDialogue(true);
      }, 500); // Small delay after becoming visible
      return () => clearTimeout(timer);
    }
  }, [isVisible, showDialogue]);

  // Reset dialogue when currentDialogue changes
  useEffect(() => {
    if (isVisible && showDialogue) {
      setShowDialogue(false);
      setTextIndex(0);
      setCurrentText('');
      
      // Start new dialogue after a brief pause
      const timer = setTimeout(() => {
        setShowDialogue(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentDialogue, isVisible]);

  // Typewriter effect
  useEffect(() => {
    if (showDialogue && textIndex < currentDialogue.length) {
      const timer = setTimeout(() => {
        setCurrentText(currentDialogue.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 50); // Typing speed
      return () => clearTimeout(timer);
    }
  }, [showDialogue, textIndex, currentDialogue]);

  const handleCharacterClick = () => {
    if (!showDialogue && isVisible) {
      setShowDialogue(true);
      setTextIndex(0);
      setCurrentText('');
    } else if (showDialogue && onDialogueClick) {
      onDialogueClick();
    }
  };

  const handleMouseEnter = () => {
    if (hoverDialogues && hoverDialogues.length > 0) {
      setIsHovered(true);
      setHasBeenHovered(true); // Mark as hovered once
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Don't reset hasBeenHovered - keep it true forever after first hover
  };

  const handleHoverClick = () => {
    if (hoverDialogues && hoverDialogues.length > 0) {
      // Cycle through hover dialogues
      setHoverIndex((prev) => (prev + 1) % hoverDialogues.length);
    }
  };

  return (
    <div ref={narratorRef} className={styles.container}>
      {/* Dialogue Box */}
      {showDialogue && (
        <div className={styles.dialogueBox}>
          <div className="bg-white border-2 sm:border-3 md:border-4 border-black rounded-lg p-2 sm:p-3 relative shadow-xl">
            {/* Speech bubble tail */}
            <div className="absolute right-[-8px] sm:right-[-10px] md:right-[-12px] top-4 w-0 h-0 border-l-[8px] sm:border-l-[10px] md:border-l-[12px] border-l-white border-t-[6px] sm:border-t-[7px] md:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[7px] md:border-b-[8px] border-b-transparent"></div>
            <div className="absolute right-[-12px] sm:right-[-14px] md:right-[-16px] top-4 w-0 h-0 border-l-[12px] sm:border-l-[14px] md:border-l-[16px] border-l-black border-t-[8px] sm:border-t-[9px] md:border-t-[10px] border-t-transparent border-b-[8px] sm:border-b-[9px] md:border-b-[10px] border-b-transparent"></div>
            
            <p className="text-black text-[10px] sm:text-xs font-bold leading-tight" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              {currentText}
              {textIndex < currentDialogue.length && (
                <span className="animate-pulse">|</span>
              )}
            </p>
          </div>
        </div>
      )}

      {/* Character */}
      <div 
        className={`${styles.character} cursor-pointer hover:scale-110 transition-transform duration-200`}
        onClick={(isHovered || hasBeenHovered) ? handleHoverClick : handleCharacterClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image 
          src="/quean.png" 
          alt="Queen Narrator" 
          width={80} 
          height={96} 
          className="object-contain drop-shadow-lg w-full h-full"
          priority
        />
      </div>

      {/* Floating animation sparkles */}
      <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-2 sm:w-3 h-2 sm:h-3 bg-yellow-400 rounded-full animate-ping"></div>
      <div className="absolute -top-1 right-1 sm:right-2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-pink-400 rounded-full animate-pulse"></div>
    </div>
  );
};

export default Narrator;
