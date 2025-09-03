'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const caseStudies = [
  {
    id: 1,
    title: 'Автоматизация call-центра для крупного банка',
    client: 'Альфа-Банк',
    industry: 'Банковский сектор',
    challenge: 'Высокая нагрузка на операторов, длительное время ожидания клиентов, ошибки при обработке запросов',
    solution: 'Внедрение AI-ассистента на базе GPT-4 для обработки входящих звонков, автоматизации рутинных операций и предсказания потребностей клиентов',
    results: [
      'Снижение нагрузки на операторов на 65%',
      'Уменьшение времени ожидания с 5 до 1 минуты',
      'Повышение удовлетворенности клиентов на 40%',
      'Автоматизация 80% стандартных запросов'
    ],
    duration: '6 месяцев',
    team: '12 специалистов',
    technologies: ['GPT-4', 'Python', 'React', 'Kubernetes', 'PostgreSQL'],
    image: '/api/placeholder/600/400'
  },
  {
    id: 2,
    title: 'Внедрение системы прогнозирования спроса для ритейла',
    client: 'М.Видео',
    industry: 'Розничная торговля',
    challenge: 'Неэффективное управление запасами, избыточные складские остатки, потеря продаж из-за отсутствия товаров',
    solution: 'Разработка ML-модели для прогнозирования спроса с учетом сезонности, промо-акций и внешних факторов',
    results: [
      'Снижение складских запасов на 35%',
      'Увеличение оборачиваемости товаров на 50%',
      'Снижение потерь от отсутствия товара на 70%',
      'Повышение точности прогнозов до 92%'
    ],
    duration: '8 месяцев',
    team: '8 специалистов',
    technologies: ['TensorFlow', 'Python', 'AWS', 'Tableau', 'MySQL'],
    image: '/api/placeholder/600/400'
  },
  {
    id: 3,
    title: 'Автоматизация документооборота для юридической фирмы',
    client: 'Baker McKenzie',
    industry: 'Юридические услуги',
    challenge: 'Ручная обработка тысяч документов ежемесячно, высокие затраты на персонал, ошибки при классификации',
    solution: 'Создание системы автоматической обработки и классификации юридических документов с использованием компьютерного зрения и NLP',
    results: [
      'Автоматизация 90% процессов документооборота',
      'Сокращение времени обработки документов с 5 часов до 15 минут',
      'Снижение операционных затрат на 60%',
      'Точность классификации документов 98%'
    ],
    duration: '7 месяцев',
    team: '10 специалистов',
    technologies: ['Computer Vision', 'NLP', 'Python', 'Docker', 'Elasticsearch'],
    image: '/api/placeholder/600/400'
  },
  {
    id: 4,
    title: 'Внедрение чат-бота для поддержки клиентов e-commerce',
    client: 'Wildberries',
    industry: 'E-commerce',
    challenge: 'Большой объем однотипных запросов, длительное время ответа, необходимость круглосуточной поддержки',
    solution: 'Разработка интеллектуального чат-бота с интеграцией в CRM и системой управления заказами',
    results: [
      'Обработка 85% запросов без участия человека',
      'Снижение нагрузки на поддержку на 75%',
      'Круглосуточная доступность поддержки',
      'Увеличение конверсии на 25%'
    ],
    duration: '5 месяцев',
    team: '6 специалистов',
    technologies: ['Dialogflow', 'Node.js', 'React', 'MongoDB', 'Redis'],
    image: '/api/placeholder/600/400'
  },
  {
    id: 5,
    title: 'Оптимизация логистики для транспортной компании',
    client: 'Деловые Линии',
    industry: 'Логистика',
    challenge: 'Неоптимальные маршруты доставки, высокие затраты на топливо, задержки в поставках',
    solution: 'Создание системы оптимизации маршрутов с использованием машинного обучения и анализа больших данных',
    results: [
      'Сокращение пробега на 20%',
      'Уменьшение затрат на топливо на 30%',
      'Снижение времени доставки на 25%',
      'Повышение точности ETА до 95%'
    ],
    duration: '9 месяцев',
    team: '15 специалистов',
    technologies: ['Machine Learning', 'Python', 'PostGIS', 'React', 'Kafka'],
    image: '/api/placeholder/600/400'
  },
  {
    id: 6,
    title: 'Автоматизация финансовой отчетности для холдинга',
    client: 'Росатом',
    industry: 'Энергетика',
    challenge: 'Ручной сбор данных из 50+ систем, ошибки при консолидации, длительный процесс подготовки отчетности',
    solution: 'Разработка единой платформы для автоматического сбора, обработки и анализа финансовых данных',
    results: [
      'Сокращение времени подготовки отчетности с 2 недель до 1 дня',
      'Автоматизация 95% процессов консолидации',
      'Снижение ошибок на 90%',
      'Возможность real-time анализа финансовых показателей'
    ],
    duration: '12 месяцев',
    team: '20 специалистов',
    technologies: ['Big Data', 'Python', 'Power BI', 'SQL Server', 'Azure'],
    image: '/api/placeholder/600/400'
  }
]

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Кейсы внедрения</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Реальные примеры успешной автоматизации бизнес-процессов с использованием искусственного интеллекта и нейросетей
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['Все', 'Банковский сектор', 'Розничная торговля', 'Юридические услуги', 'E-commerce', 'Логистика', 'Энергетика'].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 gap-12">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Image/Placeholder */}
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl h-64 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Кейс {caseStudy.client}</span>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-3">
                      {caseStudy.industry}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{caseStudy.title}</h2>
                    <p className="text-gray-600 mb-4"><strong>Клиент:</strong> {caseStudy.client}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Задача</h3>
                      <p className="text-gray-600">{caseStudy.challenge}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Решение</h3>
                      <p className="text-gray-600">{caseStudy.solution}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Результаты</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {caseStudy.results.map((result, i) => (
                          <li key={i}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">Срок: {caseStudy.duration}</span>
                    <span className="text-sm text-gray-500">Команда: {caseStudy.team}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/resources/cases/${caseStudy.id}`}
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Подробнее о кейсе
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Хотите такой же результат?</h2>
          <p className="text-blue-100 mb-6">
            Мы поможем автоматизировать ваши бизнес-процессы с использованием передовых технологий ИИ
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contacts"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Обсудить проект
            </Link>
            <Link
              href="/automation/consulting"
              className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Консультация
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}