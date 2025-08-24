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
  const [currentDialogue, setCurrentDialogue] = useState(dialogue);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);
  const [hasBeenHovered, setHasBeenHovered] = useState(false);
  const narratorRef = useRef<HTMLDivElement>(null);
  const lastScrollRef = useRef<number>(0);
  const hasBeenVisibleRef = useRef<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [computedStyle, setComputedStyle] = useState<React.CSSProperties | null>(null);

  // Position styles based on progression with responsive sizing
  const getPositionStyles = () => {
    switch (position) {
      case 'top':
        // Anchor the narrator to sit visually on top of the right-side pipe top.
        // We'll align to `bottom-56 right-0` and apply a precise pixel translate via inline style
        // to center the character over the pipe graphic.
        return {
          container: 'absolute bottom-56 right-0 z-50 flex items-end justify-end',
          // nudge the character up slightly so it appears to sit on the pipe
          character: 'w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-18 -mb-4',
          // place dialogue to the left and slightly above the character
          dialogueBox: 'absolute right-full mr-4 bottom-12 w-32 sm:w-38 md:w-44'
        };
      case 'middle':
        return {
          container: 'absolute top-1/2 right-4 sm:right-6 md:right-8 z-50 transform -translate-y-1/2',
          character: 'w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-18',
          dialogueBox: 'absolute -left-36 sm:-left-40 md:-left-48 top-2 w-32 sm:w-38 md:w-44'
        };
      case 'bottom':
        return {
          // anchor to the section floor: make the container span the section bottom and align character to the right
          container: 'absolute inset-x-0 bottom-0 flex justify-end pr-4 sm:pr-6 md:pr-8 z-50',
          character: 'w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-18 self-end',
          // dialogue box sits slightly above the character when at bottom
          dialogueBox: 'absolute -left-36 sm:-left-40 md:-left-48 mb-20 w-32 sm:w-38 md:w-44'
        };
    }
  };

  const styles = getPositionStyles();

  // Mount, resize and scroll handling (use refs to avoid frequent re-subscribes)
  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      setIsSmallScreen(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const current = window.scrollY || 0;
      setScrollDirection(current > lastScrollRef.current ? 'down' : 'up');
      lastScrollRef.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Compute precise pixel position when position === 'top' by locating the pipe-top image inside the hero.
  useEffect(() => {
    if (!isMounted || isSmallScreen) return;
    if (position !== 'top') return;

    const compute = () => {
      try {
        const hero = document.getElementById('hero-section');
        // Prefer selecting by alt attribute (stable) and fallback to src matching if needed
        let pipeImg = document.querySelector('img[alt="Pipe Top"]') as HTMLImageElement | null;
        if (!pipeImg) pipeImg = document.querySelector('img[src*="pipe_top.png"]') as HTMLImageElement | null;

        if (!hero || !pipeImg || !narratorRef.current) {
          setComputedStyle(null);
          return;
        }

        const heroRect = hero.getBoundingClientRect();
        const pipeRect = pipeImg.getBoundingClientRect();
        const narratorRect = narratorRef.current.getBoundingClientRect();

        // Fallback dimensions if narrator hasn't been measured yet
        const narratorWidth = narratorRect.width || 80;
        const narratorHeight = narratorRect.height || 96;

        // Calculate left/top relative to hero container
  const left = pipeRect.left - heroRect.left + pipeRect.width / 2 - narratorWidth / 2;
  const verticalNudge = -24; // user requested more up
  const top = pipeRect.top - heroRect.top - narratorHeight + 6 + verticalNudge; // upward nudge applied

        // Debug output to help tune placement (remove after alignment is confirmed)
        console.debug('Narrator placement compute', {
          pipeSrc: pipeImg.src,
          heroRect: {
            top: Math.round(heroRect.top), left: Math.round(heroRect.left), width: Math.round(heroRect.width), height: Math.round(heroRect.height)
          },
          pipeRect: {
            top: Math.round(pipeRect.top), left: Math.round(pipeRect.left), width: Math.round(pipeRect.width), height: Math.round(pipeRect.height)
          },
          narratorRect: {
            top: Math.round(narratorRect.top), left: Math.round(narratorRect.left), width: Math.round(narratorRect.width), height: Math.round(narratorRect.height)
          },
          computed: { left: Math.round(left), top: Math.round(top) }
        });

        setComputedStyle({ position: 'absolute', left: `${Math.round(left)}px`, top: `${Math.round(top)}px`, right: 'auto', bottom: 'auto', transform: 'none' });
      } catch (e) {
        // fallback: clear computed style
        setComputedStyle(null);
      }
    };

    // compute once and on resize
    compute();
    window.addEventListener('resize', compute);
    // also recompute after a short delay in case images load after mount
    const t = setTimeout(compute, 300);

    // If the pipe image exists but is still loading, recompute once it fires load
    const pipeImgLoad = document.querySelector('img[alt="Pipe Top"]') as HTMLImageElement | null || document.querySelector('img[src*="pipe_top.png"]') as HTMLImageElement | null;
    let loadHandler: (() => void) | null = null;
    if (pipeImgLoad && !pipeImgLoad.complete) {
      loadHandler = () => compute();
      pipeImgLoad.addEventListener('load', loadHandler);
    }

    return () => {
      window.removeEventListener('resize', compute);
      if (loadHandler && pipeImgLoad) pipeImgLoad.removeEventListener('load', loadHandler);
      clearTimeout(t);
    };
  }, [isMounted, isSmallScreen, position]);

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
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) hasBeenVisibleRef.current = true;
      },
      {
        // fire when a small portion is visible
        threshold: 0.05,
        rootMargin: '0px'
      }
    );

    if (narratorRef.current) observer.observe(narratorRef.current);

    // Fallback: compute visibility using bounding rect on scroll/resize in case observer misses
    let ticking = false;
    const checkVisibility = () => {
      if (!narratorRef.current) return;
      const rect = narratorRef.current.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      setIsVisible(visible);
      if (visible) hasBeenVisibleRef.current = true;
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    // run initial check
    checkVisibility();

    return () => {
      if (narratorRef.current) observer.unobserve(narratorRef.current);
      observer.disconnect();
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  // Start/stop dialogue when narrator becomes visible
  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setShowDialogue(true), 300);
      return () => clearTimeout(t);
    }

    // when not visible, hide dialogue and reset typing
    setShowDialogue(false);
    setTextIndex(0);
    setCurrentText('');
  }, [isVisible]);

  // Reset dialogue when currentDialogue changes
  // When the dialogue text changes, restart the typing animation if visible
  useEffect(() => {
    if (isVisible) {
      setShowDialogue(false);
      setTextIndex(0);
      setCurrentText('');
      const t = setTimeout(() => setShowDialogue(true), 200);
      return () => clearTimeout(t);
    }
  }, [currentDialogue, isVisible]);

  // Typewriter effect
  useEffect(() => {
    if (showDialogue && textIndex < currentDialogue.length) {
      const timer = setTimeout(() => {
        setCurrentText(currentDialogue.substring(0, textIndex + 1));
        setTextIndex((prev) => prev + 1);
      }, 45); // Typing speed
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

  // Don't render on very small screens or before mount to avoid overlap issues
  if (!isMounted || isSmallScreen) return null;

  // Precise inline offset for the 'top' position so the character sits centered on the pipe graphic.
  const containerStyle: React.CSSProperties = position === 'top' ? { transform: 'translateX(-42px)' } : {};
  const mergedStyle = { ...containerStyle, ...(computedStyle || {}) };

  return (
    <div ref={narratorRef} className={styles.container} style={mergedStyle} data-narrator-debug>
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
