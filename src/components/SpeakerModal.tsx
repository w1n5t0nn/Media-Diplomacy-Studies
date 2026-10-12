import React from 'react';
import { X, UserCheck, Briefcase, Award } from 'lucide-react';
import { Speaker } from '../types';
import { PlaceholderBadge } from './PlaceholderBadge';

interface SpeakerModalProps {
  speaker: Speaker | null;
  onClose: () => void;
}

export const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, onClose }) => {
  if (!speaker) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-navy-900 border border-gold-500/40 rounded-2xl shadow-navy-deep text-white p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
          {/* Speaker Portrait Placeholder Frame */}
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-gold-500/40 bg-navy-950 shrink-0 flex flex-col items-center justify-center text-center p-2">
            <UserCheck className="w-12 h-12 text-gold-400 opacity-60 mb-1" />
            <span className="text-[10px] text-gold-400 font-bold uppercase">Placeholder</span>
          </div>

          <div className="text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-2">
              {speaker.roleType}
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-1">{speaker.name}</h3>
            <p className="text-sm font-semibold text-gold-300 mb-1">{speaker.title}</p>
            <p className="text-xs text-slate-400 flex items-center justify-center md:justify-start gap-1">
              <Briefcase className="w-3.5 h-3.5" />
              {speaker.organization}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-300 border-t border-navy-800 pt-4">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gold-400 mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Speaker Profile Summary
            </h4>
            <p className="leading-relaxed">{speaker.bio}</p>
          </div>

          {speaker.isPlaceholder && (
            <div className="pt-2">
              <PlaceholderBadge label={`Featured Speaker Profile — ${speaker.name}`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
