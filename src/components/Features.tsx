import { Code, Server, GitBranch, BookOpen } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Frontend',
    description: 'React, TypeScript, and Tailwind. Comfortable building responsive components and managing state.',
  },
  {
    icon: Server,
    title: 'Full-stack',
    description: 'Built full-stack apps with C# / ASP.NET and dabbled in Node. Learning how the front and back fit together.',
  },
  {
    icon: GitBranch,
    title: 'Tools & Workflow',
    description: 'Day-to-day with Git, GitHub, and Vite. Comfortable in the terminal and reading other people’s code.',
  },
  {
    icon: BookOpen,
    title: 'Always Learning',
    description: 'Currently digging into testing, accessibility, and writing cleaner, more maintainable code.',
  },
];

export function Features() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-sm font-mono text-neutral-500 dark:text-neutral-500 mb-3">
            02 / Skills
          </p>
          <h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900 dark:text-neutral-100 font-medium">
            What I work with
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg"
            >
              <skill.icon className="text-neutral-900 dark:text-neutral-100 mb-5" size={20} strokeWidth={1.75} />
              <h3 className="text-base text-neutral-900 dark:text-neutral-100 font-medium mb-2">
                {skill.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
