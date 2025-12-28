export interface NumberRelationship {
  number: number;
  role: string;
  relationships: {
    friends: number[];
    enemies: number[];
    neutrals: number[];
  };
}

export const numberRoles: NumberRelationship[] = [
  {
    number: 1,
    role: "King",
    relationships: {
      friends: [1, 2, 3, 5, 6, 9],
      enemies: [8],
      neutrals: [4, 7],
    },
  },
  {
    number: 2,
    role: "Queen",
    relationships: {
      friends: [1, 2, 3, 5],
      enemies: [8, 4, 9],
      neutrals: [7, 6],
    },
  },
  {
    number: 3,
    role: "Prime Minister",
    relationships: {
      friends: [1, 2, 3, 5, 7],
      enemies: [6],
      neutrals: [4, 8, 9],
    },
  },
  {
    number: 4,
    role: "Rebel",
    relationships: {
      friends: [1, 5, 7, 6, 4, 8],
      enemies: [2, 9, 4, 8],
      neutrals: [3],
    },
  },
  {
    number: 5,
    role: "Prince",
    relationships: {
      friends: [1, 2, 3, 5, 6],
      enemies: [2],
      neutrals: [4, 7, 8, 9],
    },
  },
  {
    number: 6,
    role: "Teacher (Devil)",
    relationships: {
      friends: [1, 4, 5, 6, 7],
      enemies: [3],
      neutrals: [2, 8, 9],
    },
  },
  {
    number: 7,
    role: "Saint",
    relationships: {
      friends: [1, 3, 5, 4, 6],
      enemies: [1],
      neutrals: [8, 2, 7, 9],
    },
  },
  {
    number: 8,
    role: "Judge",
    relationships: {
      friends: [5, 3, 6, 7, 4, 8, 7],
      enemies: [1, 2, 4, 8],
      neutrals: [9],
    },
  },
  {
    number: 9,
    role: "Commander",
    relationships: {
      friends: [1, 3, 5],
      enemies: [4, 2],
      neutrals: [9, 7, 6, 8],
    },
  },
];

export interface LuckyNumbersAnalysis {
  friends: number[];
  enemies: number[];
  neutrals: number[];
}

/**
 * Calculate lucky numbers based on Mulank and Destiny number relationships
 * @param mulank - Mulank (driver) number
 * @param destiny - Destiny (life purpose) number
 * @returns Object with friend, enemy, and neutral numbers
 */
export function calculateLuckyNumbers(
  mulank: number,
  destiny: number
): LuckyNumbersAnalysis {
  const getRoleData = (number: number) =>
    numberRoles.find((role) => role.number === number);

  const mulankData = getRoleData(mulank);
  const destinyData = getRoleData(destiny);

  if (!mulankData || !destinyData) {
    return {
      friends: [],
      enemies: [],
      neutrals: [],
    };
  }

  // Combine friends from both mulank and destiny
  const combinedFriends = [
    ...new Set([
      ...mulankData.relationships.friends,
      ...destinyData.relationships.friends,
    ]),
  ];

  // Combine enemies from both mulank and destiny
  const combinedEnemies = [
    ...new Set([
      ...mulankData.relationships.enemies,
      ...destinyData.relationships.enemies,
    ]),
  ];

  // Combine neutrals from both mulank and destiny
  const combinedNeutrals = [
    ...new Set([
      ...mulankData.relationships.neutrals,
      ...destinyData.relationships.neutrals,
    ]),
  ];

  // Filter to get pure friends (not in enemies or neutrals)
  const friendsNumbers = combinedFriends.filter(
    (number) =>
      !combinedEnemies.includes(number) && !combinedNeutrals.includes(number)
  );

  // Filter to get pure enemies (not in friends or neutrals)
  const enemyNumbers = combinedEnemies.filter(
    (number) =>
      !combinedFriends.includes(number) && !combinedNeutrals.includes(number)
  );

  // Filter to get pure neutrals (not in enemies or friends)
  const neutralNumbers = combinedNeutrals.filter(
    (number) =>
      !combinedEnemies.includes(number) && !combinedFriends.includes(number)
  );

  return {
    friends: friendsNumbers.sort((a, b) => a - b),
    enemies: enemyNumbers.sort((a, b) => a - b),
    neutrals: neutralNumbers.sort((a, b) => a - b),
  };
}

export default {
  numberRoles,
  calculateLuckyNumbers,
};
