import supabase from '../../supabaseClient';

export type AddOutfitProps = {
  userId: string;
  outfitName: string;
  headwearId?: number;
  topId?: number;
  pantsId?: number;
  footwearId?: number;
};

export async function addOutfit({
  userId,
  outfitName,
  headwearId,
  topId,
  pantsId,
  footwearId,
}: AddOutfitProps) {
  const { error } = await supabase.from('user_outfits').insert({
    user_id: userId,
    outfit_name: outfitName,
    headwear_id: headwearId,
    top_id: topId,
    pants_id: pantsId,
    footwear_id: footwearId,
  });
  if (error) {
    console.error(error);
    return;
  }
}
