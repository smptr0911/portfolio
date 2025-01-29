export default function CurrentlyLearning() {
  const learningSkills = [
    { skill: "GraphQL", progress: 60 },
    { skill: "Docker", progress: 40 },
    { skill: "Rust", progress: 25 },
    { skill: "Machine Learning", progress: 35 },
  ];

  return (
    <section
      id="currently-learning"
      className="py-20 bg-blue-50 dark:bg-blue-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800 dark:text-blue-200">
          Currently Learning
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningSkills.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-blue-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-300">
                {item.skill}
              </h3>
              <div className="w-full bg-blue-100 rounded-full h-2.5 dark:bg-blue-700">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-blue-600 dark:text-blue-300 mt-2">
                {item.progress}% Complete
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
