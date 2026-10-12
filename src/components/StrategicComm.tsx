import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface StrategicCommProps {
  isAuditMode: boolean;
}

export const StrategicComm: React.FC<StrategicCommProps> = ({ isAuditMode }) => {
  const commAreas = [
    { title: 'Government & Policy Communications', desc: 'Formulating clear public communications articulating legislative & sovereign reforms.' },
    { title: 'Crisis & Special Situation Response', desc: 'Real-time crisis advisory, international media statements, and reputation defense.' },
    { title: 'Multilateral & Diplomatic Messaging', desc: 'Crafting speeches, policy position papers, and communique documents for global summits.' },
    { title: 'Media Relations & Stakeholder Alignment', desc: 'Building sustainable relationships between institutions and international correspondents.' },
  ];

  return (
    <section id="strategic-comm" className="py-16 bg-navy-950 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 block mb-1 font-mono">
            Practice Area III
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Strategic <span className="text-gold-gradient">Communication</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-gradient mx-auto rounded-full mt-3" />
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {commAreas.map((area, idx) => (
            <div
              key={idx}
              className={`p-5 bg-navy-900 border border-navy-800 rounded-xl ${
                isAuditMode ? 'placeholder-highlighted' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <h3 className="font-serif text-base font-bold text-white">{area.title}</h3>
              </div>
              <p className="text-xs text-slate-300 pl-6 mb-2">{area.desc}</p>
              <div className="pl-6">
                <PlaceholderBadge label="Strategic Communication Module" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
