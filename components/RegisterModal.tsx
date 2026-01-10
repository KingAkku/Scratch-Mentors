
import React, { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from './Button';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep('success');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-white/80 backdrop-blur-md transition-all" 
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-full max-w-lg overflow-hidden animate-fade-in-up border border-gray-100">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 circuit-pattern opacity-30 pointer-events-none"></div>
        
        {/* Decorative Top Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500"></div>

        <div className="relative z-10">
            {step === 'form' ? (
            <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                <div>
                    <span className="font-mono text-[10px] text-purple-600 tracking-widest uppercase bg-purple-50 px-2 py-1 rounded border border-purple-100">
                        Registration
                    </span>
                    <h3 className="text-3xl font-serif font-black italic text-black mt-3">Register for <span className="text-purple-600">Tournament</span></h3>
                </div>
                <button 
                    onClick={onClose} 
                    className="text-gray-400 hover:text-black transition-colors p-2 hover:bg-gray-100 rounded-full"
                >
                    <X size={20} />
                </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                <div className="group">
                    <label className="block font-mono text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-purple-600 transition-colors">
                        Full Name
                    </label>
                    <input 
                    required 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none transition-all font-medium text-black placeholder:text-gray-300"
                    placeholder="John Doe"
                    />
                </div>
                
                <div className="group">
                    <label className="block font-mono text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-purple-600 transition-colors">
                        Email Address
                    </label>
                    <input 
                    required 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none transition-all font-medium text-black placeholder:text-gray-300"
                    placeholder="you@example.com"
                    />
                </div>

                <div className="group">
                    <label className="block font-mono text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-purple-600 transition-colors">
                        Scratch Profile URL <span className="text-gray-300 font-normal normal-case">(Optional)</span>
                    </label>
                    <input 
                    type="url" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-none transition-all font-medium text-black placeholder:text-gray-300"
                    placeholder="https://scratch.mit.edu/users/..."
                    />
                </div>

                <div className="pt-4">
                    <Button 
                    type="submit" 
                    className="w-full rounded-lg text-lg" 
                    disabled={isLoading}
                    >
                    {isLoading ? (
                        <span className="flex items-center gap-2 justify-center">
                        <Loader2 className="animate-spin" size={20} /> Submitting...
                        </span>
                    ) : (
                        "Confirm Registration"
                    )}
                    </Button>
                    <div className="flex justify-center items-center gap-2 mt-4 opacity-60">
                        <div className="h-1 w-1 rounded-full bg-green-500 animate-pulse"></div>
                        <p className="font-mono text-[10px] text-gray-500">
                        Secure Registration // Free Entry
                        </p>
                    </div>
                </div>
                </form>
            </div>
            ) : (
            <div className="p-12 text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-green-50">
                    <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-serif font-black italic text-black mb-3">Registration Successful</h3>
                <p className="text-gray-500 mb-8 font-medium">
                    Your details have been recorded. Please check your email for further instructions.
                </p>
                <Button onClick={onClose} variant="secondary" className="w-full border border-gray-200 hover:border-purple-300">
                    Close
                </Button>
            </div>
            )}
        </div>
      </div>
    </div>
  );
};
