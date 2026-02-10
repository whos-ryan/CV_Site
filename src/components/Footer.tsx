import { Github, Linkedin, Mail } from 'lucide-react';

const footerLinks = {
  Navigation: ['Work', 'Skills', 'About', 'Contact'],
  Connect: ['GitHub', 'LinkedIn', 'Email'],
};

export function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-950 text-white py-16 px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-md flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="ml-3 font-semibold">Rhyze</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-6">
              Building exceptional digital experiences with precision and care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-md flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-md flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-md flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            &copy; 2026 All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            Designed & Built with passion
          </p>
        </div>
      </div>
    </footer>
  );
}
