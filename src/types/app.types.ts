
import type { Database } from '@/integrations/supabase/types';

// Define custom application types here
export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Routine = Database['public']['Tables']['routines']['Row'];
export type Playlist = Database['public']['Tables']['playlists']['Row'];
export type RoutineHistory = Database['public']['Tables']['routine_history']['Row'];
export type SkinAnalysis = Database['public']['Tables']['skin_analyses']['Row'];

// Additional custom types
export interface AuthState {
  user: any | null;
  profile: Profile | null;
  isLoading: boolean;
  error: string | null;
}

export interface RoutineStep {
  name: string;
  description: string;
  duration: number;
}
