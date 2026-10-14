import React from 'react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface MediaConsultingProps {
  isAuditMode: boolean;
}

export const MediaConsulting: React.FC<MediaConsultingProps> = ({ isAuditMode }) => {
  const consultingServices = [
    {
      title: 'State Media & Broadcast Advisory',
      description: 'Advising public media corporations and government communications units on digital policy and satellite reach.',
      capabilities: ['Public Broadcast Policy', 'Newsroom Architecture', 'Editorial Standards'],
    },
    {
      title: 'Reputation & Perception Management',
      description: 'Data-driven media intelligence to project positive national perception and manage global crisis scenarios.',
      capabilities: ['Perception Audits', 'Crisis Protocols', 'Stakeholder Mapping'],
    },
    {
      title: 'Executive Media & Spokesperson Coaching',
      description: 'Preparing ministers, ambassadors, and corporate leaders for international press briefings and broadcast interviews.',
      capabilities: ['Press Simulations', 'Crisis Response', 'Interview Coaching'],
    },
    {
      title: 'Institutional Campaign Architecture',
      description: 'Designing multi-channel public interest communication campaigns for government and international institutions.',
      capabilities: ['Multi-Platform Strategy', 'Policy Messaging', 'Impact Analytics'],
    },
  ];

  return (
    <section id="consulting" className="py-16 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 block mb-1 font-mono">
            Practice Area I
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Media <span className="text-gold-gradient">Consulting Practice</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-gradient mx-auto rounded-full mt-3" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {consultingServices.map((service, idx) => (
            <div
              key={idx}
              className={`p-6 bg-navy-900 border border-navy-800 rounded-2xl hover:border-gold-500/30 transition-all ${
                isAuditMode ? 'placeholder-highlighted' : ''
              }`}
            >
              <h3 className="font-serif text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-xs text-slate-300 mb-4">{service.description}</p>
              
              <div className="flex flex-wrap gap-1.5 mb-3">
                {service.capabilities.map((cap, cIdx) => (
                  <span key={cIdx} className="px-2.5 py-0.5 bg-navy-950 border border-navy-700 text-gold-300 text-[11px] rounded-md font-medium">
                    {cap}
                  </span>
                ))}
              </div>

              <div className="pt-2 border-t border-navy-800 flex items-center justify-between">
                <PlaceholderBadge label="Engagement Model" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
