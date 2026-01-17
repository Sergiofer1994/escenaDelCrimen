import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkBase =
        "px-4 py-2 uppercase tracking-wide text-sm transition duration-300";

    const linkClass = ({ isActive }) =>
        `${linkBase} ${isActive
            ? "text-red-600 border-b-2 border-red-600"
            : "text-gray-300 hover:text-red-500"
        }`;

    return (
        <header className="bg-slate-900 sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

                {/* Logo + Nombre */}
                <div className="flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="Logo videoclub"
                        className="w-10 h-10"
                    />
                    <h1 className="text-xl font-bold text-white tracking-widest">
                        CRIME<span className="text-red-600">FLIX</span>
                    </h1>
                </div>

                {/* Botón menú móvil */}
                <button
                    className="md:hidden text-gray-300 text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* Navegación */}
                <nav
                    className={`${menuOpen ? "block" : "hidden"
                        } absolute top-full left-0 w-full bg-slate-900 md:static md:block md:w-auto`}
                >
                    <ul className="md:flex md:items-center md:gap-2">
                        <li>
                            <NavLink to="/" className={linkClass}>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies" className={linkClass}>
                                Películas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/add-movie" className={linkClass}>
                                Añadir
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/location" className={linkClass}>
                                Ubicación
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
