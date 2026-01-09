import React from 'react';
import { Linkedin, Github, Code2 } from 'lucide-react';

const JUDGES = [
  {
    id: 1,
    name: "Dr. Sarah Pentest",
    role: "Lead Logic Architect",
    company: "LogicBox",
    tags: ["Algorithms", "Optimization"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Marcus 'Null' Chen",
    role: "Creative Director",
    company: "PixelForge",
    tags: ["Game Design", "UX/UI"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Elena Void",
    role: "Scratch Educator",
    company: "CodeAcademy",
    tags: ["Education", "Creativity"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
  }
];

const JudgeCard = ({ judge }: { judge: typeof JUDGES[0] }) => {
  return (
    <div className="group relative w-full max-w-sm mx-auto">
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
          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{judge.name}</h3>
          <p className="text-purple-400 font-mono text-sm">{judge.role}</p>
          <p className="text-gray-500 text-xs mt-1">@ {judge.company}</p>
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
        <div className="mt-auto pt-4 border-t border-white/5 flex justify-center gap-4 text-gray-400">
           <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
           <a href="#" className="hover:text-white transition-colors"><Github size={18} /></a>
           <a href="#" className="hover:text-white transition-colors"><Code2 size={18} /></a>
        </div>

      </div>
    </div>
  );
};

export const Judges: React.FC = () => {
  return (
    <section className="py-24 bg-[#050014] relative">
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
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-300">Arbiters</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {JUDGES.map((judge, idx) => (
             <div key={judge.id} className="reveal-on-scroll" style={{ transitionDelay: `${idx * 150}ms` }}>
               <JudgeCard judge={judge} />
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};