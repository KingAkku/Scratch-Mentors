
import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, ChevronRight, Award } from 'lucide-react';

// Colors simulating the bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500
const CHAR_SHADOWS = [
  'rgba(147, 51, 234, 0.8)', // ₹ (Purple-600)
  'rgba(192, 38, 211, 0.8)', // 3 (Purple/Pink)
  'rgba(236, 72, 153, 0.8)', // 0 (Pink-500)
  'rgba(244, 63, 94, 0.8)',  // , (Pink/Red)
  'rgba(251, 146, 60, 0.8)', // 0 (Orange)
  'rgba(250, 204, 21, 0.8)', // 0 (Yellow-400)
  'rgba(234, 179, 8, 0.8)'   // 0 (Yellow-500)
];

// Data for the 3D fragments.
const FRAGMENTS = [
  // Text Characters: "₹ 3 0 , 0 0 0"
  { type: 'text', content: '₹', startX: -500, startY: -200, startZ: 400, r: -45, targetX: -320, targetY: 0, targetZ: 0 },
  { type: 'text', content: '3', startX: -300, startY: 300, startZ: -200, r: 30, targetX: -190, targetY: 0, targetZ: 0 },
  { type: 'text', content: '0', startX: -100, startY: -400, startZ: 200, r: -60, targetX: -90, targetY: 0, targetZ: 0 },
  { type: 'text', content: ',', startX: 100, startY: 200, startZ: -300, r: 90, targetX: -20, targetY: 15, targetZ: 0 }, 
  { type: 'text', content: '0', startX: 200, startY: -300, startZ: 100, r: -30, targetX: 50, targetY: 0, targetZ: 0 },
  { type: 'text', content: '0', startX: 400, startY: 300, startZ: 300, r: 45, targetX: 150, targetY: 0, targetZ: 0 },
  { type: 'text', content: '0', startX: 600, startY: -100, startZ: -400, r: -90, targetX: 250, targetY: 0, targetZ: 0 },
  
  // Yellow/Amber Cubes
  { type: 'cube', startX: -600, startY: 100, startZ: 50, r: 120, scale: 1.5, targetX: -450, targetY: -100, targetZ: -200 },
  { type: 'cube', startX: 600, startY: -100, startZ: 150, r: -120, scale: 0.8, targetX: 450, targetY: 100, targetZ: -300 },
  { type: 'cube', startX: -400, startY: -300, startZ: -100, r: 60, scale: 1.2, targetX: -350, targetY: 200, targetZ: -150 },
  { type: 'cube', startX: 400, startY: 300, startZ: 200, r: -45, scale: 0.6, targetX: 350, targetY: -200, targetZ: -100 },
  { type: 'cube', startX: 0, startY: 500, startZ: -200, r: 180, scale: 1.0, targetX: 0, targetY: -250, targetZ: -400 },
];

