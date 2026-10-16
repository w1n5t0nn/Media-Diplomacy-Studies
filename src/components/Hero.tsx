import React, { useState, useEffect } from 'react';
import { Calendar, Bell, Share2, ChevronDown, Award, Sparkles } from 'lucide-react';
import { CountdownTime } from '../types';
import { PlaceholderBadge } from './PlaceholderBadge';

interface HeroProps {
  onOpenNotify: () => void;
  onOpenShare: () => void;
  onOpenVenue: () => void;
  isAuditMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenNotify,
  onOpenShare,
  onOpenVenue: _onOpenVenue,
  isAuditMode,
}) => {
  // Target Event Date: 20 November 2026, 09:00 AM WAT
  const targetDate = new Date('2026-11-20T09:00:00+01:00').getTime();

  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Download .ics Calendar File
  const handleDownloadCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Ambassador M.T. Mbu Annual Diplomacy Day//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'SUMMARY:Ambassador Matthew Tawo Mbu Annual Diplomacy Day 2026',
      'DESCRIPTION:National Strategic Dialogue on Diplomacy\\, State Media Diplomacy and Global Influence.',
      'LOCATION:Shehu Musa Yar\'Adua Centre\\, Abuja\\, Nigeria',
      'DTSTART:20261120T080000Z',
      'DTEND:20261120T170000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Mbu_Diplomacy_Day_2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center bg-navy-950 overflow-hidden"
    >
      {/* Background Graphic Grid & Subtle Light Rays */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/20 via-navy-900/40 to-transparent" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-800/40 rounded-full filter blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Top Emblem Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Inaugural National Summit · Abuja 2026</span>
        </div>

        {/* Tagline */}
        <p className="font-serif text-gold-400 text-lg sm:text-2xl md:text-3xl font-semibold tracking-wider uppercase mb-3">
          "THE COUNTDOWN BEGINS…"
        </p>

        {/* Main Event Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto mb-6">
          Amb. M. T. Mbu <br />
          <span className="text-gold-gradient">Annual Diplomacy Day</span>
        </h1>

        {/* Introductory Copy */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          Diplomacy is no longer confined to embassies. In today's interconnected world, nations compete through ideas, perception, influence, strategic communication and the power of their global narratives.
        </p>

        {/* Live Countdown Timer Grid */}
        <div className="mb-12">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-gold-500/30 via-gold-500/10 to-gold-500/30 border border-gold-500/40 shadow-navy-deep">
            <div className="bg-navy-900/90 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-4 gap-2 sm:gap-6 md:gap-8 text-center">
                {/* Days */}
                <div className="flex flex-col items-center">
                  <div className="w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 bg-navy-950 border border-gold-500/30 rounded-xl flex items-center justify-center shadow-inner">
                    <span className="font-serif text-xl sm:text-4xl md:text-5xl font-bold text-gold-400">
                      {String(timeLeft.days).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">
                    Days
                  </span>
                </div>

                {/* Hours */}
                <div className="flex flex-col items-center">
                  <div className="w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 bg-navy-950 border border-gold-500/30 rounded-xl flex items-center justify-center shadow-inner">
                    <span className="font-serif text-xl sm:text-4xl md:text-5xl font-bold text-gold-400">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">
                    Hours
                  </span>
                </div>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <div className="w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 bg-navy-950 border border-gold-500/30 rounded-xl flex items-center justify-center shadow-inner">
                    <span className="font-serif text-xl sm:text-4xl md:text-5xl font-bold text-gold-400">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">
                    Minutes
                  </span>
                </div>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                  <div className="w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 bg-navy-950 border border-gold-500/30 rounded-xl flex items-center justify-center shadow-inner">
                    <span className="font-serif text-xl sm:text-4xl md:text-5xl font-bold text-gold-300 animate-pulse">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">
                    Seconds
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-navy-800 text-xs text-slate-400 flex items-center justify-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-gold-400" />
                <span>Target Event Date: <strong>20 November 2026</strong> · Abuja, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons & Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenNotify}
            className="w-full sm:w-auto px-8 py-4 bg-gold-gradient hover:bg-gold-gradient-hover text-navy-950 font-bold rounded-xl text-base shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            <Bell className="w-5 h-5" />
            <span>Registration Coming Soon</span>
          </button>

          <button
            onClick={handleDownloadCalendar}
            className="w-full sm:w-auto px-6 py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-xl text-base border border-gold-500/30 flex items-center justify-center gap-2 transition-all"
          >
            <Calendar className="w-5 h-5 text-gold-400" />
            <span>Add to Calendar (.ics)</span>
          </button>

          <button
            onClick={onOpenShare}
            className="w-full sm:w-auto px-5 py-4 bg-navy-900/60 hover:bg-navy-800 text-slate-300 hover:text-white font-medium rounded-xl text-sm border border-navy-700 flex items-center justify-center gap-2 transition-all"
          >
            <Share2 className="w-4 h-4 text-gold-400" />
            <span>Share Event</span>
          </button>
        </div>

        {/* Secondary Line */}
        <div className="border-t border-navy-800/80 pt-6">
          <p className="font-serif text-lg sm:text-xl font-bold tracking-widest text-gold-300 uppercase">
            Honouring a Legacy. Building Influence. Shaping the Future.
          </p>
        </div>

        {/* Hero Image / Emblem Placeholder Slot */}
        <div className={`mt-10 max-w-4xl mx-auto ${isAuditMode ? 'placeholder-highlighted' : ''}`}>
          <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 bg-navy-900/80 p-8 text-center backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center py-6">
              <Award className="w-16 h-16 text-gold-400 mb-3 opacity-80" />
              <p className="text-sm font-semibold text-gold-300 uppercase tracking-widest mb-1">
                Official Event Banner Slot
              </p>
              <p className="text-xs text-slate-400 max-w-md mx-auto mb-4">
                Tasteful institutional visual placeholder reserved for official summit artwork, diplomatic seal, or venue imagery.
              </p>
              <PlaceholderBadge label="Hero Official Banner Image" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12">
          <a
            href="#about-event"
            className="inline-flex flex-col items-center gap-1 text-slate-400 hover:text-gold-400 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest font-semibold">Scroll to Discover</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-gold-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
