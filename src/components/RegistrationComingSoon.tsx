import React, { useState } from 'react';
import { Bell, Lock, CheckCircle2, Mail } from 'lucide-react';

interface RegistrationComingSoonProps {
  onOpenNotify: () => void;
}

export const RegistrationComingSoon: React.FC<RegistrationComingSoonProps> = ({ onOpenNotify }) => {
  const [quickEmail, setQuickEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickEmail && quickEmail.includes('@')) {
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      setQuickEmail('');
    }
  };

  return (
    <section id="registration" className="py-24 bg-navy-900 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 border-2 border-gold-500/50 rounded-3xl p-8 sm:p-12 shadow-navy-deep relative overflow-hidden">
          
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/10 rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gold-500/5 rounded-tr-full pointer-events-none" />

          <div className="relative z-10 text-center">
            
            {/* Top Notice Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <Lock className="w-3.5 h-3.5" />
              <span>Official Delegate Portal · Launching Q3 2026</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Registration <span className="text-gold-gradient">Opens Soon</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Official delegate registration for the Ambassador Matthew Tawo Mbu Annual Diplomacy Day has not opened yet. Full registration guidelines, delegate pass tiers, and accreditation credentials will be announced shortly.
            </p>

            {/* Quick Notify Box */}
            <div className="max-w-md mx-auto mb-10">
              {!isSuccess ? (
                <form onSubmit={handleQuickSubmit} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={quickEmail}
                      onChange={(e) => setQuickEmail(e.target.value)}
                      placeholder="Enter official email for priority alert"
                      className="w-full pl-10 pr-4 py-3 bg-navy-950 border border-gold-500/30 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gold-gradient hover:bg-gold-gradient-hover text-navy-950 font-bold text-sm rounded-xl shadow-lg shadow-gold-500/20 shrink-0 transition-all flex items-center justify-center gap-2"
                  >
                    <Bell className="w-4 h-4" />
                    <span>Notify Me</span>
                  </button>
                </form>
              ) : (
                <div className="p-4 bg-gold-500/20 border border-gold-500/40 rounded-xl text-gold-300 text-xs flex items-center justify-center gap-2 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-gold-400" />
                  <span>Thank you! Your notification preference has been saved.</span>
                </div>
              )}
              <div className="mt-3 text-center">
                <button
                  type="button"
                  onClick={onOpenNotify}
                  className="text-xs text-gold-400 hover:text-gold-300 hover:underline transition-colors"
                >
                  Looking for full accreditation pre-registration? Open Priority Registration Form &rarr;
                </button>
              </div>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-navy-800 text-left text-xs text-slate-300">
              <div className="p-4 bg-navy-950/60 rounded-xl border border-navy-800">
                <strong className="text-gold-400 block mb-1 font-serif text-sm">Diplomatic Accreditation</strong>
                Official letters of invitation will be dispatched directly to foreign missions and federal ministries.
              </div>
              <div className="p-4 bg-navy-950/60 rounded-xl border border-navy-800">
                <strong className="text-gold-400 block mb-1 font-serif text-sm">Public Delegate Seats</strong>
                Limited public seats for academics, media professionals, and policy analysts will open via online portal.
              </div>
              <div className="p-4 bg-navy-950/60 rounded-xl border border-navy-800">
                <strong className="text-gold-400 block mb-1 font-serif text-sm">Zero Fee Notice</strong>
                Participation details and attendance instructions will be published upon official portal activation.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
