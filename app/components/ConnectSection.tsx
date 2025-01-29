import { Github, Linkedin, FileDown } from "lucide-react"
import Link from "next/link"

export default function ConnectSection() {
  return (
    <section id="connect" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Connect With Me</h2>
      <div className="flex flex-col items-center space-y-6">
        <div className="flex space-x-6">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Github size={32} />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Linkedin size={32} />
          </Link>
        </div>
        <a
          href="/path-to-your-resume.pdf"
          download
          className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          <FileDown size={24} />
          <span>Download Resume</span>
        </a>
      </div>
    </section>
  )
}

