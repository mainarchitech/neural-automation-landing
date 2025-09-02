import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = (await request.json()) as {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
    };

    // Валидация данных
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Все обязательные поля должны быть заполнены' },
        { status: 400 }
      );
    }

    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Некорректный email адрес' },
        { status: 400 }
      );
    }

    // Сохранение в Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          company: company || null,
          message,
          created_at: new Date().toISOString(),
          status: 'new',
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);

      if (error.message === 'Supabase not configured') {
        return NextResponse.json(
          {
            success: false,
            error:
              'Сервис временно недоступен. Пожалуйста, попробуйте позже.',
          },
          { status: 503 }
        );
      }

      return NextResponse.json(
        { success: false, error: 'Ошибка при сохранении данных' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Сообщение успешно отправлено!',
      data: data?.[0] ?? null,
    });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { success: false, error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve submissions (for admin)
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}