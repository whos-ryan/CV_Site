import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

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
    title: 'Notes Valut',
    description:
      'A simple notes app built with React, TypeScript, and CSS. Using Neon as a database.',
    image: '/icons/notes-valut.png',
    href: 'https://notes-seven-snowy.vercel.app',
    repoHref: 'https://github.com/whos-ryan/notes',
    stack: ['React', 'TypeScript', 'CSS', 'Neon'],
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
  return (
    <section id="work" className="py-24 px-6 lg:px-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-sm font-mono text-neutral-500 dark:text-neutral-500 mb-3">
            01 / Work
          </p>
          <h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900 dark:text-neutral-100 font-medium">
            Selected projects
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <li
              key={project.title}
              className="group flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="block aspect-video bg-neutral-100 dark:bg-neutral-800 overflow-hidden"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </a>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg text-neutral-900 dark:text-neutral-100 font-medium">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-1"
                  />
                </div>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 flex-1">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-5 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-sm">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live demo
                  </a>
                  {project.repoHref && (
                    <a
                      href={project.repoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                      <Github size={14} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
