// TODO 配置ディレクトリ
import { createClient } from "@supabase/supabase-js";

// These variables will be exposed on the browser, and that's completely fine since we have Row Level Security enabled on our Database.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
