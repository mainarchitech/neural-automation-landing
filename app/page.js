'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Benefits from '../components/Benefits'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  const renderContent = () => {
    switch (activeTab) {
      case 'services':
        return <Services />
      case 'benefits':
        return <Benefits />
      case 'contact':
        return <Contact />
      default:
        return (
          <>
            <Hero />
            <Services />
            <Benefits />
            <Contact />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  )
}