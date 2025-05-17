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
   
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      text: 'CB-204-B, VIT-AP University, Andhra Pradesh, India',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:arunkumardv367@gmail.com',
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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
          {/* Contact Information */}
          <div className="space-y-9 text-center w-full">
            <h3 className="text-white text-xl font-semibold">Contact Information</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center justify-center gap-4">
                  <div className="text-blue-400 flex-shrink-0">
                    {info.icon}
                  </div>
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 leading-relaxed"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-gray-300 leading-relaxed">{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-8 text-center w-full">
            <h3 className="text-white text-xl font-semibold">Connect With Me</h3>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 "
                  title={link.name}
                >
                  <div className="p-2">
                    {link.icon}
                  </div>
                  <span className="text-sm mt-1">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-300">
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