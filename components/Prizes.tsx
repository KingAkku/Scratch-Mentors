import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Briefcase, ChevronRight, Binary, Award } from 'lucide-react';

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
  
  // Cyan/Purple Cubes
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate label opacity: starts appearing at 80% progress, fully visible at 100%
  const labelOpacity = Math.max(0, (progress - 0.8) * 5);

  return (
    <section id="prizes" ref={containerRef} className="relative h-[200vh] bg-[#050014] z-20">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center perspective-container">
        
        {/* Background Gradients & Fog */}
        <div className="absolute inset-0 bg-radial-gradient from-[#7c3aed]/10 to-[#050014] z-0 pointer-events-none"></div>
        <div 
          className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-500 ease-in-out"
          style={{ 
            background: `radial-gradient(circle at 50% 50%, transparent ${progress * 30}%, #050014 100%)`,
            opacity: isAligned ? 0.3 : 1 
          }}
        ></div>

        {/* Header - Increased z-index to 30 to sit above fog, adjusted opacity fade */}
        <div 
          className="absolute top-20 md:top-10 left-0 w-full text-center z-30 transition-all duration-300 px-4"
          style={{ opacity: Math.max(0, 1 - progress * 2), transform: `translateY(${-progress * 100}px)` }}
        >
          <p className="font-mono text-cyan-400 text-xs md:text-sm mb-2">01 // REWARDS_MODULE</p>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">Payload</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-6"></div>
        </div>

        {/* 3D Anamorphic Scene - Added -translate-y-24 for mobile to prevent overlap with bottom cards */}
        <div className="relative z-10 w-full max-w-7xl h-[400px] flex items-center justify-center transform scale-[0.4] md:scale-100 origin-center -translate-y-24 md:translate-y-0" style={{ perspective: '1000px' }}>
          
          {/* New "PRIZEPOOL OF" Label */}
          <div 
             className="absolute z-30 pointer-events-none transition-transform duration-100 ease-out w-full text-center"
             style={{ 
               opacity: labelOpacity,
               transform: `translateY(${-120 + (1 - labelOpacity) * 30}px) scale(${0.8 + labelOpacity * 0.2})` 
             }}
          >
             <h3 className="font-mono text-cyan-400 text-3xl md:text-xl font-bold tracking-[0.4em] text-center uppercase drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
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

            return (
              <div
                key={idx}
                className={`absolute transition-colors duration-300 ${isAligned && item.type === 'text' ? 'text-shadow-glow' : ''}`}
                style={{
                  transform: `translate3d(${currentX}px, ${currentY}px, ${currentZ}px) rotate(${currentR}deg) scale(${item.scale || 1})`,
                  opacity: opacity,
                  zIndex: item.type === 'text' ? 20 : 10 
                }}
              >
                {item.type === 'text' ? (
                  <span className="text-9xl font-black text-white tracking-tighter select-none whitespace-nowrap">
                    {item.content}
                  </span>
                ) : (
                  <div className="w-16 h-16 bg-purple-600/20 border border-cyan-400/30 backdrop-blur-sm shadow-[0_0_20px_rgba(124,58,237,0.2)]"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Secondary Details - Increased Z-index to 40 to ensure interactivity and visibility */}
        <div 
          className={`absolute bottom-0 w-full max-w-5xl px-6 pb-24 md:pb-12 transition-all duration-700 transform z-40 ${isAligned ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            {/* Internship Card */}
            <div className="bg-white/5 border border-purple-500/30 p-6 md:p-8 backdrop-blur-md group hover:bg-[#7c3aed] hover:text-white transition-all duration-300 rounded-lg">
               <div className="flex justify-between items-start mb-4">
                 <Briefcase size={28} className="text-cyan-400 group-hover:text-white" />
                 <span className="font-mono text-[10px] md:text-xs border border-current px-2 py-1 rounded">CAREER_MODE</span>
               </div>
               <h3 className="text-xl md:text-2xl font-bold mb-2">3-Month Internship</h3>
               <p className="font-mono text-xs md:text-sm opacity-70">@ LogicBox Studio // Full Stack Dev</p>
            </div>

            {/* Runners Up Card */}
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-md group hover:bg-cyan-900/50 transition-all duration-300 rounded-lg">
               <div className="flex justify-between items-start mb-4">
                 <Award size={28} className="text-purple-400" />
                 <span className="font-mono text-[10px] md:text-xs text-purple-300">TIER_2</span>
               </div>
               <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Runners Up</h3>
               <p className="font-mono text-xs md:text-sm text-gray-400">Exclusive Swag + Mentorship Sessions</p>
            </div>

          </div>
          
          <div className="text-center mt-6 md:mt-8 animate-bounce text-purple-400/50">
            <ChevronRight className="rotate-90 mx-auto" />
          </div>
        </div>

      </div>
    </section>
  );
};