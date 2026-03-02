import { Menu, X, Moon, Sun, Code } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/20 backdrop-blur-md dark:bg-transparent border-b border-gray-100 dark:border-gray-800 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center text-black">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
              <Code size={18} className="text-white" />
            </div>
            <span className="ml-3 font-semibold text-black dark:text-white">Rhyze</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {isHome ? (
              <a href="#work" className="text-black dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                Work
              </a>
            ) : (
              <Link to="/#work" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                Work
              </Link>
            )}
            <Link to="/about" className="text-black dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="px-5 py-2 bg-black text-white rounded-md hover:scale-105 transform transition duration-150">
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col gap-4">
              {isHome ? (
                <a href="#work" onClick={() => setIsOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  Work
                </a>
              ) : (
                <Link to="/#work" onClick={() => setIsOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                  Work
                </Link>
              )}
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="px-5 py-2 bg-black text-white rounded-md hover:scale-105 transform transition duration-150 w-full text-center">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
