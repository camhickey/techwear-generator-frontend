import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  large?: boolean;
  children: ReactNode;
}

export function CustomModal({
  isOpen,
  onClose,
  title,
  large = false,
  children,
}: CustomModalProps) {
  return (
    <Dialog open={isOpen} as="div" onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 w-screen overflow-y-auto p-4">
        <div
          className={`${!large && 'flex'} min-h-full items-center justify-center p-4`}
        >
          <DialogPanel
            transition
            className="space-y-4 bg-black border-solid border-neutral-400 border-2 p-4 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <DialogTitle className="text-lg text-white font-bold flex flex-row items-center justify-between">
              {title}
              <XMarkIcon
                onClick={onClose}
                className="h-8 w-8 hover:cursor-pointer"
              />
            </DialogTitle>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
