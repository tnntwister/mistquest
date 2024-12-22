import { supabase } from './client';
import { Database } from './types';

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Character = Database['public']['Tables']['characters']['Row'];
export type JournalEntry = Database['public']['Tables']['journal_entries']['Row'];
export type GameResource = Database['public']['Tables']['game_resources']['Row'];

export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  return { data, error };
}

export async function updateProfile(userId: string, updates: Partial<Profile>) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId);
  return { data, error };
}

export async function getCharacters(userId: string) {
  const { data, error } = await supabase
    .from('characters')
    .select('*')
    .eq('user_id', userId);
  return { data, error };
}

export async function getJournalEntries(characterId: string) {
  const { data, error } = await supabase
    .from('journal_entries')
    .select('*')
    .eq('character_id', characterId)
    .order('entry_date', { ascending: false });
  return { data, error };
}