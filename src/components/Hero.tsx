import { Linkedin, Mail, GraduationCap, Download, Award, Trophy } from 'lucide-react';
import profileImage from '../assets/Arunyadav.png';

const Hero = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/dr-arun-yadav-047986113/',
    },
    {
      name: 'Google Scholar',
      icon: <GraduationCap className="w-6 h-6" />,
      href: 'https://scholar.google.com/citations?user=VtlkNG8AAAAJ&hl=en',
    },
    // {
    //   name: 'ResearchGate',
    //   icon: <BookOpen className="w-6 h-6" />,
    //   href: 'https://www.researchgate.net/profile/your-profile',
    // },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:arunkumardv367@gmail.com',
    },
  ];

  const awards = [
    {
      title: "Faculty Research Award, 2024",
      institution: "VIT-AP University",
      icon: <Trophy className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Junior Research Fellowship (ISM-JRF)",
      period: "2015–2017",
      icon: <Award className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Senior Research Fellowship (ISM-SRF)",
      period: "2017–2020",
      icon: <Award className="w-5 h-5 text-blue-600" />
    }
  ];

  return (
    <section id="home" className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 ipad:grid-cols-2 gap-8 items-center">
          {/* Left Column - Photo and Social Links */}
          <div className="flex flex-col items-center ipad:items-start">
            <div className="w-[280px] sm:w-[320px] ipad:w-[360px] lg:w-[400px] h-[350px] sm:h-[400px] ipad:h-[450px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg mx-auto ipad:mx-0 ipad:ml-8 lg:ml-20">
              <img
                src={profileImage}
                alt="Dr. Arun Yadav"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Social Links and CV Download */}
            <div className="flex flex-col items-center gap-4 mt-6 mx-48">
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                    title={link.name}
                  >
                    <div className="p-1">
                      {link.icon}
                    </div>
                    <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">{link.name}</span>
                  </a>
                ))}
              </div>
              <a
                href="/Resume.pdf"
                download="Dr_Arun_Yadav_Resume.pdf"
                className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-base ipad:text-lg"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Column - Introduction */}
          <div className="text-center ipad:text-left max-w-4xl mx-auto px-4">
            <h1 className="text-2xl sm:text-3xl ipad:text-4xl font-bold text-gray-900 dark:text-white mb-2">Dr. Arun Kumar Yadav</h1>
            <h2 className="text-lg sm:text-xl ipad:text-2xl text-gray-600 dark:text-gray-300 mb-1">Assistant Professor, Department of Mathematics</h2>
            <h3 className="text-base sm:text-lg ipad:text-xl text-gray-600 dark:text-gray-300 mb-4">VIT-AP University</h3>

            {/* Divider */}
            <div className="border-t border-gray-300 dark:border-gray-700 mb-5" />

            {/* Professional Summary */}
            <p className="text-sm sm:text-base ipad:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
  I am an <strong>Assistant Professor of Mathematics</strong> at <strong>VIT-AP University</strong> since <strong>May 2022</strong>. Previously, I taught at <strong>Manipal University Jaipur</strong> and <strong>Chandigarh University Mohali</strong>.
</p>

<p className="text-sm sm:text-base ipad:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
  I completed my <strong>Ph.D. in Mathematics</strong> from <strong>IIT (ISM) Dhanbad</strong>, with research on <strong>station-keeping control</strong> near <strong>Lagrangian points</strong> using <strong>linear control logic</strong> and <strong>port-Hamiltonian methods</strong>, aimed at enhancing <strong>spacecraft stability</strong>.
</p>

<p className="text-sm sm:text-base ipad:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
  I have taught a variety of subjects including <strong>Engineering Mathematics</strong>, <strong>Calculus</strong>, <strong>Linear Algebra</strong>, <strong>Applied Statistics</strong>, <strong>Discrete Structures</strong>, and <strong>Application of Differential and Difference Equations</strong>. I focus on ensuring <strong>conceptual clarity</strong> through <strong>practical and real-world applications</strong> to enhance student learning.
</p>
            {/* Awards and Scholarships */}
            <h4 className="text-lg sm:text-xl ipad:text-2xl font-semibold text-gray-800 dark:text-white mb-2 underline">
  Awards & Scholarships
</h4>
            <ul className="space-y-3 mb-6">
              {awards.map((award, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base ipad:text-lg text-gray-700 dark:text-gray-300">
                  <div className="mt-1">
                    {award.icon}
                  </div>
                  <div>
                    <span className="font-medium">{award.title}</span>
                    {award.institution && <span> – {award.institution}</span>}
                    {award.period && <span> ({award.period})</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 