export const Prizes: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isAligned, setIsAligned] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollDist = -top;
      const totalScrollable = height - windowHeight;
      
      let newProgress = scrollDist / totalScrollable;
      newProgress = Math.max(0, Math.min(1, newProgress));

      requestAnimationFrame(() => {
        setProgress(newProgress);
        setIsAligned(newProgress > 0.9);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const labelOpacity = Math.max(0, (progress - 0.8) * 5);

  return (
    <section id="prizes" ref={containerRef} className="relative h-[200vh] bg-white z-20 text-black">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center perspective-container">
        
        {/* Background Gradients & Fog */}
        <div className="absolute inset-0 bg-radial-gradient from-yellow-50/50 to-white z-0 pointer-events-none"></div>
        <div 
          className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-500 ease-in-out"
          style={{ 
            background: `radial-gradient(circle at 50% 50%, transparent ${progress * 30}%, white 100%)`,
            opacity: isAligned ? 0.8 : 1 
          }}
        ></div>

        {/* Header */}
        <div 
          className="absolute top-20 md:top-10 left-0 w-full text-center z-30 transition-all duration-300 px-4"
          style={{ opacity: Math.max(0, 1 - progress * 2), transform: `translateY(${-progress * 100}px)` }}
        >
          <p className="font-mono text-purple-600 text-xs md:text-sm mb-2">01 // Prizes</p>
          <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500">Rewards</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-6"></div>
        </div>

        {/* 3D Anamorphic Scene */}
        <div className="relative z-10 w-full max-w-7xl h-[400px] flex items-center justify-center transform scale-[0.4] md:scale-100 origin-center -translate-y-24 md:translate-y-0" style={{ perspective: '1000px' }}>
          
          <div 
             className="absolute z-30 pointer-events-none transition-transform duration-100 ease-out w-full text-center"
             style={{ 
               opacity: labelOpacity,
               transform: `translateY(${-120 + (1 - labelOpacity) * 30}px) scale(${0.8 + labelOpacity * 0.2})` 
             }}
          >
             <h3 className="font-mono text-yellow-600 text-3xl md:text-xl font-bold tracking-[0.4em] text-center uppercase">
               PRIZEPOOL OF
             </h3>
          </div>

          {FRAGMENTS.map((item, idx) => {
            const ease = 1 - Math.pow(1 - progress, 3);
            
            const currentX = item.startX + (item.targetX - item.startX) * ease;
            const currentY = item.startY + (item.targetY - item.startY) * ease;
            const currentZ = item.startZ + (item.targetZ - item.startZ) * ease;
            const currentR = item.r * (1 - ease); 
            const opacity = Math.min(1, progress * 3 + 0.1); 

            // Calculate gradient shadow specifically for text items based on index
            const shadowColor = item.type === 'text' ? CHAR_SHADOWS[idx] : '';
            const textShadowStyle = isAligned && item.type === 'text' 
              ? `0 0 20px ${shadowColor}, 0 0 50px ${shadowColor}` 
              : 'none';

            return (
              <div
                key={idx}
                className={`absolute transition-all duration-500`}
                style={{
                  transform: `translate3d(${currentX}px, ${currentY}px, ${currentZ}px) rotate(${currentR}deg) scale(${item.scale || 1})`,
                  opacity: opacity,
                  zIndex: item.type === 'text' ? 20 : 10,
                  textShadow: textShadowStyle,
                  willChange: 'transform, opacity' // Optimization hint
                }}
              >
                {item.type === 'text' ? (
                  <span className="text-9xl font-black text-black tracking-tighter select-none whitespace-nowrap">
                    {item.content}
                  </span>
                ) : (
                  // Updated cube color to Yellow/Amber
                  <div className="w-16 h-16 bg-yellow-100 border border-yellow-300 backdrop-blur-sm shadow-md"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Secondary Details */}
        <div 
          className={`absolute bottom-0 w-full max-w-5xl px-6 pb-24 md:pb-12 transition-all duration-700 transform z-40 ${isAligned ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            {/* Internship Card */}
            <div className="bg-white border border-gray-200 p-6 md:p-8 backdrop-blur-md group hover:shadow-xl hover:border-purple-200 transition-all duration-300 rounded-lg shadow-sm">
               <div className="flex justify-between items-start mb-4">
                 <Briefcase size={28} className="text-purple-600" />
                 <span className="font-mono text-[10px] md:text-xs border border-purple-200 text-purple-700 px-2 py-1 rounded">Internship</span>
               </div>
               <h3 className="text-xl md:text-2xl font-bold mb-2 text-black">3-Month Internship</h3>
               <p className="font-mono text-xs md:text-sm text-gray-600">@ LogicBox Studio // Full Stack Dev</p>
            </div>

            {/* Runners Up Card */}
            <div className="bg-white border border-gray-200 p-6 md:p-8 backdrop-blur-md group hover:shadow-xl hover:border-blue-200 transition-all duration-300 rounded-lg shadow-sm">
               <div className="flex justify-between items-start mb-4">
                 <Award size={28} className="text-blue-500" />
                 <span className="font-mono text-[10px] md:text-xs text-blue-600">Runners Up</span>
               </div>
               <h3 className="text-xl md:text-2xl font-bold mb-2 text-black">Runners Up</h3>
               <p className="font-mono text-xs md:text-sm text-gray-600">Exclusive Swag + Mentorship Sessions</p>
            </div>

          </div>
          
          <div className="text-center mt-6 md:mt-8 animate-bounce text-purple-600">
            <ChevronRight className="rotate-90 mx-auto" />
          </div>
        </div>

      </div>
    </section>
  );
};
