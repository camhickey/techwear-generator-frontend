import { colorMap } from '@/colorMap';
import { ClothingColor } from '@/enums';

export function getPlainColor(color?: string) {
  if (!color) return undefined;
  return Object.keys(colorMap).find(
    (key) => colorMap[key] === color,
  ) as ClothingColor;
}
