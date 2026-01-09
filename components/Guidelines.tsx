import React from 'react';
import { Check, ShieldCheck, UserPlus, Code2, AlertTriangle } from 'lucide-react';

export const Guidelines: React.FC = () => {
  const rules = [
    {
      title: "ACCESS_LEVEL: OPEN",
      desc: "No entry fees. Global access granted to all user classes.",
      icon: UserPlus
    },
    {
      title: "ENV: SCRATCH_3.0",
      desc: "Mandatory platform. Remixing permitted with attribution.",
      icon: Code2
    },
    {
      title: "INTEGRITY_CHECK",
      desc: "Plagiarism detection active. Zero tolerance for code theft.",
      icon: ShieldCheck
    },
    {
      title: "DEADLINE_ENFORCED",
      desc: "Packet submission required by Feb 17, 23:59 system time.",
      icon: AlertTriangle
    }
  ];

  return (
    <section id="guidelines" className="py-24 bg-[#0f0518] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="reveal-on-scroll">
            <p className="font-mono text-amber-400 text-sm mb-2">03 // PROTOCOLS</p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              System <br /> Rules
            </h2>
            
            <div className="font-mono text-sm text-gray-400 border-l-2 border-amber-400 pl-4 py-2 bg-amber-400/5">
              <p className="text-white font-bold mb-1">PRO_TIP:</p>
              <p>Clean code structure increases judging probability by 40%.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {rules.map((rule, idx) => (
              <div 
                key={idx} 
                className="bg-white/5 border border-white/10 p-6 flex items-start gap-4 hover:bg-white/10 transition-colors reveal-on-scroll"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-amber-400 mt-1">
                  <rule.icon size={20} />
                </div>
                <div>
                  <h3 className="font-mono text-lg font-bold text-white mb-1">{rule.title}</h3>
                  <p className="text-gray-400 text-sm">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};