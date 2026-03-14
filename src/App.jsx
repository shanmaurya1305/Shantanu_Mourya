import { useState, useEffect } from 'react'
import projects from './data/projects.json'
import skillsets from './data/skills.json'

function App() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-midnight text-white font-body selection:bg-coral/30">
            {/* Header / Navbar */}
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-midnight/80 backdrop-blur-md shadow-lg shadow-black/20' : 'py-8'
                }`}>
                <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
                    <a href="#home" className="text-2xl font-bold tracking-tight">
                        <span className="hidden sm:inline">Shantanu Mourya</span>
                        <span className="sm:hidden text-coral uppercase tracking-widest">SM</span>
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-10 text-sm font-medium text-slate-400">
                        <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                        <li><a href="#work" className="hover:text-white transition-colors">Projects</a></li>
                        <li><a href="#contact" className="hover:text-white transition-colors">Contacts</a></li>
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white focus:outline-none z-50 p-2"
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

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 z-40 md:hidden bg-midnight/95 backdrop-blur-xl transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-10 ${isMenuOpen ? 'opacity-100 visible h-screen' : 'opacity-0 invisible h-0 overflow-hidden'
                    }`}>
                    <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold hover:text-coral transition-colors">Home</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold hover:text-coral transition-colors">About</a>
                    <a href="#work" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold hover:text-coral transition-colors">Projects</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold hover:text-coral transition-colors">Contacts</a>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
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
                            <h2 className="text-5xl md:text-7xl font-bold mb-4 flex items-center">
                                Hello<span className="text-coral">.</span>
                            </h2>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[2px] w-20 bg-coral"></div>
                                <h3 className="text-4xl md:text-5xl font-medium">I'm Shantanu</h3>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-12">
                                Frontend Developer
                            </h1>

                            <div className="flex flex-wrap gap-5">
                                <a href="#contact" className="px-8 py-4 bg-coral text-white font-bold rounded-sm border-2 border-coral hover:bg-transparent transition-all duration-300">
                                    Got a project?
                                </a>
                                <a href="/resume.pdf" className="px-8 py-4 bg-transparent text-white font-bold rounded-sm border-2 border-white hover:border-coral hover:text-coral transition-all duration-300">
                                    My resume
                                </a>
                            </div>
                        </div>

                        {/* Gradient Background Element */}
                        <div className="relative flex justify-center items-center h-full min-h-[400px]">
                            {/* The Gradient Blob */}
                            <div className="absolute w-full max-w-lg aspect-square bg-linear-to-br from-teal/20 via-sage/15 to-muted-orange/10 blur-[100px] rounded-full animate-slow-float"></div>

                            {/* Secondary accent for depth */}
                            <div className="absolute w-3/4 max-w-md aspect-square bg-linear-to-tr from-teal/10 via-transparent to-muted-orange/5 blur-[120px] rounded-full animate-slow-float [animation-delay:-5s]"></div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-32 px-6 md:px-10 bg-slate-900/40">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-20">
                            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">About</h2>
                            <div className="text-xl leading-relaxed text-slate-400">
                                <p className="mb-10 font-medium">
                                    I’m a third-year engineering student and front-end developer focused on building clean, intuitive user interfaces.
                                </p>
                                <p className="mb-8 font-medium">
                                    I work with Python and explore AI/ML to understand how intelligent systems connect with real users. Strong fundamentals in problem solving and data structures guide how I approach both design and development.
                                </p>
                                <p className="mb-8 font-medium">
                                    I enjoy turning complex ideas into simple, usable solutions and continuously improving through hands-on projects. My goal is to build technology that balances clarity, performance, and user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="work" className="py-32 px-6 md:px-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-between items-end mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {projects.map((project) => (
                                <div key={project.id} className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-white/5 hover:border-coral/30 transition-all duration-500 flex flex-col">
                                    <div className="aspect-video bg-indigo-950/20 overflow-hidden relative flex items-center justify-center">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="text-slate-500 font-medium text-sm uppercase tracking-widest flex flex-col items-center gap-2">
                                                <svg className="w-8 h-8 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                No Preview Available
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-10 grow flex flex-col">
                                        <span className="text-xs uppercase tracking-widest text-coral/80 font-bold mb-4 block">{project.category}</span>
                                        <h3 className="text-3xl mb-4 group-hover:text-coral transition-colors">{project.title}</h3>
                                        <p className="text-slate-400 line-clamp-2 mb-8">{project.description}</p>

                                        <div className="mt-auto flex gap-6">
                                            {project.githubUrl && (
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-coral transition-colors">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                                    Code
                                                </a>
                                            )}
                                            {project.liveUrl && (
                                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-coral transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* Skills Section */}
                <section id="skills" className="py-32 px-6 md:px-10 bg-slate-900/40">
                    <div className="max-w-7xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold">Toolkit</h2>
                    </div>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {skillsets.map((skillset, idx) => (
                            <div key={idx} className="bg-midnight p-10 rounded-3xl border border-white/5 hover:border-coral/50 transition-all duration-500 group hover:bg-white/5 hover:backdrop-blur-md hover:shadow-2xl hover:shadow-coral/10 hover:-translate-y-2">
                                <h3 className="text-2xl mb-8 group-hover:text-coral transition-colors font-bold border-b border-white/5 pb-4">{skillset.category}</h3>
                                <ul className="space-y-6">
                                    {skillset.skills.map((skill, i) => (
                                        <li key={i} className="text-slate-400 group/item">
                                            <div className="flex justify-between items-center mb-1">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-coral/50 group-hover/item:bg-coral transition-colors" />
                                                    <span className="text-white font-medium group-hover/item:text-coral transition-colors">{skill.name}</span>
                                                </div>
                                                <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold px-2 py-0.5 rounded-full border border-white/5 bg-white/5 group-hover/item:border-coral/30 group-hover/item:text-slate-400 transition-all">
                                                    {skill.level}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-32 px-6 md:px-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-coral rounded-[3rem] p-16 md:p-32 text-center relative overflow-hidden group ">
                            {/* Decorative element */}
                            {/* <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 "></div> */}

                            <h2 className="text-5xl md:text-7xl font-bold mb-10 text-midnight">Let's build something<br />amazing together.</h2>
                            <a href="mailto:mauryashantanu2019@gmail.com" className="inline-block text-2xl md:text-3xl font-bold text-white border-b-4 border-white pb-2 hover:translate-x-3 transition-transform duration-300">
                                mauryashantanu2019@gmail
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-16 text-center text-sm text-slate-500 border-t border-white/5">
                <p>&copy; {new Date().getFullYear()} SHANTANU MOURYA. DEVELOPED WITH PASSION.</p>
            </footer>
        </div>
    )
}

export default App
