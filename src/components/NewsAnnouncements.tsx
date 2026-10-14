import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { NewsItem } from '../types';
import { PlaceholderBadge } from './PlaceholderBadge';

interface NewsAnnouncementsProps {
  isAuditMode: boolean;
}

export const NewsAnnouncements: React.FC<NewsAnnouncementsProps> = ({ isAuditMode }) => {
  const newsItems: NewsItem[] = [
    {
      id: 'news-1',
      title: 'Official Date & Venue Announced for Inaugural Amb. M. T. Mbu Diplomacy Day',
      category: 'Press Release',
      date: '15 August 2026',
      summary: 'The Organising Secretariat confirms 20 November 2026 as the inaugural date for the landmark summit at the Shehu Musa Yar\'Adua Centre, Abuja.',
      isPlaceholder: true,
    },
    {
      id: 'news-2',
      title: 'Advisory Board & Steering Committee Formed for National Dialogue',
      category: 'Event Update',
      date: '02 August 2026',
      summary: 'Senior diplomats, former foreign ministers, and media leaders convene in Abuja to finalize the summit objectives and public diplomacy framework.',
      isPlaceholder: true,
    },
    {
      id: 'news-3',
      title: 'Keynote & Panelist Invitations Extended to Diplomatic Corps',
      category: 'Speaker Announcement',
      date: '20 July 2026',
      summary: 'Official diplomatic dispatches delivered to foreign missions, African Union envoys, and international policy institutes in Abuja.',
      isPlaceholder: true,
    },
    {
      id: 'news-4',
      title: 'Call for Monograph Submissions: State Media Diplomacy in Africa',
      category: 'Media Commentary',
      date: '10 July 2026',
      summary: 'Academic scholars and public diplomacy researchers invited to submit research papers for inclusion in the official summit proceedings.',
      isPlaceholder: true,
    },
  ];

  return (
    <section id="news" className="py-24 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-2">
            Official Bulletin
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            News & <span className="text-gold-gradient">Announcements</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Stay informed with official press releases, committee updates, and speaker notifications.
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className={`p-6 bg-navy-900 border border-navy-800 hover:border-gold-500/40 rounded-2xl transition-all hover:-translate-y-1 group flex flex-col justify-between ${
                isAuditMode ? 'placeholder-highlighted' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-bold uppercase rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-navy-800 flex items-center justify-between">
                <PlaceholderBadge label="Official News Item" />
                <span className="text-xs text-gold-400 font-semibold flex items-center gap-1 group-hover:underline">
                  Read Full Release <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
