'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

const faqCategories = [
  {
    id: 'general',
    title: 'Общие вопросы',
    icon: '❓',
    questions: [
      {
        id: 1,
        question: 'Что такое Neural Automation?',
        answer: 'Neural Automation — это платформа для автоматизации бизнес-процессов с использованием искусственного интеллекта и нейросетей. Мы предоставляем инструменты для создания AI-ассистентов, обработки данных, интеграции с существующими системами и многое другое.'
      },
      {
        id: 2,
        question: 'С какими отраслями вы работаете?',
        answer: 'Мы работаем с различными отраслями: банковский сектор, ритейл, e-commerce, логистика, healthcare, производство, юридические услуги и многие другие. Наша платформа адаптируется под специфику любой отрасли.'
      },
      {
        id: 3,
        question: 'Какие технологии вы используете?',
        answer: 'Мы используем современные технологии: GPT-4 и другие LLM модели, машинное обучение, компьютерное зрение, NLP, RPA, облачные вычисления (AWS, Azure, GCP), контейнеризацию (Docker, Kubernetes) и многое другое.'
      }
    ]
  },
  {
    id: 'technical',
    title: 'Технические вопросы',
    icon: '⚙️',
    questions: [
      {
        id: 4,
        question: 'Какие системные требования?',
        answer: 'Минимальные требования: 4GB RAM, 2 CPU cores, 10GB disk space. Рекомендуемые: 8GB RAM, 4 CPU cores, 50GB disk space. Поддерживаемые ОС: Linux, Windows Server, macOS. Также доступна cloud-версия без необходимости установки.'
      },
      {
        id: 5,
        question: 'Как происходит интеграция с нашими системами?',
        answer: 'Интеграция происходит через REST API, Webhooks, базы данных (SQL/NoSQL), файловые системы, и специализированные коннекторы для популярных CRM/ERP систем. Мы предоставляем подробную документацию и поддержку на всех этапах интеграции.'
      },
      {
        id: 6,
        question: 'Есть ли мобильное приложение?',
        answer: 'Да, мы предоставляем мобильные приложения для iOS и Android с полным функционалом платформы. Также доступен mobile-friendly web интерфейс.'
      }
    ]
  },
  {
    id: 'pricing',
    title: 'Цены и тарифы',
    icon: '💰',
    questions: [
      {
        id: 7,
        question: 'Какие тарифные планы доступны?',
        answer: 'Мы предлагаем несколько тарифов: Starter (для малого бизнеса), Professional (для средних компаний), Enterprise (для крупных организаций) и Custom (индивидуальные решения). Каждый тариф включает разный объем ресурсов и функционал.'
      },
      {
        id: 8,
        question: 'Есть ли бесплатный пробный период?',
        answer: 'Да, мы предоставляем 14-дневный бесплатный trial с полным доступом ко всем функциям Professional тарифа. Для Enterprise решений возможен extended trial до 30 дней.'
      },
      {
        id: 9,
        question: 'Как происходит оплата?',
        answer: 'Оплата возможна по кредитной карте, банковским переводом или через платежные системы. Для Enterprise клиентов доступны индивидуальные условия оплаты и выставления счетов.'
      }
    ]
  },
  {
    id: 'support',
    title: 'Поддержка',
    icon: '🛡️',
    questions: [
      {
        id: 10,
        question: 'Какие часы работы поддержки?',
        answer: 'Наша техническая поддержка работает 24/7. Экстренные issues обрабатываются в течение 1 часа. Standard support: 9:00-18:00 по МСК. Premium и Enterprise тарифы включают dedicated support менеджера.'
      },
      {
        id: 11,
        question: 'На каких языках提供 поддержка?',
        answer: 'Мы提供 поддержку на русском, английском, немецком и китайском языках. Наши специалисты готовы помочь вам на вашем родном языке.'
      },
      {
        id: 12,
        question: 'Как связаться с поддержкой?',
        answer: 'Доступно несколько каналов: онлайн-чат на сайте, email (support@neural-automation.tech), телефон (+7 999 125-40-54), Telegram бот. Для Enterprise клиентов доступен персональный менеджер.'
      }
    ]
  }
]

