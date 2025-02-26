import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { ArrowPathIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { CheckIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { ClothingArticle, ClothingStyle, ClothingColor } from '@/enums';
import { ClothingCard } from '@components/ClothingCard';
import { ClothingNotFoundCard } from '@components/ClothingNotFoundCard';
import { getClothing, ClothingRecord } from '@functions/getClothing';
import { addOutfit } from '@/functions/addOutfit';
import { useAuth } from '@/useAuth';
import { Button } from '@/components/Button';
import { TextInput } from '@/components/Input';

interface OutfitModalProps {
  headwearColor?: ClothingColor;
  topColor?: ClothingColor;
  pantsColor?: ClothingColor;
  footwearColor?: ClothingColor;
  style: ClothingStyle;
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
  const { isAuthenticated, user } = useAuth();
  const [headwear, setHeadwear] = useState<ClothingRecord>();
  const [top, setTop] = useState<ClothingRecord>();
  const [pants, setPants] = useState<ClothingRecord>();
  const [footwear, setFootwear] = useState<ClothingRecord>();
  const [isHeadwearLoading, setIsHeadwearLoading] = useState<boolean>(false);
  const [isTopLoading, setIsTopLoading] = useState<boolean>(false);
  const [isPantsLoading, setIsPantsLoading] = useState<boolean>(false);
  const [isFootwearLoading, setIsFootwearLoading] = useState<boolean>(false);
  const [outfitName, setOutfitName] = useState<string>('');
  const [isOutfitAdded, setIsOutfitAdded] = useState<boolean>(false);

  const handleClothingUpdate = async (
    article: ClothingArticle,
    color: ClothingColor | undefined,
    setter: (value: ClothingRecord) => void,
    setLoading: (value: boolean) => void,
  ) => {
    if (!color) return;
    setLoading(true);
    await getClothing({
      selectedStyle: style,
      selectedColor: color,
      selectedArticle: article,
    }).then((res) => {
      if (!res) return;
      setter(res as ClothingRecord);
      setLoading(false);
    });
  };

  const handleHeadwearUpdate = async () =>
    handleClothingUpdate(
      ClothingArticle.HEADWEAR,
      headwearColor,
      setHeadwear,
      setIsHeadwearLoading,
    );
  const handleTopUpdate = async () =>
    handleClothingUpdate(
      ClothingArticle.TOP,
      topColor,
      setTop,
      setIsTopLoading,
    );
  const handlePantsUpdate = async () =>
    handleClothingUpdate(
      ClothingArticle.PANTS,
      pantsColor,
      setPants,
      setIsPantsLoading,
    );
  const handleFootwearUpdate = async () =>
    handleClothingUpdate(
      ClothingArticle.FOOTWEAR,
      footwearColor,
      setFootwear,
      setIsFootwearLoading,
    );
  const handleOutfitUpdate = async () => {
    handleHeadwearUpdate();
    handleTopUpdate();
    handlePantsUpdate();
    handleFootwearUpdate();
    setIsOutfitAdded(false);
    setOutfitName('');
  };

  const handleAddOutfit = async () => {
    if (!isAuthenticated || !user) return;
    addOutfit({
      userId: user.id,
      outfitName,
      headwearId: headwear?.clothing_id,
      topId: top?.clothing_id,
      pantsId: pants?.clothing_id,
      footwearId: footwear?.clothing_id,
    }).then(() => setIsOutfitAdded(true));
  };

  useEffect(() => {
    handleOutfitUpdate();
  }, []);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 w-screen overflow-y-auto p-4">
        <DialogPanel
          transition
          className="space-y-4 bg-black md:h-full border-solid border-neutral-400 border-2 p-12"
        >
          <DialogTitle className="text-lg text-white font-bold flex flex-row items-center justify-between">
            YOUR OUTFIT
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
                article={ClothingArticle.HEADWEAR}
                onRefresh={handleHeadwearUpdate}
                isLoading={isHeadwearLoading}
              />
            ) : (
              <ClothingNotFoundCard
                article={ClothingArticle.HEADWEAR}
                color={headwearColor}
              />
            )}
            {top ? (
              <ClothingCard
                {...top}
                article={ClothingArticle.TOP}
                onRefresh={handleTopUpdate}
                isLoading={isTopLoading}
              />
            ) : (
              <ClothingNotFoundCard
                article={ClothingArticle.TOP}
                color={topColor}
              />
            )}
            {pants ? (
              <ClothingCard
                {...pants}
                article={ClothingArticle.PANTS}
                onRefresh={handlePantsUpdate}
                isLoading={isPantsLoading}
              />
            ) : (
              <ClothingNotFoundCard
                article={ClothingArticle.PANTS}
                color={pantsColor}
              />
            )}
            {footwear ? (
              <ClothingCard
                {...footwear}
                article={ClothingArticle.FOOTWEAR}
                onRefresh={handleFootwearUpdate}
                isLoading={isFootwearLoading}
              />
            ) : (
              <ClothingNotFoundCard
                article={ClothingArticle.FOOTWEAR}
                color={footwearColor}
              />
            )}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Button variant="secondary" onClick={handleOutfitUpdate}>
              NEW OUTFIT
              <ArrowPathIcon className="h-5 w-5" />
            </Button>
            {isAuthenticated ? (
              <div className="flex flex-row items-center gap-4">
                <TextInput
                  placeholder="ENTER OUTFIT NAME"
                  value={outfitName}
                  onChange={(e) => setOutfitName(e.target.value)}
                />
                <Button
                  disabled={outfitName === '' || isOutfitAdded}
                  variant="secondary"
                  onClick={handleAddOutfit}
                >
                  {isOutfitAdded ? 'OUTFIT SAVED' : 'SAVE OUTFIT'}
                  {isOutfitAdded ? (
                    <CheckIcon className="h-5 w-5" />
                  ) : (
                    <PlusIcon className="h-5 w-5" />
                  )}
                </Button>
              </div>
            ) : (
              <p className="text-neutral-400 text-sm hover:cursor-default">
                SIGN IN TO SAVE OUTFITS
              </p>
            )}
            <Button variant="secondary" onClick={onClose}>
              CLOSE
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
