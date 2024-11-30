import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { CustomButton } from '../components/CustomButton';

export function NotFound() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-9xl font-extrabold">404</h1>
      <h1 className="text-neutral-400 text-4xl font-extrabold">
        PAGE NOT FOUND
      </h1>
      <CustomButton
        onClick={() => {
          window.location.href = '/';
        }}
      >
        Return to home
        <ArrowRightIcon className="w-5 h-5" />
      </CustomButton>
    </div>
  );
}
