import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { getClothing } from '../functions/getClothing';
import { ClothingCard, ClothingCardProps } from './ClothingCard';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { ClothingNotFoundCard } from './ClothingNotFoundCard';
import { CustomButton } from './CustomButton';

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
      <div className="fixed inset-0 w-screen overflow-y-auto p-4">
        <DialogPanel
          transition
          className="space-y-4 bg-black border-solid border-neutral-400 border-2 p-12 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <DialogTitle className="text-lg text-white font-bold uppercase">
            Your outfit
          </DialogTitle>
          <div className="grid md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-rows-4 gap-4">
            {cards.map((card, index) =>
              card ? (
                <ClothingCard key={index} {...card} />
              ) : (
                <ClothingNotFoundCard
                  key={index}
                  description={`No ${style} ${clothingRequests[index].article.toLowerCase()} in ${clothingRequests[index].color.toLowerCase()} in our database. Your request went through successfully, but clothing meeting this criteria hasn't been added yet.`}
                />
              ),
            )}
          </div>
          <div className="inline-flex gap-4">
            <CustomButton
              onClick={() => {
                setCards([]);
                clothingRequests.forEach((request) => {
                  if (!request.color) return;
                  getClothing(style, request.color, request.article).then(
                    (clothing) => {
                      setCards((prevCards) => [...prevCards, clothing]);
                    },
                  );
                });
              }}
            >
              New outfit
              <ArrowPathIcon className="h-4 w-4" />
            </CustomButton>
            <button className="text-sm uppercase text-white" onClick={onClose}>
              CLOSE
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