const supportChannels = [
  {
    title: 'Онлайн-чат',
    description: 'Мгновенная помощь от наших специалистов',
    availability: '24/7',
    responseTime: 'До 5 минут',
    icon: '💬',
    url: '/support/chat'
  },
  {
    title: 'Email поддержка',
    description: 'Подробные запросы и документация',
    availability: '24/7',
    responseTime: 'До 1 часа',
    icon: '📧',
    url: 'mailto:support@neural-automation.tech'
  },
  {
    title: 'Телефон',
    description: 'Немедленная помощь по срочным вопросам',
    availability: '9:00-18:00 МСК',
    responseTime: 'Немедленно',
    icon: '📞',
    url: 'tel:+79991254054'
  },
  {
    title: 'Сообщества',
    description: 'Помощь от сообщества и экспертов',
    availability: 'Круглосуточно',
    responseTime: 'В течение дня',
    icon: '👥',
    url: '/community'
  }
]

const resources = [
  {
    title: 'Документация',
    description: 'Полные руководства и API документация',
    count: '150+ статей',
    icon: '📚',
    url: '/resources/docs'
  },
  {
    title: 'Видеоуроки',
    description: 'Пошаговые видео инструкции',
    count: '80+ видео',
    icon: '🎥',
    url: '/resources/tutorials'
  },
  {
    title: 'Вебинары',
    description: 'Записи прошедших мероприятий',
    count: '25+ записей',
    icon: '📊',
    url: '/resources/webinars'
  },
  {
    title: 'Блог',
    description: 'Статьи и новости от экспертов',
    count: '100+ статей',
    icon: '✍️',
    url: '/resources/blog'
  }
]

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState('general')
  const [openQuestion, setOpenQuestion] = useState(null)

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Поддержка</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы всегда готовы помочь вам с любыми вопросами по использованию платформы Neural Automation
          </p>
        </motion.div>

        {/* Support Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {supportChannels.map((channel, index) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-4">{channel.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{channel.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{channel.description}</p>
              <div className="text-xs text-gray-500 space-y-1 mb-4">
                <div>Доступность: {channel.availability}</div>
                <div>Время ответа: {channel.responseTime}</div>
              </div>
              <Link
                href={channel.url}
                className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
              >
                Перейти
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Часто задаваемые вопросы</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* FAQ Questions */}
          <div className="max-w-4xl mx-auto">
            {faqCategories
              .find(cat => cat.id === activeCategory)
              ?.questions.map((question) => (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    onClick={() => setOpenQuestion(openQuestion === question.id ? null : question.id)}
                    className="w-full py-4 text-left flex items-center justify-between"
                  >
                    <span className="font-medium text-gray-900">{question.question}</span>
                    <span className="text-gray-400 transform transition-transform">
                      {openQuestion === question.id ? '−' : '+'}
                    </span>
                  </button>
                  
                  {openQuestion === question.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="pb-4 text-gray-600"
                    >
                      {question.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Полезные ресурсы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl mb-4">{resource.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                <div className="text-xs text-gray-500 mb-4">{resource.count}</div>
                <Link
                  href={resource.url}
                  className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Исследовать
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Не нашли ответ на свой вопрос?</h2>
          <p className="text-blue-100 mb-6">
            Напишите нам, и мы обязательно поможем решить вашу задачу
          </p>
          
          <div className="max-w-md mx-auto bg-white rounded-xl p-6">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Выберите категорию вопроса</option>
                  <option>Техническая поддержка</option>
                  <option>Вопросы по тарифам</option>
                  <option>Интеграция</option>
                  <option>Другое</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Опишите вашу проблему или вопрос..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Отправить запрос
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}