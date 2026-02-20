-- Bazm-e-Adab Database Setup Script
-- Run this in your Supabase SQL Editor

-- 1. Create the registrations table
CREATE TABLE IF NOT EXISTS public.registrations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    department TEXT NOT NULL,
    role_interest TEXT NOT NULL,
    skills TEXT,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- 3. Create a policy to allow anyone to insert data (Standard for registration forms)
CREATE POLICY "Allow anonymous inserts" ON public.registrations
    FOR INSERT 
    WITH CHECK (true);

-- 4. Create a policy to allow only authenticated cabinet members to read data
-- Note: Replace 'your-admin-role-if-any' or handle via Supabase Dashboard
CREATE POLICY "Only authenticated users can view registrations" ON public.registrations
    FOR SELECT 
    USING (auth.role() = 'authenticated');
