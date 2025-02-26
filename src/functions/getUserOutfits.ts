import supabase from '../../supabaseClient';

export type GetUserOutfitsProps = {
  userId: string;
};

export async function getUserOutfits({ userId }: GetUserOutfitsProps) {
  const { data, error } = await supabase
    .from('user_outfits')
    .select('*')
    .eq('user_id', userId);
  if (error) return null;
  return data as { outfit_id: number; outfit_name: string }[];
}
