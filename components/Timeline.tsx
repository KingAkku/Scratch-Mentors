import React, { useEffect, useRef } from 'react';
import { TIMELINE } from '../constants';

export const Timeline: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px" 
    });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="schedule" className="py-24 bg-[#0a0310] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-left mb-16 reveal-on-scroll">
          <p className="font-mono text-amber-400 text-sm mb-2">02 // EXECUTION_LOG</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Timeline</h2>
        </div>

        <div className="space-y-0 relative border-l border-white/10 ml-4 md:ml-0">
          
          {TIMELINE.map((item, index) => (
            <div 
              key={index} 
              className="reveal-on-scroll relative pl-12 pb-12 last:pb-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Connector Node */}
              <div className={`absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full ${index === 1 ? 'bg-amber-400 shadow-[0_0_10px_#fbbf24]' : 'bg-gray-700 border border-gray-500'}`}></div>

              <div className="flex flex-col md:flex-row gap-4 md:items-start group">
                <div className="font-mono text-amber-400/80 w-32 shrink-0 text-sm pt-1">
                  [{item.date}]
                </div>
                
                <div className="bg-white/5 border border-white/10 p-6 w-full hover:border-amber-400/30 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-mono text-sm">
                    > {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};