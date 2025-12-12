import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaCode, FaGraduationCap, FaCertificate, FaProjectDiagram, FaUser } from 'react-icons/fa'

const navLinks=[
    {name:"Skills", href:"#skills", icon:FaCode},
    {name:"Summary",href:'#summary', icon:FaUser},
    { name: 'Education', href: '#education', icon: FaGraduationCap },
    { name: 'Certificates', href: '#certificates', icon: FaCertificate },
    { name: 'Projects', href: '#projects', icon: FaProjectDiagram },
]

// ...existing code...

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0b]/95 backdrop-blur-md border-b border-white/10">
     <nav className="flex items-center justify-center px-8 py-4 max-w-6xl mx-auto relative" aria-label="Global">
        
        {/* Лого */}
         <div className="absolute left-2 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">MA</span>
          </div>
          <a href="#" className="text-lg font-bold text-white hover:text-blue-400 transition">
            Milen.dev
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden absolute right-6">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:text-white hover:bg-white/10 transition"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Menu */}
       <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                <Icon className="w-4 h-4 group-hover:text-blue-400 transition" />
                <span className="relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            )
          })}
        </div>

        
      </nav>

      {/* Mobile Menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#0a0a0b] px-6 py-6 border-l border-white/10">
          
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MA</span>
              </div>
              <span className="text-lg font-bold text-white">Milen.dev</span>
            </div>
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="space-y-2">
            {navLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
                >
                  <Icon className="w-5 h-5 text-blue-400" />
                  <span className="text-lg">{item.name}</span>
                </a>
              )
            })}
          </div>

          {/* Mobile Contact Button */}
          
        </DialogPanel>
      </Dialog>
    </header>
  )
}