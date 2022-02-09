import React, { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

import './App.scss'

// content thats subject to change
const { introduction, contact } = require('./content.json')

function App() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  // parallax
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar />
      <About introduction={introduction} offsetY={offsetY} />
      <Skills />
      <Portfolio offsetY={offsetY} />
      <Contact desc={contact} />
    </>
  )
}

export default App
