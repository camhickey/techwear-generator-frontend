import { Button } from '@headlessui/react';
import { ReactNode } from 'react';

interface CustomButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export function CustomButton({
  children,
  disabled,
  onClick,
}: CustomButtonProps) {
  return (
    <Button
      className="inline-flex items-center gap-2 bg-black uppercase text-sm py-3 px-3 text-white disabled:opacity-50"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
