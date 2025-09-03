'use client'

import { motion } from 'framer-motion'

const ConsultingPage = () => {
  const services = [
    {
      title: "AI Стратегия",
      description: "Разработка дорожной карты внедрения искусственного интеллекта",
      steps: ["анализ текущих процессов", "определение KPI", "поэтапный план внедрения", "расчет ROI"],
      icon: "🎯"
    },
    {
      title: "Технический аудит", 
      description: "Оценка готовности инфраструктуры к интеграции AI",
      steps: ["анализ данных", "оценка API", "проверка безопасности", "рекомендации по улучшению"],
      icon: "🔍"
    },
    {
      title: "Подбор решений",
      description: "Выбор оптимальных AI-инструментов под ваши задачи",
      steps: ["сравнение технологий", "тестирование решений", "подбор вендоров", "демо-версии"],
      icon: "📋"
    },
    {
      title: "Обучение команды",
      description: "Подготовка ваших специалистов к работе с AI",
      steps: ["воркшопы", "документация", "техподдержка", "сертификация"],
      icon: "👨‍💻"
    },
    {
      title: "Пилотные проекты",
      description: "Запуск тестовых внедрений для проверки эффективности",
      steps: ["определение scope", "установка метрик", "запуск MVP", "анализ результатов"],
      icon: "🚀"
    },
    {
      title: "Масштабирование",
      description: "Переход от пилота к полномасштабной реализации",
      steps: ["архитектура решения", "план развертывания", "миграция данных", "поддержка"],
      icon: "📈"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-12 rounded-3xl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Консалтинг
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональное сопровождение на всех этапах внедрения искусственного интеллекта
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.steps.map((step, i) => (
                  <div key={i} className="flex items-center text-sm text-blue-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {step}
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
            Начните с консультации
          </h2>
          <p className="text-gray-600 mb-6">
            Получите бесплатный анализ возможностей автоматизации для вашего бизнеса
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold"
          >
            Заказать консультацию
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default ConsultingPage