export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      characters: {
        Row: {
          id: string
          user_id: string
          name: string
          game: string
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          game: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          game?: string
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      journal_entries: {
        Row: {
          id: string
          character_id: string
          title: string
          content: string
          entry_date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          character_id: string
          title: string
          content: string
          entry_date?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          character_id?: string
          title?: string
          content?: string
          entry_date?: string
          created_at?: string
          updated_at?: string
        }
      }
      game_resources: {
        Row: {
          id: string
          game: string
          title: string
          content: string
          resource_type: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          game: string
          title: string
          content: string
          resource_type: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          game?: string
          title?: string
          content?: string
          resource_type?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}