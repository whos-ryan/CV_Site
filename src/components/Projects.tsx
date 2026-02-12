import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of this project and the technologies used.',
    image: '',
    href: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of this project and the technologies used.',
    image: '',
    href: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of this project and the technologies used.',
    image: '',
    href: '#',
  },
  {
    title: 'Project Four',
    description: 'A brief description of this project and the technologies used.',
    image: '',
    href: '#',
  },
];

export function Projects() {
  return (
    <section id="work" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-black dark:text-white">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              className="group block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-blue-600 dark:hover:border-blue-500 transition-colors"
            >
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
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
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl text-black dark:text-white">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
