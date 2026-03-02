import { Code, Palette, Zap, Users } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Development',
    description: 'Building scalable web applications with React, TypeScript, and modern frameworks.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Creating intuitive user interfaces with a focus on aesthetics and usability.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed and efficiency to deliver seamless user experiences.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with teams to bring ideas to life from concept to launch.',
  },
];

export function Features() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-transparent dark:bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-black dark:text-white">
            What I Do
          </h2>
          <p className="text-xl text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            Combining technical expertise with creative vision
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
              <p className="text-[#1E293B] dark:text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
