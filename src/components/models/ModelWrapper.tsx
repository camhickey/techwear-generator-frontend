import { ClothingStyle } from '@/enums';
import { CyberpunkModel } from './CyberpunkModel';
import { GraymanModel } from './GraymanModel';
import { OutdoorsModel } from './OutdoorsModel';
import { UrbanModel } from './UrbanModel';
import { ModelProps } from './type';
import { FC } from 'react';

export function ModelWrapper({
  headwearColor,
  onHeadwearColorChange,
  topColor,
  onTopColorChange,
  pantsColor,
  onPantsColorChange,
  footwearColor,
  onFootwearColorChange,
  clothingStyle,
}: ModelProps & { clothingStyle: ClothingStyle }) {
  const models: Record<ClothingStyle, FC<ModelProps>> = {
    [ClothingStyle.URBAN]: UrbanModel,
    [ClothingStyle.GRAYMAN]: GraymanModel,
    [ClothingStyle.CYBERPUNK]: CyberpunkModel,
    [ClothingStyle.OUTDOORS]: OutdoorsModel,
  };

  const ModelComponent = models[clothingStyle];

  if (!ModelComponent) return null;

  return (
    <ModelComponent
      headwearColor={headwearColor}
      onHeadwearColorChange={onHeadwearColorChange}
      topColor={topColor}
      onTopColorChange={onTopColorChange}
      pantsColor={pantsColor}
      onPantsColorChange={onPantsColorChange}
      footwearColor={footwearColor}
      onFootwearColorChange={onFootwearColorChange}
    />
  );
}
