const About = () => {
    return (
        <section id="about" className="py-32 px-6 md:px-10 bg-slate-200/50 dark:bg-slate-900/40">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-20">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">About</h2>
                    <div className="text-xl leading-relaxed text-slate-600 dark:text-slate-400">
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
    )
}

export default About
