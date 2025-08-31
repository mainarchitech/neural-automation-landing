'use client'

import { motion } from 'framer-motion'

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Главная' },
    { id: 'services', label: 'Услуги' },
    { id: 'benefits', label: 'Преимущества' },
    { id: 'contact', label: 'Контакты' },
  ]

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Neural Automation
            </motion.div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow"
          >
            Начать проект
          </motion.button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation