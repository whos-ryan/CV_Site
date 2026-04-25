import { ArrowRight, Github } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { Link } from 'react-router-dom';

export function Hero() {
  const { displayedText: nameText, isComplete: nameComplete } = useTypingEffect('Ryan Kelly', 90, 400);
  const { displayedText: roleText, isComplete: roleComplete } = useTypingEffect('Junior Developer.', 70, 1400);

  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-black dark:text-white">
            <span>
              {nameText}
              {!nameComplete && (
                <span className="inline-block w-[3px] h-[0.8em] bg-black dark:bg-white ml-1 align-baseline animate-pulse" />
              )}
            </span>
            <span className="block text-blue-600 dark:text-blue-500">
              {roleText}
              {nameComplete && !roleComplete && (
                <span className="inline-block w-[3px] h-[0.8em] bg-blue-600 dark:bg-blue-500 ml-1 align-baseline animate-pulse" />
              )}
            </span>
          </h1>
          <p className="text-xl text-slate-800 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Bournemouth-based developer building full-stack projects with React, TypeScript, and C#.
            Currently looking for my first junior developer role.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="w-full sm:w-auto flex justify-center">
              <button className="w-full sm:w-auto px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-md hover:scale-105 transform transition duration-150 flex items-center justify-center gap-2">
                About Me
                <ArrowRight size={20} />
              </button>
            </Link>
            <a
              href="https://github.com/whos-ryan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-md hover:scale-105 transform transition duration-150 flex items-center justify-center gap-2"
            >
              <Github size={20} />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
