import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTA() {
  return (
    <section className="py-24 px-6 lg:px-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-mono text-neutral-500 dark:text-neutral-500 mb-4">
          03 / Contact
        </p>
        <h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900 dark:text-neutral-100 mb-6 font-medium">
          Looking for a junior developer?
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed">
          I'm actively looking for my first junior dev role. If you're hiring or just want to chat about code, I'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={16} />
            Get in touch
          </Link>
          <a
            href="/files/Ryan_Kelly_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-lg text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            View resume
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
