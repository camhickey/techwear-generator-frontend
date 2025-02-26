import { UserOutfitModal } from '@/components/UserOutfitModal';
import { ClothingArticle } from '@/enums';
import { deleteOutfit } from '@/functions/deleteOutfit';
import { getOutfitDetails } from '@/functions/getOutfitDetails';
import { getUserOutfits } from '@/functions/getUserOutfits';
import { renameOutfit } from '@/functions/renameOutfit';
import { useAuth } from '@/useAuth';
import { useState, useEffect } from 'react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import { CustomModal } from '@/components/CustomModal';
import { TextInput } from '@/components/Input';
import { Button } from '@/components/Button';

type OutfitEntry = {
  outfit_id: number;
  outfit_name: string;
};

type OutfitDetails = {
  name: string;
  price: number;
  image: string;
  link: string;
  article: ClothingArticle;
};

export function Outfits() {
  const { user, isAuthenticated } = useAuth();
  const [isOutfitModalOpen, setIsOutfitModalOpen] = useState<boolean>(false);
  const [isRenameModalOpen, setIsRenameModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [outfitSearch, setOutfitSearch] = useState<string>('');
  const [outfitRename, setOutfitRename] = useState<string>('');
  const [userOutfits, setUserOutfits] = useState<OutfitEntry[] | null>(null);
  const [selectedOutfit, setSelectedOutfit] = useState<OutfitEntry | null>(
    null,
  );
  const [selectedOutfitDetails, setSelectedOutfitDetails] = useState<
    OutfitDetails[]
  >([]);

  useEffect(() => {
    if (isAuthenticated && user) {
      getUserOutfits({ userId: user.id }).then((outfits) => {
        setUserOutfits(outfits);
      });
    }
  }, [isAuthenticated]);

  const handleOutfitSelect = async (outfitId: number) => {
    if (!userOutfits) return;
    getOutfitDetails({ outfitId })
      .then((data) => {
        if (!data) return;
        setSelectedOutfitDetails([
          {
            name: data.headwear_name,
            price: data.headwear_price,
            image: data.headwear_image,
            link: data.headwear_link,
            article: ClothingArticle.HEADWEAR,
          },
          {
            name: data.top_name,
            price: data.top_price,
            image: data.top_image,
            link: data.top_link,
            article: ClothingArticle.TOP,
          },
          {
            name: data.pants_name,
            price: data.pants_price,
            image: data.pants_image,
            link: data.pants_link,
            article: ClothingArticle.PANTS,
          },
          {
            name: data.footwear_name,
            price: data.footwear_price,
            image: data.footwear_image,
            link: data.footwear_link,
            article: ClothingArticle.FOOTWEAR,
          },
        ]);
      })
      .then(() =>
        setSelectedOutfit({
          outfit_id: outfitId,
          outfit_name:
            userOutfits.find((outfit) => outfit.outfit_id === outfitId)
              ?.outfit_name ?? '',
        }),
      )
      .then(() => setIsOutfitModalOpen(true));
  };

  const handleOutfitDelete = async (outfitId: number) => {
    if (!user || !userOutfits) return;
    deleteOutfit({ userId: user.id, outfitId }).then(() => {
      setUserOutfits(
        userOutfits.filter((outfit) => outfit.outfit_id !== outfitId),
      );
      setIsDeleteModalOpen(false);
    });
  };

  const handleOutfitRename = async (outfitId: number, newName: string) => {
    if (!newName || !user || !userOutfits) return;
    renameOutfit({
      userId: user.id,
      outfitId,
      newOutfitName: newName,
    });
    setUserOutfits(
      userOutfits.map((outfit) => {
        if (outfit.outfit_id === outfitId) {
          return { ...outfit, outfit_name: newName };
        }
        return outfit;
      }),
    );
    setIsRenameModalOpen(false);
    setOutfitRename('');
  };

  if (!userOutfits) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p className="text-white">What's the matter? No fits?</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      <TextInput
        placeholder="SEARCH OUTFITS"
        value={outfitSearch}
        onChange={(e) => setOutfitSearch(e.target.value)}
      />
      <div className="flex flex-col gap-2 overflow-y-scroll">
        {userOutfits
          .filter((outfit) =>
            outfit.outfit_name
              .toLowerCase()
              .includes(outfitSearch.toLowerCase()),
          )
          .map((outfit) => (
            <div
              key={outfit.outfit_id}
              className="flex flex-row gap-10 p-2 items-center justify-between"
              onClick={() => setSelectedOutfit(outfit)}
            >
              <p
                className="text-white hover:cursor-pointer hover:text-orange-500 duration-300 hover:scale-105"
                onClick={() => handleOutfitSelect(outfit.outfit_id)}
              >
                {outfit.outfit_name}
              </p>
              <div className="flex flex-row gap-4 items-center text-white">
                <PencilIcon
                  className="w-5 h-5 hover:cursor-pointer hover:text-orange-500 duration-300 hover:scale-125"
                  onClick={() => setIsRenameModalOpen(true)}
                />
                <TrashIcon
                  className="w-5 h-5 hover:cursor-pointer hover:text-red-500 duration-300 hover:scale-125"
                  onClick={() => setIsDeleteModalOpen(true)}
                />
              </div>
            </div>
          ))}
        {selectedOutfit && (
          <div>
            <UserOutfitModal
              outfitName={
                userOutfits.find(
                  (outfit) => outfit.outfit_id === selectedOutfit.outfit_id,
                )?.outfit_name ?? 'YOUR OUTFIT'
              }
              outfitDetails={selectedOutfitDetails}
              isOpen={isOutfitModalOpen}
              onClose={() => setIsOutfitModalOpen(false)}
            />
            <CustomModal
              isOpen={isRenameModalOpen}
              onClose={() => setIsRenameModalOpen(false)}
              title="RENAME OUTFIT"
            >
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 inline-flex">
                  Enter a new name for the following outfit:
                </p>
                <p className="text-white font-bold text-center">
                  {selectedOutfit.outfit_name}
                </p>
                <TextInput
                  value={outfitRename}
                  onChange={(e) => setOutfitRename(e.target.value)}
                  placeholder="New outfit name"
                />
              </div>
              <div className="flex flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  onClick={() =>
                    handleOutfitRename(selectedOutfit.outfit_id, outfitRename)
                  }
                  disabled={!outfitRename}
                >
                  RENAME
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setIsRenameModalOpen(false)}
                >
                  CANCEL
                </Button>
              </div>
            </CustomModal>
            <CustomModal
              isOpen={isDeleteModalOpen}
              onClose={() => setIsDeleteModalOpen(false)}
              title="DELETE OUTFIT"
            >
              <p className="text-neutral-400 inline-flex">
                Are you sure you want to delete the following outfit?
              </p>
              <p className="text-white font-bold text-center">
                {selectedOutfit.outfit_name}
              </p>
              <div className="flex flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  onClick={() => handleOutfitDelete(selectedOutfit.outfit_id)}
                >
                  DELETE
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setIsDeleteModalOpen(false)}
                >
                  CANCEL
                </Button>
              </div>
            </CustomModal>
          </div>
        )}
      </div>
    </div>
  );
}
