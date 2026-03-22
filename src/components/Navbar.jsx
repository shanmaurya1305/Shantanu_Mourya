import ThemeToggle from './ThemeToggle'

const Navbar = ({ isScrolled, isMenuOpen, setIsMenuOpen, theme, toggleTheme }) => {
    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/80 dark:bg-midnight/80 backdrop-blur-md shadow-sm dark:shadow-lg shadow-black/5 dark:shadow-black/20' : 'py-8'
            }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold tracking-tight">
                    <span className="hidden sm:inline">Shantanu Mourya</span>
                    <span className="sm:hidden text-coral uppercase tracking-widest">SM</span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 items-center text-sm font-medium text-slate-600 dark:text-slate-400">
                    <li><a href="#home" className="hover:text-coral dark:hover:text-white transition-colors">Home</a></li>
                    <li><a href="#about" className="hover:text-coral dark:hover:text-white transition-colors">About</a></li>
                    <li><a href="#work" className="hover:text-coral dark:hover:text-white transition-colors">Projects</a></li>
                    <li><a href="#contact" className="hover:text-coral dark:hover:text-white transition-colors">Contacts</a></li>
                    <li><ThemeToggle theme={theme} toggleTheme={toggleTheme} /></li>
                </ul>

                {/* Mobile Menu & Theme Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    <button
                        className="text-slate-900 dark:text-white focus:outline-none z-50 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 md:hidden bg-white/95 dark:bg-midnight/95 backdrop-blur-xl transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-10 ${isMenuOpen ? 'opacity-100 visible h-screen' : 'opacity-0 invisible h-0 overflow-hidden'
                }`}>
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold hover:text-coral transition-colors text-slate-900 dark:text-white">Home</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold hover:text-coral transition-colors text-slate-900 dark:text-white">About</a>
                <a href="#work" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold hover:text-coral transition-colors text-slate-900 dark:text-white">Projects</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold hover:text-coral transition-colors text-slate-900 dark:text-white">Contacts</a>
            </div>
        </nav>
    )
}

export default Navbar
