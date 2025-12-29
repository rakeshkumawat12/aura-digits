// Database types for saved readings
export interface Reading {
  id: string;
  user_id: string;
  date_of_birth: string;
  mulank: number;
  destiny: number;
  lu_shu_grid: LuShuGridData;
  personality_analysis: PersonalityAnalysisData;
  lucky_numbers: LuckyNumbersData;
  angel_numbers?: AngelNumberData[];
  active_planes?: PlaneData[];
  missing_numbers?: MissingNumberData;
  title?: string;
  created_at: string;
  updated_at: string;
}

// Lu Shu Grid structure
export interface LuShuGridData {
  grid: number[][];
  frequencies: Record<number, number>;
}

// Personality analysis structure
export interface PersonalityAnalysisData {
  dominantGroup: 'A' | 'B' | 'balanced';
  groupACount: number;
  groupBCount: number;
  number5Count: number;
  personalityType: string;
  traits: string[];
  behaviors: string[];
  description: string;
}

// Lucky numbers structure
export interface LuckyNumbersData {
  friends: number[];
  enemies: number[];
  neutrals: number[];
}

// Angel number structure
export interface AngelNumberData {
  id: string;
  patterns: string;
  title: string;
  keyword: string;
}

// Plane analysis structure
export interface PlaneData {
  name: string;
  fillPercentage: number;
  strength: 'weak' | 'moderate' | 'strong' | 'very-strong';
  description: string;
  characteristics: string[];
}

// Missing number analysis
export interface MissingNumberEffect {
  number: number;
  effect: string;
}

export interface MissingNumberData {
  missingNumbers: MissingNumberEffect[];
}

// API request/response types
export interface SaveReadingRequest {
  date_of_birth: string;
  mulank: number;
  destiny: number;
  lu_shu_grid: LuShuGridData;
  personality_analysis: PersonalityAnalysisData;
  lucky_numbers: LuckyNumbersData;
  angel_numbers?: AngelNumberData[];
  active_planes?: PlaneData[];
  missing_numbers?: MissingNumberData;
  title?: string;
}

export interface SaveReadingResponse {
  success: boolean;
  reading?: Reading;
  error?: string;
}

export interface GetReadingsResponse {
  success: boolean;
  readings?: Reading[];
  error?: string;
}

export interface GetReadingResponse {
  success: boolean;
  reading?: Reading;
  error?: string;
}

export interface DeleteReadingResponse {
  success: boolean;
  error?: string;
}

// Simplified reading summary for dashboard list
export interface ReadingSummary {
  id: string;
  title: string;
  date_of_birth: string;
  mulank: number;
  destiny: number;
  created_at: string;
}
