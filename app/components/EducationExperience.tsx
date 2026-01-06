import { GraduationCap, Briefcase } from "lucide-react";

export default function EducationExperience() {
  const education = [
    {
      title: "Bachelor of Computer Science",
      institution: "Simon Fraser University",
      period: "2022 - Present",
    },
    {
      title: "Bachelor of Computer Science",
      institution: "Trinity Western University",
      period: "2021 - 2022",
    }
  ];

  const experience = [
    {
      title: "The 2022 ICPC Pacific Northwest Regional Contest",
      Institute: "UBC",
      period: "2022 Feb 25th",
    },
    {
      title: "Sushi Restaurant Cook",
      company: "Sushi California",
      period: "2021 - 2024",
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
              {education.map((item, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="absolute -left-[25px] w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.institution}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
              {experience.map((item, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="absolute -left-[25px] w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
