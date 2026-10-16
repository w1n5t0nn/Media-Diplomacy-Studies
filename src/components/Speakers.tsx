import React, { useState } from 'react';
import { UserCheck, Sparkles, ChevronRight } from 'lucide-react';
import { Speaker } from '../types';
import { SpeakerModal } from './SpeakerModal';
import { PlaceholderBadge } from './PlaceholderBadge';

interface SpeakersProps {
  isAuditMode: boolean;
}

export const Speakers: React.FC<SpeakersProps> = ({ isAuditMode }) => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const placeholderSpeakers: Speaker[] = [
    {
      id: 'speaker-1',
      name: '[Keynote Speaker Placeholder]',
      title: 'Minister of Foreign Affairs / Foreign Policy Authority',
      organization: 'Federal Ministry of Foreign Affairs, Nigeria',
      roleType: 'Keynote',
      image: '',
      bio: 'Distinguished statesman and foreign policy authority leading Nigeria’s sovereign diplomatic engagements globally. Placeholder profile reserved for official keynote guest announcement.',
      isPlaceholder: true,
    },
    {
      id: 'speaker-2',
      name: '[Diplomatic Corps Chair Placeholder]',
      title: 'Dean of the Diplomatic Corps & Senior Ambassador',
      organization: 'International Diplomatic Mission, Abuja',
      roleType: 'Guest of Honour',
      image: '',
      bio: 'Veteran international ambassador representing multilateral cooperation and ambassadorial consensus across Africa. Placeholder profile reserved for official ambassador announcement.',
      isPlaceholder: true,
    },
    {
      id: 'speaker-3',
      name: '[State Media Director Placeholder]',
      title: 'Director-General / Media Strategic Director',
      organization: 'State Media & Broadcasting Authority',
      roleType: 'Panelist',
      image: '',
      bio: 'Leading expert on state media broadcasting, international satellite communication, and strategic public information projection. Placeholder profile reserved for official media speaker announcement.',
      isPlaceholder: true,
    },
    {
      id: 'speaker-4',
      name: '[International Law Scholar Placeholder]',
      title: 'Professor of International Law & Diplomacy',
      organization: 'Nigerian Institute of International Affairs (NIIA)',
      roleType: 'Session Chair',
      image: '',
      bio: 'Prominent academic scholar specializing in public international law, sovereign treaty negotiations, and diplomatic history in Africa. Placeholder profile reserved for official academic speaker announcement.',
      isPlaceholder: true,
    },
  ];

  return (
    <section id="speakers" className="py-24 bg-navy-900 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-2">
            Distinguished Faculty
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Featured <span className="text-gold-gradient">Speakers</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Convening world-class diplomatic leaders, state media directors, and academic scholars.
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* Prominent Announcement Banner */}
        <div className="mb-12 p-4 sm:p-6 bg-gold-500/10 border border-gold-500/30 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gold-500/20 text-gold-400 rounded-xl shrink-0">
              <Sparkles className="w-5 h-5 animate-spin" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-white">Full Faculty Announcement Pending</h4>
              <p className="text-xs text-slate-300">
                Official ministerial and ambassadorial speaker confirmations are being finalized. Additional keynote speakers will be revealed in Q3 2026.
              </p>
            </div>
          </div>
          <span className="hidden md:inline-flex px-4 py-2 bg-gold-gradient text-navy-950 font-bold text-xs uppercase tracking-widest rounded-lg shrink-0">
            More Speakers Coming Soon
          </span>
        </div>

        {/* Speaker Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {placeholderSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              onClick={() => setSelectedSpeaker(speaker)}
              className={`p-6 bg-navy-950 border border-navy-800 hover:border-gold-500/50 rounded-2xl cursor-pointer transition-all hover:-translate-y-1 group relative flex flex-col justify-between ${
                isAuditMode ? 'placeholder-highlighted' : ''
              }`}
            >
              <div>
                {/* Photo Placeholder Frame */}
                <div className="w-full h-48 bg-navy-900 rounded-xl border border-navy-800 mb-4 flex flex-col items-center justify-center text-center p-3 relative overflow-hidden group-hover:border-gold-500/30 transition-colors">
                  <UserCheck className="w-12 h-12 text-gold-400 opacity-50 mb-2" />
                  <span className="text-[10px] text-gold-400 font-semibold uppercase tracking-wider">
                    {speaker.roleType} Slot
                  </span>
                  <PlaceholderBadge label="Speaker Headshot" className="mt-2" />
                </div>

                <div className="inline-block px-2.5 py-0.5 bg-navy-800 text-gold-400 text-[10px] font-bold uppercase rounded-full mb-2">
                  {speaker.roleType}
                </div>

                <h3 className="font-serif text-lg font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-xs font-semibold text-slate-300 mb-2">{speaker.title}</p>
                <p className="text-[11px] text-slate-400 leading-normal line-clamp-2">{speaker.organization}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-navy-800 flex items-center justify-between text-xs text-gold-400 font-medium">
                <span>View Full Profile</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal Viewer */}
        <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />

      </div>
    </section>
  );
};
