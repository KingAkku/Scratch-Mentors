import React, { useEffect, useRef } from 'react';
import { Linkedin, ExternalLink } from 'lucide-react';

const JUDGES = [
  {
    id: 1,
    name: "Dr. Nithin G",
    role: "CEO",
    company: "Logicbox Innovation Pvt Ltd",
    tags: ["Leadership", "Innovation"],
    image: "Nithin.jpeg",
    linkedin: "https://www.linkedin.com/in/nithin-g?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    id: 2,
    name: "Mr. Ajay Basil Varghese",
    role: "Serial Entrepreneur",
    company: "Startup Coach",
    tags: ["Entrepreneurship", "Strategy"],
    image: "Ajay.jpeg",
    linkedin: "https://www.linkedin.com/in/ajay-basil-varghese-042301158?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    id: 3,
    name: "Dr. Ganesh Malayath",
    role: "Post Doctoral Researcher",
    company: "Washington University",
    tags: ["Research", "Academia"],
    image: "Ganesh.jpeg",
    linkedin: "https://www.linkedin.com/in/ganesh-malayath-phd-8a456541?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
];

const JudgeCard = ({ judge }: { judge: typeof JUDGES[0] }) => {
  return (
    <div className="group relative w-full max-w-sm mx-auto h-full">
      {/* Background Glow (Hover only) */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl opacity-0 group-hover:opacity-75 blur transition duration-500"></div>
      
      {/* Main Card Container */}
      <div className="relative h-full bg-[#0a0314] border border-white/10 rounded-xl overflow-hidden flex flex-col p-6 transition-transform duration-300 group-hover:-translate-y-2">
        
        {/* Scanner Effect Line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_15px_#22d3ee] transform -translate-y-full group-hover:translate-y-[400px] transition-transform duration-1000 ease-linear z-20 opacity-50"></div>

        {/* Header: Tech Decoration */}
        <div className="flex justify-between items-center mb-6 opacity-50 font-mono text-[10px] tracking-widest text-cyan-400">
           <span>ID: 00{judge.id}</span>
           <div className="flex gap-1">
             <div className="w-1 h-1 bg-current rounded-full"></div>
             <div className="w-1 h-1 bg-current rounded-full"></div>
             <div className="w-1 h-1 bg-current rounded-full"></div>
           </div>
        </div>

        {/* Avatar Section */}
        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full p-1 border-2 border-dashed border-purple-500/30 group-hover:border-cyan-400 transition-colors duration-300">
           <img 
             src={judge.image} 
             alt={judge.name}
             className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 bg-[#1a1033]"
           />
           {/* Rotating ring element */}
           <div className="absolute inset-0 border-r-2 border-transparent border-t-2 border-cyan-400 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Info Section */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors leading-tight">{judge.name}</h3>
          <p className="text-purple-400 font-mono text-xs uppercase tracking-wider mb-1 font-bold">{judge.role}</p>
          <p className="text-gray-500 text-xs px-2">{judge.company}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
           {judge.tags.map(tag => (
             <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-gray-300 font-mono uppercase">
               {tag}
             </span>
           ))}
        </div>

        {/* Footer / Social Placeholder */}
        <div className="mt-auto pt-4 border-t border-white/5 flex justify-center text-gray-400">
           <a 
             href={judge.linkedin} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="group/link flex items-center gap-2 px-4 py-2 hover:bg-white/5 rounded-full transition-all hover:text-cyan-400"
           >
             <Linkedin size={16} />
             <span className="text-xs font-mono font-bold tracking-wider">CONNECT</span>
             <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
           </a>
        </div>

      </div>
    </div>
  );
};

export const Judges: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#050014] relative border-t border-white/5">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="font-mono text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3 block">
            System Authority
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">Arbiters</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
           {JUDGES.map((judge, idx) => (
             <div key={judge.id} className="reveal-on-scroll h-full" style={{ transitionDelay: `${idx * 150}ms` }}>
               <JudgeCard judge={judge} />
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};