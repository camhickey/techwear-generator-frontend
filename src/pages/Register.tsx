import { useState } from 'react';
import { useAuth } from '@/useAuth';
import { useNavigate } from 'react-router';
import { TextInput } from '@/components/Input';
import { AuthError } from '@supabase/supabase-js';
import { Button } from '@/components/Button';

export function Register() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const { register, login } = useAuth();
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    await register(email, password)
      .then((res) => {
        if (res.error) throw res.error;
      })
      .catch((error: AuthError) =>
        setError(error instanceof Error ? error.message : 'Register failed'),
      );
  };

  return (
    <div className="flex items-center justify-center bg-black min-h-screen">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-3xl font-bold text-white">{error}</h1>
        <TextInput
          type="email"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="CONFIRM PASSWORD"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          onClick={handleRegister}
          disabled={
            !emailRegex.test(email) ||
            password !== confirmPassword ||
            !password ||
            !confirmPassword
          }
        >
          REGISTER
        </Button>
        <p
          className="text-sm text-neutral-400 hover:cursor-pointer hover:text-white duration-300"
          onClick={() => navigate('/login')}
        >
          Already have an account? Click here to sign in.
        </p>
        <h1 className="font-bold text-white">OR</h1>
        <p
          className="text-sm text-neutral-400 hover:cursor-pointer hover:text-white duration-300"
          onClick={() => navigate('/')}
        >
          Proceed as a guest
        </p>
      </div>
    </div>
  );
}
