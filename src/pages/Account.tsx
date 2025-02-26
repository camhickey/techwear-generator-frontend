import { useAuth } from '@/useAuth';
import { Button } from '@/components/Button';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { AuthError } from '@supabase/supabase-js';
import { CustomModal } from '@/components/CustomModal';
import { TextInput } from '@/components/Input';

export function Account() {
  const navigate = useNavigate();
  const {
    isAuthenticated,
    user,
    logout,
    updatePassword,
    updateEmail,
    deleteUser,
  } = useAuth();
  const [isPasswordModalOpen, setIsPasswordModalOpen] =
    useState<boolean>(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [newEmail, setNewEmail] = useState<string>('');
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChangePassword = async (newPassword: string) => {
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    updatePassword(newPassword)
      .then((res) => {
        if (res.error) throw res.error;
        setIsPasswordModalOpen(false);
        setStatus('Password updated successfully!');
        setError(null);
        setNewPassword('');
        setConfirmPassword('');
      })
      .catch((error: AuthError) => {
        setError(
          error instanceof Error ? error.message : 'Update password failed',
        );
      });
  };

  const handleChangeEmail = (email: string) => {
    updateEmail(email)
      .then((res) => {
        if (res.error) throw res.error;
        setIsEmailModalOpen(false);
        setStatus(`Verification email sent to ${email}`);
        setError(null);
        setNewEmail('');
      })
      .catch((error: AuthError) => {
        setError(
          error instanceof Error ? error.message : 'Update email failed',
        );
      });
  };

  const handleLogout = async () => {
    logout()
      .then((res) => {
        if (res.error) throw res.error;
        navigate('/login');
      })
      .catch((error: AuthError) => {
        setError(error instanceof Error ? error.message : 'Logout failed');
      });
  };

  const handleDeleteAccount = (userId: string) => {
    deleteUser(userId)
      .then((res) => {
        if (res.error) throw res.error;
        navigate('/login');
      })
      .catch((error: AuthError) => {
        setError(
          error instanceof Error ? error.message : 'Delete account failed',
        );
      });
  };

  if (!isAuthenticated || !user) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }
  return (
    <div className="bg-black flex flex-col items-center">
      <div className="flex flex-col gap-4">
        <p className="text-white font-bold text-2xl">ACCOUNT SETTINGS</p>
        <Button
          variant="secondary"
          onClick={() => setIsPasswordModalOpen(true)}
        >
          CHANGE PASSWORD
        </Button>
        <Button variant="secondary" onClick={() => setIsEmailModalOpen(true)}>
          CHANGE EMAIL ADDRESS
        </Button>
        <Button variant="secondary" onClick={handleLogout}>
          LOGOUT
        </Button>
        <Button variant="secondary" onClick={() => setIsDeleteModalOpen(true)}>
          DELETE ACCOUNT
        </Button>
        {status && <p className="text-green-500 text-sm">{status}</p>}
      </div>
      <CustomModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        title="Change password"
      >
        <div className="flex flex-col gap-4">
          <TextInput
            type="password"
            placeholder="NEW PASSWORD"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
          />
          <TextInput
            type="password"
            placeholder="CONFIRM PASSWORD"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div className="flex flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              onClick={() => handleChangePassword(newPassword)}
              disabled={!newPassword || !confirmPassword}
            >
              CHANGE PASSWORD
            </Button>
            <Button
              variant="secondary"
              onClick={() => setIsPasswordModalOpen(false)}
            >
              CANCEL
            </Button>
          </div>
        </div>
      </CustomModal>
      <CustomModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        title="Change email address"
      >
        <div className="flex flex-col gap-4">
          <p className="text-white text-sm">
            Current email<p className="text-neutral-400">{user.email}</p>
          </p>
          <TextInput
            type="email"
            placeholder="NEW EMAIL ADDRESS"
            onChange={(e) => setNewEmail(e.target.value)}
            value={newEmail}
          />
          <div className="flex flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              onClick={() => handleChangeEmail(newEmail)}
              disabled={!emailRegex.test(newEmail)}
            >
              CHANGE EMAIL ADDRESS
            </Button>
            <Button
              variant="secondary"
              onClick={() => setIsEmailModalOpen(false)}
            >
              CANCEL
            </Button>
          </div>
        </div>
      </CustomModal>
      <CustomModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete account"
      >
        <div className="flex flex-col gap-4">
          <p className="text-white text-sm">
            Are you sure you want to delete your account?
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              onClick={() => handleDeleteAccount(user.id)}
            >
              DELETE ACCOUNT
            </Button>
            <Button
              variant="secondary"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              CANCEL
            </Button>
          </div>
        </div>
      </CustomModal>
    </div>
  );
}
