import { ArrowLeft, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:ryan.kelly4553@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
  };

  const inputClass =
    'w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 transition-colors';

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

        <div className="mb-16">
          <p className="text-sm font-mono text-neutral-500 dark:text-neutral-500 mb-3">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl tracking-tight text-neutral-900 dark:text-neutral-100 mb-8 font-medium">
            Get in touch
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I'm looking for my first junior developer role. Drop me a message below or reach me directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-5">
            <div>
              <label htmlFor="name" className="block text-sm text-neutral-900 dark:text-neutral-100 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-neutral-900 dark:text-neutral-100 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-neutral-900 dark:text-neutral-100 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about the role…"
              />
            </div>
            <button
              type="submit"
              className="self-start inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Send message
            </button>
          </form>

          <aside className="lg:col-span-2 flex flex-col gap-3 text-sm">
            <a
              href="mailto:ryan.kelly4553@gmail.com"
              className="flex items-center gap-3 py-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <Mail size={16} />
              <span>ryan.kelly4553@gmail.com</span>
            </a>
            <a
              href="https://github.com/whos-ryan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <Github size={16} />
              <span>github.com/whos-ryan</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-kelly-841201283/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center gap-3 py-2 text-neutral-500 dark:text-neutral-500">
              <MapPin size={16} />
              <span>Bournemouth · Open to remote</span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
