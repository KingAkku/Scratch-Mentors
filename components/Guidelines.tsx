import React from 'react';
import { Check, ShieldCheck, UserPlus, Code2 } from 'lucide-react';

export const Guidelines: React.FC = () => {
  const rules = [
    {
      title: "100% Free Registration",
      desc: "There are no hidden fees. This tournament is open to everyone regardless of background.",
      icon: UserPlus
    },
    {
      title: "Scratch Platform",
      desc: "All submissions must be created using Scratch (v3.0). Remixing is allowed if credit is given.",
      icon: Code2
    },
    {
      title: "Originality Check",
      desc: "Projects will be screened for plagiarism. Be original, be creative.",
      icon: ShieldCheck
    },
    {
      title: "Submission Format",
      desc: "Submit your shared Scratch project link before the deadline on Feb 17.",
      icon: Check
    }
  ];

  return (
    <section id="guidelines" className="py-24 bg-purple-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Guidelines & <br />
              <span className="text-amber-400">Rules</span>
            </h2>
            <p className="text-lg text-purple-200 mb-8 leading-relaxed">
              We believe in fair play and boundless creativity. Follow these simple rules to ensure your submission qualifies for the grand prizes and internship opportunities.
            </p>
            <div className="p-6 bg-purple-800/50 rounded-2xl border border-purple-700/50">
                <p className="font-semibold text-amber-300 mb-2">Pro Tip:</p>
                <p className="text-sm opacity-80">Focus on interactivity and code cleanliness. Our judges love well-documented variable names!</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rules.map((rule, idx) => (
              <div key={idx} className="bg-purple-800 rounded-2xl p-6 hover:bg-purple-700 transition-colors">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 text-amber-400">
                  <rule.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{rule.title}</h3>
                <p className="text-purple-200 text-sm leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};