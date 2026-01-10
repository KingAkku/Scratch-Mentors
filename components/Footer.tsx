import React from 'react';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
             <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-md flex items-center justify-center">
                   <span className="font-bold text-white text-lg">L</span>
                </div>
                <span className="text-xl font-bold">LogicBox</span>
             </div>
             <p className="text-gray-500 text-sm max-w-xs">
               Empowering the next generation of coders through creativity and competition.
             </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:hello@logicbox.com" className="text-gray-500 hover:text-purple-600 transition-colors"><Mail size={20} /></a>
          </div>

        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 LogicBox Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};