
import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      // Direct DOM update for performance (bypasses React render cycle)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      
      // Update CSS variables for background mask (optimized to requestAnimationFrame could be better, but this is lighter without the state update)
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        className="fixed inset-0 pointer-events-none z-0 circuit-pattern opacity-60"
        aria-hidden="true"
      />
      <div 
        ref={cursorRef}
        className={`custom-cursor hidden md:block ${isHovering ? 'w-[60px] h-[60px] bg-purple-500/20 border-2 border-purple-500' : 'w-[20px] h-[20px] bg-purple-600'}`}
        style={{ 
          // Initial position off-screen or top-left
          left: 0, 
          top: 0,
          willChange: 'transform, width, height'
        }} 
      />
    </>
  );
};
