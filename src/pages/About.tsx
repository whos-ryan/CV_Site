import { ArrowLeft, Code, Palette, Zap, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const timeline = [
  {
    year: '2023',
    title: 'Started Software Engineering',
    description: 'Began my journey into software development, learning the fundamentals of web technologies.',
  },
  {
    year: '2024',
    title: 'First Professional Projects',
    description: 'Delivered multiple projects working with React, TypeScript, and modern development tools.',
  },
  {
    year: '2025',
    title: 'Expanding Expertise',
    description: 'Deepened knowledge in full-stack development, cloud services, and performance optimization.',
  },
  {
    year: '2026',
    title: 'Building & Growing',
    description: 'Continuing to take on challenging projects and refine my craft as an engineer.',
  },
];

const techStack = [
  { icon: Code, label: 'React & TypeScript', description: 'Building modern, type-safe user interfaces' },
  { icon: Palette, label: 'Tailwind CSS', description: 'Crafting responsive, utility-first designs' },
  { icon: Zap, label: 'Node.js & APIs', description: 'Developing performant server-side solutions' },
  { icon: GraduationCap, label: 'Continuous Learning', description: 'Always exploring new technologies and patterns' },
];

export function About() {
  return (
    <main className="pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-800 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl mb-6 text-black dark:text-white text-balance">
            About Me
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-300 leading-relaxed max-w-3xl">
            I'm Ryan Kelly, a junior developer based in Bournemouth. I like figuring out how things work,
            shipping projects end-to-end, and writing code that someone else can pick up without cursing my name.
          </p>
        </div>

        {/* Bio */}
        <section className="mb-20">
          <h2 className="text-2xl mb-6 text-black dark:text-white">My Story</h2>
          <div className="flex flex-col gap-4 text-gray-800 dark:text-gray-300 leading-relaxed">
            <p>
              I started coding in 2023 and quickly fell into the part of the work where design and engineering meet — turning
              a rough idea into something that actually works in a browser.
            </p>
            <p>
              When I'm not coding, you'll usually find me chipping away at a side project, breaking and re-fixing things to
              understand them, or learning whatever piece of the stack I haven't touched yet.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="text-2xl mb-8 text-black dark:text-white">What I Work With</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-xl border border-white/50 dark:border-gray-700"
              >
                <div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                  <tech.icon className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-black dark:text-white mb-1">{tech.label}</h3>
                  <p className="text-sm text-gray-800 dark:text-gray-400">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-2xl mb-8 text-black dark:text-white">My Journey</h2>
          <div className="flex flex-col gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-blue-600 dark:bg-blue-500 rounded-full shrink-0 mt-1.5" />
                  {index < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gray-200 dark:bg-gray-700 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-sm text-blue-600 dark:text-blue-500 font-medium">{item.year}</span>
                  <h3 className="text-lg text-black dark:text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-800 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/50 dark:border-gray-700 text-center">
          <h2 className="text-2xl mb-4 text-black dark:text-white">Want to work together?</h2>
          <p className="text-gray-800 dark:text-gray-300 mb-6">
            I'm always open to new opportunities and interesting projects.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </main>
  );
}
