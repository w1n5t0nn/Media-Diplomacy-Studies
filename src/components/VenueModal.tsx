import React from 'react';
import { X, MapPin, Building, Calendar, Navigation, ShieldCheck } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface VenueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VenueModal: React.FC<VenueModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-navy-900 border border-gold-500/40 rounded-2xl shadow-navy-deep text-white p-6 md:p-8">
        <div className="flex items-center justify-between mb-6 border-b border-navy-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gold-500/10 border border-gold-500/30 rounded-xl text-gold-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">Official Host Venue</span>
              <h3 className="text-2xl font-serif font-bold text-white">Shehu Musa Yar'Adua Centre</h3>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6 text-slate-300 text-sm">
          {/* Venue Card Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-navy-950 border border-navy-800 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-gold-400 font-semibold">
                <Building className="w-4 h-4" />
                <span>Address</span>
              </div>
              <p className="text-white">One Memorial Drive, Central Business District, Abuja, FCT, Nigeria</p>
            </div>

            <div className="p-4 bg-navy-950 border border-navy-800 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-gold-400 font-semibold">
                <Calendar className="w-4 h-4" />
                <span>Event Date</span>
              </div>
              <p className="text-white">Friday, 20 November 2026 (09:00 WAT Prompt)</p>
            </div>
          </div>

          <div>
            <h4 className="text-base font-serif font-bold text-gold-400 mb-2">About the Venue</h4>
            <p className="leading-relaxed text-slate-300">
              The Shehu Musa Yar'Adua Centre is one of Nigeria's premier landmark institutions for national dialogues, diplomatic summits, and public lectures. Located in the heart of Abuja's Central Business District, it offers state-of-the-art auditorium facilities, international press briefing rooms, and VIP delegate holding suites.
            </p>
          </div>

          {/* Interactive Map Visual Placeholder */}
          <div className="relative h-48 w-full bg-navy-950 border border-navy-700 rounded-xl overflow-hidden flex flex-col items-center justify-center text-center p-4">
            <MapPin className="w-10 h-10 text-gold-400 mb-2 animate-bounce" />
            <p className="font-serif text-lg font-bold text-white mb-1">Interactive Map & Directions</p>
            <p className="text-xs text-slate-400 mb-3">GPS Coordinates & Security Protocol Maps</p>
            <PlaceholderBadge label="ABUJA CBD VENUE MAP EMBED" />
          </div>

          <div className="p-4 bg-gold-500/10 border border-gold-500/30 rounded-xl flex items-start gap-3 text-xs">
            <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-gold-400 block mb-0.5">Diplomatic Security & Access Notice</strong>
              Access to the Auditorium and VIP Delegate Lounge requires advance accreditation badge validation. Security protocols will be communicated to registered delegates prior to November 20, 2026.
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <a
              href="https://maps.google.com/?q=Shehu+Musa+Yar%27Adua+Centre+Abuja"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gold-gradient hover:bg-gold-gradient-hover text-navy-950 font-bold rounded-lg text-sm flex items-center gap-2 transition-all"
            >
              <Navigation className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
