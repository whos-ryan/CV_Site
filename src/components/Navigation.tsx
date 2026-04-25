import { Menu, X, Moon, Sun, Code, Github } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    // 1. THE FLOATING WRAPPER
    // We use 'fixed' with 'inset-x-0' to keep it centered, 
    // and 'px-4' to ensure it doesn't touch the screen edges on mobile.
    <nav className="fixed top-6 inset-x-0 z-50 px-4">
      <div className={`
        mx-auto max-w-5xl transition-all duration-300
        ${isOpen ? 'rounded-3xl' : 'rounded-full'}
        bg-white/70 dark:bg-slate-900/70 
        backdrop-blur-xl 
        border border-white/40 dark:border-slate-700/50 
        shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
      `}>
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-14"> {/* Reduced height for the "pill" look */}
            
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
                <Code size={16} className="text-white" />
              </div>
              <span className="ml-2.5 font-bold text-slate-900 dark:text-white tracking-tight">Rhyze</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex items-center gap-6 text-sm font-medium">
                {isHome ? (
                  <a href="#work" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors">
                    Work
                  </a>
                ) : (
                  <Link to="/#work" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors">
                    Work
                  </Link>
                )}
                <Link to="/about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors">
                  About
                </Link>
              </nav>
              
              <div className="flex items-center gap-3 ml-2 pl-6 border-l border-slate-200 dark:border-slate-800">
                <a
                  href="https://github.com/whos-ryan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github size={18} />
                </a>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </button>
                <Link to="/contact" className="px-4 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold rounded-full hover:opacity-90 transition-all active:scale-95">
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-2">
              <button onClick={toggleTheme} className="p-2 text-slate-600 dark:text-slate-300">
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 dark:text-slate-300">
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu (Inside the Glass) */}
          {isOpen && (
            <div className="md:hidden pb-6 pt-2 space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex flex-col gap-4 px-2">
                <Link to="/#work" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-600 dark:text-slate-300">Work</Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-600 dark:text-slate-300">About</Link>
                <a
                  href="https://github.com/whos-ryan"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 text-base font-medium text-slate-600 dark:text-slate-300"
                >
                  <Github size={18} /> GitHub
                </a>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="px-5 py-2.5 bg-blue-600 text-white rounded-full w-full text-center font-bold">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}