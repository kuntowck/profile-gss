import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "products", label: "Products" },
    { id: "projects", label: "Projects" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-white shadow-none"
      }`}
    >
      <div className="layout  flex items-center justify-between px-4 py-2">
        <div className="flex-shrink-0 h-16">
          <Link href="/">
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="GSS Logo"
              className="h-full w-auto object-contain"
            />
          </Link>
        </div>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white shadow-md md:shadow-none md:bg-transparent md:static md:flex md:items-center md:justify-center`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-6">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block px-4 py-2 text-gray-700 hover:text-sky-500 transition-all duration-300"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden">
          <button
            className={`text-gray-700 focus:outline-none transform transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Contact Us Button */}
        <div className="hidden md:block flex-shrink-0">
          <Link
            href={`#products`}
            className="text-sm bg-gradient-to-r from-indigo-700 to-sky-500 text-white px-4 py-2 rounded-full"
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
