'use client'

import { motion } from 'framer-motion'

const IntegrationPage = () => {
  const cases = [
    {
      title: "Интеграция с CRM системами",
      description: "Подключение AI к Salesforce, HubSpot, Битрикс24",
      results: ["автоматическое обогащение лидов", "умная сегментация", "прогноз конверсии"],
      image: "📊"
    },
    {
      title: "ERP системы + AI", 
      description: "Умная аналитика бизнес-процессов в реальном времени",
      results: ["оптимизация цепочек", "предсказание дефицита", "автоматическое планирование"],
      image: "⚙️"
    },
    {
      title: "E-commerce интеграция",
      description: "AI для интернет-магазинов и маркетплейсов",
      results: ["персональные рекомендации", "динамическое ценообразование", "умный склад"],
      image: "🛒"
    },
    {
      title: "API интеграции",
      description: "Подключение к любым внешним сервисам и базам данных",
      results: ["универсальные коннекторы", "реaltime синхронизация", "безопасное соединение"],
      image: "🔌"
    },
    {
      title: "Мобильные приложения",
      description: "Встроенный AI в iOS и Android приложения",
      results: ["оффлайн-работа", "высокая производительность", "нативные интерфейсы"],
      image: "📱"
    },
    {
      title: "Унаследованные системы",
      description: "Модернизация legacy-систем с помощью AI",
      results: ["постепенное внедрение", "обратная совместимость", "миграция данных"],
      image: "🔄"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-60 py-12 rounded-3xl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Интеграция AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Бесшовное подключение искусственного интеллекта к вашим существующим системам
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div key={i} className="flex items-center text-sm text-purple-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
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
            Нужна интеграция AI?
          </h2>
          <p className="text-gray-600 mb-6">
            Получите консультацию по подключению к вашим системам
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold"
          >
            Получить консультацию
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default IntegrationPage