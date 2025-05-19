import { GraduationCap, School, BookOpen, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Ph.D. in Mathematical Sciences",
      institution: "Department of Mathematics and Computing, Indian Institute of Technology (IIT), Dhanbad",
      year: "2015 - 2021",
      details: "Specialization in Control Theory and Orbital Mechanics",
      icon: <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      degree: "Bachelor of Education (B.Ed)",
      institution: "Dr. Ram Prasanna Maniram Mahavidyalaya, Sarairasi, Faizabad",
      year: "2013 - 2014",
      details: "Percentage: 76.2% | University: Dr. R. M. L. Avadh University, Faizabad",
      icon: <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      degree: "M.Sc. in Mathematical Sciences",
      institution: "Department of Mathematics, Banaras Hindu University (BHU), Varanasi",
      year: "2010 - 2012",
      details: "Percentage: 76.5%",
      icon: <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      degree: "B.Sc. (Physics, Chemistry, Mathematics)",
      institution: "K. S. Saket P.G. College, Ayodhya",
      year: "2007 - 2010",
      details: "Percentage: 64% | University: Dr. R. M. L. Avadh University, Faizabad",
      icon: <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      degree: "10+2 (Physics, Chemistry, Mathematics, General Hindi, English)",
      institution: "J. K. Inter College, Arvat, Faizabad",
      year: "2005 - 2007",
      details: "Percentage: 60%",
      icon: <School className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      degree: "10th (Mathematics, Science, Hindi, English, Social Science, Drawing)",
      institution: "P. D. Pandey Inter College, Sonaisa, Faizabad",
      year: "2003 - 2005",
      details: "Percentage: 54.33%",
      icon: <School className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    }
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
              {/* Timeline line */}
              <div className="absolute left-0 sm:left-16 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-600"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-0 sm:left-16 top-8 w-4 h-4 rounded-full bg-blue-600 transform -translate-x-1/2 group-hover:scale-125 transition-transform"></div>

              {/* Content */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-lg text-gray-600 dark:text-gray-300">{edu.institution}</p>
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{edu.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 