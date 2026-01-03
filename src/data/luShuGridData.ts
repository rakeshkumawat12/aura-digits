export interface PlaneAnalysis {
  name: string;
  description: string;
  characteristics: string[];
  balanceTip?: string;
}

export interface MissingNumberEffect {
  number: number;
  effect: string;
}

// Lu Shu Grid Layout:
// [4] [9] [2]  <- Mental Plane (Row 1)
// [3] [5] [7]  <- Emotional Plane (Row 2)
// [8] [1] [6]  <- Practical Plane (Row 3)
//  ↑   ↑   ↑
//  │   │   └─ Action Plane (Column 3)
//  │   └───── Will Plane (Column 2)
//  └───────── Thought Plane (Column 1)
// Diagonal 4-5-6: Diagonal Plane
// Diagonal 2-5-8: Second Diagonal (Silver/Property Plane)

export const planeAnalyses: Record<string, PlaneAnalysis> = {
  mental: {
    name: 'Mental Plane',
    description: 'First Row (4-9-2) - Intelligence and Analytical Thinking',
    characteristics: [
      'Sharp and intelligent mind',
      'Strong analytical skills and excellent memory',
      'Learns new things easily',
      'Can succeed in any field of education',
      'Makes a good consultant or advisor',
    ],
    balanceTip: 'Avoid arrogance in words or behavior; stay humble',
  },
  emotional: {
    name: 'Emotional Plane',
    description: 'Second Row (3-5-7) - Heart and Feelings',
    characteristics: [
      'Caring, helpful, and spiritual by nature',
      'Thinks from the heart',
      'Sometimes becomes emotionally sensitive or easily influenced',
      'Important decisions should not be taken emotionally',
      'Be careful of emotional cheating by close people',
      'Better to share financial responsibility with spouse or trusted family member',
    ],
  },
  practical: {
    name: 'Practical Plane (Prosperity Plane)',
    description: 'Third Row (8-1-6) - Business and Material Success',
    characteristics: [
      'Natural business mindset',
      'Loves travel, especially for work',
      'Thinks before taking risks',
      'Goal-oriented, disciplined, and grounded',
      'Strong commercial and profit-loss understanding',
      'Emotionally hard to confuse; very practical thinker',
    ],
    balanceTip: 'Give time to family and relationships; be softer emotionally',
  },
  thought: {
    name: 'Thought Plane (Planning Plane)',
    description: 'First Column (4-3-8) - Strategic Planning',
    characteristics: [
      'Strong planning and strategic thinking',
      'Can achieve almost anything in life',
      'Natural leadership and political mindset',
      'Knows how to get work done in any situation',
      'Smart, persuasive, and result-oriented',
    ],
  },
  will: {
    name: 'Will Plane',
    description: 'Second Column (9-5-1) - Determination and Willpower',
    characteristics: [
      'Powerful willpower (Raj Yog type energy)',
      'Strong communication and influencing ability',
      'Takes action on thoughts and inspires others',
      'Can rise again after downfall',
      'Determined, confident, and argumentative at times',
    ],
    balanceTip: 'Control stubbornness',
  },
  action: {
    name: 'Action Plane (Actor Plane)',
    description: 'Third Column (2-7-6) - Speed and Activity',
    characteristics: [
      'Quick thinker and fast action-taker',
      'Cannot sit idle; always active',
      'High energy level',
      'Works best in action-oriented roles',
    ],
    balanceTip:
      'Avoid hurry; add physical activity to manage energy. Examples: Sachin Tendulkar',
  },
  diagonal1: {
    name: 'Diagonal Plane (4-5-6)',
    description: 'Love, Care and Intuition',
    characteristics: [
      'Loving, caring, and emotionally balanced',
      'Strong intuition',
      'Helps only where truly needed',
      'Clear thinking and good communication',
      'Well-behaved and calm personality',
    ],
  },
  diagonal2: {
    name: 'Second Diagonal Plane (Silver / Property Plane)',
    description: '2-5-8 - Patience and Timing',
    characteristics: [
      'Very patient by nature',
      'Property and real estate are favorable',
      'Knows the right timing',
      'Takes quick action when the time is right',
    ],
  },
};

