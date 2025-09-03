'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

type ServiceLink = { name: string; href: string; description?: string };
type ResourceLink = { name: string; href: string };
type SocialLink = { name: string; icon: string; href: string; aria: string };

const services: ServiceLink[] = [
  { name: 'Автоматизация процессов', href: '/automation/processes' },
  { name: 'AI Аналитика', href: '/automation/analytics' },
  { name: 'Чат-боты', href: '/automation/chatbots' },
  { name: 'Интеграция AI', href: '/automation/integration' },
  { name: 'Консалтинг', href: '/automation/consulting' },
];

const resources: ResourceLink[] = [
  { name: 'Блог', href: '/resources/blog' },
  { name: 'Кейсы', href: '/resources/cases' },
  { name: 'Документация', href: '/resources/docs' },
  { name: 'Вебинары', href: '/resources/webinars' },
  { name: 'Поддержка', href: '/resources/support' }
];

const socials: SocialLink[] = [
  { name: 'Telegram', icon: '📢', href: '#', aria: 'Открыть Telegram' },
  { name: 'LinkedIn', icon: '💼', href: '#', aria: 'Открыть LinkedIn' },
  { name: 'X (Twitter)', icon: '🐦', href: '#', aria: 'Открыть X (Twitter)' },
  { name: 'YouTube', icon: '📺', href: '#', aria: 'Открыть YouTube' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Neural Automation
            </div>
            <p className="text-gray-400 mb-6">
              Передовые решения для автоматизации бизнеса с использованием искусственного интеллекта и нейросетей.
            </p>
            <div className="flex space-x-4">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  aria-label={s.aria}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <span className="text-lg" aria-hidden>
                    {s.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  {service.href.startsWith('/') ? (
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors group"
                    >
                      <div className="font-medium group-hover:text-blue-400">
                        {service.name}
                      </div>
                      {service.description && (
                        <div className="text-sm text-gray-500 group-hover:text-gray-300">
                          {service.description}
                        </div>
                      )}
                    </Link>
                  ) : (
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors group"
                    >
                      <div className="font-medium group-hover:text-blue-400">
                        {service.name}
                      </div>
                      {service.description && (
                        <div className="text-sm text-gray-500 group-hover:text-gray-300">
                          {service.description}
                        </div>
                      )}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              {resources.map((r) => (
                <li key={r.name}>
                  {r.href.startsWith('/') ? (
                    <Link
                      href={r.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {r.name}
                    </Link>
                  ) : (
                    <a
                      href={r.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {r.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <a
                href="mailto:contacts@neural-automation.tech"
                className="hover:text-white transition-colors block"
              >
                📧 contacts@neural-automation.tech
              </a>
              <a
                href="tel:+79991254054"
                className="hover:text-white transition-colors block"
              >
                📞 +7 (999) 125-40-54
              </a>
              <a href="/#contacts" className="hover:text-white transition-colors block">
                📍 Москва, Пресненская наб., 12
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Подписка на новости</h4>
              <form
                className="flex"
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: подключить реальную подписку
                }}
              >
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                  aria-label="Подписаться"
                >
                  →
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {year} Neural Automation. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Политика конфиденциальности', 'Условия использования', 'Cookies'].map(
              (item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {item}
                </a>
              )
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}