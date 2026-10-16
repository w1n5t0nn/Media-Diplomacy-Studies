import React from 'react';
import { User, Radio, Globe, Mail, Phone, Newspaper } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface LeadConsultantProfileProps {
  isAuditMode: boolean;
}

export const LeadConsultantProfile: React.FC<LeadConsultantProfileProps> = ({ isAuditMode }) => {
  return (
    <section id="consultant-profile" className="py-16 bg-navy-900 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 font-mono block mb-1">
            Lead Media Consultant & Convener
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Consultant <span className="text-gold-gradient">Profile</span>
          </h2>
          <div className="w-16 h-0.5 bg-gold-gradient mx-auto rounded-full mt-3" />
        </div>

        {/* Profile Card */}
        <div className="max-w-4xl mx-auto bg-navy-950 border border-gold-500/30 rounded-2xl p-6 sm:p-8 shadow-navy-deep">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            
            {/* Consultant Photo Frame Placeholder */}
            <div className={`w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-navy-900 border-2 border-gold-500/40 flex flex-col items-center justify-center p-3 text-center shrink-0 ${isAuditMode ? 'placeholder-highlighted' : ''}`}>
              <User className="w-12 h-12 text-gold-400 opacity-60 mb-1" />
              <span className="text-[10px] text-gold-400 font-bold uppercase">Mkpe Abang</span>
              <PlaceholderBadge label="Lead Consultant Photo" className="mt-1" />
            </div>

            {/* Consultant Bio & Clout */}
            <div className="space-y-3 text-center sm:text-left flex-1">
              <div>
                <span className="px-2.5 py-0.5 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Veteran Journalist & Strategic Media Advisor
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  Mkpe Abang
                </h3>
                <p className="text-xs text-gold-300 font-semibold font-mono">
                  Lead Media Consultant · Convener, Amb. M. T. Mbu Diplomacy Day
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Senior journalist, broadcast advisory practitioner, and public diplomacy strategist advising government ministries, foreign missions, and broadcast media organizations on strategic communications, perception management, and state media governance.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs">
                <span className="px-3 py-1 bg-navy-900 border border-navy-800 text-slate-300 rounded-lg flex items-center gap-1.5 font-medium">
                  <Radio className="w-3.5 h-3.5 text-gold-400" /> Broadcast Strategy
                </span>
                <span className="px-3 py-1 bg-navy-900 border border-navy-800 text-slate-300 rounded-lg flex items-center gap-1.5 font-medium">
                  <Globe className="w-3.5 h-3.5 text-gold-400" /> Media Diplomacy
                </span>
                <span className="px-3 py-1 bg-navy-900 border border-navy-800 text-slate-300 rounded-lg flex items-center gap-1.5 font-medium">
                  <Newspaper className="w-3.5 h-3.5 text-gold-400" /> Press Relations
                </span>
              </div>

              {/* Direct Contact Links */}
              <div className="pt-3 border-t border-navy-900 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs">
                <a href="tel:+2348099400202" className="flex items-center gap-1 text-gold-400 hover:underline font-mono">
                  <Phone className="w-3.5 h-3.5" /> +234 809 940 0202
                </a>
                <a href="mailto:Mkpea5@gmail.com" className="flex items-center gap-1 text-gold-400 hover:underline font-mono">
                  <Mail className="w-3.5 h-3.5" /> Mkpea5@gmail.com
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
