import React from 'react';
import { Trophy, Briefcase, Star, Zap } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';

export const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-50 skew-x-12 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-purple-900 mb-4">Rewards & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">It’s not just about the code. It’s about the career.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Prize Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy size={200} />
            </div>
            
            <div className="relative z-10">
              <div className="inline-block bg-amber-400 text-purple-900 font-bold px-4 py-1 rounded-full text-sm mb-6">
                GRAND PRIZE
              </div>
              <h3 className="text-4xl md:text-6xl font-bold mb-2">{EVENT_DETAILS.prizePool}</h3>
              <p className="text-purple-200 text-lg mb-8">Total Prize Pool for Top Performers</p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-3">
                  <Star className="text-amber-400" />
                  <div>
                    <p className="font-bold">1st Place</p>
                    <p className="text-sm text-purple-200">Cash + Swag Kit</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-3">
                  <Star className="text-gray-300" />
                  <div>
                    <p className="font-bold">2nd Place</p>
                    <p className="text-sm text-purple-200">Cash Reward</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Internship Card */}
          <div className="bg-amber-400 rounded-3xl p-8 md:p-12 text-purple-900 relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute -bottom-4 -right-4 text-amber-500 opacity-30">
              <Briefcase size={150} />
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-block bg-purple-900 text-white font-bold px-4 py-1 rounded-full text-sm mb-6">
                  CAREER OPPORTUNITY
                </div>
                <h3 className="text-3xl font-bold leading-tight mb-4">
                  3-Month Internship
                </h3>
                <p className="font-medium opacity-90 mb-6">
                  At <span className="font-black">LogicBox</span>. Work with real engineers on real products.
                </p>
              </div>
              
              <div className="flex items-center gap-2 font-bold border-t border-purple-900/10 pt-6">
                <Zap size={20} />
                <span>Fast-track your career</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};