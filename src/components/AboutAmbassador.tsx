import React from 'react';
import { Award, User, Star } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface AboutAmbassadorProps {
  isAuditMode: boolean;
}

export const AboutAmbassador: React.FC<AboutAmbassadorProps> = ({ isAuditMode }) => {
  const highlights = [
    {
      year: '1953 (Age 23)',
      title: 'Nigeria’s Youngest Cabinet Minister',
      description: 'Appointed Federal Minister of Labour & Welfare, becoming the youngest cabinet minister in Nigerian history.'
    },
    {
      year: '1955 – 1959',
      title: 'First UK High Commissioner',
      description: 'Served as Nigeria’s pioneer High Commissioner to the United Kingdom, establishing Nigeria’s premier diplomatic mission in London.'
    },
    {
      year: '1960 – 1966',
      title: 'Federal Minister of Defence (Navy)',
      description: 'Pioneered the modernization of the Nigerian Navy and represented Nigeria in historic UN Security Council sessions.'
    },
    {
      year: '1993',
      title: 'Secretary of Foreign Affairs',
      description: 'Served as Federal Minister / Secretary of Foreign Affairs during a critical transition period in Nigerian diplomacy.'
    }
  ];

  return (
    <section id="ambassador-mbu" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-2">
            Statesman & Diplomatic Icon
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            About Ambassador <span className="text-gold-gradient">Matthew Tawo Mbu</span>
          </h2>
          <p className="text-gold-400 font-serif italic text-lg sm:text-xl">
            (20 November 1929 – 6 February 2012)
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* Profile Grid: Portrait + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Portrait Placeholder Card */}
          <div className="lg:col-span-5">
            <div className={`relative rounded-2xl overflow-hidden border-2 border-gold-500/40 bg-navy-900 shadow-navy-deep p-6 text-center ${isAuditMode ? 'placeholder-highlighted' : ''}`}>
              <div className="h-80 w-full bg-navy-950 rounded-xl border border-navy-800 flex flex-col items-center justify-center p-6 relative">
                <div className="w-24 h-24 rounded-full bg-gold-500/10 border-2 border-gold-500/30 flex items-center justify-center text-gold-400 mb-4">
                  <User className="w-12 h-12" />
                </div>
                <h4 className="font-serif text-xl font-bold text-white mb-1">
                  Ambassador M. T. Mbu
                </h4>
                <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider mb-4">
                  Official Archival Portrait Slot
                </p>
                <PlaceholderBadge label="Ambassador M. T. Mbu High-Res Portrait Image" />
              </div>

              <div className="mt-4 pt-4 border-t border-navy-800 text-xs text-slate-400 italic">
                "Diplomacy is the art of advancing national interest with dignity, intellectual integrity, and unyielding commitment to peace."
              </div>
            </div>
          </div>

          {/* Biography Text */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed">
            <div className="space-y-4 text-base md:text-lg">
              <p className="font-medium text-white">
                Ambassador Matthew Tawo Mbu (LL.B, LL.M, Ph.D) was one of Nigeria's most distinguished nationalists, legal luminaries, elder statesmen, and pioneer diplomats.
              </p>
              <p className="text-sm md:text-base">
                Born on 20 November 1929 in Okundi, Cross River State, Ambassador Mbu entered public service at an extraordinarily young age. In 1953, at just 23 years old, he was appointed Federal Minister of Labour and Welfare — making him the youngest cabinet minister in the history of Nigeria and the British Commonwealth.
              </p>
              <p className="text-sm md:text-base">
                Over a distinguished career spanning six decades, Ambassador Mbu represented Nigeria on the world stage with legendary eloquence, legal precision, and institutional gravitas. He established Nigeria's first High Commission in London, led delegations to the United Nations and the Organization of African Unity (OAU), and served as Pro-Chancellor of the University of Maiduguri and Obafemi Awolowo University.
              </p>
            </div>

            <div className="p-4 bg-navy-900 border border-gold-500/20 rounded-xl flex items-center gap-3">
              <Star className="w-6 h-6 text-gold-400 shrink-0" />
              <div className="text-xs sm:text-sm">
                <strong className="text-white block font-serif">Diplomatic Legacy</strong>
                <span className="text-slate-300">Remembered as "The Grand Old Man of Nigerian Diplomacy", his life remains a benchmark of integrity and strategic statecraft.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Timeline Highlights */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-white text-center mb-10 flex items-center justify-center gap-2">
            <Award className="w-6 h-6 text-gold-400" />
            <span>Career Milestones & Diplomatic Legacy</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-navy-900 border border-navy-800 hover:border-gold-500/40 rounded-xl transition-all hover:-translate-y-1"
              >
                <div className="inline-block px-3 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase rounded-full mb-3">
                  {item.year}
                </div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
