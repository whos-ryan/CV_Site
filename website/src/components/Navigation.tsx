import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="ml-3 font-semibold text-black">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-gray-600 hover:text-black transition-colors">
              Work
            </a>
            <a href="#skills" className="text-gray-600 hover:text-black transition-colors">
              Skills
            </a>
            <a href="#about" className="text-gray-600 hover:text-black transition-colors">
              About
            </a>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-black"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#work" className="text-gray-600 hover:text-black transition-colors">
                Work
              </a>
              <a href="#skills" className="text-gray-600 hover:text-black transition-colors">
                Skills
              </a>
              <a href="#about" className="text-gray-600 hover:text-black transition-colors">
                About
              </a>
              <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-full">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
