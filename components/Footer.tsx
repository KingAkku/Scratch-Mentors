
import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, Youtube, TreeDeciduous } from 'lucide-react';

const SocialButton = ({ href, icon: Icon }: { href: string, icon: any }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
  >
    <Icon size={18} />
  </a>
);

export const Footer: React.FC = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Target: Feb 17 of current year (Month is 0-indexed: 0=Jan, 1=Feb)
    let targetDate = new Date(currentYear, 1, 17, 23, 59, 59);

    // If today is past Feb 17, calculate for next year's Feb 17
    if (now.getTime() > targetDate.getTime()) {
      targetDate = new Date(currentYear + 1, 1, 17, 23, 59, 59);
    }

    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200 relative overflow-hidden">
       {/* Background decorative blob */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-purple-100 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Main Footer Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white">
                   <TreeDeciduous size={24} />
                </div>
                <span className="text-2xl font-serif italic font-bold">Lenient<span className="text-green-600">Tree</span></span>
             </div>
             <p className="text-gray-500 text-sm max-w-xs font-medium">
               Empowering students through creativity and code. 
               Organized with passion by Lenient Tree.
             </p>
          </div>

          {/* Center Counter */}
          <div className="flex flex-col items-center">
             <p className="font-mono text-xs text-purple-600 uppercase tracking-[0.2em] mb-4 font-bold">Submission Deadline In</p>
             <div className="flex gap-4">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hrs', value: timeLeft.hours },
                  { label: 'Mins', value: timeLeft.minutes },
                  { label: 'Secs', value: timeLeft.seconds }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center mb-1">
                      <span className="text-2xl font-black text-gray-900 font-mono">
                        {String(item.value).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">{item.label}</span>
                  </div>
                ))}
             </div>
          </div>

          {/* Socials Column */}
          <div className="flex flex-col items-center md:items-end">
            <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4">Connect With Us</p>
            <div className="flex gap-3">
              <SocialButton href="https://www.instagram.com/_logicbox_?igsh=MW5waXNqODlkaWMyeg==" icon={Instagram} />
              <SocialButton href="https://youtu.be/4G9yKXwDKJk" icon={Youtube} />
              <SocialButton href="https://www.linkedin.com/company/lenient-tree/posts/?feedView=all" icon={Linkedin} />
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-400 gap-4">
          <p>© 2024 Lenient Tree. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Sponsored by</span>
            <div className="flex items-center gap-1 opacity-70 grayscale hover:grayscale-0 transition-all">
                <img src="lg.svg" alt="LogicBox" className="h-5 w-auto" />
                <span className="font-bold text-gray-700">LogicBox</span>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
