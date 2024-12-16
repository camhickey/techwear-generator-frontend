import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { Articles } from '../enums/enums';
import { getClothing } from '../functions/getClothing';
import { ClothingCardProps, ClothingCard } from './ClothingCard';
import { ClothingNotFoundCard } from './ClothingNotFoundCard';

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
  const [headwear, setHeadwear] = useState<ClothingCardProps | null>(null);
  const [top, setTop] = useState<ClothingCardProps | null>(null);
  const [pants, setPants] = useState<ClothingCardProps | null>(null);
  const [footwear, setFootwear] = useState<ClothingCardProps | null>(null);

  function renderOutfit() {
    outfit.headwearColor &&
      getClothing(style, outfit.headwearColor, Articles.HEADWEAR)
        .then((clothing: ClothingCardProps) => {
          setHeadwear(clothing);
        })
        .catch(() => {
          setHeadwear(null);
        });
    outfit.topColor &&
      getClothing(style, outfit.topColor, Articles.TOP)
        .then((clothing: ClothingCardProps) => {
          setTop(clothing);
        })
        .catch(() => {
          setTop(null);
        });
    outfit.pantsColor &&
      getClothing(style, outfit.pantsColor, Articles.PANTS)
        .then((clothing: ClothingCardProps) => {
          setPants(clothing);
        })
        .catch(() => {
          setPants(null);
        });
    outfit.footwearColor &&
      getClothing(style, outfit.footwearColor, Articles.FOOTWEAR)
        .then((clothing: ClothingCardProps) => {
          setFootwear(clothing);
        })
        .catch(() => {
          setFootwear(null);
        });
  }

  //should probably wrap in a useCallback or something
  useEffect(() => {
    renderOutfit();
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
          <div
            className={`grid md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-rows-4`}
          >
            {headwear ? (
              <ClothingCard {...headwear} />
            ) : (
              <ClothingNotFoundCard
                title={
                  outfit.headwearColor
                    ? 'Headwear not found'
                    : 'Headwear not selected'
                }
                description={
                  outfit.headwearColor
                    ? `Could not find headwear in ${outfit.headwearColor.toLowerCase()} for your style`
                    : 'If you want headwear, go back and select a color'
                }
              />
            )}
            {top ? (
              <ClothingCard {...top} />
            ) : (
              <ClothingNotFoundCard
                title={outfit.topColor ? 'Top not found' : 'Top not selected'}
                description={
                  outfit.topColor
                    ? `Could not find a top in ${outfit.topColor.toLowerCase()} for your style`
                    : 'If you want a top, go back and select a color'
                }
              />
            )}
            {pants ? (
              <ClothingCard {...pants} />
            ) : (
              <ClothingNotFoundCard
                title={
                  outfit.pantsColor ? 'Pants not found' : 'Pants not selected'
                }
                description={
                  outfit.pantsColor
                    ? `Could not find pants in ${outfit.pantsColor.toLowerCase()} for your style`
                    : 'If you want pants, go back and select a color'
                }
              />
            )}
            {footwear ? (
              <ClothingCard {...footwear} />
            ) : (
              <ClothingNotFoundCard
                title={
                  outfit.footwearColor
                    ? 'Footwear not found'
                    : 'Footwear not selected'
                }
                description={
                  outfit.footwearColor
                    ? `Could not find footwear in ${outfit.footwearColor.toLowerCase()} for your style`
                    : 'If you want footwear, go back and select a color'
                }
              />
            )}
          </div>
          <div className="inline-flex gap-4">
            <button
              className="inline-flex gap-2 items-center bg-black text-white uppercase p-2"
              onClick={renderOutfit}
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
