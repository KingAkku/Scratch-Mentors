
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Prizes } from './components/Prizes';
import { Judges } from './components/Judges';
import { Timeline } from './components/Timeline';
import { Guidelines } from './components/Guidelines';
import { WinnerCriteria } from './components/WinnerCriteria';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { CustomCursor } from './components/CustomCursor';

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      
      <div className="relative z-10">
        <Header onRegister={openRegister} />
        
        <main>
          <Hero onRegister={openRegister} />
          <Prizes />
          <Judges />
          <Timeline />
          <Guidelines />
          <WinnerCriteria />
          <FAQ />
          
          {/* CTA Section - Professional Dark Theme */}
          <section className="py-24 bg-neutral-900 relative overflow-hidden text-center px-4 border-t border-gray-800">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-[50px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                Ready to Participate?
              </h2>
              <p className="text-gray-400 mb-8 font-mono text-sm md:text-base">
                Join the community and showcase your skills on a global stage.
              </p>
              <button 
                onClick={openRegister}
                className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-mono font-bold text-black transition-all duration-200 bg-white hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 focus:ring-offset-gray-900"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 -ml-1 transition-all duration-200 ease-out bg-purple-600 rounded-none group-hover:mt-0 group-hover:ml-0"></span>
                <span className="relative">Register Now</span>
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      
      <RegisterModal isOpen={isRegisterOpen} onClose={closeRegister} />
    </div>
  );
}

export default App;
