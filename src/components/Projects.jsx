import projects from '../data/projects.json'

const Projects = () => {
    return (
        <section id="work" className="py-32 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm dark:shadow-none border border-slate-200 dark:border-white/5 hover:border-coral/50 dark:hover:border-coral/30 transition-all duration-500 flex flex-col">
                            <div className="aspect-video bg-indigo-50 dark:bg-indigo-950/20 overflow-hidden relative flex items-center justify-center">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="text-slate-400 dark:text-slate-500 font-medium text-sm uppercase tracking-widest flex flex-col items-center gap-2">
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
                                <p className="text-slate-600 dark:text-slate-400 line-clamp-2 mb-8">{project.description}</p>

                                <div className="mt-auto flex gap-6">
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-coral dark:hover:text-coral transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-coral dark:hover:text-coral transition-colors">
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
    )
}

export default Projects
