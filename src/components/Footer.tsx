import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerNavLinks = [
  { label: 'Work', href: '/#work', isRoute: false },
  { label: 'About', href: '/about', isRoute: true },
  { label: 'Contact', href: '/contact', isRoute: true },
];

const footerConnectLinks = [
  { label: 'GitHub', href: 'https://github.com/whos-ryan' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ryan-kelly-841201283/' },
  { label: 'Email', href: 'mailto:ryan.kelly4553@gmail.com' },
];

export function Footer() {
  return (
    <footer className="text-white py-16 px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-md flex items-center justify-center">
                <Code size={18} className="text-white" />
              </div>
              <span className="ml-3 font-semibold">Rhyze</span>
            </Link>
            <p className="text-gray-700 dark:text-gray-500 mb-6">
              Junior developer based in Bournemouth. Looking for my first dev role.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/whos-ryan" className="w-10 h-10 bg-transparent dark:bg-gray-900 rounded-md flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ryan-kelly-841201283/" className="w-10 h-10 bg-transparent dark:bg-gray-900 rounded-md flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ryan.kelly4553@gmail.com" className="w-10 h-10 bg-transparent dark:bg-gray-900 rounded-md flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link to={link.href} className="text-gray-700 dark:text-gray-500 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-gray-700 dark:text-gray-500 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="flex flex-col gap-3">
              {footerConnectLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-700 dark:text-gray-500 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 dark:text-gray-500 text-sm">
            &copy; 2026 All rights reserved.
          </p>
          <p className="text-gray-700 dark:text-gray-500 text-sm">
            Designed & Built In Bournemouth
          </p>
        </div>
      </div>
    </footer>
  );
}
