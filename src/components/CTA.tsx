import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTA() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-2xl p-12 md:p-16 text-center border border-white/50 dark:border-gray-700">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Looking for a junior developer?
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-10 max-w-2xl mx-auto">
            I'm actively looking for my first junior dev role. If you're hiring or just want to chat about code, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <Mail size={20} />
              Get in Touch
            </Link>
            
            {/* Replaced <button> with <a> tag below */}
            <a 
              href="/files/Ryan_Kelly_Resume_2026.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-md hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              View Resume
              <ArrowRight size={20} />
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}