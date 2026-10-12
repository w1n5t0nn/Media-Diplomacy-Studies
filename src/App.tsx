import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { OrgHero } from './components/OrgHero';
import { LeadConsultantProfile } from './components/LeadConsultantProfile';
import { MediaNetworkStrip } from './components/MediaNetworkStrip';
import { MediaPracticeGrid } from './components/MediaPracticeGrid';
import { EventShowcase } from './components/EventShowcase';
import { OrgInsights } from './components/OrgInsights';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { NotifyModal } from './components/NotifyModal';
import { ShareModal } from './components/ShareModal';
import { VenueModal } from './components/VenueModal';

export const App: React.FC = () => {
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isVenueOpen, setIsVenueOpen] = useState(false);
  const [isAuditMode, setIsAuditMode] = useState(false);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 font-sans selection:bg-gold-500 selection:text-navy-950">
      
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenNotify={() => setIsNotifyOpen(true)}
        isAuditMode={isAuditMode}
        onToggleAuditMode={() => setIsAuditMode(!isAuditMode)}
      />

      {/* Main Media Consultant & Secretariat Platform */}
      <main id="main-content">
        {/* Editorial Journalist / Media Consultant Hero Header */}
        <OrgHero
          onOpenNotify={() => setIsNotifyOpen(true)}
          isAuditMode={isAuditMode}
        />

        {/* Lead Media Consultant Profile (Mkpe Abang) */}
        <LeadConsultantProfile isAuditMode={isAuditMode} />

        {/* Broadcast Media Networks Visual Strip */}
        <MediaNetworkStrip isAuditMode={isAuditMode} />

        {/* Unified 4-Card Media Consulting & Diplomacy Practice Grid */}
        <MediaPracticeGrid isAuditMode={isAuditMode} />

        {/* Major Flagship Initiative: Amb. M. T. Mbu Annual Diplomacy Day 2026 (Intact) */}
        <EventShowcase
          onOpenNotify={() => setIsNotifyOpen(true)}
          onOpenShare={() => setIsShareOpen(true)}
          onOpenVenue={() => setIsVenueOpen(true)}
          isAuditMode={isAuditMode}
        />

        {/* Editorial Bulletins & Press Announcements */}
        <OrgInsights isAuditMode={isAuditMode} />

        {/* Secretariat & Consultation Contact (Mkpe Abang) */}
        <ContactSection isAuditMode={isAuditMode} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals */}
      <NotifyModal isOpen={isNotifyOpen} onClose={() => setIsNotifyOpen(false)} />
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
      <VenueModal isOpen={isVenueOpen} onClose={() => setIsVenueOpen(false)} />

    </div>
  );
};

export default App;
