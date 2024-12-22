/*
  # Initial Schema Setup for Mist.Quest

  1. New Tables
    - users
      - Stores user authentication data
    - characters
      - Stores character information
    - journal_entries
      - Stores character journal entries
    - game_resources
      - Stores game-specific resources and materials
    
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  username text UNIQUE,
  full_name text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create characters table
CREATE TABLE IF NOT EXISTS public.characters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.profiles(id),
  name text NOT NULL,
  game text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create journal entries table
CREATE TABLE IF NOT EXISTS public.journal_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id uuid REFERENCES public.characters(id),
  title text NOT NULL,
  content text NOT NULL,
  entry_date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create game resources table
CREATE TABLE IF NOT EXISTS public.game_resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  game text NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  resource_type text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.characters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.journal_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.game_resources ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON public.profiles
  FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Characters policies
CREATE POLICY "Characters are viewable by everyone"
  ON public.characters
  FOR SELECT
  USING (true);

CREATE POLICY "Users can insert own characters"
  ON public.characters
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own characters"
  ON public.characters
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Journal entries policies
CREATE POLICY "Journal entries are viewable by everyone"
  ON public.journal_entries
  FOR SELECT
  USING (true);

CREATE POLICY "Users can insert entries for own characters"
  ON public.journal_entries
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.characters
      WHERE id = journal_entries.character_id
      AND user_id = auth.uid()
    )
  );

-- Game resources policies
CREATE POLICY "Game resources are viewable by everyone"
  ON public.game_resources
  FOR SELECT
  USING (true);