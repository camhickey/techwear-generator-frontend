import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Articles, ClothingStyles, Colors } from '../enums/enums';
import { getClothing } from '../functions/getClothing';
import { ClothingCardProps, ClothingCard } from './ClothingCard';
import { ClothingNotFoundCard } from './ClothingNotFoundCard';

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

function updateArticle(
  color: Colors,
  style: ClothingStyles,
  article: Articles,
  setClothing: Dispatch<SetStateAction<ClothingCardProps | null>>,
) {
  if (color) {
    getClothing(style, color, article)
      .then(setClothing)
      .catch(() => setClothing(null));
  }
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

  useEffect(() => {
    outfit.headwearColor &&
      updateArticle(
        outfit.headwearColor,
        style,
        Articles.HEADWEAR,
        setHeadwear,
      );
    outfit.topColor &&
      updateArticle(outfit.topColor, style, Articles.TOP, setTop);
    outfit.pantsColor &&
      updateArticle(outfit.pantsColor, style, Articles.PANTS, setPants);
    outfit.footwearColor &&
      updateArticle(
        outfit.footwearColor,
        style,
        Articles.FOOTWEAR,
        setFootwear,
      );
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
              <ClothingCard
                {...headwear}
                onRefresh={() =>
                  updateArticle(
                    outfit.headwearColor,
                    style,
                    Articles.HEADWEAR,
                    setHeadwear,
                  )
                }
              />
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
              <ClothingCard
                {...top}
                onRefresh={() =>
                  updateArticle(outfit.topColor, style, Articles.TOP, setTop)
                }
              />
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
              <ClothingCard
                {...pants}
                onRefresh={() =>
                  updateArticle(
                    outfit.pantsColor,
                    style,
                    Articles.PANTS,
                    setPants,
                  )
                }
              />
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
              <ClothingCard
                {...footwear}
                onRefresh={() =>
                  updateArticle(
                    outfit.footwearColor,
                    style,
                    Articles.FOOTWEAR,
                    setFootwear,
                  )
                }
              />
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
              onClick={() => {
                updateArticle(
                  outfit.headwearColor,
                  style,
                  Articles.HEADWEAR,
                  setHeadwear,
                );
                updateArticle(outfit.topColor, style, Articles.TOP, setTop);
                updateArticle(
                  outfit.pantsColor,
                  style,
                  Articles.PANTS,
                  setPants,
                );
                updateArticle(
                  outfit.footwearColor,
                  style,
                  Articles.FOOTWEAR,
                  setFootwear,
                );
              }}
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
