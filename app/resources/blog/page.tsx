'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'Искусственный интеллект в автоматизации бизнес-процессов: тренды 2024',
    excerpt: 'Обзор современных технологий ИИ для автоматизации рутинных операций и повышения эффективности бизнеса.',
    date: '15 января 2024',
    author: 'Алексей Петров',
    category: 'AI технологии',
    readTime: '8 мин чтения',
    image: '/api/placeholder/400/250'
  },
  {
    id: 2,
    title: 'Нейросети для анализа больших данных: практическое применение',
    excerpt: 'Как нейронные сети помогают обрабатывать огромные объемы информации и извлекать ценные инсайты.',
    date: '22 января 2024',
    author: 'Мария Иванова',
    category: 'Аналитика',
    readTime: '12 мин чтения',
    image: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: 'ChatGPT для бизнеса: интеграция и лучшие практики',
    excerpt: 'Практическое руководство по внедрению чат-ботов на основе GPT в вашу компанию.',
    date: '30 января 2024',
    author: 'Дмитрий Смирнов',
    category: 'Чат-боты',
    readTime: '10 мин чтения',
    image: '/api/placeholder/400/250'
  },
  {
    id: 4,
    title: 'Машинное обучение для прогнозирования продаж',
    excerpt: 'Как ML-алгоритмы помогают предсказывать спрос и оптимизировать inventory management.',
    date: '5 февраля 2024',
    author: 'Ольга Кузнецова',
    category: 'Прогнозирование',
    readTime: '15 мин чтения',
    image: '/api/placeholder/400/250'
  },
  {
    id: 5,
    title: 'Автоматизация документооборота с помощью ИИ',
    excerpt: 'Современные решения для обработки документов, распознавания текста и автоматизации workflow.',
    date: '12 февраля 2024',
    author: 'Сергей Васильев',
    category: 'Документооборот',
    readTime: '9 мин чтения',
    image: '/api/placeholder/400/250'
  },
  {
    id: 6,
    title: 'Computer Vision в промышленности: кейсы внедрения',
    excerpt: 'Как компьютерное зрение помогает контролировать качество продукции и оптимизировать производство.',
    date: '20 февраля 2024',
    author: 'Анна Попова',
    category: 'Computer Vision',
    readTime: '14 мин чтения',
    image: '/api/placeholder/400/250'
  }
]

export default function BlogPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Блог Neural Automation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Экспертные статьи, исследования и новости в области искусственного интеллекта и автоматизации бизнеса
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['Все', 'AI технологии', 'Аналитика', 'Чат-боты', 'Прогнозирование', 'Документооборот', 'Computer Vision'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Изображение статьи</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <div>{post.author}</div>
                    <div>{post.date}</div>
                  </div>
                  
                  <Link
                    href={`/resources/blog/${post.id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Читать
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Подпишитесь на обновления</h2>
          <p className="text-blue-100 mb-6">
            Получайте новые статьи прямо на почту. Без спама, только полезный контент.
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