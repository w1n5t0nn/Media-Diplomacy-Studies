import React from 'react';
import { Tag } from 'lucide-react';

interface PlaceholderBadgeProps {
  label: string;
  className?: string;
}

export const PlaceholderBadge: React.FC<PlaceholderBadgeProps> = ({ label, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-gold-500/10 text-gold-400 border border-gold-500/30 rounded-md ${className}`}
      title="This content is placeholder data ready for official asset replacement"
    >
      <Tag className="w-3 h-3 text-gold-400" />
      <span>PLACEHOLDER: {label}</span>
    </span>
  );
};
