import { Building2, Calendar, MapPin, School, BookOpen, Users } from 'lucide-react';

const Teaching = () => {
  const teachingExperience = [
    {
      role: "Assistant Professor",
      institution: "VIT-AP University",
      location: "Amaravati, Andhra Pradesh",
      period: "May 26, 2022 – Present",
      courses: [
        "Calculus",
        "Applied Statistics",
        "Discrete Mathematics",
        "Application of Differential and Derivative Equations",
        "Linear Algebra"
      ],
      responsibilities: [
        "Teaching core undergraduate and postgraduate courses in Mathematics and Engineering Mathematics",
        "Mentoring students in academic research projects focused on mathematical modeling and orbital mechanics",
        "Actively involved in curriculum development, exam coordination, and departmental academic activities"
      ],
      icon: <School className="w-6 h-6" />
    },
    {
      role: "Assistant Professor",
      institution: "Manipal University Jaipur",
      location: "Jaipur, Rajasthan",
      period: "Feb 14, 2022 – Apr 23, 2022",
      courses: [
        "Engineering Mathematics",
        "Discrete Structures"
      ],
      responsibilities: [
        "Delivered lectures in Engineering Mathematics and Discrete Structures",
        "Engaged students in applied problem-solving sessions and tutorials"
      ],
      icon: <School className="w-6 h-6" />
    },
    {
      role: "Assistant Professor",
      institution: "Chandigarh University",
      location: "Mohali, Punjab",
      period: "Aug 11, 2021 – Feb 12, 2022",
      courses: [
        "Linear Algebra",
        "Statistics for Engineers"
      ],
      responsibilities: [
        "Taught foundation and advanced mathematics courses",
        "Contributed to department-level academic planning and student mentoring"
      ],
      icon: <School className="w-6 h-6" />
    }
  ];

  const administrativeRole = {
    role: "Deputy Warden",
    institution: "VIT-AP University",
    period: "July 7, 2023 – Jan 2025",
    responsibilities: [
      "Responsible for hostel administration, discipline, and welfare of resident students",
      "Ensuring a safe and productive residential environment"
    ],
    icon: <Building2 className="w-6 h-6" />
  };

  return (
    <section id="teaching" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Teaching & Administrative Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Teaching Experience */}
        <div className="space-y-12 mb-16">
          {teachingExperience.map((exp, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">{exp.institution}</span>
                    <span>•</span>
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  
                  {/* Courses Taught */}
                  {exp.courses && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Courses Taught:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exp.courses.map((course, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                            <span className="text-blue-600 dark:text-blue-400">•</span>
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Administrative Role */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
              {administrativeRole.icon}
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{administrativeRole.role}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{administrativeRole.period}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                <Building2 className="w-4 h-4" />
                <span className="font-medium">{administrativeRole.institution}</span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2">
                  {administrativeRole.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching; 