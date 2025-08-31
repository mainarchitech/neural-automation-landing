import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const auth = searchParams.get('auth')
  
  // Простая защита - только с правильным ключом
  if (process.env.NODE_ENV === 'production' && auth !== 'supabase-check') {
    return NextResponse.json(
      { error: 'Authentication required' },
      { status: 401 }
    )
  }

  return NextResponse.json({
    supabase: {
      url: {
        configured: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        length: process.env.NEXT_PUBLIC_SUPABASE_URL?.length || 0
      },
      anonKey: {
        configured: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, 
        length: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length || 0
      }
    },
    allConfigured: !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    nodeEnv: process.env.NODE_ENV
  })
}

export const dynamic = 'force-dynamic'