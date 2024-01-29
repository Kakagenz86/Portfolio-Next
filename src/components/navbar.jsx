import './style.css'

const Navbar = () => {
    return (
      <nav className="bg-gray-800 navbar lg:flex lg:flex-row xs:flex xs:flex-col sticky top-0 gap-3 z-10 justify-around">
              <div className="flex items-center">
                <h1 className="text-cyan-400 text-xl">Kaka Hardiansyah</h1>
              </div>
              <div className="flex gap-2">
                  <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
                  <a href="#" className="text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
                  <a href="#" className="text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                  <a href="#" className="text-gray-300 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
              </div>
      </nav>
    );
}

export default Navbar;