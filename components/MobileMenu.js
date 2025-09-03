'use client'

import { AnimatePresence, motion } from 'framer-motion'

export default function MobileMenu({ isOpen, onClose, items, active, onClickItem }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200 rounded-b-2xl shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">Меню</div>
                <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100" aria-label="Close menu">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <nav className="mt-3 grid gap-2 pb-2">
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={(e) => onClickItem(e, item.href, item.id)}
                    className={"w-full text-left px-4 py-3 rounded-xl " + (active === item.id ? "bg-blue-600 text-white" : "hover:bg-gray-100")}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
