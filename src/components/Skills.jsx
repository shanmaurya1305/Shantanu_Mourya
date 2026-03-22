import skillsets from '../data/skills.json'

const Skills = () => {
    return (
        <section id="skills" className="py-32 px-6 md:px-10 bg-slate-200/50 dark:bg-slate-900/40">
            <div className="max-w-7xl mx-auto text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold">Toolkit</h2>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillsets.map((skillset, idx) => (
                    <div key={idx} className="bg-white dark:bg-midnight p-10 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none hover:border-coral/50 dark:hover:border-coral/50 transition-all duration-500 group hover:bg-slate-50 dark:hover:bg-white/5 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-coral/5 dark:hover:shadow-coral/10">
                        <h3 className="text-2xl mb-8 group-hover:text-coral transition-colors font-bold border-b border-slate-200 dark:border-white/5 pb-4">{skillset.category}</h3>
                        <ul className="space-y-6">
                            {skillset.skills.map((skill, i) => (
                                <li key={i} className="text-slate-600 dark:text-slate-400 group/item">
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-coral/50 group-hover/item:bg-coral transition-colors" />
                                            <span className="text-slate-900 dark:text-white font-medium group-hover/item:text-coral transition-colors">{skill.name}</span>
                                        </div>
                                        <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-600 font-bold px-2 py-0.5 rounded-full border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-white/5 group-hover/item:border-coral/30 group-hover/item:text-slate-700 dark:group-hover/item:text-slate-400 transition-all">
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
    )
}

export default Skills
