import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "products", label: "Products" },
    { id: "projects", label: "Projects" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="">
          <Image src="/logo.png" width={50} height={50} alt="Logo GSS" />
        </div>
        <ul className="flex space-x-6">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-gray-700 hover:text-primary"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        <Link href={`#products`} className="text-sm bg-gradient-to-r from-indigo-700 to-sky-500 text-white px-4 py-2 rounded-full">Contact us</Link>
      </div>
    </nav>
  )
}

export default Navbar
