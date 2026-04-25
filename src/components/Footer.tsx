import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <div className="flex items-center gap-6 text-neutral-600 dark:text-neutral-400">
          <Link to="/" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            Ryan Kelly
          </Link>
          <span className="text-neutral-400 dark:text-neutral-600">·</span>
          <span>Bournemouth, UK</span>
        </div>

        <div className="flex items-center gap-5 text-neutral-500 dark:text-neutral-500">
          <a
            href="https://github.com/whos-ryan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-kelly-841201283/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:ryan.kelly4553@gmail.com"
            aria-label="Email"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <Mail size={16} />
          </a>
          <span className="text-neutral-400 dark:text-neutral-600">·</span>
          <span>&copy; 2026</span>
        </div>
      </div>
    </footer>
  );
}
