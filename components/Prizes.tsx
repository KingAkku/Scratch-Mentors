import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Briefcase, ChevronRight, Binary, Award } from 'lucide-react';

// Data for the 3D fragments (Text and Amber Blocks)
// We pre-calculate random starting positions for the "explosion" effect
const FRAGMENTS = [
  { type: 'text', content: '₹', x: -400, y: -300, z: 200, r: -45, delay: 0 },
  { type: 'text', content: '3', x: -200, y: 300, z: -100, r: 30, delay: 0.1 },
  { type: 'text', content: '0', x: 0, y: -400, z: 300, r: -60, delay: 0.2 },
  { type: 'text', content: ',', x: 100, y: 200, z: -200, r: 90, delay: 0.3 },
  { type: 'text', content: '0', x: 200, y: -200, z: 100, r: -30, delay: 0.4 },
  { type: 'text', content: '0', x: 300, y: 300, z: 400, r: 45, delay: 0.5 },
  { type: 'text', content: '0', x: 400, y: -100, z: -300, r: -90, delay: 0.6 },
  // Amber Cubes
  { type: 'cube', x: -500, y: 100, z: 50, r: 120, scale: 1.5 },
  { type: 'cube', x: 500, y: -100, z: 150, r: -120, scale: 0.8 },
  { type: 'cube', x: -300, y: -200, z: -100, r: 60, scale: 1.2 },
  { type: 'cube', x: 300, y: 200, z: 200, r: -45, scale: 0.6 },
  { type: 'cube', x: 0, y: 400, z: -200, r: 180, scale: 1.0 },
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
      
      // Calculate how far we've scrolled into the section (0 to 1)
      // We want the animation to finish when the user is about halfway through
      const scrollDist = -top;
      const totalScrollable = height - windowHeight;
      
      let newProgress = scrollDist / (totalScrollable * 0.8); // 0.8 speeds it up slightly
      newProgress = Math.max(0, Math.min(1, newProgress));

      requestAnimationFrame(() => {
        setProgress(newProgress);
        setIsAligned(newProgress > 0.85);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // height-[300vh] creates the scroll track
    <section id="prizes" ref={containerRef} className="relative h-[300vh] bg-[#0f0518] z-20">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center perspective-container">
        
        {/* Background Gradients & Fog */}
        <div className="absolute inset-0 bg-radial-gradient from-[#2e1065]/20 to-[#0f0518] z-0 pointer-events-none"></div>
        <div 
          className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-700 ease-in-out"
          style={{ 
            background: `radial-gradient(circle at 50% 50%, transparent ${progress * 40}%, #0f0518 100%)`,
            opacity: isAligned ? 0.4 : 1 
          }}
        ></div>

        {/* Header (Fades out as we scroll deep) */}
        <div 
          className="absolute top-10 left-0 w-full text-center z-10 transition-all duration-500"
          style={{ opacity: Math.max(0, 1 - progress * 2), transform: `translateY(${-progress * 100}px)` }}
        >
          <p className="font-mono text-amber-400 text-sm mb-2">01 // REWARDS_MODULE</p>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            The Payload
          </h2>
          <div className="mt-4 flex justify-center text-white/20">
             <Binary size={24} />
          </div>
        </div>

        {/* 3D Anamorphic Scene */}
        <div className="relative z-10 w-full max-w-7xl h-[400px] flex items-center justify-center" style={{ perspective: '1000px' }}>
          {FRAGMENTS.map((item, idx) => {
            // Calculate current transform based on progress
            // progress 0 = chaotic position
            // progress 1 = position (0,0,0) -> snapped
            
            // We use an easing curve for smoother snap (cubic-bezierish)
            const ease = 1 - Math.pow(1 - progress, 3);
            
            const currentX = item.x * (1 - ease);
            const currentY = item.y * (1 - ease);
            const currentZ = (item.z || 0) * (1 - ease);
            const currentR = (item.r || 0) * (1 - ease);
            const opacity = Math.min(1, progress * 2 + 0.2); // Fade in as we align

            return (
              <div
                key={idx}
                className={`absolute transition-colors duration-300 ${isAligned ? 'text-shadow-glow' : ''}`}
                style={{
                  transform: `translate3d(${currentX}px, ${currentY}px, ${currentZ}px) rotate(${currentR}deg) scale(${item.scale || 1})`,
                  opacity: opacity,
                }}
              >
                {item.type === 'text' ? (
                  <span className="text-7xl md:text-9xl font-black text-white tracking-tighter">
                    {item.content}
                  </span>
                ) : (
                  <div className="w-12 h-12 bg-amber-400/80 border border-amber-200 backdrop-blur-sm shadow-[0_0_15px_rgba(251,191,36,0.5)]"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Secondary Details (Revealed upon alignment) */}
        <div 
          className={`absolute bottom-0 w-full max-w-5xl px-4 pb-12 transition-all duration-1000 transform ${isAligned ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Internship Card */}
            <div className="bg-white/5 border border-amber-400/30 p-8 backdrop-blur-md group hover:bg-amber-400 hover:text-black transition-all duration-300">
               <div className="flex justify-between items-start mb-4">
                 <Briefcase size={32} className="text-amber-400 group-hover:text-black" />
                 <span className="font-mono text-xs border border-current px-2 py-1 rounded">CAREER_MODE</span>
               </div>
               <h3 className="text-2xl font-bold mb-2">3-Month Internship</h3>
               <p className="font-mono text-sm opacity-70">@ LogicBox Studio // Full Stack Dev</p>
            </div>

            {/* Runners Up Card */}
            <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-md group hover:bg-purple-900/50 transition-all duration-300">
               <div className="flex justify-between items-start mb-4">
                 <Award size={32} className="text-purple-400" />
                 <span className="font-mono text-xs text-purple-300">TIER_2</span>
               </div>
               <h3 className="text-2xl font-bold mb-2 text-white">Runners Up</h3>
               <p className="font-mono text-sm text-gray-400">Exclusive Swag + Mentorship Sessions</p>
            </div>

          </div>
          
          <div className="text-center mt-8 animate-bounce text-amber-400/50">
            <ChevronRight className="rotate-90 mx-auto" />
          </div>
        </div>

      </div>
    </section>
  );
};