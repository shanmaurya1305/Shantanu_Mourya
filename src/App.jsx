import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AuroraBackground from './components/AuroraBackground'

function App() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Initialize theme from localStorage or system preference, defaulting to dark
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme')
            if (savedTheme) {
                return savedTheme
            }
            return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
        }
        return 'dark'
    })

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className="relative min-h-screen bg-slate-50 dark:bg-midnight text-slate-900 dark:text-white font-body selection:bg-coral/30 transition-colors duration-300 z-0">
            <AuroraBackground />
            <Navbar 
                isScrolled={isScrolled} 
                isMenuOpen={isMenuOpen} 
                setIsMenuOpen={setIsMenuOpen} 
                theme={theme} 
                toggleTheme={toggleTheme} 
            />

            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>

            <Footer />
        </div>
    )
}

export default App
