import React from 'react';
import { Trophy, Briefcase, ChevronRight, Binary } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';

export const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="py-24 bg-[#0f0518] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6 reveal-on-scroll">
          <div>
             <p className="font-mono text-amber-400 text-sm mb-2">01 // REWARDS_MODULE</p>
             <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
               The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-purple-500">Payload</span>
             </h2>
          </div>
          <Binary className="text-white/10 hidden md:block" size={48} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* Main Prize Block - Span 2 Cols, 2 Rows */}
          <div className="md:col-span-2 md:row-span-2 group relative bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all duration-500 overflow-hidden flex flex-col justify-between p-8 md:p-12 reveal-on-scroll">
             <div className="absolute top-0 right-0 p-4 opacity-20">
                <Trophy size={180} strokeWidth={1} />
             </div>
             
             <div className="relative z-10">
                <div className="font-mono text-xs border border-white/20 inline-block px-2 py-1 mb-6 text-white/60">
                  PRIZE_POOL_TOTAL
                </div>
                <h3 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-2">
                  {EVENT_DETAILS.prizePool}
                </h3>
                <p className="font-mono text-amber-400/80 text-sm md:text-base max-w-md">
                   > ALLOCATION: TOP_PERFORMERS<br/>
                   > DISTRIBUTION: CASH + TECH_STACK
                </p>
             </div>

             <div className="relative z-10 grid grid-cols-2 gap-4 mt-8">
               <div className="border-l-2 border-amber-400 pl-4">
                 <p className="text-2xl font-bold text-white">1st</p>
                 <p className="text-xs font-mono text-gray-400">MAX_SHARE</p>
               </div>
               <div className="border-l-2 border-gray-600 pl-4">
                 <p className="text-2xl font-bold text-gray-300">Runners Up</p>
                 <p className="text-xs font-mono text-gray-500">TIER_2_REWARDS</p>
               </div>
             </div>
             
             {/* Hover Glow Effect */}
             <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>

          {/* Internship Block */}
          <div className="bg-amber-400 text-black p-8 flex flex-col justify-center relative overflow-hidden group hover:bg-amber-300 transition-colors reveal-on-scroll" style={{transitionDelay: '100ms'}}>
             <div className="absolute -right-4 -bottom-4 opacity-10 transform -rotate-12 group-hover:scale-110 transition-transform duration-500">
               <Briefcase size={120} />
             </div>
             <div className="font-mono text-xs font-bold mb-2 uppercase border-b border-black/20 pb-2 inline-block">Career_Mode</div>
             <h3 className="text-3xl font-bold leading-none mb-2">Internship</h3>
             <p className="font-mono text-sm opacity-80">@LogicBox Studio</p>
          </div>

          {/* Secondary Info Block */}
          <div className="bg-purple-900/20 border border-purple-500/30 p-8 flex flex-col justify-between group hover:bg-purple-900/30 transition-colors reveal-on-scroll" style={{transitionDelay: '200ms'}}>
             <div className="flex justify-between items-start">
               <div className="w-10 h-10 rounded-full border border-purple-400 flex items-center justify-center">
                 <ChevronRight className="text-purple-400" />
               </div>
               <span className="font-mono text-xs text-purple-300">FEB_21</span>
             </div>
             <div>
               <p className="text-lg font-bold text-white mb-1">Grand Finale</p>
               <p className="text-xs text-gray-400 font-mono">LIVE_STREAM_EVENT</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};