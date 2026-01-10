
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "Who can participate in the tournament?",
    answer: "The tournament is open to all students and coding enthusiasts who are interested in Scratch programming. There are no specific age restrictions, but projects are judged on quality and creativity."
  },
  {
    question: "Is there a registration fee?",
    answer: "No, participation in the LogicBox Scratch Tournament is completely free of charge."
  },
  {
    question: "What software do I need?",
    answer: "You will need a computer with an internet connection to access the online Scratch 3.0 editor. No paid software is required."
  },
  {
    question: "How do I submit my project?",
    answer: "Once you register, you will receive an email with a submission link. You need to provide the public link to your Scratch project before the deadline."
  },
  {
    question: "Can I participate as a team?",
    answer: "Currently, this tournament is designed for individual participants to showcase their personal skills and mentoring abilities."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Decorative blurred blob */}
      <div className="absolute -right-20 top-20 w-96 h-96 bg-purple-100 rounded-full blur-[100px] pointer-events-none opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-purple-50 text-purple-700 rounded-lg mb-4 border border-purple-100">
            <HelpCircle size={20} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Questions</span>
          </h2>
          <p className="text-gray-500 font-mono text-sm">
             Everything you need to know about the tournament.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-xl transition-all duration-300 ${
                openIndex === idx 
                  ? 'bg-white border-purple-200 shadow-lg scale-[1.01]' 
                  : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-200'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`font-bold text-lg transition-colors duration-300 ${openIndex === idx ? 'text-purple-700' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-purple-600 text-white rotate-180' : 'bg-white border border-gray-200 text-gray-400'}`}>
                  {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-dashed border-gray-100 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
