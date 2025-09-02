import { createClient, type SupabaseClient } from '@supabase/supabase-js';

function makeThrowingClient(): SupabaseClient {
  // Проксируем, чтобы любая попытка обратиться к клиенту дала понятную ошибку
  return new Proxy({} as SupabaseClient, {
    get() {
      throw new Error('Supabase not configured');
    },
  });
}

export const supabase: SupabaseClient = (() => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anon) {
    // нет конфигурации — вернём «бросающий» клиент, но тип останется SupabaseClient
    return makeThrowingClient();
  }
  return createClient(url, anon);
})();