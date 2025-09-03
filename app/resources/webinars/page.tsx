'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const upcomingWebinars = [
  {
    id: 1,
    title: 'Автоматизация бизнес-процессов с помощью ИИ: практическое руководство',
    date: '15 марта 2024',
    time: '15:00 - 16:30 (МСК)',
    speaker: 'Алексей Петров',
    speakerRole: 'Lead AI Engineer',
    speakerImage: '/api/placeholder/100/100',
    description: 'Узнайте, как внедрить искусственный интеллект в ваши бизнес-процессы. Практические кейсы и пошаговое руководство.',
    level: 'Для начинающих',
    attendees: 124,
    maxAttendees: 500,
    category: 'AI Автоматизация',
    image: '/api/placeholder/600/400'
  },
  {
    id: 2,
    title: 'GPT-4 для бизнеса: интеграция и лучшие практики',
    date: '22 марта 2024',
    time: '14:00 - 15:30 (МСК)',
    speaker: 'Мария Иванова',
    speakerRole: 'AI Solutions Architect',
    speakerImage: '/api/placeholder/100/100',
    description: 'Полное руководство по интеграции GPT-4 в ваши бизнес-процессы. Реальные примеры и лучшие практики.',
    level: 'Средний уровень',
    attendees: 89,
    maxAttendees: 300,
    category: 'Чат-боты',
    image: '/api/placeholder/600/400'
  },
  {
    id: 3,
    title: 'Машинное обучение для прогнозирования продаж',
    date: '29 марта 2024',
    time: '16:00 - 17:30 (МСК)',
    speaker: 'Дмитрий Смирнов',
    speakerRole: 'Data Science Lead',
    speakerImage: '/api/placeholder/100/100',
    description: 'Как использовать ML для точного прогнозирования спроса и оптимизации inventory management.',
    level: 'Продвинутый уровень',
    attendees: 67,
    maxAttendees: 200,
    category: 'Прогнозирование',
    image: '/api/placeholder/600/400'
  }
]

const pastWebinars = [
  {
    id: 4,
    title: 'Введение в RPA: основы robotic process automation',
    date: '8 февраля 2024',
    duration: '1 час 15 мин',
    speaker: 'Ольга Кузнецова',
    views: 1250,
    likes: 234,
    category: 'RPA',
    recordingUrl: '/resources/webinars/recording/4'
  },
  {
    id: 5,
    title: 'Computer Vision в промышленности: кейсы внедрения',
    date: '1 февраля 2024',
    duration: '1 час 30 мин',
    speaker: 'Сергей Васильев',
    views: 980,
    likes: 187,
    category: 'Computer Vision',
    recordingUrl: '/resources/webinars/recording/5'
  },
  {
    id: 6,
    title: 'Интеграция AI с CRM системами',
    date: '25 января 2024',
    duration: '1 час 10 мин',
    speaker: 'Анна Попова',
    views: 1560,
    likes: 312,
    category: 'Интеграции',
    recordingUrl: '/resources/webinars/recording/6'
  },
  {
    id: 7,
    title: 'Оптимизация цепочек поставок с помощью ИИ',
    date: '18 января 2024',
    duration: '1 час 25 мин',
    speaker: 'Иван Николаев',
    views: 890,
    likes: 165,
    category: 'Логистика',
    recordingUrl: '/resources/webinars/recording/7'
  }
]

const webinarCategories = [
  'Все вебинары',
  'AI Автоматизация',
  'Чат-боты',
  'Прогнозирование',
  'RPA',
  'Computer Vision',
  'Интеграции',
  'Логистика'
]

export default function WebinarsPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Вебинары</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Бесплатные онлайн-мероприятия с экспертами в области искусственного интеллекта и автоматизации бизнеса
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {webinarCategories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Upcoming Webinars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Предстоящие вебинары</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Вебинар {webinar.date}</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {webinar.category}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {webinar.level}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {webinar.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {webinar.description}
                  </p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-600">👤</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{webinar.speaker}</div>
                      <div className="text-sm text-gray-500">{webinar.speakerRole}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <span>📅</span>
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <span>⏰</span>
                      <span>{webinar.time}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>Зарегистрировано: {webinar.attendees}/{webinar.maxAttendees}</span>
                      <span>{Math.round((webinar.attendees / webinar.maxAttendees) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${(webinar.attendees / webinar.maxAttendees) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Зарегистрироваться
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Past Webinars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Записи прошедших вебинаров</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                    {webinar.category}
                  </span>
                  <span className="text-sm text-gray-500">{webinar.duration}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {webinar.title}
                </h3>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">👤</span>
                  </div>
                  <div className="text-sm text-gray-600">{webinar.speaker}</div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>📅 {webinar.date}</span>
                  <span>👀 {webinar.views} просмотров</span>
                  <span>👍 {webinar.likes}</span>
                </div>
                
                <Link
                  href={webinar.recordingUrl}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Смотреть запись →
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Не пропустите следующие вебинары!</h2>
          <p className="text-blue-100 mb-6">
            Подпишитесь на уведомления о новых мероприятиях и получайте приглашения первыми
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Подписаться
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}