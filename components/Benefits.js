'use client'

import { motion } from 'framer-motion'

const Benefits = () => {
  const benefits = [
    {
      icon: "🚀",
      title: "Скорость внедрения",
      description: "Быстрое развертывание решений благодаря готовым модулям и облачной инфраструктуре",
      stats: "Внедрение за 2-4 недели"
    },
    {
      icon: "💰",
      title: "Экономия затрат",
      description: "Сокращение операционных расходов до 70% за счет автоматизации рутинных процессов",
      stats: "До 70% экономии"
    },
    {
      icon: "📈",
      title: "Масштабируемость",
      description: "Легкое масштабирование решений под растущие потребности бизнеса без потери качества",
      stats: "Безлимитное масштабирование"
    },
    {
      icon: "🛡️",
      title: "Безопасность",
      description: "Сертифицированные решения с шифрованием данных и соответствием международным стандартам",
      stats: "ISO 27001 compliant"
    },
    {
      icon: "🧠",
      title: "Интеллект",
      description: "Самообучающиеся системы, которые постоянно улучшают качество работы и точность",
      stats: "AI с обучением"
    },
    {
      icon: "🌐",
      title: "Доступность",
      description: "Круглосуточная работа систем из любой точки мира с любым устройством",
      stats: "24/7 доступность"
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-gray-50 rounded-3xl shadow-lg scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Инновационные решения, которые действительно работают и приносят результат
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {benefit.description}
              </p>
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg px-3 py-2">
                <span className="text-sm font-semibold text-blue-700">
                  {benefit.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "95%", label: "Клиентов рекомендуют" },
              { number: "24ч", label: "Макс. время ответа" },
              { number: "99.9%", label: "Аптайм систем" },
              { number: "5/5", label: "Рейтинг поддержки" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits