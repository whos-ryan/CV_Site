import { Twitter, Github, Linkedin, Mail } from 'lucide-react';

const footerLinks = {
  Navigation: ['Work', 'Skills', 'About', 'Contact'],
  Connect: ['Twitter', 'GitHub', 'LinkedIn', 'Email'],
};

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="ml-3 font-semibold">Portfolio</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building exceptional digital experiences with precision and care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Designed & Built with passion
          </p>
        </div>
      </div>
    </footer>
  );
}
