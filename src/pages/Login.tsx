import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '@/useAuth';
import { TextInput } from '@/components/Input';
import { AuthError } from '@supabase/supabase-js';
import { Button } from '@/components/Button';

export function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogIn = () => {
    login(email, password)
      .then((res) => {
        if (res.error) throw res.error;
        navigate('/');
      })
      .catch((error: AuthError) => {
        setError(error instanceof Error ? error.message : 'Login failed');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen">
      <div className="flex flex-col gap-4 text-center">
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
        <p className="text-red-500 text-center text-sm">{error}</p>
        <Button
          onClick={handleLogIn}
          disabled={!emailRegex.test(email) || !password}
        >
          LOGIN
        </Button>
        <p
          className="text-sm text-neutral-400 hover:cursor-pointer hover:text-white duration-300"
          onClick={() => navigate('/register')}
        >
          Don't have an account? Click here to register.
        </p>
        <h1 className="font-bold text-white">OR</h1>
        <p
          className="text-sm text-neutral-400 hover:cursor-pointer hover:text-white duration-300"
          onClick={() => navigate('/')}
        >
          Proceed as a guest
        </p>
        <p
          className="text-sm text-neutral-400 text-center hover:cursor-pointer hover:text-white duration-300"
          onClick={() => alert('Not implemented yet')}
        >
          Forgot password? Click here to reset it.
        </p>
      </div>
    </div>
  );
}
