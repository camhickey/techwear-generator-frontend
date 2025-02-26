import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ClothingCard } from '@components/ClothingCard';
import { ClothingArticle } from '@/enums';
import { Button } from '@/components/Button';

interface UserOutfitModalProps {
  outfitName: string;
  outfitDetails: {
    name: string;
    price: number;
    image: string;
    link: string;
    article: ClothingArticle;
  }[];
  isOpen: boolean;
  onClose: () => void;
}

export function UserOutfitModal({
  outfitName,
  outfitDetails,
  isOpen,
  onClose,
}: UserOutfitModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="space-y-4 bg-black border-solid border-neutral-400 border-2 p-12 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <DialogTitle className="text-lg text-white font-bold flex flex-row items-center justify-between">
              {outfitName}
              <XMarkIcon
                onClick={onClose}
                className="h-8 w-8 hover:cursor-pointer"
              />
            </DialogTitle>
            <div
              className={`grid md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-rows-4`}
            >
              {outfitDetails.map((item, index) => (
                <ClothingCard
                  key={index}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  link={item.link}
                  article={item.article}
                />
              ))}
            </div>
            <div className="flex flex-row items-center gap-4">
              <Button variant="secondary" onClick={onClose}>
                CLOSE
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
