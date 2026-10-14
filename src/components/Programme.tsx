import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';

export const Programme: React.FC = () => {
  const scheduleSessions = [
    {
      time: '08:30 – 09:30 WAT',
      title: 'Delegate Accreditation & Morning Protocol',
      type: 'Registration & Welcome',
      description: 'Security clearance, delegate credential issuance, and VIP arrival at the Shehu Musa Yar\'Adua Centre Foyer.'
    },
    {
      time: '09:30 – 11:00 WAT',
      title: 'Opening Ceremony & Presidential Keynote Address',
      type: 'Plenary Keynote',
      description: 'National Anthem, Opening Remarks by the Organising Secretariat, and Keynote Address on State Media Diplomacy and Global Influence.'
    },
    {
      time: '11:00 – 11:30 WAT',
      title: 'Group Photograph & Diplomatic Refreshment Break',
      type: 'Networking',
      description: 'Official summit group photograph with dignitaries, ambassadors, and members of the press.'
    },
    {
      time: '11:30 – 13:00 WAT',
      title: 'Plenary I: Strategic Communication in an Interconnected World',
      type: 'Panel Session',
      description: 'High-level panel examining how nations project sovereign narratives, manage international perception, and deploy soft power.'
    },
    {
      time: '13:00 – 14:30 WAT',
      title: 'Executive Luncheon & Ambassadorial Roundtable',
      type: 'Luncheon',
      description: 'Exclusive executive networking luncheon for accredited delegates, foreign missions, and corporate partners.'
    },
    {
      time: '14:30 – 16:00 WAT',
      title: 'Plenary II: State Media Broadcasting & Public Diplomacy',
      type: 'Panel Session',
      description: 'Role of national broadcasting, satellite news networks, and digital communication in modern international relations.'
    },
    {
      time: '16:00 – 17:00 WAT',
      title: 'Abuja Communique Presentation & Closing Ceremony',
      type: 'Communique',
      description: 'Reading of the inaugural Mbu Diplomacy Day Communique, presentation of diplomatic honors, and closing vote of thanks.'
    }
  ];

  return (
    <section id="programme" className="py-24 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-2">
            Summit Agenda Framework
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Expected <span className="text-gold-gradient">Programme</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            High-level outline of keynote addresses, plenary discussions, and executive networking sessions.
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* Prominent Notice Banner */}
        <div className="mb-12 p-6 bg-navy-900 border border-gold-500/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gold-500/10 text-gold-400 rounded-xl shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-white">Programme Draft Notice</h4>
              <p className="text-xs text-slate-300">
                The timeline below represents the preliminary structural format. The detailed schedule with confirmed speakers and panel moderators will be updated soon.
              </p>
            </div>
          </div>
          <div className="px-4 py-2 bg-navy-950 border border-gold-500/40 text-gold-400 font-serif font-bold text-xs uppercase tracking-widest rounded-lg shrink-0 text-center">
            Full Programme Will Be Updated Soon
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {scheduleSessions.map((session, idx) => (
            <div
              key={idx}
              className="p-6 bg-navy-900 border border-navy-800 hover:border-gold-500/40 rounded-xl transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-950 border border-navy-700 rounded-xl shrink-0 text-center min-w-[140px]">
                  <span className="text-xs font-bold text-gold-400 flex items-center justify-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {session.time}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block mt-1">
                    {session.type}
                  </span>
                </div>

                <div>
                  <h4 className="font-serif text-xl font-bold text-white mb-1">
                    {session.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {session.description}
                  </p>
                </div>
              </div>

              <div className="shrink-0 self-end md:self-center">
                <span className="px-3 py-1 bg-gold-500/10 text-gold-400 text-[10px] font-semibold uppercase tracking-wider rounded-full border border-gold-500/20">
                  Confirmed Format
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
