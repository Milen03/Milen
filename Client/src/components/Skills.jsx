import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiAngular,
    SiNodedotjs,
    SiPhp,
    SiLaravel,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiTailwindcss,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { HiCode, HiServer, HiDatabase } from 'react-icons/hi'

const skills = [
    // Frontend
    { name: 'JavaScript (ES6+)', icon: SiJavascript, color: 'text-yellow-400', category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', category: 'Frontend' },
    { name: 'React', icon: SiReact, color: 'text-cyan-400', category: 'Frontend' },
    { name: 'Angular', icon: SiAngular, color: 'text-red-500', category: 'Frontend' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-teal-400', category: 'Frontend' },

    // Backend
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', category: 'Backend' },
    { name: 'PHP', icon: SiPhp, color: 'text-indigo-400', category: 'Backend' },
    { name: 'Laravel', icon: SiLaravel, color: 'text-red-400', category: 'Backend' },
    { name: 'REST APIs', icon: TbApi, color: 'text-orange-400', category: 'Backend' },

    // Database
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400', category: 'Database' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-400', category: 'Database' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-300', category: 'Database' },
]

const categories = [
    { name: 'Frontend', icon: HiCode, gradient: 'from-blue-500 to-cyan-500', bg: 'bg-blue-500/10' },
    { name: 'Backend', icon: HiServer, gradient: 'from-green-500 to-emerald-500', bg: 'bg-green-500/10' },
    { name: 'Database', icon: HiDatabase, gradient: 'from-purple-500 to-pink-500', bg: 'bg-purple-500/10' },
]

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">

            {/* Фон */}
            <div className="absolute inset-0 bg-[#0a0a0b]">
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

                {/* Заглавие */}
                <div className="mb-20 flex flex-col items-center text-center">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                        Skills & Technologies
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        Технологиите, с които работя и изграждам проекти
                    </p>
                </div>

                {/* Skills по категории */}
                <div className="flex flex-col items-center gap-20">
                    {categories.map((category) => {
                        const CategoryIcon = category.icon

                        return (
                            <div key={category.name} className="relative w-full flex flex-col items-center">

                                {/* Категория заглавие с икона */}
                                <div className="flex items-center justify-center mb-10">
                                    <div className="flex items-center gap-4">
                                        {/* Лява линия */}
                                        <div className={`hidden md:block w-24 h-px bg-gradient-to-r ${category.gradient} opacity-50`}></div>

                                        {/* Икона и текст */}
                                        <div className={`flex items-center gap-3 px-6 py-3 rounded-2xl ${category.bg} border border-white/10 backdrop-blur-sm`}>
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient}`}>
                                                <CategoryIcon className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-xl font-bold text-white">{category.name}</span>
                                        </div>

                                        {/* Дясна линия */}
                                        <div className={`hidden md:block w-24 h-px bg-gradient-to-l ${category.gradient} opacity-50`}></div>
                                    </div>
                                </div>

                                {/* Skills grid */}
                                <div className="flex flex-wrap gap-6 justify-center max-w-4xl">
                                    {skills
                                        .filter((skill) => skill.category === category.name)
                                        .map((skill) => {
                                            const Icon = skill.icon
                                            return (
                                                <div
                                                    key={skill.name}
                                                    className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/10 transition-all duration-500 cursor-pointer w-40 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20"
                                                >
                                                    {/* Glow ефект при hover */}
                                                    <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

                                                    {/* Топ accent линия */}
                                                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r ${category.gradient} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                                                    <div className="relative flex flex-col items-center gap-4">
                                                        <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                                                            <Icon className={`w-10 h-10 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                                                        </div>
                                                        <span className="text-gray-300 text-sm font-medium text-center group-hover:text-white transition-colors">
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}