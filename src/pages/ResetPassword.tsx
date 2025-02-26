import { TextInput } from '@/components/Input';
import { useState, useEffect } from 'react';
import { Button } from '@/components/Button';
import { useAuth } from '@/useAuth';
import supabase from '../../supabaseClient';
import { AuthError } from '@supabase/supabase-js';

export function ResetPassword() {
  const [email, setEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
  const [isResetting, setIsResetting] = useState<boolean>(false);
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const { resetPassword, updatePassword } = useAuth();

  const handleResetPassword = () => {
    resetPassword(email)
      .then((res) => {
        if (res.error) throw res.error;
        setIsResetting(false);
      })
      .catch((error: AuthError) => {
        console.log(error);
      });
  };

  const handleUpdatePassword = () => {
    updatePassword(newPassword)
      .then((res) => {
        if (res.error) throw res.error;
        setIsResetting(false);
      })
      .catch((error: AuthError) => {
        console.log(error);
      });
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event) => {
      if (event == 'PASSWORD_RECOVERY') setIsResetting(true);
    });
  }, []);

  if (isResetting) {
    return (
      <div className="flex flex-col items-center justify-center bg-black min-h-screen">
        <TextInput
          type="password"
          placeholder="NEW PASSWORD"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="CONFIRM PASSWORD"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
        <Button
          disabled={
            newPassword !== confirmNewPassword ||
            !newPassword ||
            !confirmNewPassword
          }
          onClick={handleUpdatePassword}
        >
          UPDATE PASSWORD
        </Button>
      </div>
    );
  }

  if (!isResetting)
    return (
      <div className="flex flex-col items-center justify-center bg-black min-h-screen">
        <TextInput
          type="email"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          disabled={!emailRegex.test(email)}
          onClick={handleResetPassword}
        >
          RESET PASSWORD
        </Button>
      </div>
    );
}
