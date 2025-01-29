export default function InterestAreas() {
  const interests = [
    { name: "Machine Learning", description: "Exploring AI and deep learning algorithms" },
    { name: "Web Development", description: "Building responsive and accessible web applications" },
    { name: "Cybersecurity", description: "Studying network security and ethical hacking" },
    { name: "Cloud Computing", description: "Working with distributed systems and serverless architectures" },
  ]

  return (
    <section id="interests" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Areas of Interest</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{interest.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

