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
      className="inline-flex uppercase items-center gap-2 bg-gray-700 py-3 px-3 text-white focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
