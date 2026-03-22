import Typewriter from './Typewriter'

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Accents (Arrows) */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
                <svg width="60" height="100" viewBox="0 0 60 100" fill="none" className="text-coral">
                    <path d="M50 10L10 50L50 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="absolute right-10 bottom-20 opacity-20 hidden lg:block">
                <svg width="60" height="100" viewBox="0 0 60 100" fill="none" className="text-coral">
                    <path d="M10 10L50 50L10 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
                {/* Text Content */}
                <div className="z-10 animate-fade-in">
                    <h2 className="text-5xl md:text-7xl font-bold font-alegreya mb-4 flex items-center">
                        Hello<span className="text-coral">.</span>
                    </h2>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[2px] w-20 bg-coral"></div>
                        <h3 className="text-4xl md:text-5xl font-medium font-pacifico">I'm Shantanu</h3>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-alegreya leading-tight mb-12">
                        <Typewriter />
                    </h1>

                    <div className="text-lg flex flex-wrap gap-5 font-playfair">
                        <a href="#contact" className="px-8 py-4 bg-coral text-white font-bold rounded-sm border-2 border-coral hover:bg-transparent hover:text-coral transition-all duration-300">
                            Got a project?
                        </a>
                        <a href="/resume.pdf" className="px-8 py-4 bg-transparent text-slate-900 dark:text-white font-bold rounded-sm border-2 border-slate-900 dark:border-white hover:border-coral hover:text-coral dark:hover:border-coral dark:hover:text-coral transition-all duration-300 ">
                            My resume
                        </a>
                    </div>
                </div>

                {/* Empty right-side column to balance the grid layout */}
                <div className="relative flex justify-center items-center h-full min-h-[400px]">
                </div>
            </div>
        </section>
    )
}

export default Hero
