import React from 'react';
import { Trophy, Briefcase, Star, Zap, Crown, Gift } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';

export const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-amber-50 skew-x-12 translate-x-20 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-purple-900 mb-6 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Spoils</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-light">
            We don't just offer cash. We offer a career launchpad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Grand Prize Card (Larger) */}
          <div className="lg:col-span-7 bg-purple-900 rounded-[2.5rem] p-8 md:p-14 text-white relative overflow-hidden group shadow-2xl hover:shadow-purple-900/40 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
              <Trophy size={300} />
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-400 text-purple-900 font-bold px-4 py-2 rounded-full text-sm mb-8">
                  <Crown size={16} /> GRAND PRIZE POOL
                </div>
                <h3 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-200">
                  {EVENT_DETAILS.prizePool}
                </h3>
                <p className="text-purple-200 text-xl font-medium mb-10 max-w-md">
                  Distributed among the top creative minds. Cash rewards, swags, and exclusive LogicBox merchandise.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-400 rounded-lg text-purple-900"><Star size={20} /></div>
                    <span className="font-bold text-lg">1st Place</span>
                  </div>
                  <p className="text-sm text-purple-200 pl-11">Max share of pool + Tech Bundle</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gray-300 rounded-lg text-gray-800"><Gift size={20} /></div>
                    <span className="font-bold text-lg">Runners Up</span>
                  </div>
                  <p className="text-sm text-purple-200 pl-11">Cash Prizes + Swag Kits</p>
                </div>
              </div>
            </div>
          </div>

          {/* Internship Card (Side) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-amber-400 to-orange-400 rounded-[2.5rem] p-8 md:p-14 text-purple-900 relative overflow-hidden group shadow-2xl hover:shadow-amber-400/40 transition-all duration-500">
            <div className="absolute -bottom-10 -right-10 text-white opacity-20 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
              <Briefcase size={200} />
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-block bg-white text-purple-900 font-bold px-4 py-2 rounded-full text-sm mb-8 shadow-sm">
                  CAREER ACCELERATOR
                </div>
                <h3 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                  3-Month Internship
                </h3>
                <p className="font-semibold text-lg opacity-90 mb-8 leading-relaxed">
                  Direct entry into <span className="font-black text-white bg-purple-900 px-2 py-0.5 rounded">LogicBox</span>. 
                  Skip the resume queue. Prove your skills and get hired.
                </p>
              </div>
              
              <div className="space-y-4">
                 <div className="flex items-center gap-3 font-bold">
                    <div className="w-8 h-8 rounded-full bg-purple-900 text-white flex items-center justify-center"><Zap size={16} /></div>
                    <span>Mentorship from Seniors</span>
                 </div>
                 <div className="flex items-center gap-3 font-bold">
                    <div className="w-8 h-8 rounded-full bg-purple-900 text-white flex items-center justify-center"><Briefcase size={16} /></div>
                    <span>Real-world Projects</span>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};