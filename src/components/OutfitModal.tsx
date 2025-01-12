import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ArrowPathIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Articles, ClothingStyles, Colors } from '@enums/enums';
import { ClothingCardProps, ClothingCard } from '@components/ClothingCard';
import { ClothingNotFoundCard } from '@components/ClothingNotFoundCard';
import { getClothing } from '@functions/getClothing';
interface OutfitModalProps {
  headwearColor?: Colors;
  topColor?: Colors;
  pantsColor?: Colors;
  footwearColor?: Colors;
  style: ClothingStyles;
  isOpen: boolean;
  onClose: () => void;
}

export function OutfitModal({
  headwearColor,
  topColor,
  pantsColor,
  footwearColor,
  style,
  isOpen,
  onClose,
}: OutfitModalProps) {
  const [headwear, setHeadwear] = useState<ClothingCardProps>();
  const [top, setTop] = useState<ClothingCardProps>();
  const [pants, setPants] = useState<ClothingCardProps>();
  const [footwear, setFootwear] = useState<ClothingCardProps>();
  const [isHeadwearLoading, setIsHeadwearLoading] = useState(true);
  const [isTopLoading, setIsTopLoading] = useState(true);
  const [isPantsLoading, setIsPantsLoading] = useState(true);
  const [isFootwearLoading, setIsFootwearLoading] = useState(true);

  const handleClothingUpdate = (
    article: Articles,
    clothingSetter: Dispatch<SetStateAction<ClothingCardProps | undefined>>,
    isLoadingSetter: Dispatch<SetStateAction<boolean>>,
    color?: Colors,
  ) => {
    if (!color) return;
    isLoadingSetter(true);
    getClothing(style, color, article)
      .then((clothing: ClothingCardProps) => clothingSetter(clothing))
      .finally(() => isLoadingSetter(false));
  };

  const handleHeadwearUpdate = () =>
    handleClothingUpdate(
      Articles.HEADWEAR,
      setHeadwear,
      setIsHeadwearLoading,
      headwearColor,
    );

  const handleTopUpdate = () =>
    handleClothingUpdate(Articles.TOP, setTop, setIsTopLoading, topColor);

  const handlePantsUpdate = () =>
    handleClothingUpdate(
      Articles.PANTS,
      setPants,
      setIsPantsLoading,
      pantsColor,
    );

  const handleFootwearUpdate = () =>
    handleClothingUpdate(
      Articles.FOOTWEAR,
      setFootwear,
      setIsFootwearLoading,
      footwearColor,
    );

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
          className="space-y-4 bg-black md:h-full border-solid border-neutral-400 border-2 p-12 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <DialogTitle className="text-lg text-white font-bold uppercase flex flex-row items-center justify-between">
            Your outfit
            <XMarkIcon
              onClick={onClose}
              className="h-8 w-8 hover:cursor-pointer"
            />
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
                color={headwearColor}
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
              <ClothingNotFoundCard color={topColor} article={Articles.TOP} />
            )}
            {pants ? (
              <ClothingCard
                {...pants}
                onRefresh={handlePantsUpdate}
                isLoading={isPantsLoading}
              />
            ) : (
              <ClothingNotFoundCard
                color={pantsColor}
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
                color={footwearColor}
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
