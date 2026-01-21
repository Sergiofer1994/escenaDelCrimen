import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="bg-orange-600 text-white px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-semibold">
        My Library
      </h1>

      <ul className="flex gap-6">
        <li className="hover:text-black cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-black cursor-pointer">
          <Link to="/Peliculas">Peliculas</Link>
        </li>
        <li className="hover:text-black cursor-pointer">
          <Link to="/ubicacion">Ubicación</Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar