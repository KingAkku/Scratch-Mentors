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
    <section id="schedule" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-black text-purple-900 mb-4">Event Timeline</h2>
          <p className="text-xl text-gray-600">Mark your calendars. Don't miss the deadline.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {TIMELINE.map((item, index) => (
              <div 
                key={index} 
                className={`reveal-on-scroll flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                
                {/* Content Side */}
                <div className="w-full md:w-5/12 text-center md:text-left">
                  <div className={`p-6 rounded-2xl bg-white shadow-lg border-b-4 ${index % 2 === 0 ? 'border-amber-400' : 'border-purple-600'} hover:-translate-y-1 transition-transform duration-300`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative flex items-center justify-center w-12 h-12 shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-md z-10 ${item.date === "Feb 17" ? "bg-amber-400 text-purple-900 animate-pulse" : "bg-purple-900 text-white"}`}>
                    <div className="w-3 h-3 rounded-full bg-current"></div>
                  </div>
                </div>

                {/* Date Side */}
                <div className={`w-full md:w-5/12 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-4xl font-black text-gray-300">{item.date}</span>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};