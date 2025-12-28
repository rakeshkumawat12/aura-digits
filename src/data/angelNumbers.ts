export interface AngelNumber {
  id: string;
  patterns: string;
  title: string;
  keyword: string;
  icon: string;
  explanation: string;
  action: string;
  theme: 'positive' | 'relationship' | 'caution' | 'calm' | 'neutral';
}

export const angelNumbers: AngelNumber[] = [
  {
    id: '1111',
    patterns: '11:11, 10:10, 0001',
    title: 'New Beginnings',
    keyword: 'Fresh Start',
    icon: '✨',
    explanation: 'The universe is aligning for your new chapter. This is your sign to trust your intuition and take that first step you\'ve been hesitating on. A new opportunity or phase is unfolding—embrace it with confidence.',
    action: 'Trust your gut. Start that project or conversation today.',
    theme: 'positive'
  },
  {
    id: '222',
    patterns: '2:22, 02:02',
    title: 'Connection & Balance',
    keyword: 'Relationships',
    icon: '💝',
    explanation: 'Your relationships need nurturing right now. The universe reminds you that meaningful connections bring strength. Reach out to family or friends—quality time will restore your balance and bring unexpected joy.',
    action: 'Schedule a call or visit with someone you care about.',
    theme: 'relationship'
  },
  {
    id: '333',
    patterns: '3:33, 03:03',
    title: 'Expand Your Circle',
    keyword: 'Networking',
    icon: '🌟',
    explanation: 'New people are entering your life for a reason. This number signals growth through connection—attend that event, join that group, or say yes to new friendships. Collaboration will open doors you didn\'t expect.',
    action: 'Step out of your comfort zone and meet someone new.',
    theme: 'positive'
  },
  {
    id: '444',
    patterns: '4:44, 04:04',
    title: 'Build Strong Foundations',
    keyword: 'Discipline',
    icon: '🎯',
    explanation: 'The angels are calling you to create structure and consistency. Success requires daily commitment. Focus on building solid habits, staying organized, and honoring your routines. Your discipline today creates tomorrow\'s freedom.',
    action: 'Create one small routine and stick to it this week.',
    theme: 'neutral'
  },
  {
    id: '555',
    patterns: '5:55, 05:05',
    title: 'Change is Coming',
    keyword: 'Transformation',
    icon: '🌀',
    explanation: 'Big shifts are on the horizon—embrace them rather than resist. The universe is rearranging things for your highest good. Stay flexible, trust the process, and know that what\'s leaving is making space for something better.',
    action: 'Let go of what no longer serves you. Welcome the new.',
    theme: 'neutral'
  },
  {
    id: '666',
    patterns: '6:66, 06:06',
    title: 'Mindful Spending',
    keyword: 'Financial Awareness',
    icon: '💰',
    explanation: 'Expenses may increase, but this is a gentle reminder to stay mindful with your resources. Review your budget, prioritize needs over wants, and avoid impulsive purchases. Financial awareness now prevents stress later.',
    action: 'Review your spending and create a simple budget plan.',
    theme: 'caution'
  },
  {
    id: '777',
    patterns: '7:77, 7777',
    title: 'Choose Peace',
    keyword: 'Simplicity',
    icon: '🕊️',
    explanation: 'You\'re being guided toward calm and clarity. When faced with chaos or complexity, choose the simpler, more peaceful path. The universe supports your need for rest, reflection, and reducing mental clutter.',
    action: 'Simplify one area of your life today—schedule, space, or mind.',
    theme: 'calm'
  },
  {
    id: '888',
    patterns: '08:88, 08:08',
    title: 'Abundance & Effort',
    keyword: 'Prosperity',
    icon: '💎',
    explanation: 'Your hard work is about to pay off in significant ways. Wealth, recognition, or opportunities are flowing toward you. Keep pushing forward—the universe is multiplying your efforts and preparing you for abundance.',
    action: 'Stay consistent. Your breakthrough is closer than you think.',
    theme: 'positive'
  },
  {
    id: '999',
    patterns: '09:09, 9999',
    title: 'Prioritize Wellness',
    keyword: 'Health First',
    icon: '🌿',
    explanation: 'Your body and mind need attention right now. The angels remind you that health is your true wealth. Rest, nourish yourself, and release stress. Small acts of self-care today prevent bigger issues tomorrow.',
    action: 'Do one thing for your health today—rest, move, or breathe.',
    theme: 'calm'
  }
];

export const getAngelNumberByPatterns = (patterns: string): AngelNumber | undefined => {
  return angelNumbers.find(angel => angel.patterns === patterns);
};

export const getThemeColors = (theme: AngelNumber['theme']) => {
  const themes = {
    positive: {
      gradient: 'from-emerald-500/30 to-emerald-700/30',
      border: 'border-emerald-500/40',
      hover: 'hover:border-emerald-400',
      shadow: 'shadow-emerald-500/20',
      bg: 'bg-emerald-500/20'
    },
    relationship: {
      gradient: 'from-pink-500/30 to-rose-500/30',
      border: 'border-pink-500/40',
      hover: 'hover:border-pink-400',
      shadow: 'shadow-pink-500/20',
      bg: 'bg-pink-500/20'
    },
    caution: {
      gradient: 'from-amber-500/30 to-orange-500/30',
      border: 'border-amber-500/40',
      hover: 'hover:border-amber-400',
      shadow: 'shadow-amber-500/20',
      bg: 'bg-amber-500/20'
    },
    calm: {
      gradient: 'from-blue-500/30 to-violet-500/30',
      border: 'border-blue-500/40',
      hover: 'hover:border-blue-400',
      shadow: 'shadow-blue-500/20',
      bg: 'bg-blue-500/20'
    },
    neutral: {
      gradient: 'from-teal-500/30 to-cyan-500/30',
      border: 'border-teal-500/40',
      hover: 'hover:border-teal-400',
      shadow: 'shadow-teal-500/20',
      bg: 'bg-teal-500/20'
    }
  };

  return themes[theme];
};

export default {
  angelNumbers,
  getAngelNumberByPatterns,
  getThemeColors
};
