export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  savedReports: string[];
  createdAt: Date;
}

export interface AuthFormData {
  email: string;
  password: string;
  name?: string;
  confirmPassword?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export interface UserProfile extends User {
  reports: SavedReport[];
}

export interface SavedReport {
  id: string;
  reportId: string;
  savedAt: Date;
  title: string;
}
