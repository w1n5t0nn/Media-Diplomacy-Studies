import React from 'react';
import { Radio, Globe, ShieldCheck, MessageSquare, ChevronRight } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface MediaPracticeGridProps {
  isAuditMode: boolean;
}

export const MediaPracticeGrid: React.FC<MediaPracticeGridProps> = ({ isAuditMode }) => {
  const practices = [
    {
      title: 'State Media & Broadcast Advisory',
      desc: 'Advising public broadcasters and government media units on digital transformation, satellite reach, and newsroom policy.',
      icon: <Radio className="w-5 h-5 text-gold-400" />,
      tags: ['Broadcast Policy', 'Newsroom Advisory', 'Editorial Standards']
    },
    {
      title: 'Media Diplomacy & Envoys Briefing',
      desc: 'Structuring media engagements, bilateral press conferences, and public diplomacy frameworks for foreign envoys & ministries.',
      icon: <Globe className="w-5 h-5 text-gold-400" />,
      tags: ['Diplomatic Press', 'Envoys Briefings', 'Soft Power']
    },
    {
      title: 'Crisis & Perception Management',
      desc: 'Media intelligence and real-time response strategies to protect institutional reputation during international news cycles.',
      icon: <ShieldCheck className="w-5 h-5 text-gold-400" />,
      tags: ['Perception Audits', 'Crisis Statements', 'Risk Mitigation']
    },
    {
      title: 'Public Policy & Strategic Messaging',
      desc: 'Formulating clear policy communications, ministerial speeches, and communique documents for international summits.',
      icon: <MessageSquare className="w-5 h-5 text-gold-400" />,
      tags: ['Policy Messaging', 'Summit Communique', 'Executive Writing']
    }
  ];

  return (
    <section id="consulting" className="py-16 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 font-mono block mb-1">
            Media Consulting & Advisory Services
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Core Media <span className="text-gold-gradient">Practices</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-gradient mx-auto rounded-full mt-3" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practices.map((p, idx) => (
            <div
              key={idx}
              className={`p-6 bg-navy-900 border border-navy-800 rounded-2xl hover:border-gold-500/30 transition-all flex flex-col justify-between ${
                isAuditMode ? 'placeholder-highlighted' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-gold-500/10 border border-gold-500/30 rounded-xl text-gold-400 shrink-0">
                    {p.icon}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white">{p.title}</h3>
                </div>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">{p.desc}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-0.5 bg-navy-950 border border-navy-700 text-gold-300 text-[11px] rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t border-navy-800 flex items-center justify-between">
                  <PlaceholderBadge label="Engagement Model" />
                  <a href="#contact" className="text-xs text-gold-400 font-semibold flex items-center gap-1 hover:underline">
                    Inquire Advisory <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
