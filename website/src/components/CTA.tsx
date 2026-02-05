import { ArrowRight, Mail } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Let's work together
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <Mail size={20} />
              Get in Touch
            </button>
            <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-md hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
              View Resume
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
