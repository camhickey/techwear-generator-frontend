import { useState } from 'react';
import { colorMap } from '@colorMap/colorMap';
import { HelpModal } from '@components/HelpModal';
import { OutfitModal } from '@components/OutfitModal';
import { ClothingStyles, Colors } from '@enums/enums';
import { getPlainColor } from '@functions/getPlainColor';
import { ModelWrapper } from '@components/models/ModelWrapper';
type StylePageTemplateProps = {
  clothingStyle: ClothingStyles;
};

export function StylePage({ clothingStyle }: StylePageTemplateProps) {
  const [selectedColor, setSelectedColor] = useState(colorMap[Colors.BLACK]);
  const [isOutfitModalOpen, setIsOutfitModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [headwearColor, setHeadwearColor] = useState<string | undefined>();
  const [topColor, setTopColor] = useState<string | undefined>();
  const [pantsColor, setPantsColor] = useState<string | undefined>();
  const [footwearColor, setFootwearColor] = useState<string | undefined>();

  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-2 items-center m-auto p-4">
      <div className="flex justify-center">
        <div className="flex flex-col gap-5">
          {Object.values(colorMap).map((color: string, index: number) => (
            <div
              key={index}
              className="w-10 h-10 rounded-full hover:cursor-pointer border-2 border-solid border-black hover:border-orange-500"
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <ModelWrapper
          clothingStyle={clothingStyle}
          headwearColor={headwearColor}
          onHeadwearColorChange={() => setHeadwearColor(selectedColor)}
          topColor={topColor}
          onTopColorChange={() => setTopColor(selectedColor)}
          pantsColor={pantsColor}
          onPantsColorChange={() => setPantsColor(selectedColor)}
          footwearColor={footwearColor}
          onFootwearColorChange={() => setFootwearColor(selectedColor)}
        />
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
          disabled={
            !headwearColor && !topColor && !pantsColor && !footwearColor
          }
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
        headwearColor={getPlainColor(headwearColor)}
        topColor={getPlainColor(topColor)}
        pantsColor={getPlainColor(pantsColor)}
        footwearColor={getPlainColor(footwearColor)}
        style={clothingStyle}
      />
    </div>
  );
}
