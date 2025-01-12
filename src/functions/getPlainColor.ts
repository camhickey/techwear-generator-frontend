import { colorMap } from '@colorMap/colorMap';
import { Colors } from '@enums/enums';

export function getPlainColor(color?: string) {
  if (!color) return undefined;
  return Object.keys(colorMap).find((key) => colorMap[key] === color) as Colors;
}
