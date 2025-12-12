export default function Hero() {
  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Фон с градиент и ефекти */}
      <div className="absolute inset-0 bg-[#0a0a0b]">
        {/* Градиентни кръгове */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        {/* Мрежа/Grid ефект */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Съдържание */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="flex flex-col items-center text-center gap-8">

          {/* Аватар */}
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <img 
              src="/milen.JPG"
              alt="Milen Atanasov"
              className="relative w-40 h-40 rounded-full border-4 border-white/30 shadow-2xl object-cover"
              style={{objectPosition: 'center 20%'}}
            />
          </div>

          {/* Име и Професия */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Milen Atanasov
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300">
              Junior Front-End Developer
            </p>
          </div>

          {/* Контакти */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 mt-4">
            <a 
              href="mailto:milen.atanasovv03@gmail.com" 
              className="flex items-center gap-2 hover:text-blue-400 transition text-lg bg-white/5 px-4 py-2 rounded-lg border border-white/10"
            >
              <span className="text-xl">📧</span>
              <span>milen.atanasovv03@gmail.com</span>
            </a>
            <span className="flex items-center gap-2 text-lg bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <span className="text-xl">📱</span> 0877216068
            </span>
            <span className="flex items-center gap-2 text-lg bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <span className="text-xl">📍</span> Велико Търново
            </span>
          </div>

          {/* Социални линкове */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/milen-atanasov-774670321/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all text-white font-semibold text-lg shadow-lg shadow-blue-500/25"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Milen03"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white/10 border border-white/20 hover:border-purple-400 hover:text-purple-400 hover:bg-purple-500/10 transition-all font-semibold text-lg"
            >
              GitHub
            </a>
          </div>

          {/* Стрелка надолу */}
          <a href="#projects" className="mt-12 animate-bounce text-gray-500 hover:text-white transition">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>

        </div>
      </div>
    </header>
  );
}