'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'

const NewMobileMenu = ({ isOpen, onClose }) => {
  const router = useRouter()
  const pathname = usePathname()

  const menuItems = [
    { id: 'home', label: 'Главная', path: '/' },
    { id: 'services', label: 'Услуги', path: '/#services' },
    { id: 'benefits', label: 'Преимущества', path: '/#benefits' },
    { id: 'contact', label: 'Контакты', path: '/#contacts' },
  ]

  const handleNavigation = (item) => {
    onClose()
    
    // Если мы уже на главной странице и это якорная ссылка
    if (pathname === '/' && item.path.startsWith('/#')) {
      const hash = item.path.substring(1)
      // Ждем немного перед скроллом, чтобы меню успело закрыться
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      return
    }
    
    // Если это переход на главную страницу
    if (item.path === '/') {
      router.push('/')
      return
    }
    
    // Для других случаев (со страниц автоматизации)
    router.push(item.path)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl"
          >
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Logo */}
              <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
                Neural Automation
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavigation({ path: '/#contacts' })}
                className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl text-lg font-medium hover:shadow-lg transition-shadow text-left"
              >
                Начать проект
              </motion.button>

              {/* Menu Items */}
              <nav className="space-y-4 mt-8">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigation(item)}
                    className="w-full text-left px-4 py-3 rounded-xl text-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default NewMobileMenu