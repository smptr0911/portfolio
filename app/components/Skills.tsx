export default function Skills() {
  const skills = [
    "C/C++",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Git",
    "AWS",
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-white dark:bg-gray-700 shadow-md rounded-full px-4 py-2 text-sm font-semibold text-gray-800 dark:text-gray-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
