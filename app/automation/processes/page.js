'use client'

import { motion } from 'framer-motion'

const ProcessAutomationPage = () => {
  const cases = [
    {
      title: "Автоматизация документооборота",
      description: "ИИ-система для автоматической обработки входящих документов, классификации и маршрутизации",
      benefits: ["Сокращение времени обработки на 70%", "Уменьшение ошибок на 95%", "Автоматическое извлечение данных"],
      image: "📄",
      stats: ["15 мин → 2 мин", "200+ документов/день", "98% точность"]
    },
    {
      title: "Умная обработка заказов",
      description: "Полный цикл автоматизации от приема заказа до отгрузки и уведомления клиента",
      benefits: ["Круглосуточная обработка", "Интеграция с CRM и ERP", "Автоуведомления клиентов"],
      image: "🛒", 
      stats: ["24/7 работа", "5 систем интеграции", "100% автономность"]
    },
    {
      title: "Роботизация финансовых операций",
      description: "Автоматическое проведение платежей, сверка счетов и формирование отчетности",
      benefits: ["Исключение человеческого фактора", "Мгновенное проведение операций", "Автоформирование отчетов"],
      image: "💳",
      stats: ["0 ошибок", "30 сек/операция", "Ежедневная сверка"]
    },
    {
      title: "AI-логистика и склад",
      description: "Оптимизация складских процессов, прогнозирование спроса и автоматическое управление запасами",
      benefits: ["Прогнозирование точности 92%", "Оптимизация запасов на 40%", "Автоматическое пополнение"],
      image: "📦",
      stats: ["92% точность", "40% экономия", "Автопополнение"]
    },
    {
      title: "Умный HR и рекрутинг",
      description: "Автоматизация подбора кандидатов, обработки резюме и onboarding процесса",
      benefits: ["Анализ 1000+ резюме/час", "Автосортировка кандидатов", "Индивидуальные сценарии"],
      image: "👥",
      stats: ["1000+ резюме/час", "85% релевантность", "Индивидуальный подход"]
    },
    {
      title: "Клиентский сервис 24/7",
      description: "Полная автоматизация обработки обращений и запросов клиентов без участия человека",
      benefits: ["Мгновенные ответы", "Мультиязычная поддержка", "Анализ sentiment"],
      image: "🎯",
      stats: ["24/7 работа", "15 сек/ответ", "95% удовлетворенность"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Кейсы автоматизации процессов
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные примеры успешной автоматизации бизнес-процессов с использованием нейросетей и искусственного интеллекта
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-center">{caseItem.image}</div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {caseItem.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-4 text-center">
                {caseItem.description}
              </p>
              
              {/* Benefits */}
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Преимущества:</h4>
                <ul className="space-y-1">
                  {caseItem.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Stats */}
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-medium text-gray-800 mb-2 text-sm">Результаты:</h4>
                <div className="grid grid-cols-1 gap-1">
                  {caseItem.stats.map((stat, i) => (
                    <div key={i} className="text-xs text-gray-600 font-medium">
                      ✅ {stat}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Готовы автоматизировать ваши процессы?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Оставьте заявку и наши эксперты предложат индивидуальное решение для вашего бизнеса
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all"
          >
            Обсудить проект
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default ProcessAutomationPage