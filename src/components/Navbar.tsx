import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  Home,
  GraduationCap,
  Microscope,
  BookOpen,
  School,
  Briefcase,
  Award
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: <Home className="w-5 h-5" /> },
    { name: 'Education', href: '#education', id: 'education', icon: <GraduationCap className="w-5 h-5" /> },
    { name: 'Research', href: '#research', id: 'research', icon: <Microscope className="w-5 h-5" /> },
    { name: 'Publications', href: '#publications', id: 'publications', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Teaching', href: '#teaching', id: 'teaching', icon: <School className="w-5 h-5" /> },
    { name: 'Supervision', href: '#supervision', id: 'supervision', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Professional Activities', href: '#professional', id: 'professional', icon: <Award className="w-5 h-5" /> }
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClasses = (id: string) =>
    `px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors duration-200 ${
      activeSection === id
        ? 'text-blue-600 dark:text-blue-400 font-semibold'
        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleClick(e, '#home')}
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              Dr. Arun Yadav
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden nav:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={getLinkClasses(link.id)}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="nav:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="nav:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-base ${getLinkClasses(link.id)}`}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;