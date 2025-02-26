import supabase from '../../supabaseClient';

export type GetOutfitDetailsProps = {
  outfitId: number;
};

export type UserOutfitDetails = {
  outfit_name: string;
  headwear_name: string;
  headwear_image: string;
  headwear_link: string;
  headwear_price: number;
  top_name: string;
  top_image: string;
  top_link: string;
  top_price: number;
  pants_name: string;
  pants_image: string;
  pants_link: string;
  pants_price: number;
  footwear_name: string;
  footwear_image: string;
  footwear_link: string;
  footwear_price: number;
};

export async function getOutfitDetails({ outfitId }: GetOutfitDetailsProps) {
  const { data, error } = await supabase.rpc('get_outfit_details_by_id', {
    bleh: outfitId,
  });
  if (error) return null;
  return data[0] as UserOutfitDetails;
}
