import { useState } from 'react';
import { ColorPicker } from '../components/ColorPicker';
import { CustomButton } from '../components/CustomButton';
import { OutfitModal } from '../components/OutfitModal';
import { OutdoorsModel } from '../components/models/OutdoorsModel';
import { colorMap } from '../constants/colorMap';
import { getPlainColor } from '../functions/getPlainColor';

export function Outdoors() {
  const [selectedColor, setSelectedColor] = useState(colorMap['BLACK']);
  const [isOutfitModalOpen, setIsOutfitModalOpen] = useState(false);
  const [outfit, setOutfit] = useState({
    headwearColor: '#2d2d2d',
    topColor: '#2d2d2d',
    pantsColor: '#2d2d2d',
    footwearColor: '#2d2d2d',
  });

  return (
    <div className="flex flex-col items-center gap-5 min-h-screen min-w-screen bg-[#2d2d2d]">
      <div className="flex flex-row justify-center items-center gap-5">
        <ColorPicker
          colors={Object.values(colorMap)}
          onChange={setSelectedColor}
        />
        <OutdoorsModel
          headwearColor={outfit.headwearColor}
          onHeadwearColorChange={() =>
            setOutfit({ ...outfit, headwearColor: selectedColor })
          }
          topColor={outfit.topColor}
          onTopColorChange={() =>
            setOutfit({ ...outfit, topColor: selectedColor })
          }
          pantsColor={outfit.pantsColor}
          onPantsColorChange={() =>
            setOutfit({ ...outfit, pantsColor: selectedColor })
          }
          footwearColor={outfit.footwearColor}
          onFootwearColorChange={() =>
            setOutfit({ ...outfit, footwearColor: selectedColor })
          }
        />
      </div>
      <div className="flex flex-row items-center gap-5">
        <div
          className="w-10 h-10 rounded-full border-black border-2 border-solid"
          style={{ backgroundColor: selectedColor }}
        />
        <p className="font-bold text-white">
          {Object.keys(colorMap).find((key) => colorMap[key] === selectedColor)}
        </p>
      </div>
      <CustomButton onClick={() => setIsOutfitModalOpen(true)}>
        Save changes
      </CustomButton>
      {isOutfitModalOpen && (
        <OutfitModal
          isOpen={isOutfitModalOpen}
          onClose={() => setIsOutfitModalOpen(false)}
          outfit={{
            headwearColor: getPlainColor(outfit.headwearColor) as string,
            topColor: getPlainColor(outfit.topColor) as string,
            pantsColor: getPlainColor(outfit.pantsColor) as string,
            footwearColor: getPlainColor(outfit.footwearColor) as string,
          }}
          style="outdoors"
        />
      )}
    </div>
  );
}
