import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">교사 퍼스널 브랜딩</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-primary">소개</a>
            <a href="#skills" className="text-gray-700 hover:text-primary">역량</a>
            <a href="#projects" className="text-gray-700 hover:text-primary">프로젝트</a>
            <a href="#contact" className="text-gray-700 hover:text-primary">연락처</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary">소개</a>
            <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-primary">역량</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-primary">프로젝트</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary">연락처</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
