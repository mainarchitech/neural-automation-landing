'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Benefits from '../components/Benefits'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-24">
          <Hero />
          <div className="space-y-24">
            <Services />
          </div>
          <Benefits />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}