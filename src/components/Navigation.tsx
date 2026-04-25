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
    <nav className="fixed top-0 inset-x-0 z-50 bg-neutral-50/95 dark:bg-neutral-950/95 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Code size={18} className="text-neutral-900 dark:text-neutral-100" />
            <span className="font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">Ryan Kelly</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8 text-sm">
              {isHome ? (
                <a href="#work" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Work
                </a>
              ) : (
                <Link to="/#work" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                  Work
                </Link>
              )}
              <Link to="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-1 pl-6 border-l border-neutral-200 dark:border-neutral-800">
              <a
                href="https://github.com/whos-ryan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={18} />
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="p-2 text-neutral-600 dark:text-neutral-400" aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-neutral-600 dark:text-neutral-400" aria-label="Toggle menu">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-col gap-4 pt-4">
              <Link to="/#work" onClick={() => setIsOpen(false)} className="text-base text-neutral-600 dark:text-neutral-400">Work</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-base text-neutral-600 dark:text-neutral-400">About</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-base text-neutral-600 dark:text-neutral-400">Contact</Link>
              <a
                href="https://github.com/whos-ryan"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 text-base text-neutral-600 dark:text-neutral-400"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}