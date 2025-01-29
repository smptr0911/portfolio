import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your first project.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Project 2",
      description: "A brief description of your second project.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Project 3",
      description: "A brief description of your third project.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Project 4",
      description: "A brief description of your third project.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
  ];

  const hardwareProjects = [
    {
      title: "Hardware Project 1",
      description: "A brief description of your first hardware project.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Hardware Project 2",
      description: "A brief description of your second hardware project.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
  ];

  return (
    <>
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          My Software Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden max-w-sm mx-auto"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:text-blue-600 font-semibold text-sm"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="hardware-projects" className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          My Hardware Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4">
          {hardwareProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden max-w-sm mx-auto"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:text-blue-600 font-semibold text-sm"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
