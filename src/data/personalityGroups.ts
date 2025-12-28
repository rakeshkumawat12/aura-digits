export interface PersonalityGroup {
  name: string;
  label: string;
  numbers: number[];
  traits: string[];
  behaviors: string[];
}

export const personalityGroups: Record<'A' | 'B', PersonalityGroup> = {
  A: {
    name: "Group A",
    label: "Career & Achievement Focused",
    numbers: [1, 3, 4, 9],
    traits: [
      "Strong focus on profession and career",
      "Practical and goal-oriented mindset",
      "Inner feeling of \"I must achieve something in life\"",
      "Aggressive and competitive nature",
      "Ego-driven tendencies",
      "Emotionally intense but not very expressive",
      "Natural leadership qualities",
      "Strong decision-making ability",
      "Hyperactive energy",
      "May appear dominating to others"
    ],
    behaviors: [
      "Career is a top priority in life decisions",
      "Prefers logic and strategy over emotions",
      "Takes charge in professional and personal situations",
      "Driven by achievements and recognition"
    ]
  },
  B: {
    name: "Group B",
    label: "Emotional & Creative",
    numbers: [2, 6, 7, 8],
    traits: [
      "Feminine and nurturing qualities",
      "Creative and artistic mindset",
      "Thinks from the heart rather than logic",
      "Emotion-driven decision making",
      "Soft and calm nature",
      "May take emotional decisions even when logic is needed",
      "Caring and empathetic personality",
      "Family-oriented; family is a top priority"
    ],
    behaviors: [
      "Family and relationships come first",
      "Makes decisions based on feelings and intuition",
      "Naturally empathetic and supportive",
      "Values emotional connections over material success"
    ]
  }
};

export interface DigitFrequency {
  digit: number;
  count: number;
}

export interface PersonalityAnalysis {
  digitFrequencies: DigitFrequency[];
  groupACount: number;
  groupBCount: number;
  number5Count: number;
  dominantGroup: 'A' | 'B' | 'balanced';
  personalityType: string;
  traits: string[];
  behaviors: string[];
  description: string;
}

/**
 * Analyze personality based on digit frequency in date of birth
 * @param dob - Date of birth in YYYY-MM-DD format
 * @returns Personality analysis with dominant group and traits
 */
export function analyzePersonalityFromDOB(dob: string): PersonalityAnalysis {
  // Extract digits from DOB (ignore 0)
  const digits = dob.replace(/[-\/]/g, '').split('').map(Number).filter(d => d !== 0);

  // Count frequency of each digit
  const frequencyMap: Record<number, number> = {};
  digits.forEach(digit => {
    frequencyMap[digit] = (frequencyMap[digit] || 0) + 1;
  });

  // Create sorted frequency array
  const digitFrequencies: DigitFrequency[] = Object.entries(frequencyMap)
    .map(([digit, count]) => ({ digit: Number(digit), count }))
    .sort((a, b) => b.count - a.count);

  // Count Group A numbers (1, 3, 4, 9)
  const groupACount = [1, 3, 4, 9].reduce((sum, num) => sum + (frequencyMap[num] || 0), 0);

  // Count Group B numbers (2, 6, 7, 8)
  const groupBCount = [2, 6, 7, 8].reduce((sum, num) => sum + (frequencyMap[num] || 0), 0);

  // Count Number 5 (neutral adapter)
  const number5Count = frequencyMap[5] || 0;

  // Determine dominant group
  let dominantGroup: 'A' | 'B' | 'balanced';
  let personalityType: string;
  let traits: string[];
  let behaviors: string[];
  let description: string;

  // Add number 5 to the dominant group
  const groupATotal = groupACount + number5Count;
  const groupBTotal = groupBCount + number5Count;

  if (groupACount === 0 && groupBCount === 0) {
    // Only number 5
    dominantGroup = 'balanced';
    personalityType = "Flexible & Adaptive";
    traits = [
      "Highly flexible and adaptive nature",
      "Excellent communication skills",
      "Can fit into different situations easily",
      "Balanced approach to career and emotions"
    ];
    behaviors = [
      "Adapts to any environment quickly",
      "Can balance logic and emotions well",
      "Versatile in career choices"
    ];
    description = "Your personality is centered around adaptability and communication. You have the unique ability to balance both career ambitions and emotional connections, making you versatile in various life situations.";
  } else if (Math.abs(groupATotal - groupBTotal) <= 1) {
    // Balanced personality
    dominantGroup = 'balanced';
    personalityType = "Balanced Personality";
    traits = [
      ...personalityGroups.A.traits.slice(0, 5),
      ...personalityGroups.B.traits.slice(0, 5)
    ];
    behaviors = [
      "Can switch between logical and emotional thinking",
      "Balances career ambitions with family needs",
      "Adapts approach based on situation",
      "Values both achievement and relationships equally"
    ];
    description = "You have a beautifully balanced personality with both Group A and Group B qualities. You can be career-focused when needed, yet remain emotionally connected and caring. This balance gives you flexibility in handling different life situations.";
  } else if (groupATotal > groupBTotal) {
    // Group A dominant
    dominantGroup = 'A';
    personalityType = personalityGroups.A.label;
    traits = personalityGroups.A.traits;
    behaviors = personalityGroups.A.behaviors;

    if (number5Count > 0) {
      description = `You are strongly driven by Group A energy with Number 5 amplifying your communication and adaptability. You are career-focused, goal-oriented, and possess strong leadership qualities. Your practical mindset helps you make strategic decisions, though you may need to consciously balance this with emotional awareness.`;
    } else {
      description = `You are dominated by Group A energy, making you highly career-focused and achievement-oriented. Your practical, competitive nature drives you toward success, though you may appear intense or dominating to others. Remember to balance your professional drive with emotional connections.`;
    }
  } else {
    // Group B dominant
    dominantGroup = 'B';
    personalityType = personalityGroups.B.label;
    traits = personalityGroups.B.traits;
    behaviors = personalityGroups.B.behaviors;

    if (number5Count > 0) {
      description = `You are guided by Group B energy with Number 5 enhancing your expressive and communicative nature. You lead with your heart, prioritize relationships, and have a naturally nurturing personality. Your creative and empathetic approach makes you a caring presence in others' lives.`;
    } else {
      description = `You are dominated by Group B energy, making you deeply emotional, caring, and family-oriented. Your decisions come from the heart, and you naturally nurture those around you. While this is a beautiful quality, remember to occasionally apply logic to important decisions.`;
    }
  }

  return {
    digitFrequencies,
    groupACount,
    groupBCount,
    number5Count,
    dominantGroup,
    personalityType,
    traits,
    behaviors,
    description
  };
}

export default {
  personalityGroups,
  analyzePersonalityFromDOB
};
