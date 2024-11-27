import { colorMap } from '../constants/colorMap';

export function getPlainColor(color: string) {
  return Object.keys(colorMap).find((key) => colorMap[key] === color);
}