export const missingNumberEffects: MissingNumberEffect[] = [
  {
    number: 1,
    effect: 'Needs support from others; dependency possible',
  },
  {
    number: 2,
    effect: 'Difficulty understanding emotions; weak intuition',
  },
  {
    number: 3,
    effect: 'Struggles with self expression and self-confidence',
  },
  {
    number: 4,
    effect: 'Poor planning and organization',
  },
  {
    number: 5,
    effect: 'Difficulty finding goals; needs motivation',
  },
  {
    number: 6,
    effect: 'Hides emotions; relationship issues due to high expectations',
  },
  {
    number: 7,
    effect: "Insensitive to others' feelings; family imbalance",
  },
  {
    number: 8,
    effect: 'Poor financial management; careless attitude',
  },
  {
    number: 9,
    effect: "Careless toward others' needs and emotions",
  },
];

/**
 * Analyze a plane (row, column, or diagonal) based on fill percentage
 * @param cells - Array of cell values for the plane
 * @returns Analysis result with fill percentage and strength
 */
export function analyzePlane(cells: number[]): {
  fillPercentage: number;
  filledCount: number;
  totalCount: number;
  strength: 'weak' | 'moderate' | 'strong' | 'very-strong';
  isActive: boolean;
} {
  const totalCount = cells.length;
  const filledCount = cells.filter((cell) => cell > 0).length;
  const fillPercentage = Math.round((filledCount / totalCount) * 100);

  let strength: 'weak' | 'moderate' | 'strong' | 'very-strong' = 'weak';
  if (fillPercentage >= 100) strength = 'very-strong';
  else if (fillPercentage >= 67) strength = 'strong';
  else if (fillPercentage >= 34) strength = 'moderate';

  const isActive = fillPercentage >= 67; // Show analysis if 67% or more filled

  return {
    fillPercentage,
    filledCount,
    totalCount,
    strength,
    isActive,
  };
}

/**
 * Get all plane analyses for a Lu Shu Grid
 * @param grid - 3x3 grid with frequency counts
 * @returns Object with all plane analyses
 */
export function getGridPlaneAnalyses(grid: number[][]) {
  return {
    mental: {
      ...planeAnalyses.mental,
      analysis: analyzePlane([grid[0][0], grid[0][1], grid[0][2]]), // Row 1: 4, 9, 2
    },
    emotional: {
      ...planeAnalyses.emotional,
      analysis: analyzePlane([grid[1][0], grid[1][1], grid[1][2]]), // Row 2: 3, 5, 7
    },
    practical: {
      ...planeAnalyses.practical,
      analysis: analyzePlane([grid[2][0], grid[2][1], grid[2][2]]), // Row 3: 8, 1, 6
    },
    thought: {
      ...planeAnalyses.thought,
      analysis: analyzePlane([grid[0][0], grid[1][0], grid[2][0]]), // Col 1: 4, 3, 8
    },
    will: {
      ...planeAnalyses.will,
      analysis: analyzePlane([grid[0][1], grid[1][1], grid[2][1]]), // Col 2: 9, 5, 1
    },
    action: {
      ...planeAnalyses.action,
      analysis: analyzePlane([grid[0][2], grid[1][2], grid[2][2]]), // Col 3: 2, 7, 6
    },
    diagonal1: {
      ...planeAnalyses.diagonal1,
      analysis: analyzePlane([grid[0][0], grid[1][1], grid[2][2]]), // Diagonal: 4, 5, 6
    },
    diagonal2: {
      ...planeAnalyses.diagonal2,
      analysis: analyzePlane([grid[0][2], grid[1][1], grid[2][0]]), // Diagonal: 2, 5, 8
    },
  };
}

/**
 * Get missing numbers and their effects from the grid
 * @param grid - 3x3 grid with frequency counts
 * @returns Array of missing numbers with their effects
 */
export function getMissingNumbers(grid: number[][]): MissingNumberEffect[] {
  // Grid positions map to numbers:
  // [4] [9] [2]
  // [3] [5] [7]
  // [8] [1] [6]

  const numberPositions: Record<number, [number, number]> = {
    4: [0, 0],
    9: [0, 1],
    2: [0, 2],
    3: [1, 0],
    5: [1, 1],
    7: [1, 2],
    8: [2, 0],
    1: [2, 1],
    6: [2, 2],
  };

  const missing: MissingNumberEffect[] = [];

  for (let num = 1; num <= 9; num++) {
    const [row, col] = numberPositions[num];
    if (grid[row][col] === 0) {
      const effect = missingNumberEffects.find((e) => e.number === num);
      if (effect) {
        missing.push(effect);
      }
    }
  }

  return missing;
}

export default {
  planeAnalyses,
  missingNumberEffects,
  analyzePlane,
  getGridPlaneAnalyses,
  getMissingNumbers,
};
