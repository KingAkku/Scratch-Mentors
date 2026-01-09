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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-purple-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Box: Purple on Amber (Initial), Amber on Purple (Scrolled) */}
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transform -rotate-3 transition-colors ${isScrolled ? 'bg-amber-400' : 'bg-[#1e0b36]'}`}>
             <span className={`font-bold text-xl ${isScrolled ? 'text-purple-900' : 'text-amber-400'}`}>L</span>
          </div>
          <span className={`text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-white' : 'text-[#1e0b36]'}`}>
            Logic<span className={isScrolled ? 'text-amber-400' : 'text-white'}>Box</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium transition-colors ${isScrolled ? 'text-white/80 hover:text-amber-400' : 'text-[#1e0b36]/80 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            onClick={onRegister} 
            variant={isScrolled ? 'primary' : 'secondary'} 
            className={!isScrolled ? 'bg-[#1e0b36] text-amber-400 hover:bg-[#2e1065] border-transparent' : ''}
            size="sm"
          >
            Register Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-white' : 'text-[#1e0b36]'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-purple-900 border-t border-purple-800 p-4 md:hidden flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 font-medium py-2 hover:text-amber-400"
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