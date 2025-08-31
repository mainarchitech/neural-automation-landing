import { supabase } from '../../lib/supabaseClient'

export async function POST(request) {
  try {
    const { name, email, company, message } = await request.json()

    // Валидация данных
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: 'Все обязательные поля должны быть заполнены' },
        { status: 400 }
      )
    }

    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, error: 'Некорректный email адрес' },
        { status: 400 }
      )
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
          status: 'new'
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return Response.json(
        { success: false, error: 'Ошибка при сохранении данных' },
        { status: 500 }
      )
    }

    return Response.json({
      success: true,
      message: 'Сообщение успешно отправлено!',
      data: data[0]
    })

  } catch (error) {
    console.error('Server error:', error)
    return Response.json(
      { success: false, error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to retrieve submissions (for admin)
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}