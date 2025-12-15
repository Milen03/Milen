import { HiLightningBolt, HiCode, HiAcademicCap, HiUserGroup } from 'react-icons/hi'
import { SiReact, SiNodedotjs, SiLaravel, SiTailwindcss } from 'react-icons/si'
import { useInView } from 'react-intersection-observer'

const highlights = [
    { icon: HiAcademicCap, text: 'Studying at SoftUni', color: 'text-blue-400' },
    { icon: HiCode, text: 'Full-Stack Development', color: 'text-purple-400' },
    { icon: HiLightningBolt, text: 'Fast Learner', color: 'text-yellow-400' },
    { icon: HiUserGroup, text: 'Team Player', color: 'text-green-400' },
]

const techStack = [
    { icon: SiReact, name: 'React', color: 'text-cyan-400' },
    { icon: SiNodedotjs, name: 'Node.js', color: 'text-green-500' },
    { icon: SiLaravel, name: 'Laravel', color: 'text-red-400' },
    { icon: SiTailwindcss, name: 'Tailwind', color: 'text-teal-400' },
]

export default function Summary() {
    const { ref: techStackRef, inView: techStackInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    const { ref: statsRef, inView: statsInView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    })

    return (
        <section id="summary" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">

            {/* Фон */}
            <div className="absolute inset-0 bg-[#0a0a0b]">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Лява страна - Текст */}
                    <div className="space-y-8">

                        {/* Заглавие */}
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                                About Me
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                Summary
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-3 pt-4">
                            {highlights.map((item) => {
                                const Icon = item.icon
                                return (
                                    <div
                                        key={item.text}
                                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                                    >
                                        <Icon className={`w-5 h-5 ${item.color}`} />
                                        <span className="text-gray-300 text-sm font-medium">{item.text}</span>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Параграфи */}
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                <span className="text-white font-semibold">Ambitious and highly motivated Junior Developer</span>, currently studying at SoftUni with a strong focus on JavaScript and modern web technologies. I am eager to start my professional career as a developer and ready to put in maximum effort to learn, contribute, and grow within a real-world development environment.
                            </p>

                            <p>
                                I have hands-on experience building <span className="text-blue-400">full-stack web applications</span> using React, Node.js, and Laravel, working with REST APIs, databases, and modern UI frameworks such as Tailwind CSS. I enjoy turning ideas into functional, user-friendly applications and continuously improving my problem-solving and coding skills.
                            </p>

                            <p>
                                I am <span className="text-purple-400">highly adaptable, proactive, and motivated</span> to learn new technologies, collaborate with teams, and deliver clean, maintainable code while growing as a professional developer.
                            </p>
                        </div>
                    </div>

                    {/* Дясна страна - Визуален елемент */}
                    <div className="flex items-center justify-center">
                        <div className="relative">
                            
                            {/* Glow ефект */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
                            
                            {/* Карта */}
                            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                                
                                {/* Tech Stack */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-white text-center mb-6">Tech Stack</h3>
                                    
                                    <div ref={techStackRef} className="grid grid-cols-2 gap-4">
                                        {techStack.map((tech, index) => {
                                            const Icon = tech.icon
                                            return (
                                                <div
                                                    key={tech.name}
                                                    className={`group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 cursor-pointer
                                                        ${techStackInView 
                                                            ? 'opacity-100 translate-y-0' 
                                                            : 'opacity-0 translate-y-10'
                                                        }`}
                                                    style={{ 
                                                        transitionDelay: `${index * 150}ms` 
                                                    }}
                                                >
                                                    <Icon className={`w-12 h-12 ${tech.color} group-hover:scale-110 transition-transform`} />
                                                    <span className="text-gray-300 font-medium">{tech.name}</span>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* Статистика */}
                                    <div 
                                        ref={statsRef}
                                        className={`grid grid-cols-2 gap-20 pt-10 border-t border-white/10 transition-all duration-700
                                            ${statsInView 
                                                ? 'opacity-100 translate-y-0' 
                                                : 'opacity-0 translate-y-10'
                                            }`}
                                        style={{ transitionDelay: '400ms' }}
                                    >
                                        <div className={`text-center transition-all duration-500 ${statsInView ? 'scale-100' : 'scale-75'}`}
                                             style={{ transitionDelay: '500ms' }}>
                                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                                10+
                                            </div>
                                            <div className="text-gray-400 text-sm">Projects</div>
                                        </div>
                                        <div className={`text-center transition-all duration-500 ${statsInView ? 'scale-100' : 'scale-75'}`}
                                             style={{ transitionDelay: '650ms' }}>
                                            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                2
                                            </div>
                                            <div className="text-gray-400 text-sm">Years Learning</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}