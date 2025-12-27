export interface NumerologyInput {
  fullName: string;
  dateOfBirth: Date;
}

export interface NumerologyResult {
  id: string;
  userName: string;
  dateOfBirth: Date;
  mulank: number;
  destiny: number;
  luShuGrid: LuShuGridData;
  interpretation: NumerologyInterpretation;
  createdAt: Date;
}

export interface LuShuGridData {
  grid: number[][];
  missingNumbers: number[];
  repeatingNumbers: { number: number; count: number }[];
  planes: {
    mental: number[];
    emotional: number[];
    practical: number[];
  };
}

export interface NumerologyInterpretation {
  mulank: {
    number: number;
    description: string;
    traits: string[];
  };
  destiny: {
    number: number;
    description: string;
    lifeGoal: string;
  };
  personality: string[];
  strengths: string[];
  weaknesses: string[];
  career: string[];
  relationships: string[];
}

export interface NumberMeaning {
  number: number;
  planet: string;
  element: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  career: string[];
  luckyColor: string;
  luckyDay: string;
}
