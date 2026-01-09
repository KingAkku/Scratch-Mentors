import React from 'react';
import { Button } from './Button';
import { EVENT_DETAILS } from '../constants';

interface HeroProps {
  onRegister: () => void;
}

// A pure CSS 3D construction of an abstract "Glass Cat" head
const GlassCat = () => {
  const size = 160; // Base size for the head
  const earSize = 60;

  return (
    <div className="scene-3d w-[300px] h-[300px] flex items-center justify-center pointer-events-none">
      <div className="cat-assembly relative w-0 h-0">
        
        {/* HEAD (Main Cube) */}
        <div className="absolute top-0 left-0" style={{ transformStyle: 'preserve-3d' }}>
          <div className="face w-[160px] h-[160px]" style={{ transform: `rotateY(0deg) translateZ(${size/2}px) translateX(-${size/2}px) translateY(-${size/2}px)` }} />
          <div className="face w-[160px] h-[160px]" style={{ transform: `rotateY(180deg) translateZ(${size/2}px) translateX(-${size/2}px) translateY(-${size/2}px)` }} />
          <div className="face w-[160px] h-[160px]" style={{ transform: `rotateY(90deg) translateZ(${size/2}px) translateX(-${size/2}px) translateY(-${size/2}px)` }} />
          <div className="face w-[160px] h-[160px]" style={{ transform: `rotateY(-90deg) translateZ(${size/2}px) translateX(-${size/2}px) translateY(-${size/2}px)` }} />
          <div className="face w-[160px] h-[160px]" style={{ transform: `rotateX(90deg) translateZ(${size/2}px) translateX(-${size/2}px) translateY(-${size/2}px)` }} />
          <div className="face w-[160px] h-[160px]" style={{ transform: `rotateX(-90deg) translateZ(${size/2}px) translateX(-${size/2}px) translateY(-${size/2}px)` }} />
        </div>

        {/* LEFT EAR (Pyramid-ish / Small Cube Rotated) */}
        <div className="absolute top-0 left-0" style={{ transformStyle: 'preserve-3d', transform: `translate3d(-60px, -110px, 0px) rotateZ(-15deg)` }}>
          <div className="face w-[60px] h-[60px]" style={{ transform: `rotateY(0deg) translateZ(${earSize/2}px)` }} />
          <div className="face w-[60px] h-[60px]" style={{ transform: `rotateY(90deg) translateZ(${earSize/2}px)` }} />
          <div className="face w-[60px] h-[60px]" style={{ transform: `rotateY(180deg) translateZ(${earSize/2}px)` }} />
          <div className="face w-[60px] h-[60px]" style={{ transform: `rotateY(-90deg) translateZ(${earSize/2}px)` }} />
          <div className="face w-[60px] h-[60px] bg-amber-400/20" style={{ transform: `rotateX(90deg) translateZ(${earSize/2}px)` }} />
        </div>

        {/* RIGHT EAR */}
        <div className="absolute top-0 left-0" style={{ transformStyle: 'preserve-3d', transform: `translate3d(60px, -110px, 0px) rotateZ(15deg)` }}>
           <div className="face w-[60px] h-[60px]" style={{ transform: `rotateY(0deg) translateZ(${earSize/2}px)` }} />
           <div className="face w-[60px] h-[60px]" style={{ transform: `rotateY(90deg) translateZ(${earSize/2}px)` }} />
           <div className="face w-[60px] h-[60px]" style={{ transform: `rotateY(180deg) translateZ(${earSize/2}px)` }} />
           <div className="face w-[60px] h-[60px]" style={{ transform: `rotateY(-90deg) translateZ(${earSize/2}px)` }} />
           <div className="face w-[60px] h-[60px] bg-amber-400/20" style={{ transform: `rotateX(90deg) translateZ(${earSize/2}px)` }} />
        </div>

        {/* Internal Glow Core */}
        <div className="absolute top-0 left-0 w-[40px] h-[40px] bg-amber-400 rounded-full blur-[40px] opacity-60 animate-pulse" style={{ transform: 'translate(-50%, -50%)' }}></div>
      </div>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-[#0f0518]">
      
      {/* 3D FLOATING LAYER - Intertwined with text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 mix-blend-overlay opacity-80 pointer-events-none scale-75 md:scale-100">
        <GlassCat />
      </div>

      {/* TYPOGRAPHY LAYER */}
      <div className="relative z-10 flex flex-col items-center leading-[0.85] text-white mix-blend-screen select-none pointer-events-none md:pointer-events-auto">
        <h1 className="font-serif text-[18vw] font-black tracking-[-0.08em] hover:text-amber-100 transition-colors duration-500">
          SCRATCH
        </h1>
        <div className="flex items-center gap-4 ml-[10vw]">
           <span className="h-[2px] w-[10vw] bg-amber-400 hidden md:block"></span>
           <h1 className="font-serif text-[18vw] font-black tracking-[-0.08em] italic text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
             CROWN
           </h1>
        </div>
      </div>

      {/* TECH SPEC SIDEBAR WIDGET */}
      <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-30">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 max-w-[280px]">
          <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
            <span className="font-mono text-[10px] text-amber-400">SYS.STATUS: ONLINE</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
          <div className="space-y-3 font-mono text-xs text-gray-300">
            <div className="flex justify-between">
              <span>PRIZE_POOL</span>
              <span className="text-white font-bold">₹{EVENT_DETAILS.prizePool}</span>
            </div>
            <div className="flex justify-between">
              <span>DEADLINE</span>
              <span className="text-white">FEB 17</span>
            </div>
            <div className="flex justify-between">
              <span>CLASS</span>
              <span className="text-white">OPEN / FREE</span>
            </div>
          </div>
          <div className="mt-4 pt-2 border-t border-white/10 text-[10px] opacity-50 uppercase tracking-wider">
            LogicBox Tournament v2.0
          </div>
        </div>
      </div>

      {/* BRUTALIST CTA BUTTON */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-30">
         <Button 
            onClick={onRegister}
            size="xl" 
            className="rounded-none border-2 border-white bg-transparent text-white hover:bg-white hover:text-black font-serif italic text-2xl px-12 py-6 transition-all duration-300 shadow-[8px_8px_0px_#fbbf24] hover:shadow-[4px_4px_0px_#fbbf24] hover:translate-x-1 hover:translate-y-1"
         >
            Join The Cult
         </Button>
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className="absolute top-0 right-0 p-8 opacity-30 hidden md:block">
        <div className="font-mono text-xs text-right space-y-1">
           <p>LAT: 40.7128° N</p>
           <p>LNG: 74.0060° W</p>
           <p>SEC: A-7</p>
        </div>
      </div>

    </section>
  );
};