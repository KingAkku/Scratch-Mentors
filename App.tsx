import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Prizes } from './components/Prizes';
import { Timeline } from './components/Timeline';
import { Guidelines } from './components/Guidelines';
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
          <Timeline />
          <Guidelines />
          
          {/* CTA Section - Royal Purple Background */}
          <section className="py-24 bg-[#7c3aed] relative overflow-hidden text-center px-4 border-t border-black">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">System Ready?</h2>
              <button 
                onClick={openRegister}
                className="bg-black text-white px-12 py-5 text-xl font-mono font-bold hover:bg-white hover:text-black hover:scale-105 transition-all shadow-2xl uppercase border-2 border-transparent hover:border-black"
              >
                [ Execute_Registration ]
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