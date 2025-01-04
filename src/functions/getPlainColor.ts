import { colorMap } from '../colorMap/colorMap';

export function getPlainColor(color: string) {
  return Object.keys(colorMap).find((key) => colorMap[key] === color);
}
