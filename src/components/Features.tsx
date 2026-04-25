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
    <section id="skills" className="py-20 px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-black dark:text-white">
            What I Work With
          </h2>
          <p className="text-xl text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            The tools and skills I bring to a team
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-md p-8 rounded-xl border border-white/50 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <skill.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl mb-3 text-black dark:text-white">
                {skill.title}
              </h3>
              <p className="text-slate-800 dark:text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
