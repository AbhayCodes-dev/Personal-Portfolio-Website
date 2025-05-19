import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode')
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

    // Set dark mode based on saved preference or system preference
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode))
    } else if (prefersDarkMode) {
      setDarkMode(true)
    }

    // Mark component as loaded
    setIsLoaded(true)

    // Listen for system dark mode changes
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleDarkModeChange = (e) => {
      // Only change if no saved preference exists
      if (localStorage.getItem('darkMode') === null) {
        setDarkMode(e.matches)
      }
    }

    darkModeMediaQuery.addEventListener('change', handleDarkModeChange)

    // Cleanup listener
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange)
    }
  }, [])

  // Update localStorage when dark mode changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('darkMode', JSON.stringify(darkMode))
      
      // Update HTML class for proper styling
      if (darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [darkMode, isLoaded])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App