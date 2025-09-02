'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function AutomationLayout({ children }) {
  const [activeTab, setActiveTab] = useState('automation')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}