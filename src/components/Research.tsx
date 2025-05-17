import { Rocket, Orbit, Zap, LineChart, Target, Atom } from 'lucide-react';

const Research = () => {
  const researchHighlights = [
    {
      title: "Linear Control Models",
      description: "Developed linear control models for maintaining halo orbits in the Circular Restricted Three-Body Problem (CRTBP)",
      icon: <LineChart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Port-Hamiltonian Control",
      description: "Used port-Hamiltonian control methods for stabilization near Sun–Jupiter libration points",
      icon: <Atom className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Energy-Efficient Strategies",
      description: "Analyzed station-keeping cost and energy-efficient trajectory correction strategies",
      icon: <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Advanced Control Methods",
      description: "Applied Lyapunov exponents and sliding mode control in orbital dynamics",
      icon: <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    }
  ];

  return (
    <section id="research" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Research Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Research Focus */}
        <div className="mb-16">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-800/30 rounded-xl">
                <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Research Focus</h3>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Control Techniques for Station-Keeping of Libration Point Orbits
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              My doctoral research at IIT Dhanbad was centered around the orbital control of spacecraft near Lagrangian points. 
              These points, particularly L1, L2, and L3, are known for highly unstable halo orbits, making station-keeping crucial.
            </p>
          </div>
        </div>

        {/* Key Highlights */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Key Highlights</h3>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchHighlights.map((highlight, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Orbital Visualization */}
        <div className="mt-16 text-center">
          <div className="inline-block p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full">
            <Orbit className="w-12 h-12 text-blue-600 dark:text-blue-400 animate-spin-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research; 