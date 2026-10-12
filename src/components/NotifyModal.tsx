import React, { useState } from 'react';
import { X, Bell, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotifyModal: React.FC<NotifyModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid official email address.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail('');
    setName('');
    setOrganization('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg overflow-hidden bg-navy-900 border border-gold-500/40 rounded-2xl shadow-navy-deep text-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="notify-modal-title"
      >
        {/* Decorative Top Accent Bar */}
        <div className="h-2 w-full bg-gold-gradient" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-navy-800 rounded-full transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {!isSubmitted ? (
            <>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gold-500/10 border border-gold-500/30 rounded-xl text-gold-400">
                  <Bell className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">Official Notice</span>
                  <h3 id="notify-modal-title" className="text-2xl font-serif font-bold text-white">
                    Registration Opening Soon
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Delegate registration for the <strong className="text-white">Ambassador Matthew Tawo Mbu Annual Diplomacy Day</strong> will officially open in Q3 2026. Submit your contact details to receive priority accreditation notification and event updates.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Full Name <span className="text-gold-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Amb. / Dr. / Mr. / Ms. Full Name"
                    className="w-full px-4 py-2.5 bg-navy-950 border border-navy-700 focus:border-gold-500 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Official Email Address <span className="text-gold-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="delegate@embassy.gov.ng"
                      className="w-full pl-10 pr-4 py-2.5 bg-navy-950 border border-navy-700 focus:border-gold-500 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Organization / Ministry / Embassy
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Ministry of Foreign Affairs / Diplomatic Mission"
                    className="w-full px-4 py-2.5 bg-navy-950 border border-navy-700 focus:border-gold-500 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                  />
                </div>

                {error && <p className="text-xs text-red-400">{error}</p>}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gold-gradient hover:bg-gold-gradient-hover text-navy-950 font-bold rounded-lg shadow-lg shadow-gold-500/10 flex items-center justify-center gap-2 transition-all transform active:scale-98 text-sm"
                  >
                    <Bell className="w-4 h-4" />
                    Notify Me When Registration Opens
                  </button>
                </div>
              </form>

              <div className="mt-4 pt-4 border-t border-navy-800 flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Your information is strictly reserved for official Diplomacy Day accreditation alerts.</span>
              </div>
            </>
          ) : (
            <div className="py-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 border border-gold-500/40 rounded-full flex items-center justify-center text-gold-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Notification Reserved</h3>
              <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6 leading-relaxed">
                Thank you, <strong className="text-gold-400">{name || 'esteemed delegate'}</strong>. We have registered <strong className="text-white">{email}</strong> to receive early accreditation guidelines as soon as registration officially launches.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-navy-800 hover:bg-navy-700 text-gold-400 font-semibold rounded-lg border border-gold-500/30 text-sm transition-colors"
              >
                Return to Event Page
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
