import { HiExternalLink } from 'react-icons/hi'
import { SiLaravel, SiReact, SiNodedotjs, SiPhp, SiFirebase } from 'react-icons/si'
import { useInView } from 'react-intersection-observer'

const projects = [
    {
        title: 'Zarzavat',
        description: 'Zarzavat is the project in which vegetables are sold. The project is written in PHP Laravel. The project has an Administrative Panel in which you can control the products and their quantities and prices as well as their orders that have statuses. You can browse the application as a guest. The application will soon enter into a workflow with servers.',
        link: 'https://zarzavat.laravel.cloud/',
        technologies: [
            { name: 'Laravel', icon: SiLaravel, color: 'text-red-400' },
            { name: 'PHP', icon: SiPhp, color: 'text-indigo-400' },
        ],
        gradient: 'from-red-500 to-orange-500',
        features: ['Admin Panel', 'CRUD Products', 'Order Management', 'Guest Browsing']
    },
    {
        title: 'Phone-Shop-React',
        description: 'E-commerce application for buying and selling mobile phones, built with React. Implements full CRUD functionality for products, users, profile management, integrated with a REST API and featuring a responsive design.',
        link: 'https://phone-shop-458810.web.app',
        technologies: [
            { name: 'React', icon: SiReact, color: 'text-cyan-400' },
            { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
        ],
        gradient: 'from-cyan-500 to-blue-500',
        features: ['Full CRUD', 'REST API', 'User Profiles', 'Responsive Design']
    },
    {
        title: 'Auto-Mile',
        description: 'Web application for listing and managing vehicle ads, developed with React and Node.js. Includes full CRUD operations, user authentication, advanced search filters.',
        link: 'https://auto-mile-455117.web.app',
        technologies: [
            { name: 'React', icon: SiReact, color: 'text-cyan-400' },
            { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
        ],
        gradient: 'from-green-500 to-emerald-500',
        features: ['CRUD Operations', 'Authentication', 'Search Filters', 'Vehicle Listings']
    },
]

export default function Projects() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">

            {/* Фон */}
            <div className="absolute inset-0 bg-[#0a0a0b]">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto px-6">

                {/* Заглавие */}
                <div className="mb-16 flex flex-col items-center text-center">
                    <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
                        My Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                        Projects
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        Проекти, които съм изградил с различни технологии
                    </p>
                </div>

                {/* Projects List */}
                <div ref={ref} className="flex flex-col gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={`group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20
                                ${inView 
                                    ? 'opacity-100 translate-x-0' 
                                    : 'opacity-0 -translate-x-10'
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Gradient Left Bar */}
                            {/* <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${project.gradient}`}></div> */}

                            {/* Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            <div className="relative px-10 py-8 md:px-12">

                                {/* Header Row */}
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <h3 className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                            {project.title}
                                        </h3>
                                        
                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => {
                                                const Icon = tech.icon
                                                return (
                                                    <div
                                                        key={tech.name}
                                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
                                                    >
                                                        <Icon className={`w-4 h-4 ${tech.color}`} />
                                                        <span className="text-gray-300 text-xs font-medium">{tech.name}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-medium hover:opacity-90 transition-opacity shrink-0`}
                                    >
                                        <span>View Project</span>
                                        <HiExternalLink className="w-5 h-5" />
                                    </a>
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 text-base leading-relaxed mb-6 pr-4">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-3">
                                    {project.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-sm hover:border-white/20 transition-colors"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}