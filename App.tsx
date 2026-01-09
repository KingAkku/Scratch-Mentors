import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Prizes } from './components/Prizes';
import { Timeline } from './components/Timeline';
import { Guidelines } from './components/Guidelines';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onRegister={openRegister} />
      
      <main>
        <Hero onRegister={openRegister} />
        <Prizes />
        <Timeline />
        <Guidelines />
        
        {/* CTA Section before footer */}
        <section className="py-20 bg-amber-400 text-purple-900 text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Code?</h2>
            <p className="text-xl font-medium mb-8">
              Don't let this opportunity slide. The clock is ticking towards Feb 17.
            </p>
            <button 
              onClick={openRegister}
              className="bg-purple-900 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-purple-800 hover:scale-105 transition-all shadow-xl"
            >
              Start Your Registration
            </button>
          </div>
        </section>
      </main>

      <Footer />
      
      <RegisterModal isOpen={isRegisterOpen} onClose={closeRegister} />
    </div>
  );
}

export default App;