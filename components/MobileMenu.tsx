'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { scrollToId } from '@/utils/scroll';
import { useCallback } from 'react';

type TabId = 'home' | 'services' | 'benefits' | 'contact';

type MenuItem = {
  id: TabId;
  label: string;
  hash?: string; // для секций
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  activeTab?: TabId;
  setActiveTab?: (id: TabId) => void;
  onNavigate?: (tab: MenuItem) => void; // опционально пробрасываем из Navigation
};

const menuItems: MenuItem[] = [
  { id: 'home', label: 'Главная' },
  { id: 'services', label: 'Услуги', hash: 'services' },
  { id: 'benefits', label: 'Преимущества', hash: 'benefits' },
  { id: 'contact', label: 'Контакты', hash: 'contacts' },
];

export default function MobileMenu({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  onNavigate,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  // дефолтная навигация, если onNavigate не передан
  const fallbackNavigate = useCallback(
    (item: MenuItem) => {
      if (item.id === 'home') {
        if (pathname !== '/') router.push('/');
        else window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (pathname === '/') {
        if (item.hash) {
          // скроллим с офсетом
          scrollToId(`#${item.hash}`);
        }
      } else {
        router.push(`/#${item.hash ?? ''}`, { scroll: false }); // скролл выполнится на главной
      }
    },
    [pathname, router]
  );

  const handleClick = (item: MenuItem) => {
    setActiveTab?.(item.id);
    // сначала закрываем меню, чтобы не было «скачков» слоёв
    onClose();
    // ждём кадр, потом навигируем
    requestAnimationFrame(() => {
      (onNavigate ?? fallbackNavigate)(item);
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.button
            aria-label="Закрыть меню"
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
            role="dialog"
            aria-modal="true"
          >
            <div className="p-6 relative h-full overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900"
                aria-label="Закрыть меню"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Logo */}
              <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
                Neural Automation
              </div>

              {/* Menu Items */}
              <nav className="space-y-4 mt-2">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => handleClick(item)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              {/* CTA */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl text-lg font-medium hover:shadow-lg transition-shadow text-left"
              >
                Начать проект
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}