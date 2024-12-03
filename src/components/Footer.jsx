import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="text-gray-800 py-6 bg-slate-100 border">
      <div className="layout grid grid-cols-1 gap-4 md:grid-cols-3 text-center md:text-start md:justify-between">
        <div className="grid grid-rows-1 md:grid-cols-2 md:grid-rows-2">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="GSS Logo"
            className="h-full w-auto object-contain bg-red-200"
          />
          <h3 className="font-bold bg-red-100">PT Global Smart Solusindo</h3>
          <p className="col-span-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
            arcu at elit viverra facilisis ac egestas augue. Ut sollicitudin.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Information</h3>
          <ul>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">Products</Link>
            </li>
            <li>
              <Link href="/">Projects</Link>
            </li>
            <li>
              <Link href="/">Partners</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Contact us</h3>
          <p>Jl. Raya Jatiwaringin No. 24 blok B, Jakarta</p>
          <p>021-8606389 | 08129179283</p>
          <p>email</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center col-span-1 md:col-span-4 bg-sky-200 p-4 rounded-full text-gray-800">
          <div>
            <p>&copy; 2024 All rights reserved.</p>
          </div>
          <div>Global Smart Solusindo</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
