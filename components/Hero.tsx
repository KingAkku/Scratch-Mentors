import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Terminal, Code, Cpu } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';

interface HeroProps {
  onRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Massive Background Text */}
      <div className="mega-text">LOGIC</div>

      {/* 3D Glass Cube Layer */}
      <div className="cube-scene mb-12 relative z-10 animate-float">
        <div className="cube">
          <div className="cube-face face-front"><Code size={60} /></div>
          <div className="cube-face face-back"><Terminal size={60} /></div>
          <div className="cube-face face-right"><Cpu size={60} /></div>
          <div className="cube-face face-left">{'{}'}</div>
          <div className="cube-face face-top">
            <div className="w-12 h-12 rounded-full border-4 border-amber-400"></div>
          </div>
          <div className="cube-face face-bottom">
            <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Terminal Style Copy */}
      <div className="relative z-20 text-center max-w-4xl px-4">
        
        <div className="inline-block bg-black/40 backdrop-blur-md border border-amber-400/30 rounded-lg p-6 mb-8 transform hover:scale-105 transition-transform duration-300">
          <p className="font-mono text-amber-400 text-sm md:text-base tracking-wider mb-2">
            <span className="animate-pulse">▶</span> SYSTEM_STATUS: [COMPILING_CREATIVITY]
          </p>
          <div className="font-mono text-purple-200 text-xs md:text-sm space-y-1 opacity-80">
            <p>&gt; INPUT: YOUR_BRAIN</p>
            <p>&gt; TARGET: SCRATCH_V3.0</p>
            <p>&gt; OUTPUT: <span className="text-white font-bold bg-amber-500/20 px-1">₹{EVENT_DETAILS.prizePool} + INTERNSHIP</span></p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4">
          <Button 
            onClick={onRegister} 
            size="xl" 
            className="w-full md:w-auto font-mono uppercase tracking-widest border border-amber-400 bg-amber-400/10 text-amber-400 hover:bg-amber-400 hover:text-black shadow-[0_0_30px_rgba(251,191,36,0.2)] rounded-none"
          >
            [ Initiate_Sequence ]
          </Button>
        </div>

      </div>
      
      {/* Tech Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-amber-400 to-transparent"></div>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-amber-400">Scroll_To_Decrypt</span>
      </div>

    </section>
  );
};