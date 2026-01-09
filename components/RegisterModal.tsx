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
      <div 
        className="absolute inset-0 bg-purple-950/80 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
        {step === 'form' ? (
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-purple-900 font-display">Join the Tournament</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-purple-900 transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  required 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                  placeholder="Scratch Wizard"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  required 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Scratch Profile URL (Optional)</label>
                <input 
                  type="url" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                  placeholder="https://scratch.mit.edu/users/..."
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin" size={20} /> Registering...
                    </span>
                  ) : (
                    "Confirm Registration"
                  )}
                </Button>
                <p className="text-center text-xs text-gray-500 mt-3">
                  100% Free Registration • Limited Spots
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-purple-900 mb-2">You're In!</h3>
            <p className="text-gray-600 mb-8">
              We've sent a confirmation email with the next steps. Get your Scratch project ready!
            </p>
            <Button onClick={onClose} variant="secondary" className="w-full border border-gray-200">
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};