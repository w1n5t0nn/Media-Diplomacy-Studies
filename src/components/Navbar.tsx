import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Eye, Bell, ChevronDown, Globe } from 'lucide-react';

interface NavbarProps {
  onOpenNotify: () => void;
  isAuditMode: boolean;
  onToggleAuditMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenNotify,
  isAuditMode,
  onToggleAuditMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('org-hero');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Core desktop nav links
  const primaryNavLinks = [
    { name: 'Home', href: '#org-hero' },
    { name: 'Consultant Profile', href: '#consultant-profile' },
    { name: 'Media Practices', href: '#consulting' },
    { name: 'Diplomacy Day 2026', href: '#diplomacy-day', isHighlight: true },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  // Secondary shortcuts in "More" dropdown
  const secondaryNavLinks = [
    { name: 'Summit Countdown', href: '#hero' },
    { name: 'About Diplomacy Day', href: '#about-event' },
    { name: 'Ambassador M.T. Mbu Legacy', href: '#ambassador-mbu' },
    { name: 'Event Venue & Date', href: '#event-info' },
    { name: 'Featured Speakers', href: '#speakers' },
    { name: 'Programme Schedule', href: '#programme' },
    { name: 'Registration Notice', href: '#registration' },
    { name: 'FAQs', href: '#faqs' },
  ];

  // All valid links for mobile/tablet drawer
  const allMobileNavLinks = [
    { name: 'Home & Consultancy', href: '#org-hero' },
    { name: 'Consultant Profile (Mkpe Abang)', href: '#consultant-profile' },
    { name: 'Media Advisory Practices', href: '#consulting' },
    { name: 'Flagship: Mbu Diplomacy Day 2026', href: '#diplomacy-day', isHighlight: true },
    { name: 'Ambassador M.T. Mbu Legacy', href: '#ambassador-mbu' },
    { name: 'Event Info & Venue', href: '#event-info' },
    { name: 'Speakers & Agenda', href: '#speakers' },
    { name: 'Registration Notice', href: '#registration' },
    { name: 'Editorial Insights', href: '#insights' },
    { name: 'Secretariat & Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['org-hero', 'consultant-profile', 'consulting', 'diplomacy-day', 'insights', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-md border-b border-gold-500/30 py-2.5 shadow-navy-deep'
          : 'bg-gradient-to-b from-navy-950/90 to-transparent py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Brand Logo & Crest */}
          <a href="#org-hero" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gold-gradient p-0.5 shadow-gold-glow flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-navy-950 rounded-[7px] flex items-center justify-center text-gold-400 font-serif font-bold text-base sm:text-lg">
                MDC
              </div>
            </div>
            <div className="leading-tight">
              <span className="block font-serif text-base sm:text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors whitespace-nowrap">
                Media Diplomacy & Consulting
              </span>
              <span className="block text-[9px] sm:text-[10px] md:text-xs font-mono font-semibold uppercase tracking-widest text-gold-400 whitespace-nowrap">
                mediadiplomacy.org.ng
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Only shown on xl screens 1280px+ to ensure zero clipping) */}
          <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2 shrink">
            {primaryNavLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 py-1.5 text-xs font-medium transition-colors relative whitespace-nowrap rounded-lg ${
                    link.isHighlight
                      ? 'bg-gold-500/10 border border-gold-500/40 text-gold-300 hover:bg-gold-500/20 font-semibold'
                      : isActive
                      ? 'text-gold-400 font-semibold bg-navy-900/60'
                      : 'text-slate-300 hover:text-white hover:bg-navy-900/40'
                  }`}
                >
                  {link.name}
                  {isActive && !link.isHighlight && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-gold-400 rounded-full" />
                  )}
                </a>
              );
            })}

            {/* Desktop "More Summit Links" Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-2.5 py-1.5 text-xs font-medium flex items-center gap-1 text-slate-300 hover:text-white transition-colors whitespace-nowrap"
              >
                <span>Summit Sections</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180 text-gold-400' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-navy-900 border border-gold-500/30 rounded-xl shadow-navy-deep py-2 z-50 backdrop-blur-xl">
                  <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-gold-400 border-b border-navy-800 mb-1">
                    Diplomacy Day Shortcuts
                  </div>
                  {secondaryNavLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-1.5 text-xs text-slate-300 hover:text-gold-300 hover:bg-navy-800 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Right Action Buttons (Shown on xl screens 1280px+) */}
          <div className="hidden xl:flex items-center space-x-2 shrink-0">
            {/* Audit Toggle Button */}
            <button
              onClick={onToggleAuditMode}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-all whitespace-nowrap ${
                isAuditMode
                  ? 'bg-gold-500 text-navy-950 border-gold-400 shadow-gold-glow'
                  : 'bg-navy-900/80 text-slate-300 border-gold-500/20 hover:border-gold-500/50'
              }`}
              title="Toggle highlighting of all placeholder elements on page"
            >
              <Eye className="w-3.5 h-3.5 text-gold-400" />
              <span>{isAuditMode ? 'Audit: ON' : 'Audit'}</span>
            </button>

            {/* Registration Notice CTA */}
            <button
              onClick={onOpenNotify}
              className="px-3.5 py-1.5 bg-gold-gradient hover:bg-gold-gradient-hover text-navy-950 font-bold rounded-lg text-xs shadow-md shadow-gold-500/20 flex items-center gap-1.5 transition-all transform active:scale-95 whitespace-nowrap shrink-0"
            >
              <Bell className="w-3.5 h-3.5" />
              <span>Summit Notice</span>
            </button>
          </div>

          {/* Mobile & Tablet Drawer Trigger (Triggers on all screens under 1280px to prevent ANY clipping!) */}
          <div className="flex items-center space-x-2 xl:hidden shrink-0">
            <button
              onClick={onToggleAuditMode}
              className={`p-2 rounded-lg text-xs border ${
                isAuditMode ? 'bg-gold-500 text-navy-950 border-gold-400' : 'bg-navy-900 text-gold-400 border-gold-500/30'
              }`}
              title="Toggle Audit Mode"
              aria-label="Toggle placeholder audit"
            >
              <Eye className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gold-400 hover:text-white bg-navy-900 border border-gold-500/30 focus:outline-none flex items-center gap-1.5 text-xs font-semibold"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>

        </div>
      </div>

      {/* Responsive Mobile / Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-navy-950/98 border-b border-gold-500/30 px-4 pt-4 pb-6 mt-2 shadow-navy-deep backdrop-blur-2xl max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-navy-800 text-xs font-semibold text-gold-400 uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> Navigation Menu
            </span>
            <span className="font-mono">mediadiplomacy.org.ng</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {allMobileNavLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 text-xs font-medium rounded-xl transition-all flex items-center justify-between ${
                    link.isHighlight
                      ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40 font-bold'
                      : isActive
                      ? 'bg-navy-900 text-gold-400 border border-gold-500/30 font-semibold'
                      : 'text-slate-300 hover:text-gold-400 hover:bg-navy-900 bg-navy-900/50 border border-navy-800'
                  }`}
                >
                  <span className="truncate">{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 ml-1" />}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-navy-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenNotify();
              }}
              className="w-full py-3 bg-gold-gradient text-navy-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <Bell className="w-4 h-4" />
              <span>Amb. Mbu Diplomacy Day (Nov 20, 2026)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
