import {Cloud, Wind, ExternalLink, FileText } from 'lucide-react';

const Supervision = () => {
  return (
    <section id="supervision" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Supervision & Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Current research projects and student supervision
          </p>
        </div>

        <div className="grid grid-cols-1 ipad:grid-cols-2 gap-8">
          {/* Advanced Weather Prediction Project */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Advanced Weather Prediction Using Drone Technology</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our cutting-edge drone system revolutionizes weather monitoring and natural disaster prediction through advanced AI and real-time data collection.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Cloud className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Project Team</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Divyansh Singh (22BCE7596)<br />
                    Aditya Pandey (22BCE8776)<br />
                    Mukkala Rohit (22BCE8655)<br />
                    Syed Mazz Huasin Quadri (22BCE9206)<br />
                    Swastik Shukla (22BCE8035)<br />
                    Harsh Kumar Singh (22BCE8045)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Cloud className="w-5 h-5 text-red-600 dark:text-red-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Real-time Monitoring</h4>
                  <p className="text-gray-600 dark:text-gray-300">Continuous data collection and analysis for accurate weather predictions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Cloud className="w-5 h-5 text-green-600 dark:text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Early Warning System</h4>
                  <p className="text-gray-600 dark:text-gray-300">Predict natural disasters with advanced AI algorithms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Cloud className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">High-Precision Data</h4>
                  <p className="text-gray-600 dark:text-gray-300">Collect detailed atmospheric data for accurate predictions</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://cloudi-taupe.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                Interactive Demo
                <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="/ENGINEERING CLINIC.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileText className="w-4 h-4" />
                View Project Report
              </a>
            </div>
          </div>

          {/* LeakSense Project */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Wind className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Gas Leakage Detection System</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              A comprehensive gas leakage detection system developed as part of Engineering Clinics (ECS3001) under the guidance of Prof. Arun Kumar Yadav.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Wind className="w-5 h-5 text-green-600 dark:text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Project Team</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Sujal Ghonmode (22BCE7461)<br />
                    Mirudoddi Yashaswini (22BCE7694)<br />
                    Anantraj Prasad (22BCE7981)<br />
                    Kartik Ajay Chavan (22BCE9154)<br />
                    Aum Panchal (22BCE8203)<br />
                    Souptik Saha (22BCE9012)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wind className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Real-Time Detection</h4>
                  <p className="text-gray-600 dark:text-gray-300">Continuously monitors gas levels to ensure immediate identification of leaks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wind className="w-5 h-5 text-red-600 dark:text-red-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Instant Alerts</h4>
                  <p className="text-gray-600 dark:text-gray-300">Sends instant notifications via buzzer or mobile app to prevent hazards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wind className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Safety Automation</h4>
                  <p className="text-gray-600 dark:text-gray-300">Integrates with ventilation or cutoff systems for automatic safety response</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/ECS PROJECT REPORT Final.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <FileText className="w-4 h-4" />
                View Project Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supervision; 