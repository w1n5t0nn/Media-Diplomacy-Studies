import React from 'react';
import { Building2, Globe, GraduationCap, Radio, Award, Handshake } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface PartnersSponsorsProps {
  onOpenNotify: () => void;
  isAuditMode: boolean;
}

export const PartnersSponsors: React.FC<PartnersSponsorsProps> = ({ onOpenNotify, isAuditMode }) => {
  const partnerCategories = [
    {
      title: 'Government & Institutional Partners',
      icon: <Building2 className="w-5 h-5 text-gold-400" />,
      logos: [
        '[Placeholder: Ministry of Foreign Affairs]',
        '[Placeholder: Federal Ministry of Information]',
        '[Placeholder: National Orientation Agency]',
      ],
    },
    {
      title: 'Diplomatic & International Bodies',
      icon: <Globe className="w-5 h-5 text-gold-400" />,
      logos: [
        '[Placeholder: Commonwealth Secretariat]',
        '[Placeholder: African Union Commission]',
        '[Placeholder: Diplomatic Corps Abuja]',
      ],
    },
    {
      title: 'Academic & Research Institutions',
      icon: <GraduationCap className="w-5 h-5 text-gold-400" />,
      logos: [
        '[Placeholder: Nigerian Institute of Int\'l Affairs]',
        '[Placeholder: National Defence College]',
        '[Placeholder: University of Abuja Policy Chair]',
      ],
    },
    {
      title: 'State Media & Strategic Broadcasting',
      icon: <Radio className="w-5 h-5 text-gold-400" />,
      logos: [
        '[Placeholder: Nigerian Television Authority (NTA)]',
        '[Placeholder: Voice of Nigeria (VON)]',
        '[Placeholder: Federal Radio Corp of Nigeria]',
      ],
    },
  ];

  return (
    <section id="partners" className="py-24 bg-navy-950 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-2">
            Institutional Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Partners & <span className="text-gold-gradient">Sponsors</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Collaborating with leading ministries, international missions, broadcast networks, and corporate sponsors.
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* Categories Grid */}
        <div className="space-y-10 mb-16">
          {partnerCategories.map((cat, idx) => (
            <div key={idx} className="bg-navy-900 border border-navy-800 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2.5 mb-6 border-b border-navy-800 pb-3">
                {cat.icon}
                <h3 className="font-serif text-xl font-bold text-white">{cat.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cat.logos.map((logoName, lIdx) => (
                  <div
                    key={lIdx}
                    className={`h-24 bg-navy-950 border border-navy-800 hover:border-gold-500/30 rounded-xl flex flex-col items-center justify-center p-4 text-center transition-all ${
                      isAuditMode ? 'placeholder-highlighted' : ''
                    }`}
                  >
                    <Award className="w-6 h-6 text-gold-400 opacity-40 mb-1" />
                    <span className="text-xs font-medium text-slate-300">{logoName}</span>
                    <PlaceholderBadge label="Partner Logo" className="mt-1" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Callout Banner */}
        <div className="p-8 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border-2 border-gold-500/40 rounded-2xl text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-navy-deep">
          <div className="text-left max-w-xl">
            <h4 className="font-serif text-2xl font-bold text-white mb-1 flex items-center gap-2">
              <Handshake className="w-6 h-6 text-gold-400" />
              <span>Partnership Opportunities Available</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Organizations, corporate institutions, and academic bodies seeking strategic involvement, session sponsorship, or exhibition slots are invited to submit partnership inquiries.
            </p>
          </div>

          <button
            onClick={onOpenNotify}
            className="px-6 py-3.5 bg-gold-gradient hover:bg-gold-gradient-hover text-navy-950 font-bold text-sm rounded-xl shadow-lg shadow-gold-500/20 shrink-0 transition-all"
          >
            Request Partnership Prospectus
          </button>
        </div>

      </div>
    </section>
  );
};
