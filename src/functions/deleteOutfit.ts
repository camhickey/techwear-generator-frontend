import supabase from '../../supabaseClient';

export type DeleteOutfitProps = {
  userId: string;
  outfitId: number;
};

export async function deleteOutfit({ userId, outfitId }: DeleteOutfitProps) {
  const { error } = await supabase
    .from('user_outfits')
    .delete()
    .eq('user_id', userId)
    .eq('outfit_id', outfitId);
  if (error) {
    console.error(error);
    return;
  }
}
