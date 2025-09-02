'use client';

import { motion } from 'framer-motion';
import MobileMenu from '@/components/MobileMenu';
import { useState, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

type TabId = 'home' | 'services' | 'benefits' | 'contact';
type Tab = { id: TabId; label: string; hash?: string };

type Props = {
  activeTab?: TabId;
  setActiveTab?: (id: TabId) => void;
};

const HEADER_OFFSET = 96; // подгони под высоту хедера

function scrollToId(hash: string) {
  const id = hash.replace(/^#/, '');
  const el = typeof document !== 'undefined' ? document.getElementById(id) : null;
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

export default function Navigation({ activeTab, setActiveTab }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const tabs: Tab[] = [
    { id: 'home', label: 'Главная' },
    { id: 'services', label: 'Услуги', hash: 'services' },
    { id: 'benefits', label: 'Преимущества', hash: 'benefits' },
    { id: 'contact', label: 'Контакты', hash: 'contacts' },
  ];

  const go = useCallback(
    (tab: Tab) => {
      // Главная
      if (tab.id === 'home') {
        if (pathname !== '/') router.push('/', { scroll: true });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveTab?.(tab.id);
        return;
      }

      // Секции
      if (pathname === '/') {
        // уже на главной — скроллим с офсетом
        if (tab.hash) {
          // фиксируем хеш в адресе без скачков
          history.replaceState(null, '', `#${tab.hash}`);
          scrollToId(`#${tab.hash}`);
        }
        setActiveTab?.(tab.id);
      } else {
        // переходим на главную без автоскролла браузера (сделаем сами в Home useEffect)
        router.push(`/#${tab.hash}`, { scroll: false });
      }
    },
    [pathname, router, setActiveTab]
  );

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo (домой) */}
            <div className="flex items-center">
              <motion.button
                type="button"
                onClick={() => go(tabs[0])}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                aria-label="На главную"
              >
                Neural Automation
              </motion.button>
            </div>

            {/* Desktop Navigation Tabs */}
            <div className="hidden md:flex space-x-1">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <motion.button
                    type="button"
                    key={tab.id}
                    onClick={() => go(tab)}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      isActive ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <motion.button
              type="button"
              onClick={() => go({ id: 'contact', label: 'Контакты', hash: 'contacts' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-shadow"
            >
              <span className="hidden lg:inline">Начать проект</span>
              <span className="lg:hidden">Начать</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Открыть меню"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onNavigate={go}
      />
    </>
  );
}