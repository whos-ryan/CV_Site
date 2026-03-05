import { ArrowRight } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { Link } from 'react-router-dom';

export function Hero() {
  const { displayedText: nameText, isComplete: nameComplete } = useTypingEffect('Ryan Kelly', 90, 400);
  const { displayedText: roleText, isComplete: roleComplete } = useTypingEffect('Software Engineer.', 70, 1400);

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
          <p className="text-xl text-[#1E293B] dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Crafting exceptional digital experiences with clean code and beautiful design. 
            
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="w-full sm:w-auto flex justify-center">
              <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-md hover:scale-105 transform transition duration-150 flex items-center justify-center gap-2">
                About Me
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div> 
      </div>
    </section>
  );
}
