'use client'

import { useState } from 'react'
import NewNavigation from '../../components/NewNavigation'
import Footer from '../../components/Footer'

export default function AutomationLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <NewNavigation />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}