import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='Akshat Goel logo' className='w-12 h-12 object-contain' />
      </NavLink>
      <nav className='flex items-center text-lg gap-4 sm:gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <a
          href='/documents/Akshat-Goel-CV.pdf'
          download='Akshat-Goel-CV.pdf'
          className='rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'
        >
          Download CV
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
