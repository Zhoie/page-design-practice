import React from 'react'
import Navbar from '@/components/financePage/Navbar'
import Hero from '@/components/financePage/Hero'
import Analytics from '@/components/financePage/Analytics'
import Newsletter from '@/components/financePage/Newsletter'
import Subscribe from '@/components/financePage/Subscribe'
import Footer from '@/components/financePage/Footer'

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

