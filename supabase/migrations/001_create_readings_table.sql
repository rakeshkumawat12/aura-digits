-- Create readings table for storing numerology reports
CREATE TABLE IF NOT EXISTS public.readings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,

  -- User Input Data
  date_of_birth DATE NOT NULL,

  -- Core Numbers
  mulank INTEGER NOT NULL,
  destiny INTEGER NOT NULL,

  -- Lu Shu Grid Data (stored as JSONB for flexibility)
  lu_shu_grid JSONB NOT NULL,

  -- Personality Analysis
  personality_analysis JSONB NOT NULL,

  -- Lucky Numbers
  lucky_numbers JSONB NOT NULL,

  -- Angel Numbers (if user had any relevant ones)
  angel_numbers JSONB,

  -- Active Planes Analysis
  active_planes JSONB,

  -- Missing Numbers Analysis
  missing_numbers JSONB,

  -- Metadata
  title TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index for faster user queries
CREATE INDEX IF NOT EXISTS readings_user_id_idx ON public.readings(user_id);
CREATE INDEX IF NOT EXISTS readings_created_at_idx ON public.readings(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.readings ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Users can only access their own readings
CREATE POLICY "Users can view their own readings"
  ON public.readings
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own readings"
  ON public.readings
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own readings"
  ON public.readings
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own readings"
  ON public.readings
  FOR DELETE
  USING (auth.uid() = user_id);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to call the function
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.readings
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Grant permissions
GRANT ALL ON public.readings TO authenticated;
GRANT ALL ON public.readings TO service_role;
