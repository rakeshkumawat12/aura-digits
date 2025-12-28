/**
 * Calculate Mulank (Driver Number) from date of birth
 * Mulank is calculated by reducing the birth date to a single digit
 * @param dob - Date of birth in YYYY-MM-DD format
 * @returns Mulank number (1-9)
 */
export function calculateMulank(dob: string): number {
  const date = new Date(dob);
  const day = date.getDate();

  // Reduce to single digit
  let mulank = day;
  while (mulank > 9) {
    mulank = mulank.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }

  return mulank;
}

/**
 * Calculate Destiny Number from date of birth
 * Sum of all digits in DOB (DD + MM + YYYY) reduced to single digit
 * @param dob - Date of birth in YYYY-MM-DD format
 * @returns Destiny number (1-9)
 */
export function calculateDestinyNumber(dob: string): number {
  const date = new Date(dob);
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() returns 0-11
  const year = date.getFullYear();

  // Sum all the numbers: day + month + year
  let sum = day + month + year;

  // Reduce to single digit
  while (sum > 9) {
    sum = sum.toString().split('').reduce((total, digit) => total + parseInt(digit), 0);
  }

  return sum;
}

/**
 * Calculate Name Number from full name
 * Each letter is assigned a number (A=1, B=2, ..., Z=26), then reduced to single digit
 * @param fullName - Full name
 * @returns Name number (1-9)
 */
export function calculateNameNumber(fullName: string): number {
  const letterValues: Record<string, number> = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
  };

  const cleanName = fullName.toLowerCase().replace(/[^a-z]/g, '');
  let sum = 0;

  for (const char of cleanName) {
    sum += letterValues[char] || 0;
  }

  // Reduce to single digit
  while (sum > 9) {
    sum = sum.toString().split('').reduce((total, digit) => total + parseInt(digit), 0);
  }

  return sum || 1;
}

/**
 * Generate Lu Shu Grid from date of birth
 * Creates a 3x3 grid with numbers 1-9 based on DOB digits
 * @param dob - Date of birth in YYYY-MM-DD format
 * @returns 3x3 grid
 */
export function generateLuShuGrid(dob: string): number[][] {
  const date = new Date(dob);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  // Combine all digits from DOB
  const allDigits = (day + month + year).split('').map(Number);

  // Count frequency of each digit (1-9)
  const frequency: Record<number, number> = {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
  };

  allDigits.forEach(digit => {
    if (digit >= 1 && digit <= 9) {
      frequency[digit]++;
    }
  });

  // Lu Shu Grid layout:
  // [4] [9] [2]
  // [3] [5] [7]
  // [8] [1] [6]
  const grid = [
    [frequency[4], frequency[9], frequency[2]],
    [frequency[3], frequency[5], frequency[7]],
    [frequency[8], frequency[1], frequency[6]]
  ];

  return grid;
}
