import React from 'react';
import { Button } from './Button';
import { Sparkles, PlayCircle } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';

interface HeroProps {
  onRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with abstract shapes */}
      <div className="hero-pattern absolute inset-0 z-0 opacity-80"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-amber-400 rounded-2xl rotate-12 opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-30 blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 mb-8 animate-[fadeIn_0.5s_ease-out]">
          <Sparkles size={16} />
          <span className="text-sm font-bold tracking-wider uppercase">Submission Deadline: {EVENT_DETAILS.submissionDate}</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight mb-8 drop-shadow-lg">
          CODE. CREATE. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">CONQUER.</span>
        </h1>

        <p className="text-lg md:text-2xl text-purple-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          The ultimate <strong className="text-white">Scratch Tournament</strong> is here. 
          Compete for <strong className="text-amber-300">{EVENT_DETAILS.prizePool}</strong> in prizes and secure your future with a LogicBox internship.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Button onClick={onRegister} size="xl" className="w-full md:w-auto shadow-amber-500/20">
            Register for Free
          </Button>
          <button className="flex items-center gap-3 text-white font-semibold group px-6 py-4 rounded-full hover:bg-white/5 transition-all">
            <PlayCircle size={24} className="text-amber-400 group-hover:scale-110 transition-transform" />
            <span>Watch Teaser</span>
          </button>
        </div>

        {/* Stats / Quick Info */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {[
            { label: "Entry Fee", value: "Free" },
            { label: "Prize Pool", value: EVENT_DETAILS.prizePool },
            { label: "Platform", value: "Scratch" },
            { label: "Winners", value: "Feb 21" }
          ].map((stat, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-xl text-center">
              <p className="text-purple-200 text-sm uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};