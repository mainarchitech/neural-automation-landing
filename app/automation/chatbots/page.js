'use client'

import { motion } from 'framer-motion'

const ChatbotsPage = () => {
  const cases = [
    {
      title: "Клиентская поддержка 24/7",
      description: "Умные чат-боты отвечают на вопросы клиентов круглосуточно",
      results: ["-80% нагрузки на операторов", "мгновенные ответы", "поддержка 100+ языков"],
      image: "🤖"
    },
    {
      title: "Автоматизация продаж", 
      description: "Боты проводят первичные консультации и собирают лиды",
      results: ["+65% конверсии лидов", "-50% стоимости привлечения", "круглосуточная работа"],
      image: "💰"
    },
    {
      title: "Виртуальные ассистенты",
      description: "Персональные помощники для сотрудников и менеджеров",
      results: ["+40% продуктивности", "-60% рутинных задач", "интеграция с CRM"],
      image: "👨‍💼"
    },
    {
      title: "Образовательные боты",
      description: "Интерактивное обучение и проверка знаний через чат",
      results: ["+70% усвоения материала", "персонализированный подход", "автоматическая оценка"],
      image: "🎓"
    },
    {
      title: "Техническая поддержка",
      description: "Автоматическое решение технических проблем пользователей",
      results: ["-85% обращений в поддержку", "мгновенное решение 80% проблем", "интеграция с тикетами"],
      image: "🔧"
    },
    {
      title: "Мультиканальные боты",
      description: "Единый AI-ассистент across WhatsApp, Telegram, сайт, приложение",
      results: ["единая база знаний", "консистентность ответов", "кросс-платформенность"],
      image: "📱"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-60 py-12 rounded-3xl">
      <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Чат-боты
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Умные AI-помощники для автоматизации коммуникации с клиентами и сотрудниками
            </p>
          </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{caseItem.image}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {caseItem.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {caseItem.description}
              </p>
              <div className="space-y-2">
                {caseItem.results.map((result, i) => (
                  <div key={i} className="flex items-center text-sm text-green-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {result}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Хотите умного чат-бота?
          </h2>
          <p className="text-gray-600 mb-6">
            Получите демо-версию за 24 часа
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold"
          >
            Заказать демо
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default ChatbotsPage