'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Services = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: "Автоматизация процессов",
      description: "Полная автоматизация рутинных бизнес-процессов с помощью нейросетей. От обработки документов до управления workflow.",
      features: [
        "Интеллектуальная обработка документов",
        "Автоматическое распределение задач",
        "Интеграция с существующими системами",
        "Мониторинг в реальном времени"
      ],
      icon: "🤖"
    },
    {
      title: "AI Аналитика",
      description: "Глубокий анализ данных и прогнозирование тенденций с использованием машинного обучения.",
      features: [
        "Прогнозная аналитика",
        "Выявление паттернов",
        "Автоматические отчеты",
        "Визуализация данных"
      ],
      icon: "📊"
    },
    {
      title: "Чат-боты и поддержка",
      description: "Умные чат-боты на основе GPT, способные решать сложные задачи и обучаться на взаимодействиях.",
      features: [
        "Естественное общение",
        "Мультиязычная поддержка",
        "Интеграция с CRM",
        "24/7 доступность"
      ],
      icon: "💬"
    },
    {
      title: "Интеграция AI",
      description: "Внедрение AI-решений в существующие бизнес-процессы с минимальными изменениями.",
      features: [
        "Безопасная интеграция",
        "Кастомные решения",
        "Обучение сотрудников",
        "Техническая поддержка"
      ],
      icon: "🔧"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white rounded-3xl shadow-lg scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексные решения для автоматизации вашего бизнеса с использованием передовых нейросетевых технологий
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveService(index)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                activeService === index
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {services[activeService].title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  {services[activeService].description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                >
                  Узнать подробнее
                </motion.button>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Ключевые возможности:</h4>
                <ul className="space-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Services