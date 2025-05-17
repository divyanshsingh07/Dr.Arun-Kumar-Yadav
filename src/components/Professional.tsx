import { useState } from 'react';
import { Award, BookOpen, X, GraduationCap, Presentation } from 'lucide-react';

const Professional = () => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const activities = [
    {
      id: 'workshops',
      title: 'Workshops & Training',
      icon: <GraduationCap className="w-6 h-6 text-green-600" />,
      content: [
        'Attended School on 5th SERC School of Nonlinear Dynamics, December 1-21, 2016 at Department Of Physics PSG College of Technology, Coimbatore, Tamil Nadu INDIA.',
        'Attended a Short term Course "Training Programme on Dynamical Systems: Theory and Application (DSTA 2017) May 08-12, 2017" at IIT(ISM), Dhanbad-826004, India.',
        'Attended a workshop on Computational methods for engineers and scientist held from Dec,24-28, 2015" at department of mathematics and Computing, IIT(ISM), Dhanbad-826004, India.',
        'Attended a workshop on mathematical modelling and simulation held at department of mathematics, Central university of Rajashthan during March 14-18, 2016.',
        'Attended a Short term Course "Training Programme on Dynamical Systems: Theory and Application (DSTA 2018) Sep 04-09, 2018" at IIT(ISM), Dhanbad-826004, India',
        'Attended a National webinar on "Tourism in Space: A Mathematical Overview" organized by Department of Applied Sciences, Galgotias College of Engineering and Technology, Greater Noida, on 03 September 2020.'
      ]
    },
    {
      id: 'conferences',
      title: 'Conferences & Presentations',
      icon: <Presentation className="w-6 h-6 text-purple-600" />,
      content: [
        'Participated in international conference on optimization, computing and business analysis for sustainable development held in the Central University of Rajashthan, Ajmer(India) during February 20-22,2015.',
        'Participated in 30th Annual National Conference of the Mathematical Society Banaras Hindu University on Mathematical Analysis and Application organized by department of mathematics, faculty of science, Banaras Hindu University Varanasi during January 30-31, 2015.',
        'Participated in 7th WMVC 2015 National conference on wave mechanics and vibrations held at IIT(ISM), Dhanbad during December 21-23,2015.',
        'Presented a paper entitled "Halo and Lyapunov Orbits for Radial Solar Sail Circular Restricted Three Body Problem" in International Conference on Frontier in Industrial and Applied Mathematics (FIAM-2018)" held at Department of Mathematics, National Institute of Technology Hamirpur, Himachal Pradesh, India, during April 26-27, 2018.',
        'Presented a paper entitled "Computation of halo orbits around Libration point L1 in Sun-Jupiter system" in on International Conference on Advances in Mathematics, Science and Technology, organized by Department of Mathematics, Rajiv Gandhi University, Arunachal Pradesh, India, during 1-3 September 2020.',
        'Presented a paper entitled "Station-keeping error analysis for halo orbits around Libration point L1" in 6th International Conference on Mathematics and Computing (ICMC 2020) held at Department of Computer Applications, Sikkim University, Gangtok, Sikkim, India during 23rd - 25th September, 2020.',
        'Presented a paper entitled "Port-Hamiltonian Control approach for CRTBP with Non-ideal Solar Sail and Albedo effect" in international conference on Advances in Differential Equations and Numerical Analysis (ADENA 2020) organized by Department of Mathematics, Indian Institute of Technology Guwahati during 12 - 15 Octobor, 2020.',
        'Presented a paper entitled "Controlling the Libration Motion of Tethered Satellite System Using Sliding Mode Control Scheme" in 3rd International Conference on Frontier in Industrial and Applied Mathematics (FIAM-2020) organized by Department of Mathematics, National Institute of Technology Jamshedpur, Jharkhand, India during December 21–22, 2020'
      ]
    },
    {
      id: 'extra',
      title: 'Extra-Curricular',
      icon: <Award className="w-6 h-6 text-blue-600" />,
      content: [
        'Member of Society of Applied Mathematics (SAM)',
        'Reviewer of the Journal Advances in Space Research',
        'International Journal of Numerical Methods for Heat and Fluid Flow',
        'Attended FDP(Guru- Dakshta) on Implementation of National Education Policy 2020: Role of Faculty in Higher Education Institutions from 20 Dec-24 Dec 2021 at Chandigarh University Mohali.',
        'Attended Five Days National Level Faculty Development Program on Recent Advances in Mathematics 8th - 12th August 2022 at Vellore Institute of Technology, Vellore.'
      ]
    }
  ];

  return (
    <section id="professional" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Professional Activities
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Professional memberships, conferences, and presentations
          </p>
        </div>

        <div className="grid grid-cols-1 ipad:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setActivePopup(activity.id)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-100 dark:bg-gray-600 rounded-lg">
                  {activity.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{activity.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Click to view details</p>
            </div>
          ))}
        </div>

        {/* Popup */}
        {activePopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-700 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {activities.find(a => a.id === activePopup)?.title}
                  </h3>
                  <button
                    onClick={() => setActivePopup(null)}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-4">
                  {activities.find(a => a.id === activePopup)?.content.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">
                        <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Professional; 