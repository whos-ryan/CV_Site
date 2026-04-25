import { ArrowRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="pt-40 pb-24 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-mono text-neutral-500 dark:text-neutral-500 mb-6">
          Junior Developer · Bournemouth
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-neutral-900 dark:text-neutral-100 mb-8 font-medium">
          Ryan Kelly
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl leading-relaxed">
          I build full-stack projects with React, TypeScript, and C#.
          Currently looking for my first junior developer role.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            About me
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://github.com/whos-ryan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-lg text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            <Github size={16} />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
