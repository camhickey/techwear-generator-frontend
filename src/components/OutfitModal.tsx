import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { useEffect, useState } from 'react';
import { getClothing } from '../functions/getClothing';
import { ClothingCard, ClothingCardProps } from './ClothingCard';

interface OutfitModalProps {
  outfit: {
    headwearColor: string;
    topColor: string;
    pantsColor: string;
    footwearColor: string;
  };
  style: string;
  isOpen: boolean;
  onClose: () => void;
}

export function OutfitModal({
  outfit,
  style,
  isOpen,
  onClose,
}: OutfitModalProps) {
  const clothingRequests = [
    {
      color: outfit.headwearColor,
      article: 'HEADWEAR',
    },
    {
      color: outfit.topColor,
      article: 'TOP',
    },
    {
      color: outfit.pantsColor,
      article: 'PANTS',
    },
    {
      color: outfit.footwearColor,
      article: 'FOOTWEAR',
    },
  ];

  const [cards, setCards] = useState<ClothingCardProps[]>([]);

  useEffect(() => {
    clothingRequests.forEach(async (request) => {
      if (!request.color) return;
      await getClothing(style, request.color, request.article).then(
        (clothing) => {
          setCards((prevCards) => [...prevCards, clothing]);
        },
      );
    });
  }, []);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel
          transition
          className="w-full space-y-4 bg-white p-12 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <DialogTitle className="text-lg font-bold">How to use</DialogTitle>
          <div className="flex flex-row">
            {cards.map((card, index) => (
              <ClothingCard key={index} {...card} />
            ))}
          </div>
          <div className="flex gap-4">
            <button onClick={onClose}>Close</button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
