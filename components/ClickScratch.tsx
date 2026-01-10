
import React, { useState, useEffect, useCallback } from 'react';

interface Scratch {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

export const ClickScratch: React.FC = () => {
  const [scratches, setScratches] = useState<Scratch[]>([]);

  const addScratch = useCallback((e: MouseEvent) => {
    // Only add effect for primary clicks
    const id = Date.now() + Math.random();
    // Random rotation between -20 and 20 degrees for variety
    const rotation = (Math.random() - 0.5) * 40;
    
    setScratches(prev => [...prev, { id, x: e.pageX, y: e.pageY, rotation }]);

    // Remove the scratch after animation completes
    setTimeout(() => {
      setScratches(prev => prev.filter(s => s.id !== id));
    }, 600); // Matches CSS animation duration
  }, []);

  useEffect(() => {
    window.addEventListener('mousedown', addScratch);
    return () => window.removeEventListener('mousedown', addScratch);
  }, [addScratch]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" style={{ width: '100vw', height: '100vh' }}>
      {scratches.map(scratch => (
        <div
          key={scratch.id}
          className="scratch-container absolute"
          style={{
            left: scratch.x,
            top: scratch.y,
            // We use a container transform for the rotation so it doesn't conflict with the fade animation
            '--tw-rotate': `${scratch.rotation}deg`,
            transform: `translate(-50%, -50%) rotate(${scratch.rotation}deg)`
          } as React.CSSProperties}
        >
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 
               Three claw marks with brand colors:
               1. Purple
               2. Pink
               3. Yellow
            */}
            <path 
              d="M20 10 C 25 30, 15 70, 30 90" 
              stroke="#7c3aed" 
              strokeWidth="6" 
              strokeLinecap="round" 
              className="scratch-path"
              style={{ animationDelay: '0ms' }}
            />
            <path 
              d="M50 5 C 55 35, 45 75, 60 95" 
              stroke="#ec4899" 
              strokeWidth="6" 
              strokeLinecap="round" 
              className="scratch-path"
              style={{ animationDelay: '50ms' }}
            />
            <path 
              d="M80 15 C 85 40, 75 70, 90 85" 
              stroke="#eab308" 
              strokeWidth="6" 
              strokeLinecap="round" 
              className="scratch-path"
              style={{ animationDelay: '100ms' }}
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
