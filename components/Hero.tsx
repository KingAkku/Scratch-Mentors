
import React from 'react';
import { Button } from './Button';
import { EVENT_DETAILS } from '../constants';

interface HeroProps {
  onRegister: () => void;
}

// Reusable 3D Cube Component with customizable appearance
const Cube = ({ 
  w, h, d, x, y, z, 
  children, 
  className = "",
  faceColor = "rgba(124, 58, 237, 0.1)",
  borderColor = "rgba(124, 58, 237, 0.3)"
}: { 
  w: number, h: number, d: number, x: number, y: number, z: number, 
  children?: React.ReactNode, 
  className?: string,
  faceColor?: string,
  borderColor?: string
}) => {
  
  const faceStyle = {
    background: faceColor,
    border: `1px solid ${borderColor}`,
    backdropFilter: 'blur(2px)',
    position: 'absolute' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'visible' as const,
  };

  return (
    <div className={`absolute ${className}`} style={{ 
      width: w, height: h, 
      left: '50%', top: '50%',
      marginLeft: -w/2, marginTop: -h/2,
      transformStyle: 'preserve-3d', 
      transform: `translate3d(${x}px, ${y}px, ${z}px)` 
    }}>
      {/* Front */}
      <div style={{ ...faceStyle, width: w, height: h, transform: `rotateY(0deg) translateZ(${d/2}px)` }}>
        {children}
      </div>
      {/* Back */}
      <div style={{ ...faceStyle, width: w, height: h, transform: `rotateY(180deg) translateZ(${d/2}px)` }} />
      {/* Right */}
      <div style={{ ...faceStyle, width: d, height: h, transform: `rotateY(90deg) translateZ(${w/2}px)` }} />
      {/* Left */}
      <div style={{ ...faceStyle, width: d, height: h, transform: `rotateY(-90deg) translateZ(${w/2}px)` }} />
      {/* Top */}
      <div style={{ ...faceStyle, width: w, height: d, transform: `rotateX(90deg) translateZ(${h/2}px)` }} />
      {/* Bottom */}
      <div style={{ ...faceStyle, width: w, height: d, transform: `rotateX(-90deg) translateZ(${h/2}px)` }} />
    </div>
  );
};

