
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  onRegister: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Guidelines', href: '#guidelines' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Schedule', href: '#schedule' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-gray-100' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Lenient Tree Logo */}
          <img src="lt.svg" alt="Lenient Tree" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-medium transition-colors text-gray-600 hover:text-purple-600"
            >
              {link.name}
            </a>
          ))}
          {/* Special Register Button with unique hover effect */}
          <button 
            onClick={onRegister} 
            className={`
              px-6 py-2 rounded-full font-bold transition-all duration-300 border-2
              ${isScrolled 
                ? 'bg-[#7c3aed] border-[#7c3aed] text-white hover:bg-black hover:border-black hover:shadow-[4px_4px_0px_#7c3aed] hover:-translate-y-1' 
                : 'bg-[#7c3aed] border-[#7c3aed] text-white hover:bg-white hover:text-[#7c3aed] hover:shadow-[0px_0px_20px_rgba(124,58,237,0.5)]'
              }
            `}
          >
            Register Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-black hover:text-purple-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-4 md:hidden flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 font-medium py-2 hover:text-purple-600"
            >
              {link.name}
            </a>
          ))}
          <Button onClick={() => { onRegister(); setMobileMenuOpen(false); }} className="w-full">
            Register Now
          </Button>
        </div>
      )}
    </nav>
  );
};
