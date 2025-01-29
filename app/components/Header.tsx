import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-gray-800 dark:text-white"
        >
          Bedro Park
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="#about"
              className="text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#interests"
              className="text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white"
            >
              Interests
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
