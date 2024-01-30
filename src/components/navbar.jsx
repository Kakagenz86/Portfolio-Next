import './style.css'
import Link from 'next/link';

const Navbar = () => {
    return (
      <nav className="bg-slate-900 navbar lg:flex lg:flex-row xs:flex xs:flex-col sticky top-0 gap-3 z-10 justify-around">
              <div className="flex items-center">
                <h1 className="text-cyan-400 text-xl">Kaka Hardiansyah</h1>
              </div>
              <div className="flex gap-2">
                  <Link href="#about" className="bg-gray-200 text-black rounded-md px-3 py-2 text-sm font-medium" aria-current="page">About</Link>
                  <Link href="#skills" className="text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Skills</Link>
                  <Link href="#project" className="text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Project</Link>
                  <Link href="#contact" className="text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</Link>
              </div>
      </nav>
    );
}

export default Navbar;