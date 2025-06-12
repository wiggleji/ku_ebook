// import { useState } from 'react'
import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import About from '../src/components/About'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-screen-2xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
