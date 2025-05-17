import {Quote, Award, ExternalLink,Building2,  Calendar, MapPin, School, } from 'lucide-react';
import chaso from '../assets/chaso.png';
import journal from '../assets/journal.png';
import stationKeeping from '../assets/Station-keeping.png';
import crtbp from '../assets/chaso.png';
import api from '../assets/api.png';

const Publications = () => {
  const publications = [
    {
      title: "Controlling the libration point orbits for CRTBP with non-ideal solar sail and albedo effect",
      journal: "Chaos, Solitons & Fractals 152",
      year: 2021,
      citations: 10,
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0960077921007414",
      description: "Research on orbital control techniques for spacecraft near Lagrangian points, focusing on solar sail dynamics and albedo effects in the Circular Restricted Three-Body Problem.",
      image: crtbp
    },
    {
      title: "Station-keeping error analysis for halo orbits around Libration point L1 using linear control logic",
      journal: "Astronomy and Computing 35",
      year: 2021,
      citations: 5,
      link: "https://www.sciencedirect.com/science/article/abs/pii/S2213133721000160",
      description: "Analysis of station-keeping strategies for halo orbits around L1 point, implementing linear control logic for improved orbital stability.",
      image: stationKeeping
    },
    {
      title: "Lissajous motion near Lagrangian point L₂ in radial solar sail",
      journal: "Journal of Astrophysics and Astronomy 39(6)",
      year: 2018,
      citations: 4,
      link: "https://link.springer.com/article/10.1007/s12036-018-9563-0",
      description: "Study of Lissajous orbits near L2 point using radial solar sail dynamics, exploring quasi-periodic motion and control strategies.",
      image: journal
    },
    {
      title: "Utilizing a control technique for orbital maintenance near L1 point and Lyapunov exponents",
      journal: "Chaos, Solitons & Fractals 179",
      year: 2024,
      citations: 1,
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0960077923013395",
      description: "Advanced control techniques for orbital maintenance near L1 point, incorporating Lyapunov exponents for stability analysis.",
      image: chaso
    },
    {
      title: "Controlling the libration motion of tethered satellite system using sliding mode control scheme",
      journal: "AIP Conf. Proceedings 20052",
      year: 2022,
      citations: 0,
      link: "https://pubs.aip.org/aip/acp/article-abstract/2435/1/020052/2823017/Controlling-the-libration-motion-of-tethered",
      description: "Implementation of sliding mode control for tethered satellite systems, focusing on libration motion stabilization.",
      image: api
    }
  ];

  return (
    <section id="publications" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Publications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Citation Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Quote className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">20</h3>
                <p className="text-gray-600 dark:text-gray-300">Total Citations</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">3</h3>
                <p className="text-gray-600 dark:text-gray-300">h-index</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1</h3>
                <p className="text-gray-600 dark:text-gray-300">i10-index</p>
              </div>
            </div>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <a 
              key={index}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Publication Image */}
              <div className="h-50 overflow-hidden">
                <img 
                  src={pub.image} 
                  alt={pub.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span>{pub.journal}</span>
                  <span>•</span>
                  <span>{pub.year}</span>
                  {pub.citations > 0 && (
                    <>
                      <span>•</span>
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {pub.citations} {pub.citations === 1 ? 'Citation' : 'Citations'}
                      </span>
                    </>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {pub.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {pub.description}
                </p>
                
                <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 text-sm font-medium">
                  Read Paper
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Teaching = () => {
  const teachingExperience = [
    {
      role: "Assistant Professor",
      institution: "VIT-AP University",
      location: "Amaravati, Andhra Pradesh",
      period: "Since May 26, 2022 – Present",
      responsibilities: [
        "Teaching undergraduate and postgraduate courses in Aerospace Engineering and Orbital Mechanics.",
        "Mentoring students in research and academic projects.",
        "Active contributor to academic planning and departmental coordination."
      ],
      icon: <School className="w-6 h-6" />
    },
    {
      role: "Assistant Professor",
      institution: "Manipal University Jaipur",
      location: "Jaipur, Rajasthan",
      period: "Feb 14, 2022 – Apr 23, 2022",
      responsibilities: [
        "Delivered core engineering subjects to undergraduate students.",
        "Participated in faculty development programs and curriculum enrichment."
      ],
      icon: <School className="w-6 h-6" />
    },
    {
      role: "Assistant Professor",
      institution: "Chandigarh University",
      location: "Mohali, Punjab",
      period: "Aug 11, 2021 – Feb 12, 2022",
      responsibilities: [
        "Taught mechanical and aerospace engineering modules.",
        "Engaged in student mentoring and departmental responsibilities."
      ],
      icon: <School className="w-6 h-6" />
    }
  ];

  const administrativeRole = {
    role: "Deputy Warden",
    institution: "VIT-AP University",
    period: "Since July 7, 2023 – Present",
    responsibilities: [
      "Overseeing student welfare and residential life within the campus.",
      "Responsible for maintaining discipline and ensuring a supportive hostel environment."
    ],
    icon: <Building2 className="w-6 h-6" />
  };

  return (
    <section id="teaching" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Teaching & Administrative Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Teaching Experience */}
        <div className="space-y-12 mb-16">
          {teachingExperience.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">{exp.institution}</span>
                    <span>•</span>
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Administrative Role */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
              {administrativeRole.icon}
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{administrativeRole.role}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{administrativeRole.period}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <Building2 className="w-4 h-4" />
                <span className="font-medium">{administrativeRole.institution}</span>
              </div>
              <ul className="space-y-2">
                {administrativeRole.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Publications, Teaching };
export default Publications; 