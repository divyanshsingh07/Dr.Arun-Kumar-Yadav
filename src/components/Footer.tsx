import { Linkedin, Mail, GraduationCap, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/dr-arun-yadav-047986113/',
    },
    {
      name: 'Google Scholar',
      icon: <GraduationCap className="w-5 h-5" />,
      href: 'https://scholar.google.com/citations?user=VtlkNG8AAAAJ&hl=en',
    },
    
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:arunkumardv367@gmail.com',
    },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      text: 'CB-204-B, VIT-AP University, Andhra Pradesh, India',
    },
   
    {
      icon: <Mail className="w-5 h-5" />,
      text: 'arunkumardv367@gmail.com',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 text-blue-400">
                    {info.icon}
                  </div>
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
              </li>
              <li>
                <a href="#research" className="hover:text-blue-400 transition-colors">Research</a>
              </li>
              <li>
                <a href="#publications" className="hover:text-blue-400 transition-colors">Publications</a>
              </li>
              <li>
                <a href="#teaching" className="hover:text-blue-400 transition-colors">Teaching</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Dr. Arun Yadav. All rights reserved.
          </p>
          <p className="text-sm mt-2 text-gray-500">
            Assistant Professor, Department of Mathematics, VIT-AP University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 