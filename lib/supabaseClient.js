import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let supabaseClient

// Проверка наличия environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are not set. Using dummy client.')
  // Создаем заглушку для development без Supabase
  supabaseClient = {
    from: () => ({
      insert: () => ({ data: null, error: new Error('Supabase not configured') }),
      select: () => ({ data: null, error: new Error('Supabase not configured') })
    })
  }
} else {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
}

export const supabase = supabaseClient