import supabase from '../../supabaseClient';

export type RenameOutfitProps = {
  userId: string;
  outfitId: number;
  newOutfitName: string;
};

export function renameOutfit({
  userId,
  outfitId,
  newOutfitName,
}: RenameOutfitProps) {
  supabase
    .from('user_outfits')
    .update({ outfit_name: newOutfitName })
    .eq('user_id', userId)
    .eq('outfit_id', outfitId)
    .then(() => console.log('Outfit renamed'));
}
