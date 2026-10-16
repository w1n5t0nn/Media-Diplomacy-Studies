import React from 'react';
import { Radio } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface MediaNetworkStripProps {
  isAuditMode: boolean;
}

export const MediaNetworkStrip: React.FC<MediaNetworkStripProps> = ({ isAuditMode }) => {
  const networks = [
    { name: '[Placeholder: Nigerian Television Authority (NTA)]', type: 'State Television Broadcast' },
    { name: '[Placeholder: Voice of Nigeria (VON)]', type: 'External Radio Broadcast' },
    { name: '[Placeholder: Federal Radio Corp (FRCN)]', type: 'National Radio Network' },
    { name: '[Placeholder: Diplomatic Press Corps Abuja]', type: 'Foreign Correspondents' },
  ];

  return (
    <section className="py-10 bg-navy-900 border-t border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 block mb-4 font-mono">
          Broadcast Media Networks & Press Engagement Spectrum
        </span>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {networks.map((net, idx) => (
            <div
              key={idx}
              className={`p-3 bg-navy-950 border border-navy-800 rounded-xl flex flex-col items-center justify-center text-center ${
                isAuditMode ? 'placeholder-highlighted' : ''
              }`}
            >
              <Radio className="w-5 h-5 text-gold-400 opacity-60 mb-1" />
              <span className="text-xs font-semibold text-white leading-tight mb-0.5">{net.name}</span>
              <span className="text-[10px] text-slate-400 font-mono">{net.type}</span>
              <PlaceholderBadge label="Network Partner" className="mt-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
