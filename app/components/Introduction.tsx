import Image from "next/image"

export default function Introduction() {
  return (
    <section id="about" className="py-20 flex flex-col items-center justify-center text-center">
      <div className="w-full flex justify-center mb-8">
        <Image
          src="/placeholder.svg?height=250&width=250"
          alt="Your Name"
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Your Name</h1>
        <p className="text-xl mb-6 text-blue-600 dark:text-blue-400 font-medium">
          A passionate software developer with expertise in web technologies.
        </p>
        <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Get in touch
        </a>
      </div>
    </section>
  )
}

