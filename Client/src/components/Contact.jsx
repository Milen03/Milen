import { useState } from 'react'
import { HiMail, HiUser, HiChat, HiPaperAirplane, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState(null) // 'loading', 'success', 'error'
    const [errorMessage, setErrorMessage] = useState('')

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('loading')
        setErrorMessage('')

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setStatus(null), 5000)
            } else {
                setStatus('error')
                setErrorMessage(data.message || 'Something went wrong')
            }
        } catch (error) {
            setStatus('error')
            setErrorMessage('Failed to send message. Please try again.')
        }
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">

            {/* Фон */}
            <div className="absolute inset-0 bg-[#0a0a0b]">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto px-6">

                {/* Заглавие */}
                <div className="mb-16 flex flex-col items-center text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                        <HiMail className="w-4 h-4" />
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                        Contact Me
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                        Имаш въпрос или предложение? Свържи се с мен!
                    </p>
                </div>

                {/* Форма */}
                <div 
                    ref={ref}
                    className={`relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 transition-all duration-700
                        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-10"></div>

                    <form onSubmit={handleSubmit} className="relative space-y-6">

                        {/* Name & Email Row */}
                        <div className="grid md:grid-cols-2 gap-6">
                            
                            {/* Name */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                                    <HiUser className="w-4 h-4 text-blue-400" />
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                                    <HiMail className="w-4 h-4 text-purple-400" />
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                                <HiChat className="w-4 h-4 text-cyan-400" />
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                placeholder="Write your message here..."
                                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                            />
                        </div>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400">
                                <HiCheckCircle className="w-6 h-6 shrink-0" />
                                <p>Message sent successfully! I'll get back to you soon.</p>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                                <HiExclamationCircle className="w-6 h-6 shrink-0" />
                                <p>{errorMessage}</p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 text-white font-semibold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/25"
                        >
                            {status === 'loading' ? (
                                <>
                                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <HiPaperAirplane className="w-5 h-5 rotate-90" />
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Alternative Contact */}
                <div className="mt-12 flex flex-wrap justify-center gap-6">
                    <a 
                        href="mailto:milen.atanasovv03@gmail.com"
                        className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-all"
                    >
                        <HiMail className="w-5 h-5" />
                        <span>milen.atanasovv03@gmail.com</span>
                    </a>
                    <a 
                        href="tel:0877216068"
                        className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:border-purple-500/50 hover:text-purple-400 transition-all"
                    >
                        <span className="text-lg">📱</span>
                        <span>0877216068</span>
                    </a>
                </div>
            </div>
        </section>
    )
}