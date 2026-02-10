import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-black dark:text-white">
            Designer. Developer.
            <span className="block text-blue-600 dark:text-blue-500">Creator.</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Crafting exceptional digital experiences with clean code and beautiful design. 
            I build products that people love to use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              View Work
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white dark:bg-gray-800 text-black dark:text-white border-2 border-black dark:border-white rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Contact Me
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl transform rotate-1"></div>
            <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="h-3 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="h-12 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 bg-blue-50 dark:bg-blue-900/20 rounded-lg"></div>
                  <div className="h-32 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                </div>
                <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
