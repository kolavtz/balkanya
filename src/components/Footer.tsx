import { School, Facebook, Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'About Us', id: 'about' },
    { label: 'Programs', id: 'programs' },
    { label: 'Facilities', id: 'facilities' },
    { label: 'Admissions', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-emerald-600 rounded-lg">
                <School className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Balkanya Primary School</h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Committed to excellence in education and nurturing future leaders of Nepal.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>Balkanya Village, Kathmandu Valley, Nepal 44600</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>info@balkanyaschool.edu.np</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">School Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="font-medium text-white">Monday - Friday</span>
                <br />
                8:00 AM - 3:00 PM
              </li>
              <li>
                <span className="font-medium text-white">Saturday</span>
                <br />
                8:00 AM - 12:00 PM
              </li>
              <li>
                <span className="font-medium text-white">Sunday</span>
                <br />
                Closed
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Balkanya Primary School. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
