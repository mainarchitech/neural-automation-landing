'use client'

import { motion } from 'framer-motion'

const AnalyticsPage = () => {
  const cases = [
    {
      title: "Прогнозная аналитика продаж",
      description: "Нейросети предсказывают спрос и оптимизируют запасы с точностью 95%",
      results: ["+30% к точности прогнозов", "-40% излишков запасов", "+25% оборачиваемости"],
      image: "📊"
    },
    {
      title: "Анализ клиентского поведения", 
      description: "Глубокое обучение выявляет паттерны поведения и предпочтения клиентов",
      results: ["+35% конверсии", "+40% удержания клиентов", "-30% оттока"],
      image: "👥"
    },
    {
      title: "Мониторинг качества в реальном времени",
      description: "Компьютерное зрение контролирует производственные процессы 24/7",
      results: ["-90% брака", "+50% скорости контроля", "100% покрытие"],
      image: "👁️"
    },
    {
      title: "Оптимизация маркетинговых кампаний",
      description: "AI анализирует эффективность каналов и перераспределяет бюджеты",
      results: ["+45% ROI", "-35% стоимости привлечения", "+60% целевого трафика"],
      image: "📈"
    },
    {
      title: "Анализ рисков и мошенничества",
      description: "Нейросети детектируют аномалии и предотвращают финансовые потери",
      results: ["-85% мошеннических операций", "+99% точности детекции", "мгновенное реагирование"],
      image: "🛡️"
    },
    {
      title: "Персонализация контента",
      description: "Рекомендательные системы на основе глубинного анализа поведения",
      results: ["+55% вовлеченности", "+70% релевантности", "-40% отказов"],
      image: "🎯"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 rounded-3xl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Аналитика
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Глубокий анализ данных с помощью нейросетей для принятия точных бизнес-решений
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
            Готовы внедрить AI аналитику?
          </h2>
          <p className="text-gray-600 mb-6">
            Оставьте заявку и получите бесплатную консультацию
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold"
          >
            Получить консультацию
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default AnalyticsPage