const GlassCat = () => {
  return (
    <div className="scene-3d w-[400px] h-[400px] flex items-center justify-center pointer-events-none">
      <div className="cat-assembly relative w-0 h-0">
        
        {/* HEAD (Base Block) */}
        <Cube w={140} h={120} d={120} x={0} y={0} z={0}>
            {/* Face details overlay on the front face */}
            <div className="w-full h-full relative">
                {/* Eyes */}
                <div className="absolute top-[35px] left-[25px] w-[24px] h-[24px] bg-purple-600 rounded-full shadow-[0_0_15px_#7c3aed] animate-pulse">
                    <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-70"></div>
                </div>
                <div className="absolute top-[35px] right-[25px] w-[24px] h-[24px] bg-purple-600 rounded-full shadow-[0_0_15px_#7c3aed] animate-pulse">
                    <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-70"></div>
                </div>
                
                {/* Blush */}
                <div className="absolute top-[65px] left-[15px] w-[20px] h-[10px] bg-pink-400/20 rounded-full blur-sm"></div>
                <div className="absolute top-[65px] right-[15px] w-[20px] h-[10px] bg-pink-400/20 rounded-full blur-sm"></div>
            </div>
        </Cube>

        {/* EARS (Smaller blocks sitting on top) */}
        {/* Left Ear - Offset to corner */}
        <Cube w={40} h={40} d={40} x={-50} y={-80} z={0} />
        {/* Right Ear */}
        <Cube w={40} h={40} d={40} x={50} y={-80} z={0} />

        {/* SNOUT (Sticking out from face) */}
        <Cube w={50} h={30} d={20} x={0} y={20} z={70} faceColor="rgba(236, 72, 153, 0.1)" borderColor="rgba(236, 72, 153, 0.3)">
             <div className="w-full h-full flex items-center justify-center relative">
                 {/* Nose */}
                 <div className="w-6 h-3 bg-pink-500 rounded-b-lg shadow-sm"></div>
                 
                 {/* Whiskers Left */}
                 <div className="absolute left-[-20px] top-1/2 w-[25px] h-[1px] bg-purple-400/60 rotate-6 origin-right"></div>
                 <div className="absolute left-[-20px] top-1/2 w-[25px] h-[1px] bg-purple-400/60 -rotate-6 origin-right mt-2"></div>
                 
                 {/* Whiskers Right */}
                 <div className="absolute right-[-20px] top-1/2 w-[25px] h-[1px] bg-purple-400/60 -rotate-6 origin-left"></div>
                 <div className="absolute right-[-20px] top-1/2 w-[25px] h-[1px] bg-purple-400/60 rotate-6 origin-left mt-2"></div>
             </div>
        </Cube>
        
        {/* Inner Core Glow */}
        <div className="absolute top-0 left-0 w-[80px] h-[80px] bg-purple-500 rounded-full blur-[60px] opacity-40 animate-pulse" style={{ transform: 'translate(-50%, -50%)' }}></div>
      </div>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center py-24 md:py-0 bg-transparent">
      
      {/* 3D FLOATING LAYER */}
      <div className="absolute top-[35%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-100 pointer-events-none scale-[0.65] md:scale-100 transition-all duration-500">
        <GlassCat />
      </div>

      {/* TYPOGRAPHY LAYER */}
      <div className="relative z-10 flex flex-col items-center leading-[0.85] text-black select-none pointer-events-none md:pointer-events-auto mt-12 md:mt-0">
        <h1 className="font-serif text-[18vw] md:text-[16vw] font-black tracking-[-0.08em] text-gray-800 mix-blend-multiply">
          SCRATCH
        </h1>
        <div className="flex items-center gap-2 md:gap-4 ml-[5vw] md:ml-[10vw]">
           <span className="h-[2px] md:h-[4px] w-[15vw] md:w-[10vw] bg-purple-600 block shadow-[0_0_10px_rgba(124,58,237,0.5)]"></span>
           <h1 className="font-serif text-[18vw] md:text-[16vw] font-black tracking-[-0.08em] italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 pr-4 md:pr-8 drop-shadow-sm">
             CROWN
           </h1>
        </div>
      </div>

      {/* SPONSORSHIP & ORGANIZATION STRIP */}
      <div className="relative z-20 mt-24 md:mt-12 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex flex-col items-center">
             <p className="font-mono text-sm md:text-[10px] font-bold md:font-normal text-gray-400 uppercase tracking-widest mb-4 md:mb-2">Powered By</p>
             <img src="lt.svg" alt="Lenient Tree" className="h-16 md:h-8 w-auto object-contain" />
          </div>
          
          <div className="h-16 md:h-8 w-px bg-gray-200 hidden md:block"></div>

          <div className="flex flex-col items-center">
             <p className="font-mono text-sm md:text-[10px] font-bold md:font-normal text-gray-400 uppercase tracking-widest mb-4 md:mb-2">Sponsored By</p>
             <div className="flex items-center gap-4 md:gap-2">
               <img src="lg.svg" alt="LogicBox Logo" className="h-14 md:h-8 w-auto object-contain" />
               <span className="font-bold text-4xl md:text-xl text-gray-800">LogicBox</span>
             </div>
          </div>
      </div>


      {/* MOBILE: STACKED LAYOUT BOTTOM */}
      <div className="w-full flex flex-col gap-6 items-center px-4 relative z-30 md:hidden mt-16">
          {/* Mobile Widget */}
          <div className="bg-white/80 border border-gray-200 backdrop-blur-md p-4 w-full max-w-[320px] rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-2 border-b border-gray-100 pb-2">
              <span className="font-mono text-[10px] text-purple-600 font-bold">Status: Open</span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <div className="space-y-2 font-mono text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Prize Pool</span>
                <span className="font-bold text-black">₹{EVENT_DETAILS.prizePool}</span>
              </div>
              <div className="flex justify-between">
                <span>Deadline</span>
                <span>FEB 17</span>
              </div>
               <div className="flex justify-between">
                <span>Format</span>
                <span>Mentor + 5</span>
              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <Button 
            onClick={onRegister}
            size="lg" 
            className="w-full max-w-[320px] rounded-lg border-2 border-purple-600 bg-purple-600 text-white font-serif italic text-xl shadow-[4px_4px_0px_#000000]"
         >
            Register Now
         </Button>
      </div>

      {/* DESKTOP: CORNER WIDGETS */}
      
      {/* Tech Spec Sidebar Widget (Desktop Only) */}
      <div className="hidden md:block absolute bottom-12 left-12 z-30">
        <div className="bg-white/90 border border-gray-200 backdrop-blur-md p-6 max-w-[280px] shadow-xl rounded-sm">
          <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
            <span className="font-mono text-[10px] text-purple-600 font-bold">Status: Open</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
          <div className="space-y-3 font-mono text-xs text-gray-600">
            <div className="flex justify-between">
              <span>Prize Pool</span>
              <span className="font-bold text-black">₹{EVENT_DETAILS.prizePool}</span>
            </div>
            <div className="flex justify-between">
              <span>Deadline</span>
              <span>FEB 17</span>
            </div>
            <div className="flex justify-between">
              <span>Type</span>
              <span>Mentorship</span>
            </div>
             <div className="flex justify-between text-purple-700">
              <span>Team</span>
              <span>1 Mentor + 5 Disciples</span>
            </div>
          </div>
          <div className="mt-4 pt-2 border-t border-gray-100 text-[10px] text-gray-400 uppercase tracking-wider">
            Lenient Tree Event
          </div>
        </div>
      </div>

      {/* Vibrant CTA Button (Desktop Only) - Color Inverted - Using native button to force style override */}
      <div className="hidden md:block absolute bottom-12 right-12 z-30">
         <button 
            onClick={onRegister}
            className="rounded-none border-2 border-black bg-black text-white hover:bg-white hover:text-black font-serif italic text-2xl px-12 py-6 transition-all duration-300 shadow-[8px_8px_0px_#7c3aed] hover:shadow-[4px_4px_0px_#000000] hover:translate-x-1 hover:translate-y-1 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-purple-500 cursor-none"
         >
            Register Now
         </button>
      </div>

    </section>
  );
};
