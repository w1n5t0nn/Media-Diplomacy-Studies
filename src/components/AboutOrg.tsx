import React from 'react';
import { Landmark, Globe2, Building } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface AboutOrgProps {
  isAuditMode: boolean;
}

export const AboutOrg: React.FC<AboutOrgProps> = ({ isAuditMode }) => {
  const pillars = [
    {
      title: 'Media Advisory & Consulting',
      desc: 'Advising state broadcasters and government media entities on strategic positioning, satellite reach, and digital policy.',
      icon: <Building className="w-5 h-5 text-gold-400" />
    },
    {
      title: 'Public Diplomacy & Soft Power',
      desc: 'Formulating cross-border narratives to elevate national standing and sovereign reputation in international forums.',
      icon: <Globe2 className="w-5 h-5 text-gold-400" />
    },
    {
      title: 'Policy Dialogue & Summits',
      desc: 'Convening annual national dialogues and diplomatic conferences connecting ministers, envoys, and scholars.',
      icon: <Landmark className="w-5 h-5 text-gold-400" />
    }
  ];

  const stakeholders = [
    'Government Institutions',
    'Diplomatic Corps & Envoys',
    'Broadcast Networks',
    'Corporate Enterprises',
    'Policy Institutes',
    'International Bodies'
  ];

  return (
    <section id="about-org" className={`py-16 bg-navy-900 border-t border-navy-800 relative ${isAuditMode ? 'placeholder-highlighted' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 font-mono block mb-1">
            Institutional Identity · mediadiplomacy.org.ng
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            About the <span className="text-gold-gradient">Organization</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-gradient mx-auto rounded-full mt-3" />
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((p, idx) => (
            <div key={idx} className="p-6 bg-navy-950 border border-navy-800 rounded-2xl hover:border-gold-500/30 transition-all">
              <div className="p-2.5 bg-gold-500/10 border border-gold-500/30 rounded-xl w-fit mb-4 text-gold-400">
                {p.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Stakeholder Strip */}
        <div id="audience" className="p-6 bg-navy-950 border border-navy-800 rounded-2xl text-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 block mb-3 font-mono">
            Key Stakeholders Served
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {stakeholders.map((s, idx) => (
              <span key={idx} className="px-3 py-1 bg-navy-900 border border-navy-800 text-slate-300 text-xs rounded-lg font-medium">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-navy-900 flex justify-center">
            <PlaceholderBadge label="Organizational Governance & History Archive" />
          </div>
        </div>

      </div>
    </section>
  );
};
