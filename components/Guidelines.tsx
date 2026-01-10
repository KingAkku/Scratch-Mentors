import React, { useEffect, useRef } from 'react';
import { Check, ShieldCheck, UserPlus, Code2, AlertTriangle } from 'lucide-react';

export const Guidelines: React.FC = () => {
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
    <section id="guidelines" ref={sectionRef} className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="reveal-on-scroll">
            <p className="font-mono text-purple-600 text-sm mb-2">03 // PROTOCOLS</p>
            <h2 className="text-4xl md:text-6xl font-black text-black mb-4">
              System <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500">Rules</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-6 mb-8"></div>
            
            <div className="font-mono text-sm text-gray-600 border-l-2 border-purple-500 pl-4 py-2 bg-purple-50">
              <p className="text-black font-bold mb-1">PRO_TIP:</p>
              <p>Clean code structure increases judging probability by 40%.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {rules.map((rule, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 p-6 flex items-start gap-4 hover:shadow-lg transition-shadow reveal-on-scroll rounded-lg"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-purple-600 mt-1">
                  <rule.icon size={20} />
                </div>
                <div>
                  <h3 className="font-mono text-lg font-bold text-black mb-1">{rule.title}</h3>
                  <p className="text-gray-500 text-sm">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};