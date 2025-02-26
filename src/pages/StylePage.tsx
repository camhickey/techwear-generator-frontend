import { useState } from 'react';
import { colorMap } from '@/colorMap';
import { HelpModal } from '@/components/HelpModal';
import { OutfitModal } from '@/components/OutfitModal';
import { ClothingStyle } from '@/enums';
import { getPlainColor } from '@functions/getPlainColor';
import { ModelWrapper } from '@components/models/ModelWrapper';
import { AboutModal } from '@/components/AboutModal';
import { Button } from '@/components/Button';
import { ArrowLeftIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

type StylePageTemplateProps = {
  clothingStyle: ClothingStyle;
};

export function StylePage({ clothingStyle }: StylePageTemplateProps) {
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [isOutfitModalOpen, setIsOutfitModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [headwearColor, setHeadwearColor] = useState<string | undefined>();
  const [topColor, setTopColor] = useState<string | undefined>();
  const [pantsColor, setPantsColor] = useState<string | undefined>();
  const [footwearColor, setFootwearColor] = useState<string | undefined>();

  const VALID_OUTFIT = headwearColor || topColor || pantsColor || footwearColor;

  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-2 items-center m-auto p-4">
      <div className="flex justify-center">
        <div className="flex flex-col gap-5 items-center">
          <div
            className={`flex items-center gap-2 ${!selectedColor && 'animate-bounce'}`}
          >
            <p className="text-white text-sm font-bold">
              {getPlainColor(selectedColor) || 'SELECT A COLOR'}
            </p>
            {!selectedColor && <ArrowDownIcon className="w-5 h-5 text-white" />}
          </div>
          {Object.values(colorMap).map((color: string, index: number) => (
            <div
              key={index}
              className={`w-10 h-10 rounded-full hover:cursor-pointer border-2 border-solid border-black duration-300 hover:scale-125 ${
                color === selectedColor && 'border-4 border-orange-500'
              }`}
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
        {selectedColor && !VALID_OUTFIT && (
          <div className="inline-flex gap-2 items-center justify-center animate-bounce">
            <ArrowLeftIcon className="w-5 h-5 text-white" />
            <p className="text-white text-sm font-bold">SELECT CLOTHING</p>
          </div>
        )}
        <Button
          disabled={!VALID_OUTFIT}
          onClick={() => setIsOutfitModalOpen(true)}
        >
          GET OUTFIT
        </Button>
        <Button onClick={() => setIsAboutModalOpen(true)}>ABOUT</Button>
        <Button onClick={() => setIsHelpModalOpen(true)}>HELP</Button>
      </div>
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
      <HelpModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
      />
      {isOutfitModalOpen && (
        <OutfitModal
          isOpen={isOutfitModalOpen}
          onClose={() => setIsOutfitModalOpen(false)}
          headwearColor={getPlainColor(headwearColor)}
          topColor={getPlainColor(topColor)}
          pantsColor={getPlainColor(pantsColor)}
          footwearColor={getPlainColor(footwearColor)}
          style={clothingStyle}
        />
      )}
    </div>
  );
}
