
import React from 'react';

export const VideoSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Uniform Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-purple-600 text-sm mb-2 uppercase tracking-widest font-bold">Tournament Reveal</p>
          <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-4">
            Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500">Trailer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full max-w-5xl mx-auto bg-black rounded-2xl shadow-2xl overflow-hidden group border-4 border-gray-100">
          <iframe 
            className="w-full h-full"
            src="https://drive.google.com/file/d/1iQfwWzbVjH7bSaOcCVqrL1YTF-basp8a/preview" 
            title="Scratch Crown Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
          
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-purple-500 m-4 rounded-tl-lg pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-pink-500 m-4 rounded-br-lg pointer-events-none"></div>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6 text-gray-500 font-mono text-xs uppercase tracking-widest">
          <span>Scratch 3.0 Compatible</span>
          <span className="hidden md:block">|</span>
          <span className="text-purple-600 font-bold">LogicBox Production</span>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute -left-20 top-40 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-50 -z-10"></div>
    </section>
  );
};
