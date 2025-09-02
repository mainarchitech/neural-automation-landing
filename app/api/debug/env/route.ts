import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const auth = searchParams.get('auth');

  // Разрешаем доступ в проде только с ключом
  const expected = process.env.DEBUG_ENV_KEY ?? 'supabase-check';
  if (process.env.NODE_ENV === 'production' && auth !== expected) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

  return NextResponse.json({
    supabase: {
      url: {
        configured: url.length > 0,
        length: url.length,
      },
      anonKey: {
        configured: anon.length > 0,
        length: anon.length,
      },
    },
    allConfigured: url.length > 0 && anon.length > 0,
    nodeEnv: process.env.NODE_ENV ?? 'development',
  });
}