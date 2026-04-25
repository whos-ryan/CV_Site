import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const timeline = [
  {
    year: '2023',
    title: 'Started Software Engineering',
    description: 'Began my journey into software development, learning the fundamentals of web technologies.',
  },
  {
    year: '2024',
    title: 'First Real Projects',
    description: 'Worked on multiple projects with React, TypeScript, and ASP.NET to get a feel for full-stack work.',
  },
  {
    year: '2025',
    title: 'Going Deeper',
    description: 'Spent more time on the harder parts — state, APIs, deployment, and writing maintainable code.',
  },
  {
    year: '2026',
    title: 'Looking for a Role',
    description: 'Building portfolio projects and applying for my first junior developer role.',
  },
];

const techStack = [
  { label: 'React & TypeScript', description: 'My main day-to-day stack for building UI.' },
  { label: 'Tailwind CSS', description: 'Utility-first styling. Most of my recent work uses it.' },
  { label: 'C# / ASP.NET', description: 'How I learned the backend — full-stack Recipe Web app was built on it.' },
  { label: 'Git / GitHub', description: 'Version control and code review, day-to-day.' },
];

export function About() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-16"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <div className="mb-20">
          <p className="text-sm font-mono text-neutral-500 dark:text-neutral-500 mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-5xl tracking-tight text-neutral-900 dark:text-neutral-100 mb-8 font-medium">
            About me
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I'm Ryan Kelly, a junior developer based in Bournemouth. I like figuring out how things work,
            shipping projects end-to-end, and writing code that someone else can pick up without cursing my name.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-sm font-mono text-neutral-500 dark:text-neutral-500 mb-6 uppercase tracking-wider">
            Story
          </h2>
          <div className="flex flex-col gap-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
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

        <section className="mb-20">
          <h2 className="text-sm font-mono text-neutral-500 dark:text-neutral-500 mb-6 uppercase tracking-wider">
            What I work with
          </h2>
          <ul className="divide-y divide-neutral-200 dark:divide-neutral-800 border-y border-neutral-200 dark:border-neutral-800">
            {techStack.map((tech) => (
              <li key={tech.label} className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-5">
                <span className="text-neutral-900 dark:text-neutral-100 font-medium">{tech.label}</span>
                <span className="sm:col-span-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {tech.description}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-20">
          <h2 className="text-sm font-mono text-neutral-500 dark:text-neutral-500 mb-6 uppercase tracking-wider">
            Timeline
          </h2>
          <ul className="divide-y divide-neutral-200 dark:divide-neutral-800 border-y border-neutral-200 dark:border-neutral-800">
            {timeline.map((item) => (
              <li key={item.year} className="grid grid-cols-1 sm:grid-cols-4 gap-2 py-6">
                <span className="text-sm font-mono text-neutral-500 dark:text-neutral-500">{item.year}</span>
                <div className="sm:col-span-3">
                  <h3 className="text-neutral-900 dark:text-neutral-100 font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-10">
          <h2 className="text-2xl text-neutral-900 dark:text-neutral-100 font-medium mb-3">
            Want to talk?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            I'm looking for my first junior developer role. Drop me a message.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
          </Link>
        </section>
      </div>
    </main>
  );
}
