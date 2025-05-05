
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { AuthState, Profile } from '@/types/app.types';

interface AuthContextType extends AuthState {
  signUp: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { toast } = useToast();
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    profile: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // Fetch initial session
    const fetchSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          setAuthState(prev => ({ ...prev, user: session.user }));
          await fetchProfile(session.user.id);
        }
      } catch (error) {
        console.error('Error fetching session:', error);
        setAuthState(prev => ({ ...prev, error: 'Failed to fetch session' }));
      } finally {
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    };

    fetchSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          setAuthState(prev => ({ ...prev, user: session.user }));
          await fetchProfile(session.user.id);
        } else {
          setAuthState({ user: null, profile: null, isLoading: false, error: null });
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      // Using type assertion to bypass TypeScript constraints
      const { data, error } = await (supabase as any)
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        throw error;
      }

      setAuthState(prev => ({ ...prev, profile: data as Profile }));
    } catch (error) {
      console.error('Error fetching profile:', error);
      setAuthState(prev => ({ ...prev, error: 'Failed to fetch profile' }));
    }
  };

  const signUp = async (email: string, password: string, firstName: string, lastName: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
          }
        }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Compte créé",
        description: "Vérifiez votre email pour confirmer votre inscription.",
      });
      
    } catch (error: any) {
      console.error('Sign up error:', error);
      toast({
        variant: "destructive",
        title: "Erreur d'inscription",
        description: error.message || "Une erreur s'est produite lors de l'inscription.",
      });
      setAuthState(prev => ({ ...prev, error: error.message }));
    } finally {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Connecté",
        description: "Vous êtes maintenant connecté à GlowGuide.",
      });
      
    } catch (error: any) {
      console.error('Sign in error:', error);
      toast({
        variant: "destructive",
        title: "Erreur de connexion",
        description: error.message || "Email ou mot de passe incorrect.",
      });
      setAuthState(prev => ({ ...prev, error: error.message }));
    } finally {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const signOut = async () => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw error;
      }

      toast({
        title: "Déconnecté",
        description: "Vous êtes maintenant déconnecté.",
      });
      
    } catch (error: any) {
      console.error('Sign out error:', error);
      toast({
        variant: "destructive",
        title: "Erreur de déconnexion",
        description: error.message || "Une erreur s'est produite lors de la déconnexion.",
      });
      setAuthState(prev => ({ ...prev, error: error.message }));
    } finally {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!authState.user) return;
    
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      // Using type assertion to bypass TypeScript constraints
      const { data, error } = await (supabase as any)
        .from('profiles')
        .update(updates)
        .eq('id', authState.user.id)
        .select()
        .single();
      
      if (error) {
        throw error;
      }

      setAuthState(prev => ({
        ...prev,
        profile: data as Profile,
      }));

      toast({
        title: "Profil mis à jour",
        description: "Vos informations ont été mises à jour.",
      });
      
    } catch (error: any) {
      console.error('Update profile error:', error);
      toast({
        variant: "destructive",
        title: "Erreur de mise à jour",
        description: error.message || "Une erreur s'est produite lors de la mise à jour du profil.",
      });
      setAuthState(prev => ({ ...prev, error: error.message }));
    } finally {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const value = {
    ...authState,
    signUp,
    signIn,
    signOut,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
