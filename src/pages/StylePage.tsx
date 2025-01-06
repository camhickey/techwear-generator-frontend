import { useState } from 'react';
import { colorMap } from '../colorMap/colorMap';
import { ColorPicker } from '../components/ColorPicker';
import { HelpModal } from '../components/HelpModal';
import { UrbanModel } from '../components/models/UrbanModel';
import { OutfitModal } from '../components/OutfitModal';
import { Colors, ClothingStyles } from '../enums/enums';
import { getPlainColor } from '../functions/getPlainColor';
import { CyberpunkModel } from '../components/models/CyberpunkModel';
import { GraymanModel } from '../components/models/GraymanModel';
import { OutdoorsModel } from '../components/models/OutdoorsModel';

type StylePageTemplateProps = {
  clothingStyle: ClothingStyles;
};

export function StylePage({ clothingStyle }: StylePageTemplateProps) {
  const [selectedColor, setSelectedColor] = useState(colorMap[Colors.BLACK]);
  const [isOutfitModalOpen, setIsOutfitModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [outfit, setOutfit] = useState({
    headwearColor: '#2d2d2d',
    topColor: '#2d2d2d',
    pantsColor: '#2d2d2d',
    footwearColor: '#2d2d2d',
  });
  const isOutfitEmpty =
    outfit.headwearColor === '#2d2d2d' &&
    outfit.topColor === '#2d2d2d' &&
    outfit.pantsColor === '#2d2d2d' &&
    outfit.footwearColor === '#2d2d2d';

  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-2 items-center m-auto p-4">
      <div className="flex justify-center">
        <ColorPicker
          colors={Object.values(colorMap)}
          onChange={setSelectedColor}
        />
      </div>
      <div className="flex justify-center">
        {clothingStyle === ClothingStyles.URBAN && (
          <UrbanModel
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
        )}
        {clothingStyle === ClothingStyles.GRAYMAN && (
          <GraymanModel
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
        )}
        {clothingStyle === ClothingStyles.CYBERPUNK && (
          <CyberpunkModel
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
        )}
        {clothingStyle === ClothingStyles.OUTDOORS && (
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
        )}
      </div>
      <div className="flex flex-col justify-center gap-2">
        <div className="flex flex-row items-center gap-2 justify-center">
          <div
            className="w-10 h-10 rounded-full border-black border-2 border-solid"
            style={{ backgroundColor: selectedColor }}
          />
          <p className="font-bold text-white">{getPlainColor(selectedColor)}</p>
        </div>
        <button
          disabled={isOutfitEmpty}
          className="bg-black text-white uppercase p-2 disabled:opacity-50 disabled:cursor-not-allowed hover:border-white border-black border-solid border-2"
          onClick={() => setIsOutfitModalOpen(true)}
        >
          Get Outfit
        </button>
        <button
          className="bg-black text-white uppercase p-2 hover:border-white border-black border-solid border-2"
          onClick={() => setIsHelpModalOpen(true)}
        >
          Help
        </button>
      </div>
      <HelpModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />
      <OutfitModal
        isOpen={isOutfitModalOpen}
        onClose={() => setIsOutfitModalOpen(false)}
        outfit={{
          headwearColor: getPlainColor(outfit.headwearColor) as Colors,
          topColor: getPlainColor(outfit.topColor) as Colors,
          pantsColor: getPlainColor(outfit.pantsColor) as Colors,
          footwearColor: getPlainColor(outfit.footwearColor) as Colors,
        }}
        style={clothingStyle}
      />
    </div>
  );
}
