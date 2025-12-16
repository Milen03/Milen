import { HiAcademicCap } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'

const certificates = [
    {
        title: 'Programing Basics',
        issuer: 'SoftUni',
        date: 'March 2024',
        image: 'Basics.jpeg',
        gradient: 'from-yellow-500 to-orange-500'
    },
    {
        title: 'Programing Fundamentals',
        issuer: 'SoftUni',
        date: 'May 2024',
        image: 'Fundamentals.jpeg',
        gradient: 'from-yellow-400 to-yellow-600'
    },
    {
        title: 'JS-Advanced',
        issuer: 'SoftUni',
        date: 'September 2024',
        image: 'JS-Advanced.jpeg',
        gradient: 'from-yellow-500 to-orange-500'
    },
    {
        title: 'JS-Applications',
        issuer: 'SoftUni',
        date: 'October 2024',
        image: 'JS-Applications.jpeg',
        gradient: 'from-yellow-500 to-red-500'
    },
    {
        title: 'JS-Back-End',
        issuer: 'SoftUni',
        date: 'January 2024',
        image: 'JS-Back-End.jpeg',
        gradient: 'from-indigo-500 to-purple-500'
    },
    {
        title: 'Angular',
        issuer: 'SoftUni',
        date: 'June 2024',
        image: 'Angular.jpeg',
        gradient: 'from-red-500 to-pink-500'
    },
]

export default function Certificates() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    return (
        <section id="certificates" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">

            {/* Фон */}
            <div className="absolute inset-0 bg-[#0a0a0b]">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

                {/* Заглавие */}
                <div className="mb-16 flex flex-col items-center text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
                        <HiAcademicCap className="w-4 h-4" />
                        Achievements
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                        Certificates
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        Сертификати от курсове и обучения
                    </p>
                </div>

                {/* Certificates Grid */}
                <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <div
                            key={cert.title}
                            className={`group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20
                                ${inView 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={cert.image} 
                                    alt={cert.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="relative p-5">
                                <h3 className={`text-lg font-bold bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent mb-1`}>
                                    {cert.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{cert.issuer}</p>
                                <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
                            </div>

                            {/* Top Gradient Line */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-16 flex justify-center gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                            {certificates.length}
                        </div>
                        <div className="text-gray-400 text-sm mt-1">Certificates</div>
                    </div>
                    <div className="w-px bg-white/10"></div>
                    <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            SoftUni
                        </div>
                        <div className="text-gray-400 text-sm mt-1">Main Provider</div>
                    </div>
                </div>
            </div>
        </section>
    )
}