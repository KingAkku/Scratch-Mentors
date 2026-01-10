
import React from 'react';
import { Trophy, Star, Users, Share2, Target, BookOpen, MessageCircle, Heart, Zap, Award } from 'lucide-react';

const CRITERIA = [
  {
    title: "Best Student Mentor Award",
    desc: "For exceptional guidance, clarity, and student engagement.",
    icon: Trophy
  },
  {
    title: "Best Scratch Project Award",
    desc: "For the most creative, well-structured, and innovative Scratch project.",
    icon: Star
  },
  {
    title: "Teaching Excellence Award",
    desc: "For outstanding teaching methods and student understanding.",
    icon: BookOpen
  },
  {
    title: "Maximum Students Trained Award",
    desc: "For mentoring the highest number of school students.",
    icon: Users
  },
  {
    title: "Social Media Impact Award",
    desc: "For creating the most number of likes and shares.",
    icon: Share2
  },
  {
    title: "Future Trainer Award",
    desc: "Given to the participant most suitable to become a LogicBox Trainer.",
    icon: Target
  },
  {
    title: "Best Learning Experience Design",
    desc: "For designing engaging, age-appropriate learning sessions.",
    icon: Zap
  },
  {
    title: "Best Communication & Clarity",
    desc: "For explaining concepts in a simple, child-friendly manner.",
    icon: MessageCircle
  },
  {
    title: "Community Builder Award",
    desc: "For reaching and engaging students from schools or local communities.",
    icon: Heart
  },
  {
    title: "Rising Educator Award",
    desc: "For a first-time mentor who showed exceptional promise.",
    icon: Award
  }
];

export const WinnerCriteria: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-purple-600 text-sm mb-2 uppercase tracking-widest">Assessment</p>
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
            Winner <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Criteria</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {CRITERIA.map((item, idx) => (
            <div 
              key={idx} 
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group p-8 bg-white rounded-2xl border border-gray-300 shadow-md hover:shadow-2xl hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-xl shadow-sm flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-500 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
