import { createClient } from '@supabase/supabase-js'

declare var process: any;

// Supabase client configuration
// To set up Supabase:
// 1. Create a new project at https://supabase.com
// 2. Go to Settings > API to find your URL and anon key
// 3. Add these environment variables to your .env.local file:
//    NEXT_PUBLIC_SUPABASE_URL=your_project_url
//    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
// 4. Create a table called 'contacts' with this SQL:
//    CREATE TABLE contacts (
//      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
//      name TEXT NOT NULL,
//      email TEXT NOT NULL,
//      subject TEXT NOT NULL,
//      message TEXT NOT NULL,
//      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
//    );

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Lazy initialize supabase client to avoid errors during build when env vars are not set
let supabaseClient: ReturnType<typeof createClient> | null = null

function getSupabaseClient() {
  if (supabaseUrl && supabaseAnonKey) {
    if (!supabaseClient) {
      supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
    }
    return supabaseClient
  }
  return null
}

export const supabase = {
  from: (table: string) => {
    const client = getSupabaseClient()
    if (client) {
      return client.from(table)
    }
    throw new Error('Supabase client not initialized')
  }
}

export interface ContactMessage {
  name: string
  email: string
  subject: string
  message: string
}

export async function submitContactForm(data: ContactMessage) {
  // Check if Supabase is configured
  if (!supabaseUrl || !supabaseAnonKey) {
    // Return success for demo purposes when Supabase is not configured
    console.log('Supabase not configured. Message data:', data)
    return { success: true, demo: true }
  }

  const { error } = await supabase
    .from('contacts')
    .insert([
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
    ])

  if (error) {
    console.error('Error submitting contact form:', error)
    throw new Error('Failed to submit message')
  }

  return { success: true }
}
