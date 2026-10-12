import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { NewsItem } from '../types';
import { PlaceholderBadge } from './PlaceholderBadge';

interface OrgInsightsProps {
  isAuditMode: boolean;
}

export const OrgInsights: React.FC<OrgInsightsProps> = ({ isAuditMode }) => {
  const insights: NewsItem[] = [
    {
      id: 'insight-1',
      title: 'State Media Diplomacy in the Digital Era: Sovereign Narratives & Global Influence',
      category: 'Policy Insight',
      date: '18 August 2026',
      summary: 'Analysis examining public broadcasting modernization and satellite transmission in Africa.',
      isPlaceholder: true,
    },
    {
      id: 'insight-2',
      title: 'Official Announcement: Inaugural Amb. M. T. Mbu Annual Diplomacy Day Set for 20 Nov 2026',
      category: 'Press Release',
      date: '15 August 2026',
      summary: 'Official bulletin confirming the national diplomacy summit at the Shehu Musa Yar\'Adua Centre, Abuja.',
      isPlaceholder: true,
    },
  ];

  return (
    <section id="insights" className="py-16 bg-navy-950 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 block mb-1 font-mono">
            Editorial Bulletin
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Insights & <span className="text-gold-gradient">Bulletins</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-gradient mx-auto rounded-full mt-3" />
        </div>

        {/* 2 Sleek Headline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((item) => (
            <div
              key={item.id}
              className={`p-6 bg-navy-900 border border-navy-800 rounded-2xl hover:border-gold-500/30 transition-all group flex flex-col justify-between ${
                isAuditMode ? 'placeholder-highlighted' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-bold uppercase rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mb-4">{item.summary}</p>
              </div>

              <div className="pt-3 border-t border-navy-800 flex items-center justify-between">
                <PlaceholderBadge label="Publication" />
                <span className="text-xs text-gold-400 font-semibold flex items-center gap-1 group-hover:underline">
                  Read Release <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
