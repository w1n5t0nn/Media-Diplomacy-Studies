import React from 'react';
import { BookOpen, Network, Flag, TrendingUp, CheckCircle2 } from 'lucide-react';

export const WhyAttend: React.FC = () => {
  const reasons = [
    {
      icon: <BookOpen className="w-8 h-8 text-gold-400" />,
      title: 'Learn from Experts & Diplomatic Pioneers',
      description: 'Gain rare insights from seasoned career ambassadors, international law authorities, and foreign policy architects on navigating complex geopolitical landscapes.'
    },
    {
      icon: <Network className="w-8 h-8 text-gold-400" />,
      title: 'Network with Diplomats & Policymakers',
      description: 'Connect directly with members of the Diplomatic Corps, federal ministers, media directors, and business executives in high-level executive networking sessions.'
    },
    {
      icon: <Flag className="w-8 h-8 text-gold-400" />,
      title: 'Be Part of a New National Tradition',
      description: 'Participate in the inauguration of an annual national landmark event set to shape Nigeria’s strategic communication and diplomatic identity for decades.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gold-400" />,
      title: 'Master State Media & Global Influence',
      description: 'Understand how public broadcasting, digital diplomacy, and strategic communication can be leveraged to project soft power and economic goodwill.'
    }
  ];

  return (
    <section id="why-attend" className="py-24 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-2">
            Delegate Value
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Why <span className="text-gold-gradient">Attend</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Four compelling reasons why policy leaders and communications professionals must attend this summit.
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-navy-900 border border-navy-800 hover:border-gold-500/40 rounded-2xl transition-all hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="p-4 bg-gold-500/10 border border-gold-500/30 rounded-xl w-fit mb-6 group-hover:bg-gold-500/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-navy-800 flex items-center gap-2 text-xs text-gold-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Executive Summit Pillar {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
