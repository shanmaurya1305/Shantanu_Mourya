const About = () => {
    return (
        <section id="about" className="py-32 px-6 md:px-10 bg-slate-200/50 dark:bg-slate-900/40">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-20">
                    <div className="flex flex-col gap-10">
                        <h2 className="text-4xl md:text-5xl font-bold font-alegreya uppercase tracking-tighter">About</h2>
                        <div className="relative w-full aspect-square max-w-sm overflow-hidden rounded-2xl shadow-2xl border-4 border-slate-300/30 dark:border-slate-700/50 group">
                            <img 
                                src="/me2.png" 
                                alt="Shan Maurya Profile" 
                                className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110 filter brightness-95 group-hover:brightness-110" 
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </div>
                    <div className="text-xl leading-relaxed text-slate-600 dark:text-slate-400 lg:pt-8 flex flex-col justify-center">
                        <p className="mb-10 font-medium text-xl font-playfair">
                            I’m a third-year engineering student and front-end developer focused on building clean, intuitive user interfaces.
                        </p>
                        <p className="mb-8 font-medium text-xl font-playfair">
                            I work with Python and explore AI/ML to understand how intelligent systems connect with real users. Strong fundamentals in problem solving and data structures guide how I approach both design and development.
                        </p>
                        <p className="mb-8 font-medium text-xl font-playfair">
                            I enjoy turning complex ideas into simple, usable solutions and continuously improving through hands-on projects. My goal is to build technology that balances clarity, performance, and user experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
