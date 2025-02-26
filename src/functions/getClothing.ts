import { ClothingStyle, ClothingColor, ClothingArticle } from '@/enums';
import supabase from '../../supabaseClient';

export type GetClothingProps = {
  selectedStyle: ClothingStyle;
  selectedColor: ClothingColor;
  selectedArticle: ClothingArticle;
};

export type ClothingRecord = {
  clothing_id: number;
  article: ClothingArticle;
  color: ClothingColor;
  style: ClothingStyle;
  image: string;
  name: string;
  price: number;
  link: string;
};

//RPC function needed because the Supabase client doesn't allow random selection

export async function getClothing({
  selectedStyle,
  selectedColor,
  selectedArticle,
}: GetClothingProps) {
  if (!selectedColor) return null;
  const { data, error } = await supabase.rpc('get_random_clothing', {
    selected_style: selectedStyle,
    selected_color: selectedColor,
    selected_article: selectedArticle,
  });
  if (error) return null;
  return data[0] as ClothingRecord;
}
