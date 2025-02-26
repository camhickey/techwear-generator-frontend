import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router';

export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-9xl font-extrabold hover:cursor-default">
        OOPS
      </h1>
      <h1 className="text-neutral-400 text-4xl font-extrabold hover:cursor-default">
        PAGE NOT FOUND
      </h1>
      <button
        className="inline-flex gap-2 items-center bg-black text-white p-2"
        onClick={() => navigate('/')}
      >
        CLICK TO RETURN TO HOME
        <ArrowRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
