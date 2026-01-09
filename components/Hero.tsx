import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Sparkles, PlayCircle, Clock } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';

interface HeroProps {
  onRegister: () => void;
}

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center mx-2 md:mx-4">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-2 shadow-lg hover:bg-white/15 transition-colors">
      <span className="text-2xl md:text-3xl font-bold text-white font-mono">{value.toString().padStart(2, '0')}</span>
    </div>
    <span className="text-xs font-bold text-purple-200 uppercase tracking-widest">{label}</span>
  </div>
);

export const Hero: React.FC<HeroProps> = ({ onRegister }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set deadline to next Feb 17. 
    // For demo purposes, we'll set it to a fixed future date relative to now if the date is passed, 
    // or specifically Feb 17 of the current/next year.
    const now = new Date();
    let targetYear = now.getFullYear();
    if (now.getMonth() > 1 || (now.getMonth() === 1 && now.getDate() > 17)) {
      targetYear += 1;
    }
    const deadline = new Date(`February 17, ${targetYear} 00:00:00`).getTime();

    const timer = setInterval(() => {
      const current = new Date().getTime();
      const distance = deadline - current;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Dynamic Background Elements */}
      <div className="hero-pattern absolute inset-0 z-0"></div>
      
      {/* Animated Shapes */}
      <div className="absolute top-20 left-[10%] w-32 h-32 bg-amber-400 rounded-3xl rotate-12 opacity-20 blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-[10%] w-48 h-48 bg-purple-600 rounded-full opacity-30 blur-3xl animate-float-delayed"></div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-amber-300 mb-8 hover:bg-white/10 transition-all cursor-default">
          <Sparkles size={16} className="animate-pulse" />
          <span className="text-sm font-bold tracking-widest uppercase">Prize Pool: {EVENT_DETAILS.prizePool}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl">
          CODE.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-glow">CREATE.</span><br />
          CONQUER.
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-purple-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          The <span className="font-bold text-white">LogicBox Scratch Tournament</span> is back. 
          Free entry. Massive rewards. <br className="hidden md:block"/>
          <span className="text-amber-300 font-medium">Your coding journey starts here.</span>
        </p>

        {/* Countdown */}
        <div className="flex flex-wrap justify-center mb-12">
           <CountdownUnit value={timeLeft.days} label="Days" />
           <CountdownUnit value={timeLeft.hours} label="Hours" />
           <CountdownUnit value={timeLeft.minutes} label="Mins" />
           <CountdownUnit value={timeLeft.seconds} label="Secs" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
          <Button 
            onClick={onRegister} 
            size="xl" 
            className="w-full md:w-auto min-w-[250px] shadow-[0_0_40px_-10px_rgba(251,191,36,0.5)] hover:shadow-[0_0_60px_-10px_rgba(251,191,36,0.7)] text-lg md:text-2xl py-6"
          >
            Register Now
          </Button>
          <button className="flex items-center gap-3 text-white font-semibold group px-8 py-6 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
            <PlayCircle size={28} className="text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="text-lg">How it Works</span>
          </button>
        </div>

        {/* Floating Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
           {[
             { label: "Entry Fee", value: "Free" },
             { label: "Platform", value: "Scratch 3.0" },
             { label: "Internship", value: "3 Months" },
             { label: "Deadline", value: "Feb 17" }
           ].map((stat, i) => (
             <div key={i} className="glass-panel p-4 rounded-xl border-t border-white/20">
               <div className="text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</div>
               <div className="text-white text-xl md:text-2xl font-bold">{stat.value}</div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};