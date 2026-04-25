import { ArrowUpRight, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { useRef, useState, useEffect, useCallback } from 'react';

type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  repoHref?: string;
  stack: string[];
};

const projects: Project[] = [
  {
    title: 'Marcus Aurelius AI Chatbot',
    description:
      'University group project for our L5 Software Engineering module. A chatbot that answers in the voice of Marcus Aurelius, drawing from Stoic texts. I worked on the React client and helped wire it up to the API.',
    image: '/icons/marcus-aurelius.png',
    href: 'https://marcusaurelius-client.vercel.app',
    // TODO: paste the GitHub repo URL here
    repoHref: '',
    stack: ['React', 'TypeScript', 'AI API'],
  },
  {
    title: 'Recipe Web',
    description:
      'Full-stack recipe manager — users can add, browse, and save recipes. My first proper full-stack build, which taught me a lot about routing, models, and persisting data.',
    image: '/icons/recipeManager.png',
    href: 'https://recipeweb-production.up.railway.app',
    // TODO: paste the GitHub repo URL here
    repoHref: '',
    stack: ['C#', 'ASP.NET', 'HTML', 'CSS'],
  },
  {
    title: 'Assignment Tracker',
    description:
      'A web app that helps students track grades and weighted averages across each module. Built end-to-end on my own to practise component design and state management in React.',
    image: '/icons/AssignmentAppTracker.png',
    href: 'https://app-tracker-black.vercel.app',
    // TODO: paste the GitHub repo URL here
    repoHref: '',
    stack: ['React', 'TypeScript', 'CSS'],
  },
];

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < maxScroll - 5);

    // Calculate active index based on scroll position
    const cardWidth = container.clientWidth * 0.85;
    const gap = 24;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(index, projects.length - 1));
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollState();
    container.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      container.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollTo = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.clientWidth * 0.85;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.clientWidth * 0.85;
    const gap = 24;

    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth',
    });
  };

  return (
    <section id="work" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* CENTERED HEADER SECTION */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl mb-4 text-black dark:text-white">
            My Projects
          </h2>
          <p className="text-xl text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of recent work and personal projects
          </p>
        </div>

        <div className="relative group/carousel">
          {/* Navigation Arrows */}
          <button
            onClick={() => scrollTo('left')}
            disabled={!canScrollLeft}
            aria-label="Previous project"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 shadow-lg hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-500 transition-all disabled:opacity-0 disabled:pointer-events-none items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Carousel Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-[85%] md:w-[48%] lg:w-[42%] snap-start bg-white/30 dark:bg-gray-900/30 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-blue-600 dark:hover:border-blue-500 transition-colors flex flex-col"
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live demo`}
                  className="block aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg" />
                    </div>
                  )}
                </a>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl text-black dark:text-white font-medium">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-slate-800 dark:text-gray-300 flex-1">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-full bg-blue-600/10 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-600/20 dark:border-blue-500/30"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 pt-2 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live demo
                    </a>
                    {project.repoHref && (
                      <a
                        href={project.repoHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                      >
                        <Github size={16} />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollTo('right')}
            disabled={!canScrollRight}
            aria-label="Next project"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 shadow-lg hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-500 transition-all disabled:opacity-0 disabled:pointer-events-none items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to project ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-blue-600 dark:bg-blue-500 w-6'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
