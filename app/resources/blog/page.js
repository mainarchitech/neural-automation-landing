'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'Искусственный интеллект в автоматизации бизнес-процессов: тренды 2024',
    excerpt: 'Обзор современных технологий ИИ для автоматизации рутинных операций и повышения эффективности бизнеса.',
    date: '6 августа 2024',
    author: 'Лия',
    category: 'AI технологии',
    readTime: '8 мин чтения',
    image: '/placeholder/250.webp',
    href: 'https://vc.ru/ai/1368805-ii-v-biznese-trendy-na-2024-i-2025-gody'
  },
  {
    id: 2,
    title: 'Лучшие нейросети для анализа данных: современные инструменты для профессиональной аналитики',
    excerpt: 'Как нейронные сети помогают обрабатывать огромные объемы информации и извлекать ценные инсайты.',
    date: '16 июля 2025',
    author: 'НейроВед',
    category: 'Аналитика',
    readTime: '12 мин чтения',
    image: '/placeholder/251.webp',
    href: 'https://vc.ru/ai/2103297-luchshie-nevroseti-dlya-analiza-dannyh'
  },
  {
    id: 3,
    title: 'ChatGPT: Полное руководство по использованию для бизнеса',
    excerpt: 'Практическое руководство по внедрению чат-ботов на основе GPT в вашу компанию.',
    date: '30 января 2024',
    author: 'Игорь Телегин',
    category: 'Чат-боты',
    readTime: '10 мин чтения',
    image: '/placeholder/252.webp',
    href: 'https://vc.ru/chatgpt/1928545-chatgpt-dlya-biznesa-polnoe-rukovodstvo'
  },
  {
    id: 4,
    title: 'Машинное обучение для прогнозирования продаж',
    excerpt: 'Как прогнозировать спрос и автоматизировать закупки с помощью machine learning: кейс Ozon.',
    date: '4 декабря 2018',
    author: 'aalekseytsev',
    category: 'Прогнозирование',
    readTime: '15 мин чтения',
    image: '/placeholder/253.png',
    href: 'https://habr.com/ru/companies/ozontech/articles/431950/'
  },
  {
    id: 5,
    title: 'Автоматизация документооборота с помощью ИИ',
    excerpt: 'Как внедрить искусственный интеллект в работу с документами и не разочароваться',
    date: '4 октебря 2023',
    author: 'Михаил Хорьков',
    category: 'Документооборот',
    readTime: '9 мин чтения',
    image: '/placeholder/254.png',
    href: 'https://secrets.tbank.ru/blogi-kompanij/ai-v-rabote-s-dokumentami/?utm_referrer=https%3A%2F%2Fwww.google.com%2F'
  },
  {
    id: 6,
    title: 'Computer Vision в промышленности: кейсы внедрения',
    excerpt: 'Экосистема для разработки и применения Computer Vision (CV) в промышленности',
    date: '13 февраля 2024',
    author: 'Юрий Кацер',
    category: 'Computer Vision',
    readTime: '14 мин чтения',
    image: '/placeholder/255.png',
    href: 'https://habr.com/ru/articles/882204/'
  }
]

const isPlaceholder = (src) => !src || src.startsWith('/api/placeholder')

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
              <div className="relative h-48 w-full overflow-hidden">
                {isPlaceholder(post.image) ? (
                  <div className="h-full w-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Изображение статьи</span>
                  </div>
                ) : (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                    priority={index < 2}
                  />
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.href ? (
                    <a href={post.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {post.title}
                    </a>
                  ) : (
                    <Link href={`/resources/blog/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  )}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <div>{post.author}</div>
                    <div>{post.date}</div>
                  </div>
                  
                  {(() => {
                    const link = post.href ? post.href : `/resources/blog/${post.id}`
                    const isExternal = /^https?:\/\//.test(link)

                    return isExternal ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Читать
                      </a>
                    ) : (
                      <Link
                        href={link}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Читать
                      </Link>
                    )
                  })()}
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