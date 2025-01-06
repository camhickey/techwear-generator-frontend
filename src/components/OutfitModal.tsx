import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { Articles, ClothingStyles, Colors } from '../enums/enums';
import { ClothingCardProps, ClothingCard } from './ClothingCard';
import { ClothingNotFoundCard } from './ClothingNotFoundCard';
import { getClothing } from '../functions/getClothing';
interface OutfitModalProps {
  outfit: {
    headwearColor: Colors;
    topColor: Colors;
    pantsColor: Colors;
    footwearColor: Colors;
  };
  style: ClothingStyles;
  isOpen: boolean;
  onClose: () => void;
}

export function OutfitModal({
  outfit,
  style,
  isOpen,
  onClose,
}: OutfitModalProps) {
  const [headwear, setHeadwear] = useState<ClothingCardProps | null>(null);
  const [top, setTop] = useState<ClothingCardProps | null>(null);
  const [pants, setPants] = useState<ClothingCardProps | null>(null);
  const [footwear, setFootwear] = useState<ClothingCardProps | null>(null);
  const [isHeadwearLoading, setIsHeadwearLoading] = useState(true);
  const [isTopLoading, setIsTopLoading] = useState(true);
  const [isPantsLoading, setIsPantsLoading] = useState(true);
  const [isFootwearLoading, setIsFootwearLoading] = useState(true);

  const handleHeadwearUpdate = () => {
    setIsHeadwearLoading(true);
    getClothing(style, outfit.headwearColor, Articles.HEADWEAR)
      .then((headwear: ClothingCardProps) => setHeadwear(headwear))
      .finally(() => setIsHeadwearLoading(false));
  };

  const handleTopUpdate = () => {
    setIsTopLoading(true);
    getClothing(style, outfit.topColor, Articles.TOP)
      .then((top: ClothingCardProps) => setTop(top))
      .finally(() => setIsTopLoading(false));
  };

  const handlePantsUpdate = () => {
    setIsPantsLoading(true);
    getClothing(style, outfit.pantsColor, Articles.PANTS)
      .then((pants: ClothingCardProps) => setPants(pants))
      .finally(() => setIsPantsLoading(false));
  };

  const handleFootwearUpdate = () => {
    setIsFootwearLoading(true);
    getClothing(style, outfit.pantsColor, Articles.FOOTWEAR)
      .then((footwear: ClothingCardProps) => setFootwear(footwear))
      .finally(() => setIsFootwearLoading(false));
  };

  const handleOutfitUpdate = () => {
    handleHeadwearUpdate();
    handleTopUpdate();
    handlePantsUpdate();
    handleFootwearUpdate();
  };

  useEffect(() => {
    isOpen && handleOutfitUpdate();
  }, [isOpen]);

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
          <div
            className={`grid md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-rows-4`}
          >
            {headwear ? (
              <ClothingCard
                {...headwear}
                onRefresh={handleHeadwearUpdate}
                isLoading={isHeadwearLoading}
              />
            ) : (
              <ClothingNotFoundCard
                color={outfit.headwearColor}
                article={Articles.HEADWEAR}
              />
            )}
            {top ? (
              <ClothingCard
                {...top}
                onRefresh={handleTopUpdate}
                isLoading={isTopLoading}
              />
            ) : (
              <ClothingNotFoundCard
                color={outfit.topColor}
                article={Articles.TOP}
              />
            )}
            {pants ? (
              <ClothingCard
                {...pants}
                onRefresh={handlePantsUpdate}
                isLoading={isPantsLoading}
              />
            ) : (
              <ClothingNotFoundCard
                color={outfit.pantsColor}
                article={Articles.PANTS}
              />
            )}
            {footwear ? (
              <ClothingCard
                {...footwear}
                onRefresh={handleFootwearUpdate}
                isLoading={isFootwearLoading}
              />
            ) : (
              <ClothingNotFoundCard
                color={outfit.footwearColor}
                article={Articles.FOOTWEAR}
              />
            )}
          </div>
          <div className="inline-flex gap-4">
            <button
              className="inline-flex gap-2 items-center bg-black text-white uppercase p-2"
              onClick={handleOutfitUpdate}
            >
              New outfit
              <ArrowPathIcon className="h-5 w-5" />
            </button>
            <button
              className="bg-black uppercase text-white p-2"
              onClick={onClose}
            >
              CLOSE
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
