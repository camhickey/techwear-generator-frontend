import { useState, useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { AuthChangeEvent, Session, User } from '@supabase/supabase-js';

export function useAuth() {
  const supabase = useSupabaseClient();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch the current user session
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setIsLoading(false);
    };
    fetchUser();
  }, [supabase]);

  // Listen for auth state changes (e.g., user signs in or out)
  supabase.auth.onAuthStateChange(
    (event: AuthChangeEvent, session: Session | null) => {
      if (event === 'SIGNED_IN') setUser(session?.user || null);
      else if (event === 'SIGNED_OUT') setUser(null);
    },
  );

  const isAuthenticated = user !== null;

  const login = async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  const register = async (email: string, password: string) => {
    return await supabase.auth.signUp({ email, password });
  };

  const logout = async () => {
    return await supabase.auth.signOut();
  };

  const updateEmail = async (email: string) => {
    return await supabase.auth.updateUser({ email });
  };

  const updatePassword = async (newPassword: string) => {
    return await supabase.auth.updateUser({ password: newPassword });
  };

  const resetPassword = async (email: string) => {
    return await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `http://localhost:5173/reset-password`,
    });
  };

  const deleteUser = async (userId: string) => {
    return await supabase.auth.admin.deleteUser(userId);
  };

  if (isLoading)
    return {
      user,
      isLoading: true,
      logout,
      login,
      register,
      updateEmail,
      updatePassword,
      isAuthenticated: null,
      resetPassword,
      deleteUser,
    };

  return {
    user,
    isLoading: false,
    logout,
    login,
    register,
    updateEmail,
    updatePassword,
    isAuthenticated,
    resetPassword,
    deleteUser,
  };
}
