export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  organization: string;
  roleType: 'Keynote' | 'Panelist' | 'Session Chair' | 'Guest of Honour';
  image: string;
  bio: string;
  isPlaceholder: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Registration' | 'Venue' | 'Participation';
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Press Release' | 'Policy Insight' | 'Event Update' | 'Media Commentary' | 'Speaker Announcement' | 'Media';
  date: string;
  summary: string;
  isPlaceholder: boolean;
}

export interface ConsultingPractice {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  isPlaceholder: boolean;
}

export interface AudienceCategory {
  title: string;
  description: string;
  iconName: string;
}
