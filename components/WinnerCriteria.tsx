
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
    title: "Best Learning Experience Design Award",
    desc: "For designing engaging, age-appropriate learning sessions.",
    icon: Zap
  },
  {
    title: "Best Communication & Clarity Award",
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
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-purple-600 text-sm mb-2 uppercase tracking-widest">Assessment</p>
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
            Winner <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500">Criteria</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CRITERIA.map((item, idx) => (
            <div key={idx} className="group p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-purple-200 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
