'use client'

import { useEffect, useMemo, useState, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import MobileMenu from './MobileMenu'
import { motion } from 'framer-motion'

export default function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === '/'

  const items = useMemo(() => ([
    { id: 'home', label: 'Главная', href: isHome ? '#home' : '/#home' },
    { id: 'services', label: 'Услуги', href: isHome ? '#services' : '/#services' },
    { id: 'benefits', label: 'Преимущества', href: isHome ? '#benefits' : '/#benefits' },
    { id: 'contact', label: 'Контакты', href: isHome ? '#contact' : '/#contact' },
  ]), [isHome])

  const [active, setActive] = useState(null) // ← было 'home'
  const [mobileOpen, setMobileOpen] = useState(false)

  // Инициализация активного якоря только на главной
  useEffect(() => {
    if (!isHome || typeof window === 'undefined') {
      setActive(null) // ← сбрасываем подсветку на внутренних страницах
      return
    }
    const hash = window.location.hash?.replace('#', '')
    if (hash) setActive(hash)
    else setActive('home')
  }, [isHome])

  // Scroll spy — уже ограничен isHome (оставляем как есть)
  useEffect(() => {
    if (!isHome || typeof window === 'undefined') return
    const ids = items.map(i => i.id)
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting)
        .sort((a,b) => b.intersectionRatio - a.intersectionRatio)
      if (visible.length) setActive(visible[0].target.id)
    }, { root: null, rootMargin: '-30% 0px -50% 0px', threshold: [0.1,0.25,0.5,0.75,1] })

    sections.forEach(sec => observer.observe(sec))
    return () => observer.disconnect()
  }, [isHome, items])

  const onClickItem = useCallback((e, href, id) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActive(id)
        history.replaceState(null, '', `#${id}`)
      }
    } else {
      router.push(href)
    }
    setMobileOpen(false)
  }, [router])

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Neural Automation
              </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-2">
              {items.map(item => {
                const isActive = isHome && active === item.id
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => onClickItem(e, item.href, item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={
                      "px-4 py-2 rounded-full transition-all " +
                      (isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100")
                    }
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-shadow"
            >
              <span className="hidden lg:inline">Начать проект</span>
              <span className="lg:hidden">Начать</span>
            </motion.button>

            {/* Mobile */}
            <button
              className="md:hidden p-2 rounded-lg border border-gray-300"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              {/* ...иконка... */}
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        items={items}
        active={isHome ? active : null}  // ← в мобильном тоже без подсветки вне главной
        onClose={() => setMobileOpen(false)}
        onClickItem={onClickItem}
      />
    </>
  )
}