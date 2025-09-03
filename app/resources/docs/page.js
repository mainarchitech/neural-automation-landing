'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const documentationSections = [
  {
    id: 'getting-started',
    title: 'Начало работы',
    description: 'Быстрый старт с платформой Neural Automation: установка, настройка и первые шаги',
    icon: '🚀',
    articles: [
      { id: 1, title: 'Установка и настройка платформы', duration: '15 мин', level: 'Начальный' },
      { id: 2, title: 'Первая автоматизация: пошаговое руководство', duration: '20 мин', level: 'Начальный' },
      { id: 3, title: 'Настройка окружения разработки', duration: '25 мин', level: 'Средний' },
      { id: 4, title: 'Миграция с legacy-систем', duration: '30 мин', level: 'Продвинутый' }
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI Автоматизация',
    description: 'Использование искусственного интеллекта для автоматизации бизнес-процессов',
    icon: '🧠',
    articles: [
      { id: 5, title: 'Настройка AI-ассистентов', duration: '25 мин', level: 'Средний' },
      { id: 6, title: 'Интеграция GPT моделей', duration: '30 мин', level: 'Средний' },
      { id: 7, title: 'Обучение custom моделей', duration: '45 мин', level: 'Продвинутый' },
      { id: 8, title: 'Оптимизация производительности AI', duration: '35 мин', level: 'Продвинутый' }
    ]
  },
  {
    id: 'data-processing',
    title: 'Обработка данных',
    description: 'Работа с большими данными, ETL процессы и аналитика',
    icon: '📊',
    articles: [
      { id: 9, title: 'Настройка ETL пайплайнов', duration: '30 мин', level: 'Средний' },
      { id: 10, title: 'Работа с Big Data', duration: '40 мин', level: 'Продвинутый' },
      { id: 11, title: 'Реал-тайм аналитика', duration: '35 мин', level: 'Продвинутый' },
      { id: 12, title: 'Оптимизация запросов к данным', duration: '25 мин', level: 'Средний' }
    ]
  },
  {
    id: 'integrations',
    title: 'Интеграции',
    description: 'Подключение внешних систем и сервисов',
    icon: '🔌',
    articles: [
      { id: 13, title: 'REST API интеграции', duration: '20 мин', level: 'Средний' },
      { id: 14, title: 'Работа с базами данных', duration: '25 мин', level: 'Средний' },
      { id: 15, title: 'Интеграция с CRM системами', duration: '30 мин', level: 'Средний' },
      { id: 16, title: 'Webhooks и события', duration: '20 мин', level: 'Средний' }
    ]
  },
  {
    id: 'deployment',
    title: 'Деплой и масштабирование',
    description: 'Развертывание и масштабирование решений',
    icon: '⚙️',
    articles: [
      { id: 17, title: 'Деплой в production', duration: '35 мин', level: 'Продвинутый' },
      { id: 18, title: 'Настройка Kubernetes', duration: '40 мин', level: 'Продвинутый' },
      { id: 19, title: 'Мониторинг и логирование', duration: '25 мин', level: 'Средний' },
      { id: 20, title: 'Scale-out архитектура', duration: '30 мин', level: 'Продвинутый' }
    ]
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    description: 'Лучшие практики и рекомендации',
    icon: '⭐',
    articles: [
      { id: 21, title: 'Security best practices', duration: '30 мин', level: 'Средний' },
      { id: 22, title: 'Performance optimization', duration: '35 мин', level: 'Продвинутый' },
      { id: 23, title: 'Code quality standards', duration: '25 мин', level: 'Средний' },
      { id: 24, title: 'Disaster recovery', duration: '40 мин', level: 'Продвинутый' }
    ]
  }
]

const quickGuides = [
  {
    title: 'Quick Start Guide',
    description: '5-минутное руководство по запуску первого процесса',
    duration: '5 мин',
    url: '/docs/quick-start'
  },
  {
    title: 'Troubleshooting',
    description: 'Решение распространенных проблем',
    duration: '10 мин',
    url: '/docs/troubleshooting'
  },
  {
    title: 'API Reference',
    description: 'Полная документация по API',
    duration: '60 мин',
    url: '/docs/api'
  },
  {
    title: 'Examples Gallery',
    description: 'Готовые примеры и шаблоны',
    duration: '45 мин',
    url: '/docs/examples'
  }
]

export default function DocsPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Документация</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полное руководство по использованию платформы Neural Automation. От начальной настройки до продвинутых функций.
          </p>
        </motion.div>

        {/* Quick Guides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {quickGuides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">{guide.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{guide.duration}</span>
                <Link
                  href={guide.url}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Читать →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Поиск по документации..."
              className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <span className="text-gray-400">⌘K</span>
            </div>
          </div>
        </motion.div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentationSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{section.icon}</span>
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              </div>
              
              <p className="text-gray-600 mb-6">{section.description}</p>

              <div className="space-y-3">
                {section.articles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/resources/docs/${section.id}/${article.id}`}
                    className="block p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 mb-1">{article.title}</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-500">{article.duration}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            article.level === 'Начальный' 
                              ? 'bg-green-100 text-green-800'
                              : article.level === 'Средний'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {article.level}
                          </span>
                        </div>
                      </div>
                      <span className="text-blue-600">→</span>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href={`/resources/docs/${section.id}`}
                className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Все статьи раздела →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Нужна помощь?</h2>
          <p className="text-blue-100 mb-6">
            Наша команда поддержки готова ответить на ваши вопросы и помочь с внедрением
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/support"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Служба поддержки
            </Link>
            <Link
              href="/#contacts"
              className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Связаться с экспертом
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}