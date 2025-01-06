import { Articles, Colors, ClothingStyles } from '../enums/enums';

export async function getClothing(
  style: ClothingStyles,
  color: Colors,
  article: Articles,
) {
  if (!color) return null;
  try {
    const response = await fetch(
      `https://techwear-generator-backend.vercel.app/${style}/${color}/${article}`,
    );
    const jsonData = await response.json();
    return jsonData[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}
