import React, { useState } from 'react';
import { X, Copy, Check, Share2, Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://diplomacyday.mbu.org.ng';
  const shareText = "Ambassador M. T. Mbu Annual Diplomacy Day — 20 November 2026, Abuja, Nigeria. 'The Countdown Begins…'";

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareTwitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const shareLinkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const shareEmail = `mailto:?subject=${encodeURIComponent("Ambassador M. T. Mbu Annual Diplomacy Day 2026")}&body=${encodeURIComponent(shareText + "\n\n" + shareUrl)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-navy-900 border border-gold-500/40 rounded-2xl shadow-navy-deep text-white p-6">
        <div className="flex items-center justify-between mb-4 border-b border-navy-800 pb-3">
          <div className="flex items-center gap-2 text-gold-400">
            <Share2 className="w-5 h-5" />
            <h3 className="text-xl font-serif font-bold text-white">Share Event Announcement</h3>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-slate-300 mb-6">
          Invite colleagues and international partners to follow the countdown to the inaugural summit.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <a
            href={shareTwitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 bg-navy-800 hover:bg-navy-700 border border-navy-700 rounded-xl text-sm font-medium transition-colors"
          >
            <Twitter className="w-4 h-4 text-sky-400" />
            <span>Twitter / X</span>
          </a>
          <a
            href={shareLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 bg-navy-800 hover:bg-navy-700 border border-navy-700 rounded-xl text-sm font-medium transition-colors"
          >
            <Linkedin className="w-4 h-4 text-blue-400" />
            <span>LinkedIn</span>
          </a>
          <a
            href={shareFacebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 bg-navy-800 hover:bg-navy-700 border border-navy-700 rounded-xl text-sm font-medium transition-colors"
          >
            <Facebook className="w-4 h-4 text-blue-500" />
            <span>Facebook</span>
          </a>
          <a
            href={shareEmail}
            className="flex items-center gap-2 p-3 bg-navy-800 hover:bg-navy-700 border border-navy-700 rounded-xl text-sm font-medium transition-colors"
          >
            <Mail className="w-4 h-4 text-gold-400" />
            <span>Email</span>
          </a>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Direct Web Link</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="w-full px-3 py-2 bg-navy-950 border border-navy-700 rounded-lg text-xs text-slate-300 focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-colors shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
