// Standalone React App Bundle for Media Diplomacy & Consulting Secretariat (mediadiplomacy.org.ng)
const { useState, useEffect, useRef } = React;
const {
  Menu, X, Eye, Bell, ChevronDown, Globe, Building2, Shield, Calendar, ArrowRight,
  Sparkles, Award, MessageSquare, User, Radio, Phone, Mail, MapPin, Send, CheckCircle2,
  ChevronRight, Copy, Check, Share2, Twitter, Linkedin, Facebook, Youtube, Navigation,
  AlertCircle, Search, ArrowUp, HelpCircle, ChevronUp, Tag, Star, Compass, BookOpen, Lock, ShieldCheck, Building, UserCheck
} = lucide;

// 1. Placeholder Badge
const PlaceholderBadge = ({ label, className = '' }) => (
  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-gold-500/10 text-gold-400 border border-gold-500/30 rounded-md ${className}`}>
    <Tag className="w-3 h-3 text-gold-400" />
    <span>PLACEHOLDER: {label}</span>
  </span>
);

// 2. Notify Modal
const NotifyModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid official email address.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail('');
    setName('');
    setOrganization('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg overflow-hidden bg-navy-900 border border-gold-500/40 rounded-2xl shadow-navy-deep text-white">
        <div className="h-2 w-full bg-gold-gradient" />
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full">
          <X className="w-5 h-5" />
        </button>
        <div className="p-6 md:p-8">
          {!isSubmitted ? (
            <>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gold-500/10 border border-gold-500/30 rounded-xl text-gold-400">
                  <Bell className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">Official Notice</span>
                  <h3 className="text-2xl font-serif font-bold text-white">Registration Opening Soon</h3>
                </div>
              </div>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Delegate registration for the <strong className="text-white">Ambassador Matthew Tawo Mbu Annual Diplomacy Day</strong> will officially open in Q3 2026. Submit your details for priority accreditation notification.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Full Name *</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Amb. / Dr. / Mr. / Ms. Full Name" className="w-full px-4 py-2.5 bg-navy-950 border border-navy-700 focus:border-gold-500 rounded-lg text-white text-sm focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Official Email Address *</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="delegate@embassy.gov.ng" className="w-full px-4 py-2.5 bg-navy-950 border border-navy-700 focus:border-gold-500 rounded-lg text-white text-sm focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Organization / Embassy</label>
                  <input type="text" value={organization} onChange={(e) => setOrganization(e.target.value)} placeholder="e.g. Ministry of Foreign Affairs" className="w-full px-4 py-2.5 bg-navy-950 border border-navy-700 focus:border-gold-500 rounded-lg text-white text-sm focus:outline-none" />
                </div>
                {error && <p className="text-xs text-red-400">{error}</p>}
                <button type="submit" className="w-full py-3 bg-gold-gradient hover:bg-gold-gradient-hover text-navy-950 font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 text-sm">
                  <Bell className="w-4 h-4" /> Notify Me When Registration Opens
                </button>
              </form>
            </>
          ) : (
            <div className="py-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 border border-gold-500/40 rounded-full flex items-center justify-center text-gold-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Notification Reserved</h3>
              <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
                Thank you, <strong className="text-gold-400">{name || 'esteemed delegate'}</strong>. We have registered <strong className="text-white">{email}</strong> to receive early accreditation guidelines.
              </p>
              <button onClick={handleReset} className="px-6 py-2.5 bg-navy-800 hover:bg-navy-700 text-gold-400 font-semibold rounded-lg border border-gold-500/30 text-sm">Return to Page</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 3. Share Modal
const ShareModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'http://mediadiplomacy.org.ng';
  const shareText = "Ambassador M. T. Mbu Annual Diplomacy Day — 20 November 2026, Abuja, Nigeria.";

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-navy-900 border border-gold-500/40 rounded-2xl shadow-navy-deep text-white p-6">
        <div className="flex items-center justify-between mb-4 border-b border-navy-800 pb-3">
          <div className="flex items-center gap-2 text-gold-400">
            <Share2 className="w-5 h-5" />
            <h3 className="text-xl font-serif font-bold text-white">Share Event</h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-slate-300 mb-6">Invite colleagues and international partners to follow the countdown.</p>
        <div>
          <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Direct Web Link</label>
          <div className="flex items-center gap-2">
            <input type="text" readOnly value={shareUrl} className="w-full px-3 py-2 bg-navy-950 border border-navy-700 rounded-lg text-xs text-slate-300 focus:outline-none" />
            <button onClick={handleCopy} className="px-4 py-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold rounded-lg text-xs flex items-center gap-1 shrink-0">
              {copied ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Venue Modal
const VenueModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-navy-900 border border-gold-500/40 rounded-2xl shadow-navy-deep text-white p-6 md:p-8">
        <div className="flex items-center justify-between mb-6 border-b border-navy-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gold-500/10 border border-gold-500/30 rounded-xl text-gold-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">Official Host Venue</span>
              <h3 className="text-2xl font-serif font-bold text-white">Shehu Musa Yar'Adua Centre</h3>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-6 text-slate-300 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-navy-950 border border-navy-800 rounded-xl space-y-1">
              <span className="text-xs text-gold-400 font-semibold block">Address</span>
              <p className="text-white">One Memorial Drive, Central Business District, Abuja, FCT, Nigeria</p>
            </div>
            <div className="p-4 bg-navy-950 border border-navy-800 rounded-xl space-y-1">
              <span className="text-xs text-gold-400 font-semibold block">Event Date</span>
              <p className="text-white">Friday, 20 November 2026 (09:00 WAT Prompt)</p>
            </div>
          </div>
          <div className="relative h-44 w-full bg-navy-950 border border-navy-700 rounded-xl flex flex-col items-center justify-center p-4 text-center">
            <MapPin className="w-8 h-8 text-gold-400 mb-2 animate-bounce" />
            <p className="font-serif text-base font-bold text-white">Abuja CBD Venue Map Embed</p>
            <PlaceholderBadge label="ABUJA CBD VENUE MAP" className="mt-2" />
          </div>
          <div className="flex justify-end">
            <a href="https://maps.google.com/?q=Shehu+Musa+Yar%27Adua+Centre+Abuja" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-gold-gradient text-navy-950 font-bold rounded-lg text-sm flex items-center gap-2">
              <Navigation className="w-4 h-4" /> Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// 5. Speaker Modal
const SpeakerModal = ({ speaker, onClose }) => {
  if (!speaker) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-navy-900 border border-gold-500/40 rounded-2xl shadow-navy-deep text-white p-6 md:p-8">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg">
          <X className="w-5 h-5" />
        </button>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
          <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-gold-500/40 bg-navy-950 shrink-0 flex flex-col items-center justify-center text-center p-2">
            <UserCheck className="w-12 h-12 text-gold-400 opacity-60 mb-1" />
            <span className="text-[10px] text-gold-400 font-bold uppercase">Placeholder</span>
          </div>
          <div>
            <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase rounded-full inline-block mb-2">{speaker.roleType}</span>
            <h3 className="text-2xl font-serif font-bold text-white mb-1">{speaker.name}</h3>
            <p className="text-sm text-gold-300 font-semibold mb-1">{speaker.title}</p>
            <p className="text-xs text-slate-400">{speaker.organization}</p>
          </div>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed border-t border-navy-800 pt-4">{speaker.bio}</p>
      </div>
    </div>
  );
};

// 6. Navbar Component
const Navbar = ({ onOpenNotify, isAuditMode, onToggleAuditMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('org-hero');
  const dropdownRef = useRef(null);

  const primaryNavLinks = [
    { name: 'Home', href: '#org-hero' },
    { name: 'Consultant Profile', href: '#consultant-profile' },
    { name: 'Media Practices', href: '#consulting' },
    { name: 'Diplomacy Day 2026', href: '#diplomacy-day', isHighlight: true },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

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

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-navy-950/95 backdrop-blur-md border-b border-gold-500/30 py-2.5 shadow-navy-deep' : 'bg-gradient-to-b from-navy-950/90 to-transparent py-3.5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <a href="#org-hero" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gold-gradient p-0.5 shadow-gold-glow flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-navy-950 rounded-[7px] flex items-center justify-center text-gold-400 font-serif font-bold text-base sm:text-lg">MDC</div>
            </div>
            <div className="leading-tight">
              <span className="block font-serif text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-gold-300 whitespace-nowrap">Media Diplomacy & Consulting</span>
              <span className="block text-[9px] sm:text-[10px] font-mono font-semibold uppercase tracking-widest text-gold-400 whitespace-nowrap">mediadiplomacy.org.ng</span>
            </div>
          </a>

          <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2 shrink">
            {primaryNavLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a key={link.name} href={link.href} className={`px-2.5 py-1.5 text-xs font-medium transition-colors relative whitespace-nowrap rounded-lg ${link.isHighlight ? 'bg-gold-500/10 border border-gold-500/40 text-gold-300 hover:bg-gold-500/20 font-semibold' : isActive ? 'text-gold-400 font-semibold bg-navy-900/60' : 'text-slate-300 hover:text-white hover:bg-navy-900/40'}`}>
                  {link.name}
                  {isActive && !link.isHighlight && <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-gold-400 rounded-full" />}
                </a>
              );
            })}
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="px-2.5 py-1.5 text-xs font-medium flex items-center gap-1 text-slate-300 hover:text-white whitespace-nowrap">
                <span>Summit Sections</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180 text-gold-400' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-navy-900 border border-gold-500/30 rounded-xl shadow-navy-deep py-2 z-50 backdrop-blur-xl">
                  <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-gold-400 border-b border-navy-800 mb-1">Diplomacy Day Shortcuts</div>
                  {secondaryNavLinks.map((link) => (
                    <a key={link.name} href={link.href} onClick={() => setDropdownOpen(false)} className="block px-4 py-1.5 text-xs text-slate-300 hover:text-gold-300 hover:bg-navy-800">
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden xl:flex items-center space-x-2 shrink-0">
            <button onClick={onToggleAuditMode} className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border ${isAuditMode ? 'bg-gold-500 text-navy-950 border-gold-400' : 'bg-navy-900/80 text-slate-300 border-gold-500/20'}`}>
              <Eye className="w-3.5 h-3.5 text-gold-400" />
              <span>{isAuditMode ? 'Audit: ON' : 'Audit'}</span>
            </button>
            <button onClick={onOpenNotify} className="px-3.5 py-1.5 bg-gold-gradient hover:bg-gold-gradient-hover text-navy-950 font-bold rounded-lg text-xs shadow-md flex items-center gap-1.5">
              <Bell className="w-3.5 h-3.5" />
              <span>Summit Notice</span>
            </button>
          </div>

          <div className="flex items-center space-x-2 xl:hidden shrink-0">
            <button onClick={onToggleAuditMode} className={`p-2 rounded-lg text-xs border ${isAuditMode ? 'bg-gold-500 text-navy-950 border-gold-400' : 'bg-navy-900 text-gold-400 border-gold-500/30'}`}>
              <Eye className="w-4 h-4" />
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2.5 rounded-xl text-gold-400 bg-navy-900 border border-gold-500/30 flex items-center gap-1.5 text-xs font-semibold">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden bg-navy-950/98 border-b border-gold-500/30 px-4 pt-4 pb-6 mt-2 shadow-navy-deep max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-navy-800 text-xs font-semibold text-gold-400 uppercase font-mono">
            <span>mediadiplomacy.org.ng</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {allMobileNavLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className={`px-3.5 py-2.5 text-xs font-medium rounded-xl flex items-center justify-between ${link.isHighlight ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40 font-bold' : 'text-slate-300 bg-navy-900/50 border border-navy-800'}`}>
                <span className="truncate">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

// 7. Org Hero Component
const OrgHero = ({ onOpenNotify }) => (
  <section id="org-hero" className="relative pt-32 pb-16 bg-navy-950 overflow-hidden border-b border-navy-800">
    <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gold-500/20 via-navy-900/60 to-navy-950" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-navy-800/60 text-xs">
        <div className="inline-flex items-center gap-2 text-gold-400 font-mono">
          <Globe className="w-3.5 h-3.5" />
          <span>mediadiplomacy.org.ng</span>
        </div>
        <span className="text-slate-400 font-mono hidden sm:inline">Media Consulting & Public Diplomacy</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5 text-left">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Advancing <span className="text-gold-gradient">Public Diplomacy</span> & Strategic Media Influence
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
            High-level media advisory, state media strategy, and policy dialogue for governments, foreign envoys, and international organizations.
          </p>
          <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-300 font-medium">
            <span className="px-3 py-1 bg-navy-900 border border-navy-800 rounded-md">State Media Advisory</span>
            <span className="px-3 py-1 bg-navy-900 border border-navy-800 rounded-md">Reputation & Perception</span>
            <span className="px-3 py-1 bg-navy-900 border border-navy-800 rounded-md">Policy Dialogue</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#consulting" className="px-5 py-3 bg-gold-gradient hover:bg-gold-gradient-hover text-navy-950 font-bold rounded-xl text-xs flex items-center gap-2 shadow-md">
              <span>View Practice Areas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="#diplomacy-day" className="px-5 py-3 bg-navy-900 hover:bg-navy-800 text-gold-300 font-semibold rounded-xl text-xs border border-gold-500/30 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-gold-400" />
              <span>Flagship Summit 2026</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="p-6 bg-navy-900/90 border border-gold-500/40 rounded-2xl shadow-navy-deep space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="px-2.5 py-0.5 bg-gold-500/10 border border-gold-500/30 text-gold-400 font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Flagship Initiative
              </span>
              <span className="font-mono text-slate-400 text-[11px]">20 Nov 2026</span>
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                Amb. M. T. Mbu <br />
                <span className="text-gold-gradient">Annual Diplomacy Day</span>
              </h3>
              <p className="text-xs text-slate-300 mt-2">National strategic dialogue convening diplomats, ministers, and media leaders at the Shehu Musa Yar'Adua Centre, Abuja.</p>
            </div>
            <button onClick={onOpenNotify} className="w-full py-2.5 bg-gold-gradient text-navy-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md">
              <Calendar className="w-3.5 h-3.5" />
              <span>Registration Coming Soon</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// 8. Lead Consultant Profile Component
const LeadConsultantProfile = ({ isAuditMode }) => (
  <section id="consultant-profile" className="py-16 bg-navy-900 border-t border-navy-800 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 font-mono block mb-1">Lead Media Consultant & Convener</span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">Consultant <span className="text-gold-gradient">Profile</span></h2>
        <div className="w-16 h-0.5 bg-gold-gradient mx-auto rounded-full mt-3" />
      </div>
      <div className="max-w-4xl mx-auto bg-navy-950 border border-gold-500/30 rounded-2xl p-6 sm:p-8 shadow-navy-deep">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className={`w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-navy-900 border-2 border-gold-500/40 flex flex-col items-center justify-center p-3 text-center shrink-0 ${isAuditMode ? 'placeholder-highlighted' : ''}`}>
            <User className="w-12 h-12 text-gold-400 opacity-60 mb-1" />
            <span className="text-[10px] text-gold-400 font-bold uppercase">Mkpe Abang</span>
            <PlaceholderBadge label="Lead Consultant Photo" className="mt-1" />
          </div>
          <div className="space-y-3 text-center sm:text-left flex-1">
            <div>
              <span className="px-2.5 py-0.5 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[10px] font-bold uppercase tracking-wider rounded-full">Veteran Journalist & Strategic Media Advisor</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">Mkpe Abang</h3>
              <p className="text-xs text-gold-300 font-semibold font-mono">Lead Media Consultant · Convener, Amb. M. T. Mbu Diplomacy Day</p>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Senior journalist, broadcast advisory practitioner, and public diplomacy strategist advising government ministries, foreign missions, and broadcast media organizations on strategic communications, perception management, and state media governance.</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs">
              <span className="px-3 py-1 bg-navy-900 border border-navy-800 text-slate-300 rounded-lg flex items-center gap-1.5 font-medium"><Radio className="w-3.5 h-3.5 text-gold-400" /> Broadcast Strategy</span>
              <span className="px-3 py-1 bg-navy-900 border border-navy-800 text-slate-300 rounded-lg flex items-center gap-1.5 font-medium"><Globe className="w-3.5 h-3.5 text-gold-400" /> Media Diplomacy</span>
            </div>
            <div className="pt-3 border-t border-navy-900 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs">
              <a href="tel:+2348099400202" className="flex items-center gap-1 text-gold-400 font-mono"><Phone className="w-3.5 h-3.5" /> +234 809 940 0202</a>
              <a href="mailto:Mkpea5@gmail.com" className="flex items-center gap-1 text-gold-400 font-mono"><Mail className="w-3.5 h-3.5" /> Mkpea5@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// 9. Media Network Strip Component
const MediaNetworkStrip = ({ isAuditMode }) => (
  <section className="py-10 bg-navy-900 border-t border-b border-navy-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 block mb-4 font-mono">Broadcast Media Networks & Press Engagement Spectrum</span>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: '[Placeholder: Nigerian Television Authority]', type: 'State Television Broadcast' },
          { name: '[Placeholder: Voice of Nigeria]', type: 'External Radio Broadcast' },
          { name: '[Placeholder: Federal Radio Corp]', type: 'National Radio Network' },
          { name: '[Placeholder: Diplomatic Press Corps]', type: 'Foreign Correspondents' }
        ].map((net, idx) => (
          <div key={idx} className={`p-3 bg-navy-950 border border-navy-800 rounded-xl flex flex-col items-center justify-center text-center ${isAuditMode ? 'placeholder-highlighted' : ''}`}>
            <Radio className="w-5 h-5 text-gold-400 opacity-60 mb-1" />
            <span className="text-xs font-semibold text-white leading-tight mb-0.5">{net.name}</span>
            <span className="text-[10px] text-slate-400 font-mono">{net.type}</span>
            <PlaceholderBadge label="Network Partner" className="mt-1" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 10. Media Practice Grid Component
const MediaPracticeGrid = ({ isAuditMode }) => (
  <section id="consulting" className="py-16 bg-navy-950 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 font-mono block mb-1">Media Consulting & Advisory Services</span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">Core Media <span className="text-gold-gradient">Practices</span></h2>
        <div className="w-16 h-0.5 bg-gold-gradient mx-auto rounded-full mt-3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'State Media & Broadcast Advisory', desc: 'Advising public broadcasters and government media units on digital transformation, satellite reach, and newsroom policy.', tags: ['Broadcast Policy', 'Newsroom Advisory', 'Editorial Standards'] },
          { title: 'Media Diplomacy & Envoys Briefing', desc: 'Structuring media engagements, bilateral press conferences, and public diplomacy frameworks for foreign envoys & ministries.', tags: ['Diplomatic Press', 'Envoys Briefings', 'Soft Power'] },
          { title: 'Crisis & Perception Management', desc: 'Media intelligence and real-time response strategies to protect institutional reputation during international news cycles.', tags: ['Perception Audits', 'Crisis Statements', 'Risk Mitigation'] },
          { title: 'Public Policy & Strategic Messaging', desc: 'Formulating clear policy communications, ministerial speeches, and communique documents for international summits.', tags: ['Policy Messaging', 'Summit Communique', 'Executive Writing'] }
        ].map((p, idx) => (
          <div key={idx} className={`p-6 bg-navy-900 border border-navy-800 rounded-2xl flex flex-col justify-between ${isAuditMode ? 'placeholder-highlighted' : ''}`}>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">{p.desc}</p>
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-0.5 bg-navy-950 border border-navy-700 text-gold-300 text-[11px] rounded-md font-medium">{tag}</span>
                ))}
              </div>
              <div className="pt-2 border-t border-navy-800 flex items-center justify-between">
                <PlaceholderBadge label="Engagement Model" />
                <a href="#contact" className="text-xs text-gold-400 font-semibold flex items-center gap-1 hover:underline">Inquire Advisory <ChevronRight className="w-3.5 h-3.5" /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 11. Hero Component (Flagship Summit Countdown)
const Hero = ({ onOpenNotify, onOpenShare, onOpenVenue, isAuditMode }) => {
  const targetDate = new Date('2026-11-20T09:00:00+01:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = targetDate - new Date().getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000)
      });
    };
    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadCalendar = () => {
    const icsContent = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'BEGIN:VEVENT', 'SUMMARY:Ambassador Matthew Tawo Mbu Annual Diplomacy Day 2026', 'LOCATION:Shehu Musa Yar\'Adua Centre\\, Abuja\\, Nigeria', 'DTSTART:20261120T080000Z', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Mbu_Diplomacy_Day_2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="hero" className="py-16 bg-navy-950 text-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 z-10 relative">
        <p className="font-serif text-gold-400 text-lg sm:text-2xl font-semibold uppercase mb-2">"THE COUNTDOWN BEGINS…"</p>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
          Amb. M. T. Mbu <br /><span className="text-gold-gradient">Annual Diplomacy Day</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
          Diplomacy is no longer confined to embassies. In today's interconnected world, nations compete through ideas, perception, influence, strategic communication and the power of their global narratives.
        </p>
        <div className="mb-8 inline-block p-1 rounded-2xl bg-gradient-to-r from-gold-500/30 to-gold-500/30 border border-gold-500/40">
          <div className="bg-navy-900/90 rounded-xl p-4 sm:p-6">
            <div className="grid grid-cols-4 gap-2 sm:gap-6 text-center">
              {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                <div key={unit} className="flex flex-col items-center">
                  <div className="w-14 sm:w-20 h-14 sm:h-20 bg-navy-950 border border-gold-500/30 rounded-xl flex items-center justify-center">
                    <span className="font-serif text-xl sm:text-3xl font-bold text-gold-400">{String(timeLeft[unit]).padStart(2, '0')}</span>
                  </div>
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">{unit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <button onClick={onOpenNotify} className="px-6 py-3 bg-gold-gradient text-navy-950 font-bold rounded-xl text-xs flex items-center gap-2">
            <Bell className="w-4 h-4" /> Registration Coming Soon
          </button>
          <button onClick={handleDownloadCalendar} className="px-5 py-3 bg-navy-900 border border-gold-500/30 text-white font-semibold rounded-xl text-xs flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gold-400" /> Add to Calendar (.ics)
          </button>
          <button onClick={onOpenShare} className="px-4 py-3 bg-navy-900/60 border border-navy-700 text-slate-300 font-medium rounded-xl text-xs flex items-center gap-2">
            <Share2 className="w-4 h-4 text-gold-400" /> Share Event
          </button>
        </div>
        <p className="font-serif text-base font-bold text-gold-300 uppercase tracking-widest border-t border-navy-800 pt-4">
          Honouring a Legacy. Building Influence. Shaping the Future.
        </p>
      </div>
    </div>
  );
};

// 12. About Event Component
const AboutEvent = () => (
  <div id="about-event" className="py-16 bg-navy-900 border-t border-navy-800">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 block mb-1">Summit Purpose</span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">About the <span className="text-gold-gradient">Annual Diplomacy Day</span></h2>
        <div className="w-16 h-0.5 bg-gold-gradient mx-auto rounded-full mt-3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-300 leading-relaxed">
        <div className="p-6 bg-navy-950 border-l-4 border-gold-500 rounded-r-xl space-y-3">
          <h3 className="font-serif text-xl font-bold text-white">A New National Tradition Begins on 20 November 2026</h3>
          <p>On 20 November 2026, Nigeria marks the inaugural edition of the Ambassador Matthew Tawo Mbu Annual Diplomacy Day — a high-level national institution convened to advance public diplomacy, strategic communication, and international influence.</p>
        </div>
        <div className="p-6 bg-navy-950 border border-gold-500/30 rounded-xl space-y-3">
          <h3 className="font-serif text-xl font-bold text-white">Convening World-Class Delegates</h3>
          <p>The event convenes diplomats, ministers, academic scholars, corporate leaders, and media directors to examine the evolving mechanics of statecraft in an era where global perception shapes economic prosperity.</p>
        </div>
      </div>
    </div>
  </div>
);

// 13. About Ambassador Mbu Component
const AboutAmbassador = ({ isAuditMode }) => (
  <div id="ambassador-mbu" className="py-16 bg-navy-950 border-t border-navy-800">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 block mb-1">Statesman & Diplomatic Icon</span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">About Ambassador <span className="text-gold-gradient">Matthew Tawo Mbu</span></h2>
        <p className="text-gold-400 font-serif italic text-sm mt-1">(20 November 1929 – 6 February 2012)</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5">
          <div className={`p-6 bg-navy-900 border border-gold-500/40 rounded-2xl text-center ${isAuditMode ? 'placeholder-highlighted' : ''}`}>
            <div className="h-64 bg-navy-950 rounded-xl border border-navy-800 flex flex-col items-center justify-center p-4">
              <User className="w-16 h-16 text-gold-400 opacity-60 mb-2" />
              <span className="text-xs text-gold-400 font-bold uppercase">Official Archival Portrait</span>
              <PlaceholderBadge label="Ambassador M. T. Mbu Portrait" className="mt-2" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p className="font-semibold text-white">Ambassador Matthew Tawo Mbu (LL.B, LL.M, Ph.D) was one of Nigeria's most distinguished nationalists, elder statesmen, and pioneer diplomats.</p>
          <p>In 1953, at just 23 years old, he was appointed Federal Minister of Labour and Welfare — becoming the youngest cabinet minister in the history of Nigeria and the British Commonwealth.</p>
          <p>He served as Nigeria's first High Commissioner to the UK (1955–1959), Federal Minister of Defence Navy (1960–1966), and Federal Minister of Foreign Affairs (1993).</p>
        </div>
      </div>
    </div>
  </div>
);

// 14. Event Info Component
const EventInfo = ({ onOpenVenue }) => (
  <div id="event-info" className="py-16 bg-navy-900 border-t border-navy-800">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 block mb-1">Summit Specification</span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Event <span className="text-gold-gradient">Information</span></h2>
      </div>
      <div className="mb-8 p-6 bg-navy-950 border border-gold-500/40 rounded-2xl text-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 block mb-1">Summit Theme 2026</span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">"National Strategic Dialogue on Diplomacy, State Media Diplomacy and Global Influence"</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-navy-950 border border-navy-800 rounded-xl">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 block mb-1">Date</span>
          <h4 className="font-serif text-xl font-bold text-white mb-1">20 November 2026</h4>
          <p className="text-xs text-slate-400">Friday · 09:00 AM WAT Prompt</p>
        </div>
        <div className="p-6 bg-navy-950 border border-navy-800 rounded-xl flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 block mb-1">Venue</span>
            <h4 className="font-serif text-xl font-bold text-white mb-1">Shehu Musa Yar'Adua Centre</h4>
            <p className="text-xs text-slate-400 mb-3">Abuja, Nigeria</p>
          </div>
          <button onClick={onOpenVenue} className="px-3 py-1.5 bg-navy-900 border border-gold-500/30 text-gold-400 font-semibold rounded-lg text-xs">Venue Guide & Map</button>
        </div>
        <div className="p-6 bg-navy-950 border border-navy-800 rounded-xl">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 block mb-1">Target Audience</span>
          <h4 className="font-serif text-xl font-bold text-white mb-1">500+ High-Level Delegates</h4>
          <p className="text-xs text-slate-400">Ministers, Envoys, Media Directors & Scholars</p>
        </div>
      </div>
    </div>
  </div>
);

// 15. Why Attend Component
const WhyAttend = () => (
  <div id="why-attend" className="py-16 bg-navy-950 border-t border-navy-800">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Why <span className="text-gold-gradient">Attend</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'Learn from Experts', desc: 'Gain rare insights from seasoned career ambassadors and foreign policy architects.' },
          { title: 'Network with Diplomats', desc: 'Connect directly with members of the Diplomatic Corps, ministers, and media directors.' },
          { title: 'Inaugural Tradition', desc: 'Be part of the founding edition of Nigeria’s annual public diplomacy summit.' },
          { title: 'Master State Media Influence', desc: 'Understand how public broadcasting and digital diplomacy project soft power.' }
        ].map((item, idx) => (
          <div key={idx} className="p-6 bg-navy-900 border border-navy-800 rounded-xl">
            <h3 className="font-serif text-lg font-bold text-white mb-1">{item.title}</h3>
            <p className="text-xs text-slate-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 16. Speakers Component
const Speakers = ({ isAuditMode }) => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const placeholderSpeakers = [
    { id: '1', name: '[Keynote Speaker Placeholder]', title: 'Minister of Foreign Affairs', organization: 'Ministry of Foreign Affairs', roleType: 'Keynote', bio: 'Placeholder profile reserved for official keynote guest announcement.', isPlaceholder: true },
    { id: '2', name: '[Diplomatic Corps Chair Placeholder]', title: 'Dean of the Diplomatic Corps', organization: 'Diplomatic Mission, Abuja', roleType: 'Guest of Honour', bio: 'Placeholder profile reserved for official ambassador announcement.', isPlaceholder: true },
    { id: '3', name: '[State Media Director Placeholder]', title: 'Director-General', organization: 'State Media Authority', roleType: 'Panelist', bio: 'Placeholder profile reserved for official media speaker announcement.', isPlaceholder: true },
    { id: '4', name: '[International Law Scholar Placeholder]', title: 'Professor of Diplomacy', organization: 'Nigerian Institute of Int\'l Affairs', roleType: 'Session Chair', bio: 'Placeholder profile reserved for official academic speaker announcement.', isPlaceholder: true },
  ];

  return (
    <div id="speakers" className="py-16 bg-navy-900 border-t border-navy-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Featured <span className="text-gold-gradient">Speakers</span></h2>
        </div>
        <div className="mb-8 p-4 bg-gold-500/10 border border-gold-500/30 rounded-xl text-center text-xs text-gold-300 font-bold uppercase tracking-wider">
          More Speakers Coming Soon — Additional ministerial confirmations pending Q3 2026
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {placeholderSpeakers.map((speaker) => (
            <div key={speaker.id} onClick={() => setSelectedSpeaker(speaker)} className={`p-4 bg-navy-950 border border-navy-800 hover:border-gold-500/40 rounded-xl cursor-pointer ${isAuditMode ? 'placeholder-highlighted' : ''}`}>
              <div className="w-full h-36 bg-navy-900 rounded-lg mb-3 flex flex-col items-center justify-center p-2 text-center">
                <UserCheck className="w-8 h-8 text-gold-400 opacity-50 mb-1" />
                <PlaceholderBadge label="Speaker Headshot" />
              </div>
              <span className="text-[10px] bg-navy-800 text-gold-400 px-2 py-0.5 rounded font-bold uppercase">{speaker.roleType}</span>
              <h3 className="font-serif text-sm font-bold text-white mt-1">{speaker.name}</h3>
              <p className="text-[11px] text-slate-400">{speaker.organization}</p>
            </div>
          ))}
        </div>
        <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
      </div>
    </div>
  );
};

// 17. Programme Component
const Programme = () => (
  <div id="programme" className="py-16 bg-navy-950 border-t border-navy-800">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Expected <span className="text-gold-gradient">Programme</span></h2>
      </div>
      <div className="mb-8 p-4 bg-navy-900 border border-gold-500/30 rounded-xl text-center text-xs text-gold-400 font-bold uppercase font-mono">
        Full programme will be updated soon
      </div>
      <div className="space-y-3">
        {[
          { time: '08:30 WAT', title: 'Delegate Accreditation', type: 'Welcome' },
          { time: '09:30 WAT', title: 'Opening Ceremony & Presidential Keynote', type: 'Keynote' },
          { time: '11:30 WAT', title: 'Plenary I: Strategic Communication & Perception', type: 'Panel' },
          { time: '13:00 WAT', title: 'Executive Luncheon & Ambassadorial Roundtable', type: 'Networking' },
          { time: '14:30 WAT', title: 'Plenary II: State Media Broadcasting & Soft Power', type: 'Panel' },
          { time: '16:00 WAT', title: 'Abuja Communique & Closing Ceremony', type: 'Communique' },
        ].map((s, idx) => (
          <div key={idx} className="p-4 bg-navy-900 border border-navy-800 rounded-xl flex items-center justify-between text-xs">
            <div>
              <span className="font-mono font-bold text-gold-400 mr-3">{s.time}</span>
              <strong className="text-white font-serif text-sm">{s.title}</strong>
            </div>
            <span className="px-2 py-0.5 bg-navy-950 text-slate-400 rounded text-[10px] uppercase font-bold">{s.type}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 18. Registration Coming Soon Component
const RegistrationComingSoon = ({ onOpenNotify }) => (
  <div id="registration" className="py-16 bg-navy-900 border-t border-navy-800">
    <div className="max-w-4xl mx-auto px-4">
      <div className="p-8 bg-navy-950 border-2 border-gold-500/40 rounded-2xl text-center space-y-4">
        <span className="px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-bold uppercase rounded-full inline-block">Official Notice</span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Registration <span className="text-gold-gradient">Opens Soon</span></h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">Registrations are not open yet. Official delegate accreditation guidelines and seating tiers will launch in Q3 2026.</p>
        <button onClick={onOpenNotify} className="px-6 py-3 bg-gold-gradient text-navy-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 mx-auto">
          <Bell className="w-4 h-4" /> Notify Me When Registration Opens
        </button>
      </div>
    </div>
  </div>
);

// 19. Partners & Sponsors Component
const PartnersSponsors = ({ onOpenNotify, isAuditMode }) => (
  <div id="partners" className="py-16 bg-navy-950 border-t border-navy-800">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Partners & <span className="text-gold-gradient">Sponsors</span></h2>
        <p className="text-xs text-slate-400 mt-1">Partnership opportunities available</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {['[Ministry Placeholder]', '[Diplomatic Corps Placeholder]', '[NIIA Academic Placeholder]', '[Media Partner Placeholder]'].map((p, idx) => (
          <div key={idx} className={`p-4 bg-navy-900 border border-navy-800 rounded-xl text-center ${isAuditMode ? 'placeholder-highlighted' : ''}`}>
            <span className="text-xs text-slate-300 block mb-1">{p}</span>
            <PlaceholderBadge label="Partner Logo" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// 20. FAQs Component
const FAQs = () => {
  const [openId, setOpenId] = useState('faq-1');
  const faqs = [
    { id: 'faq-1', q: 'Who can attend the Amb. M. T. Mbu Annual Diplomacy Day?', a: 'The summit convenes leaders and professionals from diplomacy, government, academia, corporate business, and state media.' },
    { id: 'faq-2', q: 'Is registration free?', a: 'Yes, delegate participation for the inaugural summit is free of charge, subject to advance accreditation.' },
    { id: 'faq-3', q: 'How do I register?', a: 'Registration opens soon in Q3 2026. Use the "Notify Me" feature to receive early access.' },
    { id: 'faq-4', q: 'Where is the venue?', a: 'Shehu Musa Yar\'Adua Centre, One Memorial Drive, Central Business District, Abuja, Nigeria.' },
    { id: 'faq-5', q: 'Will certificates be issued?', a: 'Yes, accredited delegates receive an official Certificate of Participation and summit proceedings.' },
  ];

  return (
    <div id="faqs" className="py-16 bg-navy-900 border-t border-navy-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Frequently Asked <span className="text-gold-gradient">Questions</span></h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <div key={f.id} className="bg-navy-950 border border-navy-800 rounded-xl overflow-hidden">
              <button onClick={() => setOpenId(openId === f.id ? null : f.id)} className="w-full p-4 text-left font-serif text-sm font-bold text-white flex justify-between">
                <span>{f.q}</span>
                <span>{openId === f.id ? '−' : '+'}</span>
              </button>
              {openId === f.id && <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 21. Event Showcase Wrapper Component (Preserving Flagship Summit Intact)
const EventShowcase = ({ onOpenNotify, onOpenShare, onOpenVenue, isAuditMode }) => (
  <section id="diplomacy-day" className="relative bg-navy-950 border-t-4 border-gold-500">
    <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border-b border-gold-500/40 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 font-mono">Flagship Initiative</span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">Ambassador Matthew Tawo Mbu Annual Diplomacy Day</h2>
        </div>
        <button onClick={onOpenNotify} className="px-4 py-2 bg-gold-gradient text-navy-950 font-bold text-xs rounded-xl shadow">Registration Notice</button>
      </div>
    </div>
    <Hero onOpenNotify={onOpenNotify} onOpenShare={onOpenShare} onOpenVenue={onOpenVenue} isAuditMode={isAuditMode} />
    <AboutEvent />
    <AboutAmbassador isAuditMode={isAuditMode} />
    <EventInfo onOpenVenue={onOpenVenue} />
    <WhyAttend />
    <Speakers isAuditMode={isAuditMode} />
    <Programme />
    <RegistrationComingSoon onOpenNotify={onOpenNotify} />
    <PartnersSponsors onOpenNotify={onOpenNotify} isAuditMode={isAuditMode} />
    <FAQs />
  </section>
);

// 22. Org Insights Component
const OrgInsights = ({ isAuditMode }) => (
  <section id="insights" className="py-16 bg-navy-950 border-t border-navy-800">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 font-mono block mb-1">Editorial Bulletin</span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Insights & <span className="text-gold-gradient">Bulletins</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'State Media Diplomacy in the Digital Era: Sovereign Narratives', category: 'Policy Insight', date: '18 Aug 2026' },
          { title: 'Official Announcement: Inaugural Amb. M. T. Mbu Diplomacy Day Set for 20 Nov 2026', category: 'Press Release', date: '15 Aug 2026' }
        ].map((item, idx) => (
          <div key={idx} className={`p-6 bg-navy-900 border border-navy-800 rounded-xl ${isAuditMode ? 'placeholder-highlighted' : ''}`}>
            <span className="text-[10px] bg-gold-500/10 text-gold-400 px-2 py-0.5 rounded font-bold uppercase">{item.category}</span>
            <h3 className="font-serif text-base font-bold text-white mt-2 mb-1">{item.title}</h3>
            <PlaceholderBadge label="Editorial Release" className="mt-2" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 23. Contact Section Component
const ContactSection = ({ isAuditMode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setIsSent(true);
      setTimeout(() => { setIsSent(false); setName(''); setEmail(''); setMessage(''); }, 5000);
    }
  };

  return (
    <section id="contact" className="py-16 bg-navy-900 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 font-mono block mb-1">Secretariat & Consultations</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Contact <span className="text-gold-gradient">Secretariat</span></h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-navy-950 border border-navy-800 rounded-xl space-y-2">
              <span className="text-[10px] font-mono uppercase text-gold-400 font-bold block">Lead Secretariat Officer</span>
              <h3 className="font-serif text-xl font-bold text-white">Mkpe Abang</h3>
              <p className="text-xs text-slate-400">+234 809 940 0202 · +234 803 400 1911</p>
              <p className="text-xs text-gold-400 font-mono">Mkpea5@gmail.com</p>
            </div>
            <div className={`p-6 bg-navy-950 border border-navy-800 rounded-xl ${isAuditMode ? 'placeholder-highlighted' : ''}`}>
              <span className="text-[10px] font-mono uppercase text-gold-400 font-bold block">Secretariat Physical Address</span>
              <p className="text-xs text-slate-300 mt-1">[PLACEHOLDER: Secretariat Office, Diplomatic Zone, Abuja, FCT, Nigeria]</p>
              <PlaceholderBadge label="Secretariat Address" className="mt-2" />
            </div>
          </div>
          <div className="lg:col-span-7 bg-navy-950 border border-navy-800 p-6 rounded-xl">
            <h3 className="font-serif text-xl font-bold text-white mb-4">Submit Institutional Inquiry</h3>
            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name *" className="w-full px-3 py-2 bg-navy-900 border border-navy-700 rounded text-white text-xs" />
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address *" className="w-full px-3 py-2 bg-navy-900 border border-navy-700 rounded text-white text-xs" />
                <textarea rows={3} required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Inquiry Details *" className="w-full px-3 py-2 bg-navy-900 border border-navy-700 rounded text-white text-xs" />
                <button type="submit" className="w-full py-2.5 bg-gold-gradient text-navy-950 font-bold rounded text-xs shadow">Transmit Inquiry</button>
              </form>
            ) : (
              <div className="py-6 text-center text-xs text-gold-400 font-bold">Inquiry Transmitted to Mkpe Abang & Secretariat.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// 24. Footer Component
const Footer = () => (
  <footer className="bg-navy-950 text-white border-t border-gold-500/30 py-10">
    <div className="max-w-7xl mx-auto px-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <h4 className="font-serif text-lg font-bold text-white">Media Diplomacy & Consulting Secretariat</h4>
        <p className="text-[11px] text-slate-400 font-mono">http://mediadiplomacy.org.ng/ · Mkpe Abang Lead Consultant</p>
      </div>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="p-2.5 bg-navy-900 border border-gold-500/30 text-gold-400 rounded-lg text-xs">
        ↑ Back to Top
      </button>
    </div>
  </footer>
);

// Main App Root Component
const App = () => {
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isVenueOpen, setIsVenueOpen] = useState(false);
  const [isAuditMode, setIsAuditMode] = useState(false);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 font-sans">
      <Navbar onOpenNotify={() => setIsNotifyOpen(true)} isAuditMode={isAuditMode} onToggleAuditMode={() => setIsAuditMode(!isAuditMode)} />
      <main>
        <OrgHero onOpenNotify={() => setIsNotifyOpen(true)} />
        <LeadConsultantProfile isAuditMode={isAuditMode} />
        <MediaNetworkStrip isAuditMode={isAuditMode} />
        <MediaPracticeGrid isAuditMode={isAuditMode} />
        <EventShowcase onOpenNotify={() => setIsNotifyOpen(true)} onOpenShare={() => setIsShareOpen(true)} onOpenVenue={() => setIsVenueOpen(true)} isAuditMode={isAuditMode} />
        <OrgInsights isAuditMode={isAuditMode} />
        <ContactSection isAuditMode={isAuditMode} />
      </main>
      <Footer />
      <NotifyModal isOpen={isNotifyOpen} onClose={() => setIsNotifyOpen(false)} />
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
      <VenueModal isOpen={isVenueOpen} onClose={() => setIsVenueOpen(false)} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
