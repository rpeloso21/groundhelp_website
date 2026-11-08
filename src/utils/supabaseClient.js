import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://eriqlyoonxedhtmilpxp.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_3RjXRTNMlmKAztZyxhfqLQ_2Ckh4M4q';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
