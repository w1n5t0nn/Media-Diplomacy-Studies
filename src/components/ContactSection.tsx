import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Globe, Building2 } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface ContactSectionProps {
  isAuditMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isAuditMode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Media Consulting Practice');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-navy-900 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-2 font-mono">
            Secretariat & Consultations · mediadiplomacy.org.ng
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Contact <span className="text-gold-gradient">Secretariat</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Direct communication line for media consulting engagements, public diplomacy partnerships, and summit inquiries.
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Domain & Organization Branding Card */}
            <div className="p-6 bg-navy-950 border border-gold-500/30 rounded-2xl space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 font-mono block">
                Official Web Portal
              </span>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gold-500/10 border border-gold-500/30 rounded-xl text-gold-400">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Media Diplomacy & Consulting</h3>
                  <a href="http://mediadiplomacy.org.ng/" target="_blank" rel="noopener noreferrer" className="text-xs text-gold-400 font-mono hover:underline">
                    http://mediadiplomacy.org.ng/
                  </a>
                </div>
              </div>
            </div>

            {/* Primary Contact Person Box */}
            <div className="p-6 bg-navy-950 border border-navy-800 rounded-2xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block font-mono">
                Lead Secretariat Officer
              </span>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gold-500/10 border border-gold-500/30 rounded-xl text-gold-400">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">Mkpe Abang</h3>
                  <span className="text-xs text-slate-400 font-semibold uppercase">Lead Secretariat Coordinator</span>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="p-6 bg-navy-950 border border-navy-800 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-gold-400 font-serif font-bold text-lg">
                <Phone className="w-5 h-5" />
                <span>Telephone / Direct Line</span>
              </div>
              <div className="space-y-1 text-base text-white font-medium pl-7">
                <a href="tel:+2348099400202" className="block hover:text-gold-400 transition-colors">
                  +234 809 940 0202
                </a>
                <a href="tel:+2348034001911" className="block hover:text-gold-400 transition-colors">
                  +234 803 400 1911
                </a>
              </div>
            </div>

            {/* Email Address */}
            <div className="p-6 bg-navy-950 border border-navy-800 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-gold-400 font-serif font-bold text-lg">
                <Mail className="w-5 h-5" />
                <span>Official Email</span>
              </div>
              <div className="pl-7">
                <a href="mailto:Mkpea5@gmail.com" className="text-base text-white font-medium hover:text-gold-400 transition-colors">
                  Mkpea5@gmail.com
                </a>
              </div>
            </div>

            {/* Office Address Placeholder */}
            <div className={`p-6 bg-navy-950 border border-navy-800 rounded-2xl space-y-3 ${isAuditMode ? 'placeholder-highlighted' : ''}`}>
              <div className="flex items-center gap-2 text-gold-400 font-serif font-bold text-lg">
                <MapPin className="w-5 h-5" />
                <span>Secretariat Physical Address</span>
              </div>
              <p className="text-sm text-slate-300 pl-7 leading-relaxed">
                [PLACEHOLDER: Organising Secretariat Physical Address, Diplomatic Zone, Central Business District, Abuja, FCT, Nigeria]
              </p>
              <div className="pl-7">
                <PlaceholderBadge label="Official Secretariat Address" />
              </div>
            </div>

          </div>

          {/* Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-navy-950 border border-navy-800 p-8 rounded-2xl">
            <h3 className="font-serif text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-gold-400" />
              <span>Submit Institutional Inquiry</span>
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Inquire about media consulting advisory, public diplomacy partnerships, or the Amb. M. T. Mbu Annual Diplomacy Day 2026.
            </p>

            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Amb. / Dr. / Mr. / Ms. Name"
                      className="w-full px-4 py-2.5 bg-navy-900 border border-navy-700 focus:border-gold-500 rounded-lg text-white text-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="delegate@institution.gov.ng"
                      className="w-full px-4 py-2.5 bg-navy-900 border border-navy-700 focus:border-gold-500 rounded-lg text-white text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Inquiry Classification *
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-2.5 bg-navy-900 border border-navy-700 focus:border-gold-500 rounded-lg text-white text-sm focus:outline-none"
                  >
                    <option value="Media Consulting Practice">Media Consulting Advisory</option>
                    <option value="Media Diplomacy Partnerships">Media Diplomacy Partnerships</option>
                    <option value="Strategic Communication">Strategic Communication Services</option>
                    <option value="Amb Mbu Diplomacy Day 2026">Amb. Mbu Annual Diplomacy Day 2026</option>
                    <option value="Press & Media Accreditation">Press & Media Accreditation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Subject / Organization
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Ministry / Embassy / Corporate Advisory Inquiry"
                    className="w-full px-4 py-2.5 bg-navy-900 border border-navy-700 focus:border-gold-500 rounded-lg text-white text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details regarding your consulting requirement or summit inquiry..."
                    className="w-full px-4 py-2.5 bg-navy-900 border border-navy-700 focus:border-gold-500 rounded-lg text-white text-sm focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gold-gradient hover:bg-gold-gradient-hover text-navy-950 font-bold rounded-lg text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Secretariat</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/40 rounded-full flex items-center justify-center text-gold-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-white">Inquiry Transmitted</h4>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Thank you, <strong className="text-gold-400">{name}</strong>. Your message regarding <strong className="text-white">{inquiryType}</strong> has been transmitted to Mkpe Abang and the secretariat team.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
