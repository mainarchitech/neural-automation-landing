'use client'

import { motion } from 'framer-motion'
import NewMobileMenu from './NewMobileMenu'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const NewNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const menuItems = [
    { id: 'home', label: 'Главная', path: '/' },
    { id: 'services', label: 'Услуги', path: '/#services' },
    { id: 'benefits', label: 'Преимущества', path: '/#benefits' },
    { id: 'contact', label: 'Контакты', path: '/#contacts' },
  ]

  const handleNavigation = (item) => {
    // Если мы уже на главной странице и это якорная ссылка
    if (pathname === '/' && item.path.startsWith('/#')) {
      const hash = item.path.substring(1)
      const element = document.getElementById(hash.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
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
    <>
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <motion.button
                onClick={() => handleNavigation({ path: '/' })}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Neural Automation
              </motion.button>
            </div>

            {/* Desktop Navigation Tabs */}
            <div className="hidden md:flex space-x-1">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className="relative px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <motion.button
              onClick={() => handleNavigation({ path: '/#contacts' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-shadow"
            >
              <span className="hidden lg:inline">Начать проект</span>
              <span className="lg:hidden">Начать</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <NewMobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}

export default NewNavigation