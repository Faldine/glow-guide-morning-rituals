
// Définition des types personnalisés pour l'application

// Définition des types principaux
export interface Profile {
  id: string;
  first_name?: string | null;
  last_name?: string | null;
  avatar_url?: string | null;
  skin_type?: string | null;
  skin_concerns?: string[] | null;
  preferences?: any | null;
  created_at: string;
  updated_at: string;
}

export interface Routine {
  id: string;
  user_id: string;
  name: string;
  description?: string | null;
  skin_type?: string | null;
  routine_type: string;
  steps: RoutineStep[];
  duration: number;
  is_preset: boolean;
  created_at: string;
  updated_at: string;
}

export interface Playlist {
  id: string;
  user_id: string;
  name: string;
  description?: string | null;
  tracks: PlaylistTrack[];
  is_preset: boolean;
  created_at: string;
  updated_at: string;
}

export interface RoutineHistory {
  id: string;
  user_id: string;
  routine_id: string;
  completed_at: string;
  duration: number;
  notes?: string | null;
}

export interface SkinAnalysis {
  id: string;
  user_id: string;
  image_url?: string | null;
  results: any;
  created_at: string;
}

// Types additionnels
export interface RoutineStep {
  name: string;
  description: string;
  duration: number;
}

export interface PlaylistTrack {
  title: string;
  artist: string;
  url: string;
  duration: number;
}

// État d'authentification
export interface AuthState {
  user: any | null;
  profile: Profile | null;
  isLoading: boolean;
  error: string | null;
}
