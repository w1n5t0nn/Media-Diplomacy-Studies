import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQs: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Who can attend the Amb. M. T. Mbu Annual Diplomacy Day?',
      answer: 'The summit convenes leaders and professionals from diplomacy, government ministries, international organizations, academia, corporate business, state media, and public policy. Attendance includes both accredited VIP diplomatic delegates and registered public participants.',
      category: 'General',
    },
    {
      id: 'faq-2',
      question: 'Is registration free for delegates?',
      answer: 'Yes, delegate participation for the inaugural summit is free of charge, subject to advance online accreditation and venue seating capacity.',
      category: 'Registration',
    },
    {
      id: 'faq-3',
      question: 'How and when can I register?',
      answer: 'Registrations are not open yet. The official registration portal will launch in Q3 2026. You can submit your email address via the "Registration Coming Soon / Notify Me" feature on this website to receive priority alert as soon as portal access opens.',
      category: 'Registration',
    },
    {
      id: 'faq-4',
      question: 'Where is the official host venue located?',
      answer: 'The event takes place at the landmark Shehu Musa Yar\'Adua Centre, located at One Memorial Drive, Central Business District, Abuja, FCT, Nigeria.',
      category: 'Venue',
    },
    {
      id: 'faq-5',
      question: 'Will official certificates of attendance or summit proceedings be issued?',
      answer: 'Yes, all fully accredited delegates who complete the summit will receive an official Executive Certificate of Participation, along with a digital copy of the inaugural Abuja Communique on Public Diplomacy.',
      category: 'Participation',
    },
    {
      id: 'faq-6',
      question: 'How can organizations apply for partnership or sponsorship?',
      answer: 'Sponsorship opportunities are available for corporate entities, diplomatic missions, and broadcast networks. Contact the Organising Secretariat via email at Mkpea5@gmail.com or phone at +234 809 940 0202.',
      category: 'Participation',
    },
    {
      id: 'faq-7',
      question: 'What is the required dress code for the event?',
      answer: 'The official dress code is Formal Diplomatic Attire, Dark Business Suit, or Official National Traditional Attire.',
      category: 'General',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-24 bg-navy-900 border-t border-navy-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block mb-2">
            Delegate Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="text-slate-300 text-base">
            Clear answers to common questions regarding delegate participation, venue, and registration.
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-6" />
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. registration, venue, dress code)..."
            className="w-full pl-11 pr-4 py-3 bg-navy-950 border border-navy-700 focus:border-gold-500 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-navy-950 border border-navy-800 hover:border-gold-500/30 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-bold text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-gold-400 shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gold-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-navy-900 text-slate-300 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
