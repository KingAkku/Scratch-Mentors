
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-purple-600 text-sm mb-2 uppercase tracking-widest">Support</p>
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-lg font-bold text-black">{faq.question}</span>
                {openIndex === idx ? (
                  <Minus className="text-purple-600 flex-shrink-0 ml-4" />
                ) : (
                  <Plus className="text-gray-400 flex-shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
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
