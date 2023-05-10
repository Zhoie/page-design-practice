'use client'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

export default function finance() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Analytics />
        <Newsletter />
        <Subscribe />
        <Footer />
    </div>
  )
}

