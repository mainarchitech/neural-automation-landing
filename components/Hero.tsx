'use client';

import { motion } from 'framer-motion';
import React from 'react';

type Stat = {
  number: string;
  label: string;
};

const stats: Stat[] = [
  { number: '95%', label: 'Точность AI' },
  { number: '24/7', label: 'Работа' },
  { number: '300+', label: 'Клиентов' },
  { number: '5x', label: 'Эффективность' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Будущее автоматизации уже здесь
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
        >
          Используйте силу нейросетей для автоматизации бизнес-процессов.
          <br />
          Эффективно, быстро, инновационно.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            type="button"
            aria-label="Начать бесплатно"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
          >
            Начать бесплатно
          </motion.button>

          <motion.button
            type="button"
            aria-label="Узнать больше"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
          >
            Узнать больше
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[
          'top-1/4 left-1/4 w-72 h-72 bg-blue-200',
          'top-1/2 right-1/4 w-96 h-96 bg-purple-200',
          'bottom-1/4 left-1/2 w-80 h-80 bg-pink-200',
        ].map((classes, i) => (
          <div
            key={i}
            className={`absolute ${classes} rounded-full blur-3xl opacity-20 animate-pulse-slow`}
            style={{ animationDelay: `${i * 1000}ms` }}
          />
        ))}
      </div>
    </section>
  );
}