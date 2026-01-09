import React, { useEffect, useRef, useMemo } from 'react';
import { TIMELINE } from '../constants';

// PERFORMANCE OPTIMIZATION: 
// Reduced grid from 50 blocks (10x5) to 18 blocks (6x3).
// This maintains the visual effect while drastically reducing DOM nodes and composite layers.
const GRID_COLS = 6;
const GRID_ROWS = 3;
const TOTAL_BLOCKS = GRID_COLS * GRID_ROWS;

// Physics generator - increased range slightly since blocks are larger now
const getRandomPhysics = () => ({
  x: (Math.random() - 0.5) * 350, 
  y: (Math.random() - 0.5) * 350, 
  r: (Math.random() - 0.5) * 180, 
  d: Math.random() * 0.1,         
});

// Memoized Card Component to prevent unnecessary re-renders during scroll
const ShatterCard = React.memo(({ item, index }: { item: any, index: number }) => {
  // useMemo ensures physics values remain stable across renders
  const blocks = useMemo(() => Array.from({ length: TOTAL_BLOCKS }).map(() => getRandomPhysics()), []);

  return (
    <div className="group relative w-full max-w-lg mx-auto perspective-1000 cursor-none min-h-[180px]">
      
      {/* 
         LAYER 1: THE CORE (Revealed on Hover) 
         Optimized shadows and simplified transitions
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-purple-900/40 border border-cyan-400/50 shadow-lg rounded-sm flex flex-col justify-center p-6 z-0 transform scale-[0.98] transition-transform duration-300 group-hover:scale-100 group-hover:shadow-cyan-400/20">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">Decrypted</div>
        </div>
      </div>

      {/* 
         LAYER 2: THE CONTENT
      */}
      <div className="relative z-20 p-8 h-full flex flex-col justify-center pointer-events-none">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-cyan-400 bg-cyan-950/50 px-2 py-1 border border-cyan-400/20 rounded">
            SEQ_{index + 1}
          </span>
          <span className="font-mono text-sm text-purple-300 font-bold group-hover:text-cyan-300 transition-colors">
            {item.date}
          </span>
        </div>
        <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter group-hover:text-cyan-50 transition-colors drop-shadow-md">
          {item.title}
        </h3>
        <p className="font-mono text-xs md:text-sm text-gray-400 group-hover:text-cyan-100/80 transition-colors leading-relaxed border-l-2 border-transparent group-hover:border-cyan-400 pl-0 group-hover:pl-4 duration-300">
          {item.desc}
        </p>
      </div>

      {/* 
         LAYER 3: THE SHATTER GRID (The Cover)
         Reduced density: grid-cols-6 grid-rows-3 (18 divs total)
      */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 z-10 overflow-visible pointer-events-none">
        {blocks.map((physics, i) => (
          <div
            key={i}
            className="w-full h-full bg-[#1e0b36] border-[0.5px] border-white/5 relative transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] will-change-transform"
            style={{
              '--tx': `${physics.x}px`,
              '--ty': `${physics.y}px`,
              '--r': `${physics.r}deg`,
              '--d': `${physics.d}s`
            } as React.CSSProperties}
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          </div>
        ))}
      </div>
    </div>
  );
});

export const Timeline: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Optimized observer logic
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: Stop observing once visible to save resources
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.timeline-reveal');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section id="schedule" className="pt-24 pb-8 bg-[#0a0314] relative overflow-hidden">
      
      {/* Optimized CSS for Transform Animations */}
      <style>{`
        .group:hover .grid div {
          transform: translate3d(var(--tx), var(--ty), 0px) rotate(var(--r)) scale(0.8);
          opacity: 0;
        }
        /* Restore transition when not hovering */
        .grid div {
          transition-delay: var(--d);
        }
      `}</style>

      {/* Background Tech Lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24 timeline-reveal reveal-on-scroll">
          <span className="inline-block py-1 px-3 border border-cyan-500/30 rounded-full bg-cyan-900/10 text-cyan-400 font-mono text-xs mb-4 tracking-widest">
            SYSTEM_LOG // V.2.0
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Execution <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">Plan</span>
          </h2>
        </div>

        <div className="relative">
          {TIMELINE.map((item, index) => (
            <div 
              key={index}
              className={`timeline-reveal reveal-on-scroll flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-24 last:mb-0 ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              
              {/* DATE NODE (Center Axis) */}
              <div className="hidden md:flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 w-12 h-12 z-30">
                <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] z-20"></div>
                <div className="absolute w-12 h-12 border border-purple-500/30 rounded-full animate-ping opacity-20"></div>
              </div>

              {/* CARD SIDE */}
              <div className="w-full md:w-1/2 px-4">
                 <ShatterCard item={item} index={index} />
              </div>

              {/* EMPTY SIDE (Balance) */}
              <div className="hidden md:block w-1/2"></div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};