import { supabase } from './client';
import { FileObject } from '@supabase/storage-js';

export async function uploadFile(
  bucket: string,
  path: string,
  file: File
) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file);
  return { data, error };
}

export async function deleteFile(
  bucket: string,
  path: string
) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .remove([path]);
  return { data, error };
}

export async function listFiles(
  bucket: string,
  path?: string
): Promise<{ data: FileObject[] | null; error: Error | null }> {
  const { data, error } = await supabase.storage
    .from(bucket)
    .list(path || '');
  return { data, error };
}